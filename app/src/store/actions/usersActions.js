export const GET_USER = "GET_USER";
import axios from "axios";

export const getUser = (valores) => {
  return async (dispatch) => {
    const password = valores.password;
    const email = valores.email;

    await axios
      .post("http://localhost:3005/api/users/login", {
        email,
        password,
      })
      .then((res) => {
        dispatch({
          type: GET_USER,
          payload: res.data.token,
        });
         localStorage.setItem("token", res.data.token);
          localStorage.setItem("user_id", res.data.user._id);
      })
      .catch((err) => console.log(err));
  };
};
