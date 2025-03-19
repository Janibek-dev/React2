import { Link } from "react-router"
import '../styles/Voila.css'


const Voila = () => {
    return (
        <body>
            <header>
            <div>Zhanibek Sultangali</div>
            <div className='links'>
              <Link to="/Work">WORK</Link>
              <Link to="/Contacts">Contact</Link>
            </div>
            </header>
            <div className="aboutWork"> 
                <h1>Voilà</h1>

                <p>
                    While working on the Voilà website, I focused on conveying the atmosphere of French sophistication and elegance. This project was aimed at creating a premium digital experience that matched the high standards of the establishment itself.  
                </p>

                <h2>Concept and Goals</h2>

                <p>
                    The Voilà website was conceived not just as a restaurant webpage, but as a complete digital representation of its philosophy. The focus is on user convenience and their emotional engagement with the aesthetics of French gastronomic art.
                </p>   

                <p>
                    Voilà is now not just a place for dinner – it's a space where every guest feels like a part of the French art of taste and style.
                </p>

                <div className="imgVoila">
                    <img src="Снимок экрана 2025-01-12 023534.png" alt="" height={400} />
                    <img src="Снимок экрана 2025-01-12 023550.png" alt="" height={400} />
                    <img src="Снимок экрана 2025-01-12 023626.png" alt="" height={400} />
                    <img src="Снимок экрана 2025-01-12 023647.png" alt="" height={400} />
                </div>
            </div>
        </body>
    )
}

export default Voila