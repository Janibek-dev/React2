import { Link } from "react-router"
import '../styles/Hotel.css'

const Hotel = () => {
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
                <h1>World Voyage</h1>

                <p>
                    World Voyage is a modern travel booking service created for travelers who value convenience, flexibility, and a stylish interface. We aim to make trip planning simple and enjoyable, helping users find the best routes and offers.                
                </p>

                <h2>Layout and Design</h2>

                <p>
                    In the process of creating World Voyage, we paid special attention to the layout to ensure the interface is responsive, user-friendly, and visually appealing. The use of modern CSS methodologies allowed us to create a lightweight and flexible structure that ensures proper display across various devices.                
                </p>  

                <h2>Development and Design</h2>  

                <p>
                    In the process of creating World Voyage, we paid special attention to UX/UI design to ensure the interface is easy to use and visually appealing. We conducted user experience research, tested different interaction options, and adapted the platform for various devices.                
                </p> 

                <p>
                    We developed clean and modular code using semantic HTML markup, which improved SEO and accessibility. SCSS and CSS Grid/Flexbox were used for styling, ensuring precise element positioning and design flexibility. Animations and interactive elements were implemented to enhance the user experience.                
                </p>  

                <p>
                    One of the key tasks was creating dynamic filters for searching tours that take into account the departure city, user preferences, and available dates. We implemented a convenient booking system and integrated payment services for quick and secure payments.
                </p>  

                <h2>Results and Future Prospects</h2>  

                <p>
                    World Voyage offers a stylish and user-friendly interface, designed with the best web design practices in mind. In the future, we plan to enhance animations, adapt the design to new trends, and optimize performance for an even more comfortable user experience with the service.
                </p>

                <div className="imgHotel">
                    <img src="Снимок экрана 2025-01-12 011311.png" alt="" height={400} />
                    <img src="Снимок экрана 2025-01-12 011336.png" alt="" height={400} />
                    <img src="Снимок экрана 2025-01-12 011401.png" alt="" height={400} />
                </div>
            </div>
        </body>
    )
}

export default Hotel