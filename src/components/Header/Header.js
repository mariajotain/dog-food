import styles from "./header.module.css";
// import { SignInBtn } from "../BtnsSign/SignInBtn";
import { SignUpBtn } from "../BtnsSign/SignUpBtn";
import { UserBtn } from "../BtnsSign/UserBtn";
import { NavLink } from 'react-router-dom';

export const Header = ({token}) => {

    return (
        <>
        <header>
            <div className={styles.logo}>
            <NavLink to="/" >DogFood</NavLink>
            </div>
            <div className="d-flex">
            <SignUpBtn />
            {/* <SignInBtn /> */}
            <UserBtn token={token} />
            </div>
        </header>
    </>
    );
};

