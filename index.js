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

const reqPermission = document.getElementById("reqPermission");
reqPermission.addEventListener("click", async () => {
  try {
    const ndef = new NDEFReader();
    await ndef.scan();
    // fungsi membaca NFC Tag
    ndef.addEventListener("reading", ({ message, serialNumber }) => {
      console.log("Tag detected:", serialNumber);
      console.log("Message:", message);
      alert(`Tag terbaca: ${serialNumber}\nMessage: ${message}`);
      // Process the message from the tag
    });
  } catch (error) {
    alert("Gagal meminta izin NFC");
  }
});
