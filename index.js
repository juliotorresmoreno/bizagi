import bizagiUtil, { REQUIRED, error as ERROR, getResponse as RESPONSE } from './bz-util';
import axios from 'axios';
 
/**
 * @author julio torres
 */ 


function invoke(globals, actionName, data, authenticationType, LOG, callback) {
    axios.get("https://google.com")
        .then((response) => {
            console.log(response.data);
            console.log(REQUIRED, ERROR, RESPONSE)
        });
    console.log("Hola mundo desde invoke")
}


exports.invoke = invoke;