const About = () => {
  const myAge = new Date().getFullYear() - 2000;
  const ageInCoding = new Date().getFullYear() - 2018;

  return (
    <div className='about' id='about-light-text'>
      <h1>
        About <span>Me!</span>
      </h1>

      <p>
        My name is Mahdi Abubakar I’m {myAge} years old. I am a very
        enthusiastic student, I like to receive and deal with challenging tasks,
        I am Front-End (ReactJS | Angular | React Native) developer, progressive
        mobile app developer, Javascript hero CSS hater &#128540;, which I also
        work with Typescript and Node.js, little bit with python.
      </p>

      <p>I have been writing code for approximately {ageInCoding} years.</p>

      <p>Learn more about my resource.</p>

      <ul>
        <li>
          <a
            href='https://github.com/mahdiabubakar'
            target='_blank'
            rel='noreferrer'>
            <i className='fab fa-github'></i> My Github repo
          </a>
        </li>
        {/* <li><Link to="#"><i className="fas fa-blog"></i> Check out my blog, feel free to read &#128526;</Link></li> */}
        <li>
          <i className='fas fa-building'></i> I am Full-Stack JavaScript, self
          taught and also Pull-Stack developer &#128515;.
        </li>
        <li>
          You can also reach me out on{' '}
          <a
            href='https://instagram.com/nigeriancoder'
            target='_blank'
            rel='noreferrer'>
            <i className='fab fa-instagram'></i> nigeriancoder,
          </a>{' '}
          <a
            href='https://twitter.com/nigeriancoder'
            target='_blank'
            rel='noreferrer'>
            <i className='fab fa-twitter'></i> @nigeriancoder
          </a>{' '}
          <a
            href='https://linkedin.com/in/mahdiabubakar'
            target='_blank'
            rel='noreferrer'>
            <i className='fab fa-linkedin'></i> Mahdi Abubakar
          </a>{' '}
          also.
        </li>
      </ul>

      <p className='mailto'>
        Hey! Don't hesitate, catch me up at{' '}
        <a
          href='mailto:contact@mahdiabubakar.me'
          target='_blank'
          rel='noreferrer'>
          contact@mahdiabubakar.me
        </a>
      </p>
    </div>
  );
};

export default About;
