const container = document.getElementById("container")
const captureBtn = document.getElementById("capture-btn")
const previewContainer = document.getElementById("preview-container")
// const downloadBtn = document.getElementById("download-btn")

captureBtn.addEventListener("click", async() => {
    // downloadBtn.classList.remove("hide")
    const canvas = await html2canvas(container)
    const imageURL = canvas.toDataURL()
    previewContainer.innerHTML = `<img src="${imageURL}" id="image">`
})