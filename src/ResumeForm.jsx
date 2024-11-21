import { useState } from 'react';

const ResumeForm = ({ setResumeData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    website: '',
    summary: '',
    experience: [{ jobTitle: '', company: '', duration: '', responsibilities: '' }],
    education: [{ degree: '', institution: '', graduationYear: '' }],
    skills: '',
    languages: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = [...formData.experience];
    updatedExperience[index][name] = value;
    setFormData((prev) => ({ ...prev, experience: updatedExperience }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...formData.education];
    updatedEducation[index][name] = value;
    setFormData((prev) => ({ ...prev, education: updatedEducation }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeData(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6 bg-gray-100 rounded-lg shadow-lg">
      <div>
        <label className="block mb-1 font-semibold">Name</label>
        <input type="text" name="name" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Email</label>
        <input type="email" name="email" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Phone</label>
        <input type="tel" name="phone" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Address</label>
        <input type="text" name="address" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div>
        <label className="block mb-1 font-semibold">LinkedIn</label>
        <input type="url" name="linkedin" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Website</label>
        <input type="url" name="website" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Summary</label>
        <textarea name="summary" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded"></textarea>
      </div>

      {/* Experience Section */}
      <div>
        <label className="block mb-1 font-semibold">Experience</label>
        {formData.experience.map((exp, index) => (
          <div key={index} className="mb-4 border p-2 rounded bg-white">
            <label className="block mb-1">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={exp.jobTitle}
              onChange={(e) => handleExperienceChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <label className="block mb-1">Company</label>
            <input
              type="text"
              name="company"
              value={exp.company}
              onChange={(e) => handleExperienceChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <label className="block mb-1">Duration</label>
            <input
              type="text"
              name="duration"
              value={exp.duration}
              onChange={(e) => handleExperienceChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <label className="block mb-1">Responsibilities</label>
            <textarea
              name="responsibilities"
              value={exp.responsibilities}
              onChange={(e) => handleExperienceChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div>
        <label className="block mb-1 font-semibold">Education</label>
        {formData.education.map((edu, index) => (
          <div key={index} className="mb-4 border p-2 rounded bg-white">
            <label className="block mb-1">Degree</label>
            <input
              type="text"
              name="degree"
              value={edu.degree}
              onChange={(e) => handleEducationChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <label className="block mb-1">Institution</label>
            <input
              type="text"
              name="institution"
              value={edu.institution}
              onChange={(e) => handleEducationChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <label className="block mb-1">Graduation Year</label>
            <input
              type="text"
              name="graduationYear"
              value={edu.graduationYear}
              onChange={(e) => handleEducationChange(index, e)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        ))}
      </div>

      <div>
        <label className="block mb-1 font-semibold">Skills</label>
        <input type="text" name="skills" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
      </div>
      <div>
        <label className="block mb-1 font-semibold">Languages</label>
        <input type="text" name="languages" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Generate Resume
      </button>
    </form>
  );
};

export default ResumeForm;
