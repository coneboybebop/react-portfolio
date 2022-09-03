import React from 'react';
import profilePicture from '../../assets/profile_pic.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={profilePicture} className="my-2" style={{ width: "50%" }} alt="profile" />
      <div className="my-2">
        <p>
          I am an aspiring web developer based in Chattanooga, TN.
        </p>
      </div>
    </section>
  );
}

export default About;