function compatibilityNfcApi() {
  if ("NDEFReader" in window) {
    alert("Web NFC API is supported in this device/browser.");
  } else {
    alert("Sorry, Web NFC API is not supported in this device/browser.");
  }
}
