import { useState } from 'react';
import Header from './Header';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';

const App = () => {
  const [resumeData, setResumeData] = useState({});

  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResumeForm setResumeData={setResumeData} />
        <ResumePreview resumeData={resumeData} />
      </div>
    </div>
  );
};

export default App;
