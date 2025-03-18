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
                    World Voyage — это современный сервис для бронирования туров, созданный для путешественников, которые ценят удобство, гибкость и стильный интерфейс. Мы стремимся сделать планирование поездок простым и приятным, помогая пользователям находить лучшие маршруты и предложения.
                </p>

                <h2>Верстка и дизайн</h2>

                <p>
                    В процессе создания World Voyage мы уделили особое внимание верстке, чтобы интерфейс был адаптивным, удобным и визуально привлекательным. Использование современных методологий CSS позволило создать легкую и гибкую структуру, обеспечивающую корректное отображение на разных устройствах.
                </p>  

                <h2>Разработка и дизайн</h2>  

                <p>
                    В процессе создания World Voyage мы уделили особое внимание UX/UI-дизайну, чтобы интерфейс был легким в использовании и визуально привлекательным. Мы провели исследование пользовательского опыта, протестировали разные варианты взаимодействия и адаптировали платформу под разные устройства. 
                </p> 

                <p>
                    Мы разработали чистый и модульный код с использованием семантической HTML-разметки, что улучшило SEO и доступность. Для стилизации применялись SCSS и CSS Grid/Flexbox, обеспечивающие точное позиционирование элементов и гибкость дизайна. Были внедрены анимации и интерактивные элементы, улучшающие пользовательский опыт.                
                </p>  

                <p>
                    Одной из ключевых задач было создание динамических фильтров для поиска туров, которые бы учитывали город отправления, предпочтения пользователей и доступные даты. Мы реализовали удобную систему бронирования, а также интегрировали платежные сервисы для быстрой и безопасной оплаты.
                </p>  

                <h2>Итоги и перспективы</h2>  

                <p>
                    World Voyage предлагает стильный и удобный интерфейс, разработанный с учетом лучших практик верстки. В будущем мы планируем улучшать анимации, адаптировать дизайн под новые тренды и оптимизировать производительность для еще более комфортного взаимодействия пользователей с сервисом.
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