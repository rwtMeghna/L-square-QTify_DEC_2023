import React from 'react'
import styles from"./Hero.module.css";
function Hero() {
  return (
    <div className={styles.hero}>
        <div>
            <h1>100 thousands Songs , AD-free</h1>
            <h1>Over thousand podacst videos</h1>
        </div>
        <div>
            <img src={require("../../assests/hero_headphone.png")} width={112} alt="headphones"/>
        </div>
    </div>
  )
}

export default Hero