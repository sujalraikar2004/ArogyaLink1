import mongoose,{Schema} from "mongoose"
import bcrypt from "bcryptjs"
import  Jwt  from "jsonwebtoken"

const userSchema = new Schema({
    fullname:{
        type: String,
        required: true,
        unique: true,
        trim: true, 
       
    },
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true, 
       
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
        

    },
   
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    avatar: {
        type: String, // cloudinary url
        required: true,
    },
    role:{
        type:String,
        required:true,
        enum: [ 'doctor', 'patient']
    },
    gender:{
        type:String,
        required:true,
        enum: [ 'male', 'female','other']
    },

    refreshToken:{
        type:String
    }

},{timestamps:true})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password,10)

})
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)

}
userSchema.methods.generateAccessToken=function(){
    return Jwt.sign(  {
        _id: this._id,
        email: this.email,
        username:this.username,
        fullname: this.fullname,
        role :this.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return Jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User",userSchema)