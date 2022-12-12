import styles from "./header.module.css";
import { SignInBtn } from "../BtnsSign/SignInBtn";
import { SignUpBtn } from "../BtnsSign/SignUpBtn";
import { UserBtn } from "../BtnsSign/UserBtn";

const Header = ({token}) => {

    return (
        <header>
        <div className={styles.logo}>
            DogFood
        </div>
        <div className="d-flex">
        <SignUpBtn />
        <SignInBtn />
        <UserBtn token={token} />
        </div>
    </header>
    )
}

export {
    Header
}