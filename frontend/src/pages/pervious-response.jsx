import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const PreviousResponses = () => {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const res = await axios.get('https://code-reviewer-ai-rpna.onrender.com/ai/get-pervios-responce');
        setResponses(res.data);
      } catch (err) {
        console.error('Error fetching responses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchResponses();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0c29] text-white p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-10 text-center tracking-wide">🧠 Chat History</h1>

        <div className="space-y-12 overflow-y-auto max-h-[75vh] pr-2">
          {loading ? (
            <p className="text-center">Loading responses...</p>
          ) : responses.length === 0 ? (
            <p className="text-center text-gray-400">No previous responses found.</p>
          ) : (
            responses.map((resp) => (
              <div
                key={resp._id}
                className="flex flex-col md:flex-row gap-6 justify-between bg-white/5 p-6 rounded-xl border border-white/10 shadow-xl"
              >
                {/* LEFT: AI Response */}
                <div className="md:w-1/2 bg-[#1f1f2f] p-4 rounded-xl">
                  <h3 className="text-md font-semibold text-purple-300 mb-2">🤖 AI Response</h3>
                  <div className="prose prose-invert max-w-none text-sm leading-relaxed font-[Inter]">
                    <Markdown remarkPlugins={[remarkGfm]}>{resp.response}</Markdown>
                  </div>
                </div>

                {/* RIGHT: User Code */}
                <div className="md:w-1/2 bg-[#111827] p-4 rounded-xl">
                  <h3 className="text-md font-semibold text-emerald-300 mb-2">👨‍💻 Your Code</h3>
                  <pre className="text-xs overflow-x-auto font-mono leading-relaxed whitespace-pre-wrap">
                    <code
                      dangerouslySetInnerHTML={{
                        __html: Prism.highlight(resp.code, Prism.languages.javascript, 'javascript'),
                      }}
                    />
                  </pre>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviousResponses;
