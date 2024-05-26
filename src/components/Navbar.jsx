
import { Link , useNavigate} from "react-router-dom"
const Navbar = () => {
    const token = localStorage.getItem("access_token")
    const navigate = useNavigate();
    const handleLogut = () => {
        localStorage.removeItem("access_token");
        setTimeout(() => {
            navigate("/login");
        },1000)
    }
    return (
        <div style={{display: "flex", gap: "10px"}}>
            <Link style={{textDecoration: "none"}} to="/">
                <h1 style={{cursor: "pointer", color: "red"}}>Home</h1>
            </Link>
            <Link style={{textDecoration: "none"}} to="/login">
                <h1>Login</h1>
            </Link>
            {token && <button onClick={handleLogut}>Logout</button>}

        </div>
    )
}

export default Navbar