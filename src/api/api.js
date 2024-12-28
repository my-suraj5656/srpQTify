import axios from "axios";
export const BACKEND_ENPOINT = "https://qtify-backend-labs.crio.do";

//func to ftech top-albums
export const fetchtopalbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENPOINT}/albums/top`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    // console.log(error);
    return null;
  }
};

export const fetchnewalbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENPOINT}/albums/new`);
    // console.log(res.data);
    return res.data;
  } catch (error) {
    // console.log(error);
    return null;
  }
};
export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENPOINT}/songs`);
    return res.data;
  } catch (error) {
    return null;
  }
};
