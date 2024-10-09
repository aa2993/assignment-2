import React from 'react';

function Skills({ data }) {
  return (
    <section className="skills section-row">
      <h2>Key Skills</h2>
      <div className="skills-grid">
        {data.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
