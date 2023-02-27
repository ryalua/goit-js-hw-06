const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeGallery = ({ width, url, alt,
}) => `<li class = gallery_item> 
        <img src=${url} alt=${alt} width = 400/>
    </li>`;

const galleryImgArrayRef = document.querySelector('.gallery');
console.log(galleryImgArrayRef);
galleryImgArrayRef.style.display = 'flex';
galleryImgArrayRef.style.flexDirection = 'column';
galleryImgArrayRef.style.gap = '30px'
galleryImgArrayRef.style.listStyle = 'none';

const markup = images
  .map((image) => makeGallery(image) )
  .join('');

galleryImgArrayRef.insertAdjacentHTML("afterbegin", markup);

// const markup = images
//   .map(image => {
//     const liRef = `<li class = gallery_item> 
//       <img class = gallery_link src=${image.url} alt=${image.alt}
//       width = 400/>
//     </li>`;
//     // liRef.style.width = '400px';
//     // liRef.style.flexBasis = 'cal((100% - 60px)/3)';
  
//     console.log(liRef);
//     return liRef;
//   })
//   .join("");

// galleryImgArrayRef.insertAdjacentHTML("afterbegin", markup);
// ----------------------------------------------------------

// const galleryImgArrayRef = document.querySelector('.gallery');
// // console.log(galleryImgArrayRef);
// galleryImgArrayRef.style.display = 'flex';
// galleryImgArrayRef.style.justifyContent = 'center';
// galleryImgArrayRef.style.alignItems = 'center'

// const markup = images.map(image => { 
//   const liRef = document.createElement('li');
//   // liRef.style.flexBasis = 'minWidth';
  
//   const imageRef = document.createElement('img');
//   imageRef.classList.add('gallery_item');
//   imageRef.src = image.url;
//   imageRef.alt = image.alt;
//   imageRef.width = 400;
//   // imageRef.flexBasis = 250;

//   liRef.appendChild(imageRef);
//   console.log(liRef);
  
//   return liRef;
//   console.log(liRef);
// });

// galleryImgArrayRef.append(...markup)





