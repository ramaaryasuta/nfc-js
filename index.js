const title = document.getElementById("nfc-stat");
const testNfc = document.getElementById("testNfc");

function test() {
  if ("NDEFReader" in window) {
    console.log("Web NFC is supported.");
    title.innerHTML = "Web NFC is supported.";
  } else {
    console.log("Web NFC is not supported.");
    title.innerHTML = "Web NFC is not supported.";
  }
}
