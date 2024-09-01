import React from 'react';

function CodeSnippet() {
  const curlCode = `curl -X POST 'https://cvparser.ai/api/v4/parse' \\
  -H 'Content-Type: application/json' \\
  -H 'X-API-Key: YOUR_API_KEY' \\
  -d '{
    "url": "https://example.com/your_cv_file.pdf"
  }'`;

  return (
    <div className="code-snippet">
      <h2>Code snippet</h2>
      <p>You can either send a URL pointing to the CV, or directly send the CV in the request.</p>
      <h3>Sending a URL pointing to the CV</h3>
      <pre>{curlCode}</pre>
    </div>
  );
}

export default CodeSnippet;