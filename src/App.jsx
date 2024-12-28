import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/navbar";
import Section from "./components/Section/Section";
import FilterSection from "./components/FilterSection/FilterSection";
import { fetchtopalbums, fetchnewalbums, fetchSongs } from "./api/api";
import styles from "./app.module.css";
function App() {
  const [topalbumsongs, settopalbumsongs] = useState([]);
  const [newalbumsongs, setnewalbumsongs] = useState([]);
  //state to store  original array of songs(unfiltered)
  const [songsData, setSongsData] = useState([]);

  //to store the index selected inn filters, can be ignored
  const [value, setValue] = useState(0);

  //to store the finally filtered songs
  const [filteredData, setFilteredData] = useState([]);

  const generatetopalbums = async () => {
    try {
      const res = await fetchtopalbums();
      settopalbumsongs(res);
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  const generatenewalbums = async () => {
    try {
      const res = await fetchnewalbums();
      setnewalbumsongs(res);
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  const generatesongs = async () => {
    try {
      // console.log("generateSongs");
      const res = await fetchSongs();
      setSongsData(res);
      setFilteredData(res);
    } catch (error) {
      return null;
    }
  };
  //function to generate filtered songs after selecting one tab
  const generateNewSongs = (index) => {
    let key = "";
    if (index === 0) {
      // suppose someOne select 0th tab after 2nd tab
      //set the default songsData as the final filtered data, bcz we need to show all of songs now
      generatesongs();
      return;
    } else if (index === 1) {
      key = "rock";
    } else if (index === 2) {
      key = "pop";
    } else if (index === 3) {
      key = "jazz";
    } else if (index === 4) {
      key = "blues";
    }

    let newSongsArray = songsData.filter((song) => {
      console.log("key: ", key);
      return song.genre.key === key;
    });

    console.log(
      "generateNewSongs triggered and filtered this Data: ",
      newSongsArray
    );
    setFilteredData(newSongsArray);
  };
  //to handle any change in the selected tab of the songs section and call the generateNewSongs
  const handleChangeIndex = async (newValue) => {
    console.log("handleChangeIndex triggered with newValue: ", newValue);
    setValue(newValue);
    generateNewSongs(newValue);
  };

  useEffect(() => {
    generatetopalbums();
    generatenewalbums();
    generatesongs();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type="album" title="Top Albums" data={topalbumsongs} />
        <Section type="album" title="New Albums" data={newalbumsongs} />
        <FilterSection
          type="song"
          title="Songs"
          value={value}
          filteredData={filteredData}
          handleChangeIndex={handleChangeIndex}
        />
      </div>
    </div>
  );
}

export default App;
