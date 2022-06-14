export const GET_USER = "GET_USER";
import axios from "axios";
export const GET_BAR = "GET_BAR";

export const getUser = (valores, tipoUsuario) => {
  return async (dispatch) => {
    const password = valores.password;
    const email = valores.email;
    
    if(tipoUsuario) {
      
      await axios.post("http://localhost:3005/api/bares/login", {
      email,
      password,
    })
    .then((res) => {
      console.log("vicen redux",res.data);
      dispatch({
        type: GET_BAR,
        payload: res.data,
      });
        console.log(res.data);
       localStorage.setItem("token", res.data.token);
        localStorage.setItem("bar_id", res.data.bar._id);
    }) .catch((err) => console.log(err));
    } 
    else{
      console.log("vicen redux",valores, tipoUsuario);
      await axios
      .post("http://localhost:3005/api/users/login", {
        email,
        password,
      })
      .then((res) => {
        dispatch({
          type: GET_USER,
          payload: res.data,
        });
         localStorage.setItem("token", res.data.token);
          localStorage.setItem("user_id", res.data.user);
      }).catch((err) => console.log(err));
    }
     
    
      
  };
};
