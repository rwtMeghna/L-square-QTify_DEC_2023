import React from "react";
import styles from "./Card.module.css";
import { Tooltip } from "@mui/material";
import {Chip} from "@mui/material";
import { Link } from "react-router-dom";

function Card({data, type }) {
//   console.log(data);
    const getCard = (type) => {
        switch (type) {
            case "album"    : {
                const {image , title , follows , slug ,songs} = data;
                return (
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                        <a href ={`/album/${slug}`}>
                            <div className={styles.wrapper}>
                                <div className={styles.card}>
                                    <img src={image} alt="song" loading="lazy" />
                                    <div className={styles.banner}>
                                        <Chip 
                                            label={`${follows} Follows`}
                                            size="small"
                                            className={styles.chip}
                                            />
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

            case "song": {
                const {likes , image , title } = data;
                return (
                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                            <img src={image} alt="song" loading="lazy" />
                            <div className={styles.banner}>
                                <div className={styles.pill}>
                                    <p>{likes} Likes</p>
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
