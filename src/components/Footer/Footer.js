import styles from "./footer.module.css";

const Footer = () => {

    return (
        <footer>
        <div className={styles.logo}>
            {/* <a href="#" >
                <i className="fa-solid fa-dog"></i>
            </a> */}
            <span>DogFood</span>
        </div>
      
    </footer>
    )
}

export {
    Footer
}