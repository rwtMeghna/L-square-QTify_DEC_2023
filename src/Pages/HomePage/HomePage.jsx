import styles from "./HomePage.module.css"
import { useOutletContext } from 'react-router-dom';
import React from "react";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import {fetchFilters} from "../../Api/Api.jsx";

function HomePage() {

    const {data} =useOutletContext();
    const{ topAlbums, newAlbums, songs }=data;
  return (
    <>
   <Hero/>
     <div className={styles.wrapper}>
     <Section title="Top Albums" data={topAlbums} type="album" />
     <Section title="New Albums" data={newAlbums} type="album" />
      <Section title="Songs"
       data={songs} 
       filterSource={fetchFilters}
      type="songs"/> 
     </div>
</>
  );
}

export default HomePage;