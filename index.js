let fileSizeLimit = 0.5 * 1024 * 1024
let backgroundSizeLimit = 0.5 * 1024 * 1024

function changeLayout(type) {
    let imageParentDiv = document.getElementById('image-container')
    let squareLabel = document.getElementById('squareLabel')
    let bannerLabel = document.getElementById('bannerLabel')
    let squareDiv = document.getElementById('square-div')
    let bannerDiv = document.getElementById('banner-div')
    let labelWrapper = document.getElementById('labelWrapper')
    if (type == 'square') {
        imageParentDiv.style.width = '55%'
        squareLabel.style.color = 'black'
        bannerLabel.style.color = 'gray'
        squareDiv.style.backgroundColor = 'lightgray'
        bannerDiv.style.backgroundColor = 'white'
        labelWrapper.style.width = '50%'
    } else if (type == 'banner') {
        imageParentDiv.style.width = '100%'
        squareLabel.style.color = 'gray'
        bannerLabel.style.color = 'black'
        squareDiv.style.backgroundColor = 'white'
        bannerDiv.style.backgroundColor = 'lightgray'
        labelWrapper.style.width = '100% '
    }
}

function onUploadFile() {
    let typeFile = document.getElementById('fileUpload')
    typeFile.click()
}

function onUploadBackground() {
    let typeFile = document.getElementById('backgroundUpload')
    typeFile.click()
}

function showSelectedFile(fileParam) {
    let file = fileParam.files[0];
    if (file.type.startsWith('image') && +file.size <= fileSizeLimit) {
        let reader = new FileReader();
        let resultImageTag = document.getElementById('resultImage')
        reader.onloadend = function() {
            resultImageTag.src = reader.result;
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            resultImageTag.src = "dummy.PNG";
        }
    } else {
        let titleDiv = document.getElementById('exampleModalLabel')
        let MessageDiv = document.getElementById('exampleModalMessage')
        let ModalButton = document.getElementById('buttonToOpenModal')
        if (!file.type.startsWith('image')) {
            titleDiv.innerHTML = "Wrong File Selection"
            MessageDiv.innerHTML = " Please Choose GiF , PNG or JPEG  File Type"
            ModalButton.click()
        } else if (file.size > fileSizeLimit) {
            titleDiv.innerHTML = "File Limit exceed"
            MessageDiv.innerHTML = "Please Choose less than 500 KB File"
            ModalButton.click()
        }
    }
}

function showSelectedBackground(fileParam) {
    let file = fileParam.files[0];
    if (file.type.startsWith('image') && +file.size <= fileSizeLimit) {
        let reader = new FileReader();
        let resultImageTag = document.getElementById('resultImage')
        reader.onloadend = function() {
            resultImageTag.style.backgroundImage = 'url(' + reader.result + ')';
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            resultImageTag.style.backgroundImage = "dummy.PNG";
        }
    } else {
        let titleDiv = document.getElementById('exampleModalLabel')
        let MessageDiv = document.getElementById('exampleModalMessage')
        let ModalButton = document.getElementById('buttonToOpenModal')
        if (!file.type.startsWith('image')) {
            titleDiv.innerHTML = "Wrong File Selection"
            MessageDiv.innerHTML = " Please Choose GiF , PNG or JPEG  File Type"
            ModalButton.click()
        } else if (file.size > fileSizeLimit) {
            titleDiv.innerHTML = "File Limit exceed"
            MessageDiv.innerHTML = "Please Choose less than 500 KB File"
            ModalButton.click()
        }
    }
}