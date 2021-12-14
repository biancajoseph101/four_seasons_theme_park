import React from 'react';

const About = () => {
  return (
    <div className='about'>
      <h3>
        Welcome to Baggland, where you can bag on the rides you hate at any
        amusement park in the world! With Baggland, you will know the ride you
        are about to go on sucks before you go on it!
      </h3>
      <div className='our-about'>
      <h3>This theme park was created by Bianca, Grant, Gihae and Abidur</h3>
      <img  src= 'https://cdn-icons-png.flaticon.com/512/174/174857.png' />
      <div className='links'>
        <h6><a href="https://www.linkedin.com/in/biancaclairejoseph/">Bianca</a></h6>
        <h6><a href="https://www.linkedin.com/in/grantmenke/">Grant</a></h6>
        <h6><a href="https://www.linkedin.com/in/gihaec/">Gihae</a></h6>
        <h6><a href="https://www.linkedin.com/in/abidurrahmandipta">Abidur</a></h6>
      </div>
      </div>
    </div>
  );
};

export default About;
