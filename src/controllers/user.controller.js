import { asyncHandler } from "../utils/asynchandler.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";



const generateAccesstokenAndRefreshToken= async(userid)=>{
 try {
       const user = await User.findById(userid)
       const accessToken = user.generateAccessToken();
       const refreshToken =user.generateRefreshToken();
   
       user.refreshToken=refreshToken;
       user.save({validateBeforeSave: false})
   
       return {accessToken,refreshToken}
 } catch (error) {
    return res.status(500).json({message:"Something went wrong while generating referesh and access token"})
    
 }
}

const registerUser = asyncHandler(async(req,res)=>{
    const{fullname,email,password,role,username,gender}=req.body


    if(
        [username,fullname,email,password,role,gender].some((fields)=>fields?.trim()==="")
    ){
       return res.status(400).json({messege:"All fields are required"})
    }

    const isExitsUser= await User.findOne({
        $or:[{username},{email}]
    })

    if(isExitsUser){
      return  res.status(401).json({message:"User is all ready exits with this email or username"})
    }

    const avatarlocalPath= req.file?.path;

    if(!avatarlocalPath){
        return res.status(401).json({message:"avatar is required"})
    }
    console.log(avatarlocalPath)
    const avatar= await uploadOnCloudinary(avatarlocalPath);
    console.log(avatar)
    if(!avatar){
        return res.status(500).json({message:"Error while file uploding on cludinary"})
    }
    const user = await User.create({
        username,
        fullname,
        email,
        password,
        role,
        gender,
        avatar:avatar.url,

    })
    console.log(user)
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    console.log(createdUser)
    if(!createdUser){
        return res.status(500).json({message:"server error while registering user"})
    }

  

     return res.status(200).json({
       status:"200",
       data:createdUser,
        message:"user register successfully"
    })
})
const loginUser =asyncHandler(async(req,res)=>{
    const{email,username,password}=req.body
    
    if(!(username || email)){
      return res.status(401).json({status:"401",message:"username or email is required"})
    }

    const user = await User.findOne({
        $or:[{username},{email}]
    })

    if(!user){
        return res.status(401).json({status:'401',message:"user does no exist"})
    }
   const isPasswordValid = await user.isPasswordCorrect(password)
   if(!isPasswordValid){
    res.status(401).json({status:"400",message:"Invalid user credentials"})
   }
   const{accessToken,refreshToken} = await generateAccesstokenAndRefreshToken(user._id)


   const loggedInUser = await User.findById(user._id).select("-password -refreshToken")
  
   const options = {
       httpOnly: true,
       secure: true,
      
   }

   res.status(200)
   .cookie("accessToken",accessToken,options)
   .cookie("refreshToken",refreshToken,options)
   .json({
    status:'201',
    data:loggedInUser,
    message:"User loggedIn successfully"
   })



})

  const logoutUser = asyncHandler(async(req,res)=>{

    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset:{
                refreshToken:1
            }
        },
        {
            new: true
        }
    )
    const options = {
        httpOnly: true,
        secure: true,
       
    }
    return res.status(201)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json({
        status:201,
        message:"User logout successfully"
    })

  })



export{
    registerUser,
    loginUser,
    logoutUser
}