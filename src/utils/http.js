import Axios from "axios";

export const getRandomUser = () => {
  return Axios.get("https://randomuser.me/api");
};

// getRandomUser.then().catch()