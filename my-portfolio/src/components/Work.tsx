import { Link } from "react-router"
import '../styles/Work.css'

const About = () => {
    return (
      <body>
      <header>
        <div>Zhanibek Sultangali</div>
        <div className='links'>
          <Link to="/">About</Link>
          <Link to="/Contacts">Contact</Link>
        </div>
      </header>
      <main>
        <h1>HTML. CSS. Java Script. Vue JS. React</h1>
        <div className='work1'>
          <div className="hotel">
            <Link to="/Hotel">
              <img src="Снимок экрана 2025-01-12 011311.png" alt="" height={350} />
            </Link>
            <div>
              <h2>Vorld Voyage</h2>
            </div>
          </div>
          <div className="gameStore">
            <Link to="/GameStore">
              <img src="Снимок экрана 2025-01-12 015209.png" alt="" height={350} />
            </Link>
            <div>
              <h2>GAMER</h2>
            </div>
          </div>
        </div>
        <div className="work2">
          <div className="voila">
            <Link to="/Voila">
              <img src="Снимок экрана 2025-01-12 023534.png" alt="" height={350} />
            </Link>
            <div>
              <h2>VOILA</h2>
            </div>
          </div>
          <div className="cinema">
            <Link to="/Cinema">
              <img src="Снимок экрана 2025-01-12 023901.png" alt="" height={350} />
            </Link>
            <div>
              <h2>CINEMA 3D</h2>
            </div>
          </div>
        </div>
      </main>
    </body>
    )
}

export default About