import axios from "axios";

export const getSingleForm = async (id) => {
  await axios.get(`http://localhost:5000/api/v1/forms/${id}`);
};
