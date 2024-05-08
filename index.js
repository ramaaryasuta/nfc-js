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
    alert("Meminta izin berhasil");
  } catch (error) {
    alert("Gagal meminta izin NFC");
  }
});
