import {sha256} from "./hash.js"
import {sendRequest} from "./fetch.js"

function hash_calculating(data, parameters)
{
    let some_hash = sha256(data);
    if (parameters.zero_count === 0)
    {
        if (some_hash[0] !== "0") {
            return false;
        }
        else{
            const request_body = {
                sent_hash: some_hash,
                zero_count: parameters.zero_count
            }
            return sendRequest("POST", "http://127.0.0.1:8001/check_hash", request_body);
        }
    }
    else{

        if ((some_hash.slice(0, parameters.zero_count) === "0".repeat(parameters.zero_count)) && (some_hash[parameters.zero_count] !== "0")){
            const request_body = {
                sent_hash: some_hash,
                zero_count: parameters.zero_count
            }
            return sendRequest("POST", "http://127.0.0.1:8001/check_hash", request_body);
        }

        return false;
    }
}

function pow_analogue(parameters, k, data){
    if (hash_calculating(data + String(k), parameters)){
        console.log(data + String(k));
        return 1;
    }
    else{
        console.log(data + String(k));
        return 0;
    }
}

function spam_protection(parameters, data){
    let k = 0;
    let count_of_sent_messages = 0;
    let start = Date.now()/1000;
    while (true){
        count_of_sent_messages += pow_analogue(parameters, k, data);
        ++k;
        let end = Date.now()/1000;
        if (end-start >= parameters.nonce){
            break;
        }
    }
    let arr = [count_of_sent_messages, k]
    return arr;
}

export {spam_protection}
