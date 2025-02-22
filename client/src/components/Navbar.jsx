import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
        <div className="navbar">
            <div className="home">
                <Link to={"/"}>Home</Link>
            </div>
            <div className="about">
                <Link to={"/about"}>About</Link>
            </div>
            <div className="fortune-stick">
                <Link to={"/fortune-stick"}>Fortune Stick</Link>
            </div>
        </div>
    </>
  )
}
