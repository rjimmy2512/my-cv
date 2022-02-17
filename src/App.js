import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <meta charSet="utf-8"/>
        <title>James Ruhashyankiko</title>
        <link rel="stylesheet" href="/src/App.css"/>
        <link rel="icon" href="/public/favicon.ico"/>
        <link
            href="https://fonts.googleapis.com/css2?family=Charm&family=Courgette&family=Merriweather&family=Raleway&family=Tangerine:wght@700&family=Parisienne&display=swap"
            rel="stylesheet"
        />
      </header>
      <body>
      <div className="top-display">
        <p className="text-top-display">💚 Welcome to My CV Webpage 💚</p>
      </div>
      <div className="top-container">
        <img className="top-cloud" src="./images/cloud.png" alt="cloud-img"/>
        <h1>I'm James.</h1>
        <h2>a web developer.</h2>
        <img className="bottom-cloud" src="./images/cloud.png" alt="cloud-img"/>
        <img src="./images/mountain.png" alt="mountain-img"/>
      </div>
      <div className="middle-container">
        <div className="profile">
          <img className="profile-pic" src="./images/james picture.png" alt=""/>
          <h2>Hello.</h2>
          <p>
            I am a Web Developer with electromechanical engineering background.<br/>
            Passionate about using code to maximize efficiency while developing
            creative,<br/>
            customer-focused solutions.
          </p>
        </div>
        <hr/>
        <div className="experience">
          <h2>Experience</h2>
          <p>Software Developer at Activated Inc.</p>
        </div>

        <div className="projects">
          <h2>Projects</h2>
          <h3>Watch</h3>
          <p>A purely css designed whatch that runs for 24hrs, displaying hours, minutes and seconds.</p>
          <h3>Calculator</h3>
          <p>This app was designed from simple html./css/javascript technology</p>
          <p>Click <a href="https://github.com/rjimmy2512">here</a> to check out more about my projects</p>
        </div>

        <div className="skills">
          <h2>Skills.</h2>
          <div className="skill-row">
            <img className="skills-img" src="./images/code img.png" alt=""/>
            <p>
              <span className="p-title"><strong>Languages: </strong></span>Java, JavaScript, HTML5 and CSS3
            </p>
            <p>
              <span className="p-title"><strong>Tools: </strong></span>Atom, VS Code, Git/GitHub, VS Code, IntelliJ Idea, ProgreSQL/ MongoDB, Heroku, jQuery, JSON, Node.js/ Express JS, ReactJS, RESTful APIs
            </p>
            <p>
            <span className="p-title"><strong>Operating systems: </strong></span
            >Linux, MacOS and Windows
            </p>
          </div>
          <div className="skill-row">
            <img className="education-img" src="./images/edu-img.png" alt=""/>
            <h3>Education</h3>
            <p>
              <strong>Code Fellows, Seattle - WA | 2019 </strong><br/><em
            > Fullstack JavaScript Software Development
            </em>
            </p>
            <p>
              <strong
              >Kigali Institute of Science and Technology, Kigali - RWANDA
                |2005</strong
              ><br/><em> BsC. Degree in Electromechanical Engineering</em>
            </p>
          </div>
        </div>
        <hr/>
        <div className="contact-me">
          <h2>Get In Touch</h2>
          <p>
          <span className="p-title"
          ><strong>I would love to hear from you.</strong></span
          >
            If you wish to know more about me, please do not hesitate to contact
            me and I will be glad to share more. Check links below for my
            webpages.
          </p>
          <a href="mailto:rjimmy2512@gmail.com" className="BUTTON_EDR"
          ><span className="text-btn">CONTACT ME</span></a
          >
        </div>
      </div>

      <div className="bottom-container">
        <a className="footer-link" href="linkedin.com/in/james-r-81b9b5147"
        >LinkedIn</a
        >
        <a className="footer-link" href="https://github.com/rjimmy2512">GitHub</a>
        <a className="footer-link" href="">Website</a>
        <p id="trademark">© 2020 James Ruhashyankiko.</p>
      </div>
      </body>
    </div>
       );
}

export default App;
