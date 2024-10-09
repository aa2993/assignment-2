import React from 'react';

function Education({ data }) {
  return (
    <section className="education section-row no-separator">
      <h2>Education</h2>
      <div className="section-content">
        {data.map((edu, index) => (
          <div key={index}>
            <h3>{edu.institution}</h3>
            <p>{edu.degree}<br />{edu.year}<br />GPA: {edu.gpa}</p>
            <br />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
