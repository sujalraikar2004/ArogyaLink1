// // ImageUploader.jsx
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { CameraIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';

// const ImageUploader = ({ onSubmit }) => {
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [preview, setPreview] = useState('');
//     const [query, setQuery] = useState('');
//     const [error, setError] = useState('');

//     const handleImageUpload = (e) => {
//         const file = e.target.files[0];
//         if (file && file.type.startsWith('image/')) {
//             setSelectedImage(file);
//             setPreview(URL.createObjectURL(file));
//             setError('');
//         } else {
//             setError('Please upload a valid image file');
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!selectedImage) {
//             setError('Please select an image first');
//             return;
//         }
//         onSubmit({ image: selectedImage, text: query });
//     };

//     return (
//         <div className="space-y-4">
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <label className="flex flex-col items-center justify-center h-40 cursor-pointer rounded-xl border-2 border-dashed border-gray-600/50 hover:border-orange-500/50 bg-gray-800/30 transition-colors">
//                     <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
//                     <div className="text-center space-y-2">
//                         <CameraIcon className="w-8 h-8 mx-auto text-gray-400" />
//                         <p className="text-sm text-gray-400">Upload skin condition photo</p>
//                         <p className="text-xs text-gray-500">JPEG, PNG accepted</p>
//                     </div>
//                 </label>

//                 {preview && (
//                     <div className="relative group rounded-lg overflow-hidden border border-gray-700/50">
//                         <img src={preview} alt="Preview" className="w-full object-cover max-h-48" />
//                         <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                             <DocumentMagnifyingGlassIcon className="w-8 h-8 text-orange-400" />
//                         </div>
//                     </div>
//                 )}

//                 <textarea
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     placeholder="Describe your symptoms or ask about the image..."
//                     className="w-full p-3 rounded-lg bg-gray-700/30 border border-gray-600/50 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 text-white placeholder-gray-500 transition-all"
//                     rows="3"
//                 />

//                 {error && <p className="text-sm text-red-400 px-2">{error}</p>}

//                 <button
//                     type="submit"
//                     disabled={!selectedImage}
//                     className="w-full py-2 bg-orange-600/70 hover:bg-orange-600 rounded-lg font-medium disabled:bg-gray-700/50 disabled:cursor-not-allowed transition-colors"
//                 >
//                     Analyze Image
//                 </button>
//             </form>
//         </div>
//     );
// };

// ImageUploader.propTypes = { onSubmit: PropTypes.func.isRequired };
// export default ImageUploader;