export const GET_BARES = "GET_BARES";

export const getBares = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("https://reserbar-api.herokuapp.com/api/bares");
      const data = await res.json();
      dispatch({
        type: GET_BARES,
        payload: data.bares,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
