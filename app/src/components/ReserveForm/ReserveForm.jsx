import { useParams } from "react-router";
import "./ReserveForm.css"


export const ReserveForm =()=>{

const authToken = localStorage.getItem("token")

const id = useParams().id
// var axios = require('axios');

// var config = {
//   method: 'put',
//   url: `http://localhost:3005/api/bares/${id}/reserve`,
//   headers: {authToken}
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });




    return(<>
    
    <h1>HOLASSS</h1>
    {console.log(id)}
    {console.log(authToken)}
    
    </>)
}