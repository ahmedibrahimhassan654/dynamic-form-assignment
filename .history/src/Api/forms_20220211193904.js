import axios from "axios";

export const getSingleForm = async (id) => {
  return await axios.get(`http://localhost:5000/api/v1/forms/${id}`);
};
