// PostQuestion.jsx
import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import ReactMarkdown from 'react-markdown';

const PostQuestion = () => {
  const [code, setCode] = useState('');

  return (
    <div>
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
      />
      <ReactMarkdown>{code}</ReactMarkdown>
    </div>
  );
};

export default PostQuestion;
