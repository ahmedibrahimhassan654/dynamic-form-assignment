export const getSingleForm = async (id) => {
  await axios.get(`${process.env.REACT_APP_API}/sub/${id}`);
};
