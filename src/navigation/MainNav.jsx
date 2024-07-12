import { Link } from "react-router-dom"
import "./MainNav.css"
export default function MainNav() {
  return(
    <nav className="nav">
     
        <Link to={"/"}>
           <p>accueil </p> 
        </Link>
     
        <Link to={"/a-propos"}>
            <p>,  A propos</p>
        </Link>
      
        <Link to={"/futurama"}>
            <p>, Futurama</p>
        </Link>
      
        <Link to={"/exo"}>
            <p>, exo</p>
        </Link>
        <Link to={"/product"}>
            <p>, exo2</p>
        </Link>
    </nav>

  )
}
