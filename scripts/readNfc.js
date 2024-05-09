const readButton = document.getElementById("readButton");
const tagInfo = document.getElementById("tagInfo");

readButton.addEventListener("click", async () => {
  try {
    const nfcPermission = await navigator.permissions.query({ name: "nfc" });
    if (nfcPermission.state === "granted") {
      const reader = new NDEFReader();
      await reader.scan();
      reader.addEventListener("reading", (event) => {
        const message = event.message;
        tagInfo.innerHTML = `Tag ID: ${message.records[0].data}`;
      });
    } else {
      console.log("NFC permission denied.");
    }
  } catch (error) {
    console.error("Error accessing NFC:", error);
  }
});
