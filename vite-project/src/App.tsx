import { Link } from "react-router"
import './App.css'

function App() {

  return (
    <body>
          <header>
            <div>Zhanibek Sultangali</div>
            <div className='links'>
              <Link to="/Work">WORK</Link>
              <Link to="/Contacts">Contact</Link>
            </div>
          </header>
          <div className='about'>
            
            <h1>Web developer</h1>
            <p>
              I am Zhanibek, a Junior Web Developer passionate about creating modern, user-friendly, and functional interfaces. I have experience working with HTML, CSS, and various layout methodologies that allow me to develop responsive, cross-browser, and interactive user interfaces. I am skilled in working with CSS preprocessors such as SASS and LESS, and I understand the principles of semantic and accessible markup.            
            </p>
            <p>
              My main goal is to create aesthetically pleasing, user-friendly, and optimized interfaces that ensure a seamless interaction between users and digital products. I am committed to continuous growth, learning new technologies, following best practices in web design, and applying modern approaches to interface design.
            </p>
            <p>
              In my work, I pay special attention to code cleanliness, page load speed, and the maintainability of layouts. I enjoy developing logically structured and easily scalable solutions, as well as implementing animations and microinteractions that enhance the user experience.
            </p>
            <p>
              I enjoy solving complex problems, working in teams, and bringing ideas to life. I am open to new challenges and opportunities that will help me grow as a professional and create high-quality, user-friendly web interfaces.            </p>
            <img src="ME-Photoroom.png" alt="" height={400}/>
            <h2>Education</h2>
            <h3>Frontend Development</h3>
            <p>IT Step Computer Academy 2023-2024</p>
            <h2>Disciplines</h2>
            <p>
              1. HTML, CSS, SCSS
            </p>
            <p>
              2. JavaScript (ES6+), TypeScript
            </p>
            <p>
              3. React.js, TypeScript
            </p>
            <p>
              4. Creation of Responsive Interfaces
            </p>
            <p>
              5. CSS Positioning and Animations
            </p>
          </div>
    </body>
  )
}

export default App
