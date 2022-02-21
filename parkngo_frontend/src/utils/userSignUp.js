import axios from "axios";
export const userSignUp = async (data) => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/v1/users/signup",
      data
    );
    return await res;
  } catch (error) {
    console.log(error);
  }
};
