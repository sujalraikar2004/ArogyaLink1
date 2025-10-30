import { useState } from 'react'
import axios from 'axios'
import { PlusIcon, DocumentArrowUpIcon, QuestionMarkCircleIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline'

function AppoinmentForm() {
  const [sessionId, setSessionId] = useState('')
  const [files, setFiles] = useState([])
  const [summary, setSummary] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [language, setLanguage] = useState('English')
  const [isUploading, setIsUploading] = useState(false)
  const [isAsking, setIsAsking] = useState(false)

  const createSession = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/create-session')
      setSessionId(response.data.sessionId)
    } catch (error) {
      console.error('Error creating session:', error)
    }
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!sessionId) {
      alert('Please create a session first')
      return
    }

    setIsUploading(true)
    const formData = new FormData()
    files.forEach(file => formData.append('files', file))
    formData.append('language', language)

    try {
      const response = await axios.post('http://localhost:5001/api/upload', formData, {
        headers: {
          'X-Session-ID': sessionId,
          'Content-Type': 'multipart/form-data'
        }
      })
      setSummary(response.data.summary)
    } catch (error) {
      console.error('Upload error:', error.response?.data || error.message)
    } finally {
      setIsUploading(false)
    }
  }

  const handleAsk = async () => {
    setIsAsking(true)
    try {
      const response = await axios.post('http://localhost:5001/api/ask', {
        question,
        language
      }, {
        headers: {
          'X-Session-ID': sessionId
        }
      })
      setAnswer(response.data.answer)
    } catch (error) {
      console.error('Ask error:', error.response?.data || error.message)
    } finally {
      setIsAsking(false)
    }
  }

  const handleDownload = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/download', {
        headers: {
          'X-Session-ID': sessionId
        },
        responseType: 'blob'
      })

      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'medical_summary.docx')
      document.body.appendChild(link)
      link.click()
    } catch (error) {
      console.error('Download error:', error.response?.data || error.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}App
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-2 animate-fade-in-down">
            Medical Report Analyzer
          </h1>
          <p className="text-gray-600">AI-powered medical document analysis and insights</p>
        </div>

        {/* Session Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={createSession}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <PlusIcon className="w-5 h-5" />
              New Session
            </button>
            {sessionId && (
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Session ID:</span>
                <span className="font-mono px-3 py-1 bg-gray-100 rounded-md text-sm">
                  {sessionId}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Language Selector */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Analysis Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Marathi">Marathi</option>
            <option value="Kannada">Kannada</option>
          </select>
        </div>

        {/* File Upload Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <form onSubmit={handleUpload} className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Upload Medical Reports</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors group">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <DocumentArrowUpIcon className="w-8 h-8 text-gray-400 group-hover:text-blue-600 mb-2 transition-colors" />
                  <p className="text-sm text-gray-500">
                    {files.length > 0 
                      ? `${files.length} file(s) selected`
                      : "Click to upload PDF files"}
                  </p>
                </div>
                <input 
                  type="file" 
                  multiple 
                  onChange={(e) => setFiles([...e.target.files])}
                  accept=".pdf"
                  className="hidden"
                />
              </label>
            </div>
            <button
              type="submit"
              disabled={isUploading}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-blue-300 transition-colors flex items-center justify-center gap-2"
            >
              {isUploading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <DocumentArrowUpIcon className="w-5 h-5" />
                  Upload and Analyze
                </>
              )}
            </button>
          </form>
        </div>

        {/* Summary Section */}
        {summary && (
          <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-in-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Medical Summary</h3>
              <button
                onClick={handleDownload}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2 text-sm"
              >
                <DocumentArrowDownIcon className="w-4 h-4" />
                Download Report
              </button>
            </div>
            <div className="p-4 bg-gray-50 rounded-md max-h-96 overflow-y-auto">
              <p className="text-gray-700 whitespace-pre-line">{summary}</p>
            </div>
          </div>
        )}

        {/* Q&A Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a question about the reports..."
              className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
            <button
              onClick={handleAsk}
              disabled={isAsking}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-300 transition-colors flex items-center gap-2"
            >
              {isAsking ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <QuestionMarkCircleIcon className="w-5 h-5" />
              )}
              Ask
            </button>
          </div>
          
          {answer && (
            <div className="p-4 bg-gray-50 rounded-md animate-fade-in-up">
              <h3 className="font-medium text-gray-900 mb-2">Answer</h3>
              <p className="text-gray-700">{answer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AppoinmentForm