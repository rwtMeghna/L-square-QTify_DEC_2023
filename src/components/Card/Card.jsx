import React from "react";
import styles from "./Card.module.css";
import {Tooltip} from "@mui/material";
function Card({data , type}){

    const getCard=(type)=>{
        switch(type){
            case "album":{
                const {title , image , likes , follows, slug , songs}=data;

                return(
                <Tooltip title={`${songs.length}songs`} placement="top" arrow>
                    <a href={`/album/${slug}`}>
                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <img src={image} alt="song" loading="lazy"/>
                        <div className={styles.banner}>
                            <div className={styles.pill}>
                                <p>
                                    {likes}Likes
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.titleWrapper}>
                      <p>{title}</p>
                    </div>
                </div>
                </a>
                </Tooltip>
                )
            }

            case "song":{
                const {title , image , likes}=data;

                return(
                <div className={styles.wrapper}>
            
            
                    <div className={styles.card}>
                        <img src={image} alt="song" loading="lazy"/>
            
                        <div className={styles.banner}>
                            <div className={styles.pill}>
                                <p>
                                    {likes}Likes
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.titleWrapper}>
                      <p>{title}</p>
                    </div>
                </div>
                )
            }
            default:
                return <></>;
            };
        }
        return getCard(type);
    }

export default Card;
