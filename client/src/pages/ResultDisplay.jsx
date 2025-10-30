// // ResultDisplay.jsx
// import React, { useEffect, useState } from 'react';
// import { SpeakerWaveIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';

// export default function ResultDisplay({ analysis, audioUrl, prescriptionUrl }) {
//     const [currentAnalysis, setCurrentAnalysis] = useState('');

//     useEffect(() => {
//         let index = 0;
//         const timer = setInterval(() => {
//             if (index < analysis.length) {
//                 setCurrentAnalysis(prev => prev + analysis.charAt(index));
//                 index++;
//             } else clearInterval(timer);
//         }, 20);
//         return () => clearInterval(timer);
//     }, [analysis]);

//     return (
//         <div className="space-y-6">
//             <div className="p-4 rounded-xl bg-gray-800/60 border border-gray-700/50">
//                 <div className="flex items-center gap-2 mb-3 text-purple-400">
//                     <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
//                     <span className="text-sm font-medium">Medical Analysis</span>
//                     <span className="ml-2 px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">Live</span>
//                 </div>
//                 <div className="p-3 rounded-lg bg-gray-700/30 min-h-[120px] text-gray-300">
//                     {currentAnalysis || <span className="italic text-gray-500">Analysis will appear here...</span>}
//                 </div>
//             </div>

//             {audioUrl && (
//                 <div className="p-4 rounded-xl bg-gray-800/60 border border-gray-700/50">
//                     <div className="flex items-center gap-2 mb-3 text-orange-400">
//                         <SpeakerWaveIcon className="w-5 h-5" />
//                         <span className="text-sm font-medium">Voice Response</span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <audio controls className="w-full" src={audioUrl} />
//                         <div className="w-9 h-9 bg-orange-500/20 rounded-lg flex items-center justify-center">
//                             <SpeakerWaveIcon className="w-5 h-5 text-orange-400" />
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {prescriptionUrl && (
//                 <div className="p-4 rounded-xl bg-gray-800/60 border border-gray-700/50">
//                     <div className="flex items-center gap-2 mb-3 text-blue-400">
//                         <DocumentArrowDownIcon className="w-5 h-5" />
//                         <span className="text-sm font-medium">Prescription Download</span>
//                     </div>
//                     <a
//                         href={prescriptionUrl}
//                         download="prescription.docx"
//                         className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600/30 hover:bg-blue-600/40 border border-blue-600/50 rounded-lg transition-all"
//                     >
//                         <DocumentArrowDownIcon className="w-5 h-5" />
//                         <span>Download Prescription</span>
//                     </a>
//                 </div>
//             )}
//         </div>
//     );
// }