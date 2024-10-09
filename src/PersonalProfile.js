import React from 'react';

function PersonalProfile({ data }) {
  return (
    <section className="profile section-row">
      <h2>Personal Profile</h2>
      <p>{data}</p>
    </section>
  );
}

export default PersonalProfile;
