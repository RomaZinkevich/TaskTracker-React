import { Link } from "react-router-dom"
import Header from "./Header"

const About = () => {
  return (
    <div>
        <Header></Header>
        <h4>Version 1.0.0</h4>
        <Link to="/">Back</Link>
    </div>
  )
}

export default About