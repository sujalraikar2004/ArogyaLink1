// // TextInput.jsx
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// const TextInput = ({ onSubmit }) => {
//     const [text, setText] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!text.trim()) return setError('Please enter your medical query');
//         onSubmit({ text });
//         setError('');
//     };

//     return (
//         <form onSubmit={handleSubmit} className="space-y-4">
//             <textarea
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 placeholder="Describe your symptoms or ask a medical question..."
//                 className="w-full p-3 rounded-lg bg-gray-700/30 border border-gray-600/50 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/30 text-white placeholder-gray-500 transition-all"
//                 rows="4"
//             />
            
//             {error && <p className="text-sm text-red-400 px-2">{error}</p>}

//             <button
//                 type="submit"
//                 className="w-full py-2.5 bg-orange-600/70 hover:bg-orange-600 rounded-lg font-medium transition-colors"
//             >
//                 Submit Query
//             </button>
//         </form>
//     );
// };

// TextInput.propTypes = { onSubmit: PropTypes.func.isRequired };
// export default TextInput;