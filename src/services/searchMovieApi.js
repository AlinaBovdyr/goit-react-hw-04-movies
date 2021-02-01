import axios from 'axios';

//https://api.themoviedb.org/3/movie/550?api_key=98adb44139e9818ce98afc8c18be0061
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '98adb44139e9818ce98afc8c18be0061';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

const getMovies = async (pathname, query) => {
  try {
    const { data } = await axios.get(pathname, { params: query });

    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default {
  getMovies,
};
