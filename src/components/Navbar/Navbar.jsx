import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
function Navbar({searchData}){
    return(
<nav className={styles.navbar}>
    <Link to="/">
    <Logo/>
    </Link>
    <Search placeholder={"Search a song of your choicee"} searchData={searchData}/>
    <Button>Give Feedback</Button>
</nav>
     )
}

export default Navbar;