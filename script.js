const qrcode = new QRCode("qrcode");
const elText = document.getElementById("text");
const btn = document.getElementById("button");

function makeCode() {
    if (!elText.value) {
        elText.focus();
        return;
    }

    qrcode.makeCode(elText.value);
}

makeCode();

elText.addEventListener("blur", event => {makeCode()});
elText.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        makeCode();
    }
});
btn.addEventListener("click", event => {makeCode()});
