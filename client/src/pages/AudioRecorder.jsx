// // AudioRecorder.jsx
// import React, { useState } from 'react';
// import { ReactMic } from 'react-mic';
// import { MicrophoneIcon, StopCircleIcon } from '@heroicons/react/24/solid';

// export default function AudioRecorder({ onRecordingComplete }) {
//     const [recording, setRecording] = useState(false);

//     const startRecording = () => setRecording(true);
//     const stopRecording = () => setRecording(false);

//     const onStop = (recordedBlob) => {
//         const audioFile = new File([recordedBlob.blob], 'audio.wav', { type: 'audio/wav' });
//         onRecordingComplete({ audio: audioFile });
//     };

//     return (
//         <div className="space-y-4">
//             <ReactMic
//                 record={recording}
//                 onStop={onStop}
//                 mimeType="audio/wav"
//                 className="h-24 w-full rounded-lg bg-gray-700/30 border border-dashed border-gray-600/50"
//                 strokeColor="#f97316"
//                 backgroundColor="#1f293780"
//             />
            
//             <div className="flex gap-3 justify-center">
//                 <button
//                     onClick={startRecording}
//                     disabled={recording}
//                     className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
//                         recording ? 'bg-gray-600/50 cursor-not-allowed' : 'bg-orange-600/70 hover:bg-orange-600'
//                     }`}
//                 >
//                     <MicrophoneIcon className="w-5 h-5" />
//                     {recording ? 'Recording...' : 'Start'}
//                 </button>
                
//                 <button
//                     onClick={stopRecording}
//                     disabled={!recording}
//                     className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
//                         !recording ? 'bg-gray-600/50 cursor-not-allowed' : 'bg-red-600/70 hover:bg-red-600'
//                     }`}
//                 >
//                     <StopCircleIcon className="w-5 h-5" />
//                     Stop
//                 </button>
//             </div>
//         </div>
//     );
// }