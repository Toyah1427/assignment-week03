const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("display");

thumbContainer.addEventListener('mouseenter', () => {
  thumbContainer.style.backgroundColor = 'blue';
});

thumbContainer.addEventListener('mouseleave', () => {
  thumbContainer.style.backgroundColor = '';
});



//add images
const images = [
    {
        url: "https://images.unsplash.com/photo-1495012379376-194a416fcc5f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "White jellyfish swimming",
    },
    {
        url: "https://images.unsplash.com/photo-1543007168-5fa9b3c5f5fb?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Pink and orange jellyfish",
    },
    {
        url: "https://images.unsplash.com/photo-1540968221243-29f5d70540bf?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Yellow and white jellyfish",
    },
    {
        url: "https://images.unsplash.com/photo-1590013330451-3946e83e0392?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Brown jellyfish",
    },
    {
        url: "https://images.unsplash.com/photo-1611304170711-0a02d1b23329?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGplbGx5ZmlzaHxlbnwwfHwwfHx8Mg%3D%3D", alt: "Bright pink and white jellyfish",
    },
    {
        url: "https://images.unsplash.com/photo-1634481298300-00a65c50a3da?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Jellyfish close-up",
    },
    {
        url: "https://images.unsplash.com/photo-1547103106-9a0e718bb2d2?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Four orange jellyfish",
    },
    {
        url: "https://images.unsplash.com/photo-1613374933062-7aa9f54036ce?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Blue and pink jellyfish illustration",
    },
    {
        url: "https://images.unsplash.com/photo-1613031260991-32a5b283e53f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGplbGx5ZmlzaHxlbnwwfHwwfHx8Mg%3D%3D", alt: "Pink and red jellyfish",
    },
    {
        url: "https://images.unsplash.com/photo-1549741501-4211de5d3757?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGplbGx5ZmlzaHxlbnwwfHwwfHx8Mg%3D%3D", alt: "White and yellow jellyfish",
    },
    {
        url: "https://images.unsplash.com/photo-1626345545815-650a098a4c76?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Blue jellyfish black background",
    },
];

let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.url.length;
    document.getElementById("img").src = images.url[currentIndex];

}

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

