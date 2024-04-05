const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("display");

//add images
const images = []

function createThumbnails() {
    images.forEach(function (image) {
        const img = document.createElement("img");

        img.src = image.url;
        img.alt = image.alt;

        thumbContainer.appendChild(img);

        img.addEventListener("click", function () {
            createBigImage(image);
        });
    });
}

function createBigImage(image) {
    displayImage.innerHTML = "";

    const bigImg = document.createElement("img");

    bigImg.src = image.url;
    bigImg.alt = image.alt;

    displayImage.appendChild(bigImg);
}

createThumbnails();
createBigImage(images[0]);

