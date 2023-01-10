import './Main.css'

export default () => {
  return (
    <main>
      <h1>Laura Smith</h1>
      <h3>Frontend Developer</h3>
      <p>laurasmith.website</p>
      <div className="btn-con">
        <a className='em' href="mailto:chabanyuk.maks@gmail.com">
          <div className="email">
            <i class="fa-solid fa-envelope"></i>
            <span className="text">Email</span>
          </div>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/maksym-chabaniuk-0378b820b/">
          <div className="linked-in">
            <i class="fa-brands fa-linkedin"></i>
            <span className="text">LinkedIn</span>
          </div>
        </a>
      </div>
      <div className="info">
        <div className="about">
          <h2>About</h2>
          <p>
            I am a frontend developer with a particular interest in making things 
            simple and automating daily tasks. I try to keep up with security and best 
            practices, and am always looking for new things to learn.
          </p>
        </div>
        <div className="interests">
          <h2>Interests</h2>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. 
            Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </main>
  )
}
