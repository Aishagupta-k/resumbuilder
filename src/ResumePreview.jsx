const ResumePreview = ({ resumeData }) => {
    return (
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Resume Preview</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <p><strong>Name:</strong> {resumeData.name}</p>
            <p><strong>Email:</strong> {resumeData.email}</p>
            <p><strong>Phone:</strong> {resumeData.phone}</p>
            <p><strong>Address:</strong> {resumeData.address}</p>
            <p><strong>LinkedIn:</strong> {resumeData.linkedin}</p>
            <p><strong>Website:</strong> {resumeData.website}</p>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold">Summary</h3>
            <p>{resumeData.summary}</p>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold">Experience</h3>
            {resumeData.experience && resumeData.experience.length > 0 ? (
              resumeData.experience.map((exp, index) => (
                <div key={index} className="p-4 mb-2 border rounded bg-gray-50">
                  <p><strong>Job Title:</strong> {exp.jobTitle}</p>
                  <p><strong>Company:</strong> {exp.company}</p>
                  <p><strong>Duration:</strong> {exp.duration}</p>
                  <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
                </div>
              ))
            ) : (
              <p>No experience added.</p>
            )}
          </div>
  
          <div>
            <h3 className="text-lg font-semibold">Education</h3>
            {resumeData.education && resumeData.education.length > 0 ? (
              resumeData.education.map((edu, index) => (
                <div key={index} className="p-4 mb-2 border rounded bg-gray-50">
                  <p><strong>Degree:</strong> {edu.degree}</p>
                  <p><strong>Institution:</strong> {edu.institution}</p>
                  <p><strong>Graduation Year:</strong> {edu.graduationYear}</p>
                </div>
              ))
            ) : (
              <p>No education added.</p>
            )}
          </div>
  
          <div>
            <h3 className="text-lg font-semibold">Skills</h3>
            <p>{resumeData.skills}</p>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold">Languages</h3>
            <p>{resumeData.languages}</p>
          </div>
        </div>
  
        <button
          onClick={() => {
            const element = document.getElementById('resume-preview');
            html2canvas(element).then((canvas) => {
              const imgData = canvas.toDataURL('image/png');
              const pdf = new jsPDF('p', 'mm', 'a4');
              pdf.addImage(imgData, 'PNG', 0, 0, 210, canvas.height * (210 / canvas.width));
              pdf.save('resume.pdf');
            });
          }}
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Download as PDF
        </button>
      </div>
    );
  };
  
  export default ResumePreview;
  