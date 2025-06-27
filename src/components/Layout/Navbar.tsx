import { Link } from "react-router"
import img from "../../assets/task-management-svgrepo-com.svg"

export default function Navbar() {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
            <div className="flex items-center">
                <img className="h-5" src={img} alt="" /> <span className="font-bold ml-2">Task</span>Master
            </div>
            <Link to={"/tasks"}>Tasks</Link>
            <Link to={"users"}>Users</Link>
        </nav>

    )
}