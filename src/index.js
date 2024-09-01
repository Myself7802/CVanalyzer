import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import GetStarted from './components/GetStarted';
import CodeSnippet from './components/CodeSnippet';
import ExtractedData from './components/ExtractedData';
import Pricing from './components/Pricing';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/code-snippet" element={<CodeSnippet />} />
            <Route path="/extracted-data" element={<ExtractedData />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);