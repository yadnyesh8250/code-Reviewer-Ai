import { useState } from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import axios from 'axios';
import Markdown from 'react-markdown';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PreviousResponses from './pages/pervious-response.jsx';

function App() {
  const [code, setCode] = useState(`function sum(a, b) {
  return a + b;
}`);
  const [review, setReview] = useState('');

  async function fetchData() {
    try {
      const response = await axios.post(
        'https://code-reviewer-ai-rpna.onrender.com/ai/get-responce',
        { code }
      );
      console.log(response.data);
      setReview(response.data.review || response.data); // Adjust based on API response structure
    } catch (error) {
      console.error('Error fetching review:', error);
      setReview('Error fetching review. Please try again.');
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <div className="left">
                <h2>Your Code</h2>
                <Editor
                  value={code}
                  onValueChange={(newCode) => setCode(newCode)}
                  highlight={(code) =>
                    Prism.highlight(code, Prism.languages.javascript, 'javascript')
                  }
                  padding={20}
                  style={{
                    fontFamily: '"Fira Code", "Fira Mono", monospace',
                    fontSize: 14,
                    backgroundColor: '#282c34',
                    color: '#abb2bf',
                    borderRadius: '8px',
                    lineHeight: '1.5',
                  }}
                />
                <button onClick={fetchData} className="review-button">
                  Review Code
                </button>
              </div>
              <div className="right">
                <h2>Review Response</h2>
                <div className="review-response">
                  <Markdown>{review}</Markdown>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/previous-responses" element={<PreviousResponses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;