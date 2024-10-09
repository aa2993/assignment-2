import React from 'react';
import './App.css';
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Education from './Education';

function App() {
  const resumeData = {
    header: {
      name: 'Zh Rimel',
      title: 'Data Scientist',
      email: 'abc@gmail.com',
      web: 'abc.github.io/abc',
      mobile: '01234567890'
    },
    personalProfile: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    workExperience: [
      {
        title: 'Job Title at Company',
        period: 'August 2022 – December 2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: 'Job Title 2 at Company 2',
        period: 'August 2020 – December 2021',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ],
    skills: ['A Key skill', 'A Key skill', 'A Key skill', 'A Key skill', 'A Key skill', 'A Key skill', 'A Key skill', 'A Key skill', 'A Key skill'],
    education: [
      {
        institution: 'New Jersey Institute of Technology',
        degree: 'BS in Computer Science',
        year: '2018 - 2022',
        gpa: '3.9'
      },
      {
        institution: 'New Jersey Institute of Technology',
        degree: 'MS in Data Science',
        year: '2022 - 2023',
        gpa: '4.0'
      }
    ]
  };

  return (
    <div className="container">
      <Header data={resumeData.header} />
      <PersonalProfile data={resumeData.personalProfile} />
      <WorkExperience data={resumeData.workExperience} />
      <Skills data={resumeData.skills} />
      <Education data={resumeData.education} />
    </div>
  );
}

export default App;
