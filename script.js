const imageMap = {
    1: ['myop1.jpg', 'myop3.jpg','myop3.jpg','myop4.jpg'],
    2: ['z.png', 'z1.png', 'z2.png'],
    3: ['tar1.jpg', 'tar2.jpg', 'tar3.jpg', 'tar4.jpg'],
    4: ['yuri1.jpg', 'yuri2.jpg', 'yuri3.jpg'],
    5: ['voi1.jpg', 'voi2.png', 'voi3.png', 'voi4.png']
};

const currentIndices = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
};

function showImage(carouselId) {
    const imgElement = document.getElementById(`carousel${carouselId}-img`);
    imgElement.src = imageMap[carouselId][currentIndices[carouselId]];
}

function nextImage(carouselId) {
    currentIndices[carouselId] = (currentIndices[carouselId] + 1) % imageMap[carouselId].length;
    showImage(carouselId);
}

function prevImage(carouselId) {
    currentIndices[carouselId] = (currentIndices[carouselId] - 1 + imageMap[carouselId].length) % imageMap[carouselId].length;
    showImage(carouselId);
}
