import React, { useEffect, useState } from "react";
import Card from "../Card/Card.jsx"
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Caraousel from "../Caraousel/Carausel.jsx";
import Filters from "../Filters/Filters.jsx";
// import { fetchFilters } from "../../Api/Api.jsx";

export default function Section({ title, data, filterSource, type }) {

    const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
    const [carouselToggle, setCarouselToggle] = useState(true);
    // const [selectedFilterIndex, setselectedFilterIndex] = useState(0);

    const handleToggle = () => {
        setCarouselToggle((prevState) => !prevState);
    }
    // console.log(data);

    useEffect(() => {
        if (filterSource) {
            filterSource().then((response) => {
                const { data } = response;
                setFilters([...filters, ...data]);
                console.log(filters)
            });
        }
        console.log(filterSource);
    }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         if (filterSource) {
    //             try {
    //                 const response = await filterSource();
    //                 const { data } = response;
    //                 setFilters([...filters, ...data]);
    //                 console.log(filters);
    //             } catch (error) {
    //                 console.error("Error fetching filters:", error);
    //             }
    //         }
    //     };
    //     fetchData();
    // }, []);

    // console.log(data);



    const showFilters = filters.length > 1;
    const cardsToRender=data.filter((card) =>
        showFilters && selectedFilterIndex !== 0
            ? card.genres.key === filters[selectedFilterIndex].key
            : card)

    return (

        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>{!carouselToggle ? "Collapse All" : "Show All"}</h4>
            </div>
         {
         showFilters && (
         <div className={styles.filterWrapper}>

            <Filters
            filters={filters}
            selectedFilterIndex ={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}/>
            </div>
            )
         }

            {data.length === 0 ? (
                <CircularProgress />
            ) : (

                <div className={styles.cardWrapper}>
                    {!carouselToggle ? (
                        <div className={styles.wrapper}>
                            {cardsToRender.map((ele ,index) => {
                               return <Card  key={index} data={ele} type={type} />;

})
                            }
                        </div>
                    ) : (
                        <Caraousel
                            data={cardsToRender}
                            renderComponent={(data) => <Card data={data} type={type} />}
                        />
                    )}
                </div>
            )}
        </div>
    );
}