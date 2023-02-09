import styles from "./footer.module.css";
import { NavLink } from 'react-router-dom';
const Footer = () => {

    return (
        <footer  className=" text-center text-white">
            <div className={styles.logo}>
            <NavLink to="/" >DogFood</NavLink>
            </div>
      
    </footer>
    )
}

export {
    Footer
}

