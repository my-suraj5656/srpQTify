import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

const Section = ({ type, title, data, toggle = true }) => {
  // if carouselToggle is true means render "collapsed" view (ie corousel of albums) and  on the button provide "show all" text
  // if carouselToggle is false means render "show all" view (ie All albums ) and  on the button provide "Collapse all" text
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div>
      <div className={styles.sectionTop}>
        <h3>{title}</h3>
        <h4 onClick={handleToggle} className={styles.toggleText}>
          {/*  check if we want to show the show/collapse button or not */}
          {toggle ? carouselToggle ? "Show All" : "Collapse All" : <></>}
        </h4>
      </div>
      {data.length ? (
        <div className={styles.sectioninnerwrapper}>
          {!carouselToggle ? (
            <div className={styles.showallwrapper}>
              {data.map((album) => (
                <Card data={album} type={type} key={album.id} />
              ))}
            </div>
          ) : (
            <div>
              {/* show carousel here */}
              <Carousel
                data={data}
                renderCardComponent={(data) => <Card data={data} type={type} />}
              />
            </div>
          )}
        </div>
      ) : (
        <div className={styles.progressbar}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default Section;
