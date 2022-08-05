class Parameters {
    constructor(nonce, zero_count) {
        this.nonce = nonce;
        this.zero_count = zero_count;
    }
}

const parameters = new Parameters(30, 4);
export {parameters};
const time = parameters.nonce;
document.getElementById("time").innerHTML = time;