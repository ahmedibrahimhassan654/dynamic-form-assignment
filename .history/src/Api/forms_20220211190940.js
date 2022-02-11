import axios from "axios";

export const getSingleForm = async (id) => {
  await axios.get(`${process.env.REACT_APP_API}/forms/62054f4b1359de293fe8e149/${id}`);
};
