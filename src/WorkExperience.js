import React from 'react';

function WorkExperience({ data }) {
  return (
    <section className="work-experience section-row">
      <h2>Work Experience</h2>
      <div className="section-content">
        {data.map((job, index) => (
          <div key={index}>
            <h3>{job.title} ({job.period})</h3>
            <p>{job.description}</p>
            <br />
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
