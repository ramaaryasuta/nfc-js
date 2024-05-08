if ("NDEFReader" in window) {
  console.log("Web NFC is supported.");
} else {
  console.log("Web NFC is not supported.");
}

const button = document.getElementById("readButton");
button.addEventListener("click", async () => {
  try {
    const ndef = new NDEFReader();
    await ndef.scan();
    console.log("NFC reader initialized.");
    // Now the NFC reader is ready to read tags
  } catch (error) {
    console.error("Error initializing NFC:", error);
  }
});
