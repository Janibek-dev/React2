import { Link } from "react-router"
import '../styles/Cinema.css'


const Cinema = () => {
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
                <h1>CINEMA 3D</h1>

                <p>
                    CINEMA 3D is a practical web development project designed for online movie ticket booking. The main goal is to create a user-friendly and intuitive interface, providing quick access to showtimes, movie details, and seat selection.
                </p>
                <h2>Key Features of the Layout:</h2>
                <p>1. Responsive Design – correct display on mobiles, tablets, and desktops.</p>
                <p>2. Clean Code Structure – using semantic HTML markup to improve SEO and accessibility.</p>
                <p>3. Styling with CSS and Preprocessors – clean and maintainable code using SCSS.</p>
                <p>4. Flexible Grid System – using CSS Grid and Flexbox for convenient element positioning.</p>
                <p>5. Animations and Interactive Elements – enhancing user experience with CSS animations and hover effects.</p>
                <p>6. Cross-Browser Compatibility – proper functionality across all modern browsers.</p>

                <p>The GAMER project showcases my approach to web development, attention to detail, and commitment to creating user-friendly and stylish interfaces.</p>
                <div className="imgCinema">
                    <img src="Снимок экрана 2025-01-12 023901.png" alt="" height={400} />
                    <img src="Снимок экрана 2025-01-12 023911.png" alt="" height={400} />
                    <img src="Снимок экрана 2025-01-12 023923.png" alt="" height={400} />
                </div>
            </div>
        </body>
    )
}

export default Cinema