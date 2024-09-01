import React from 'react';

function ExtractedData() {
  const jsonExample = `{
  "profile": {
    "basics": {
      "first_name": "John",
      "last_name": "Doe",
      "gender": "male",
      "emails": [
        "john.doe@example.com"
      ],
      "urls": [
        "linkedin.com/in/john-doe-12345678",
        "github.com/john-doe-12345678",
        "example.com"
      ],
      "phone_numbers": [
        "+1 (555) 123-4567"
      ]
    }
  }
}`;

  return (
    <div className="extracted-data">
      <h2>Extracted data</h2>
      <p>Our API returns a JSON object with:</p>
      <ul>
        <li>profile: an object with all the extracted data.</li>
        <li>cv_language: the language of the CV.</li>
        <li>cv_text: the full text of the CV.</li>
      </ul>
      <h3>Data example</h3>
      <pre>{jsonExample}</pre>
    </div>
  );
}

export default ExtractedData;