import { Link } from "react-router"

const Login = () => {
    return (
        <div>
            LOGIN
            <Link to={{
                pathname: "/",
                hash: "#last"
            }}>На главную</Link>
        </div>
    )
}

export default Login