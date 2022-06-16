export const GET_USER = "GET_USER";
import axios from "axios";
export const GET_BAR = "GET_BAR";
export const TRAER_USUARIO = "TRAER_USUARIO";
export const LOGOUT = "LOGOUT";

export const getUser = (valores, tipoUsuario) => {
  return async (dispatch) => {
    const password = valores.password;
    const email = valores.email;

    if (tipoUsuario) {
      await axios
        .post("https://reserbar-api.herokuapp.com/api/bares/login", {
          email,
          password,
        })
        .then((res) => {
          dispatch({
            type: GET_BAR,
            payload: res.data,
          });
        })
        .catch((err) => console.log(err));
    } else {
      await axios
        .post("https://reserbar-api.herokuapp.com/api/users/login", {
          email,
          password,
        })
        .then((res) => {
          dispatch({
            type: GET_USER,
            payload: res.data,
          });
        })
        .catch((err) => console.log(err));
    }
  };
};

export const traerUsuario = (token, id) => {
  return async (dispatch) => {
    var config = {
      method: "get",
      url: `https://reserbar-api.herokuapp.com/api/users/${id}`,
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios(config)
      .then((res) => {
        dispatch({
          type: TRAER_USUARIO,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };
};
