import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";

function Navbar({searchData}){
    return(
<nav className={styles.navbar}>
    <a href="/">
    <Logo/>
    </a>
    <Search placeholder={"Select a song by your choice"} searchData={searchData}/>
    <Button>Give Feedback</Button>
</nav>
     )
}

export default Navbar;