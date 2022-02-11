import axios from "axios";

export const getSingleForm = async (id) => {
  await axios.get(`${process.env.REACT_APP_API}/forms/${id}`);
};
