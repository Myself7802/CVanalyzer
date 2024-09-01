import React from 'react';

function GetStarted() {
  return (
    <div className="get-started">
      <h2>How it works</h2>
      <ol>
        <li>The code snippet is a simple https request that sends the CV to our API.</li>
        <li>The CV is parsed, and its extracted data is directly returned to you in the response of the https request.</li>
        <li>Store the extracted data in your own database, because we instantly delete it from our servers once the parsing is done.</li>
      </ol>

      <h2>Details</h2>
      <ul>
        <li>Accepted CV content: in any human language.</li>
        <li>Accepted CV formats: .pdf, .docx, .doc, .odt, .pptx, .ppt, .jpeg, .png.</li>
        <li>You can make multiple API calls in parallel to parse up to 500 CVs / minute.</li>
        <li>Contact us if you have this type of high volumes.</li>
      </ul>

      <h2>Private & GDPR compliant</h2>
      <h3>In short:</h3>
      <ul>
        <li>The CV is processed exclusively within the European Union.</li>
        <li>The CV and any trace of its data are deleted from our servers instantly when its parsing is done.</li>
      </ul>

      <h3>Here's an overview our technical approach to GDPR compliance:</h3>
      
      <h4>Built for secured private processing purpose only:</h4>
      <ul>
        <li>Our only usage of your data is to process it for you and return it to you.</li>
        <li>We don't share your data with anyone except our cloud providers.</li>
      </ul>

      <h4>No storage:</h4>
      <ul>
        <li>We delete the data instantly when the CV parsing is done.</li>
        <li>We don't store the CV or its data longer than the time necessary to process it. Which means around 20 seconds.</li>
        <li>At the moment that we send the response to the https request made by your server, we delete every trace of it.</li>
        <li>There is no hosting: the extracted data is returned in the response to your https request, not hosted anywhere for you to fetch.</li>
      </ul>

      <h4>Servers in the European Union only:</h4>
      <ul>
        <li>Our cloud servers are only located in the EU (Microsoft Azure and Google Cloud Platform), in the following countries: France, Sweden and Belgium.</li>
        <li>Your data never transits outside of the EU at any moment.</li>
      </ul>

      <h2>Legal terms</h2>
      <ul>
        <li><a href="#">Terms and conditions</a></li>
        <li><a href="#">Privacy policy</a></li>
        <li><a href="#">Cookie policy</a></li>
      </ul>

      <h2>Contact</h2>
      <p>Feel free to send us an email at <a href="mailto:contact@cvparser.ai">contact@cvparser.ai</a></p>
    </div>
  );
}

export default GetStarted;