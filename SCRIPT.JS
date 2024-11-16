const galleryData = [
    { 
        src: 'image 1.jpg',
        title: 'Image 1', 
        description: 'This is the first image description.' 
    },
    { 
        src: 'image 2.jpg', 
        title: 'Image 2', 
        description: 'This is the second image description.' 
    },
    { 
        src: 'image 3.jpg', 
        title: 'Image 3', 
        description: 'This is the third image description.' 
    },
    {
        src: 'image 4.webp',
        title:'Image 4',
        description: 'This is the fourth image description.'
    },
    { 
        src: 'image 5.jpg',
        title:'Image 5',
        description:'This is the fifth image description.'
    },
    {
        src: 'image 6.jpeg',
        title:'Image 6',
        description:'This is the six image description.'
    },
    { 
        src: 'image 7.jpeg',
        title:'Image 7',
        description:'This is the seven image description.'
    },
    { 
        src: 'image 8.jpeg',
        title: 'Image 8',
        description:'This is the eighth image.'
    },
    { 
        src:'image 9.jpeg',
        title:'Image 9',
        description: 'This is ninth image.'
    },
    { 
        src:'image 10.jpeg',
        title: 'Image 10',
        description: 'This is tenth image.'
    }
];

const galleryContainer = document.getElementById('gallery');

galleryData.forEach((image) => {
    const imageItem = document.createElement('div');
    imageItem.classList.add('image-item');

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.title;

    const info = document.createElement('div');
    info.classList.add('image-info');
    info.innerHTML = <h2>${image.title}</h2>;<p>${image.description}</p>;

    imageItem.appendChild(img);
    imageItem.appendChild(info);
    galleryContainer.appendChild(imageItem);
});