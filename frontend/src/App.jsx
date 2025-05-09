import { useState } from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import axios from 'axios';
import Markdown from 'react-markdown';


function App() {
  const [code, setCode] = useState(`function sum(a, b) {
  return a + b;
}`);
  const [review, setReview] = useState('');

  async function fetchData() {
    try {
      const response = await axios.post('https://code-reviewer-ai-rpna.onrender.com/ai/get-responce', { code });
      console.log(response.data);
      setReview(response.data);
      
      

    } catch (error) {
      console.error('Error fetching review:', error);
      setReview('Error fetching review. Please try again.');
    }
  }

  return (
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
          className="code-editor"
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
  );
}

export default App;
