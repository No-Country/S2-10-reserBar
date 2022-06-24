import React, { useState, useEffect } from "react";

import BarNav from "../components/BarNav/BarNav";
import { useParams } from "react-router-dom";

import SlideLele from "../components/BannerSlider/SlideLele";

const ViewBar = () => {
    const [infoBar, setInfoBar] = useState({});
    const [photos, setPhotos] = useState([]);

    const { id } = useParams();

    var requestOptions = {
        method: "GET",
        redirect: "follow",
    };
    useEffect(() => {
        fetch(
            `https://reserbar-api.herokuapp.com/api/bares/${id}`,
            requestOptions
        )
            .then((response) => response.json())
            .then((response) => {
                setInfoBar(response.bares), setPhotos(response.bares.photos);
            })
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <>
            <SlideLele images={photos} nombreBar={infoBar.name} />

            <BarNav description={infoBar} />
        </>
    );
};

export default ViewBar;
