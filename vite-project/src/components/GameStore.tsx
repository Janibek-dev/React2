import { Link } from "react-router"
import '../styles/Gamer.css'


const GameStore = () => {
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
                <h1>GAMER</h1>
                <p>
                    GAMER is my practical web development project dedicated to the gaming industry. The goal of the project is to create a responsive, user-friendly, and aesthetically pleasing interface for a platform that allows users to search for and purchase video games.                
                </p>
                <h2>Key Features of the Layout:</h2>
                <p>1. Responsive Design – correct display on mobiles, tablets, and desktops.</p>
                <p>2. Clean Code Structure – using semantic HTML markup to improve SEO and accessibility.</p>
                <p>3. Styling with CSS and Preprocessors – clean and maintainable code using SCSS.</p>
                <p>4. Flexible Grid System – using CSS Grid and Flexbox for convenient element positioning.</p>
                <p>5. Animations and Interactive Elements – enhancing user experience with CSS animations and hover effects.</p>
                <p>6. Cross-Browser Compatibility – proper functionality across all modern browsers.</p>
                <p>
                    The GAMER project showcases my approach to web development, attention to detail, and commitment to creating user-friendly and stylish interfaces.
                </p>
                
                <div className="imgGamer">
                    <img src="Снимок экрана 2025-01-12 015209.png" alt="" height={400} />
                    <img src="Снимок экрана 2025-01-12 015233.png" alt="" height={400} />
                    <img src="Снимок экрана 2025-01-12 015323.png" alt="" height={400} />
                </div>
            </div>
        </body>
    )
}

export default GameStore