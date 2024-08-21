import { useState } from "react"

const Navbar = () => {
    const [menuStatus, setMenuStatus] = useState(false);
    return (
        <div className="">
            <button className="hamburger" onClick={() => setMenuStatus(!menuStatus)}>
                  {
                    menuStatus ? <span> &times; </span>
                    : <span> &#9776;  </span>
                  } 
            </button>
            <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Login</li>
                    <li>Learn More</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar