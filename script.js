// const imgs = [
//     { mainly:{ image: "./img/thumb-img-2.jpg",mainimg:"./img/main-image-blue.jpg"}},
//     { mainly:{ image: "./img/thumb-img-2.jpg",mainimg:"./img/main-image-green.jpg"}},
//     { mainly:{ image: "./img/thumb-img-2.jpg",mainimg:"./img/main-image-blue.jpg"}},
//     { mainly:{ image: "./img/thumb-img-2.jpg",mainimg: "./img/main-image-green.jpg"}
//     }
//   ];
  
//   const changeMain = (color) => {
//     const mainImage = document.getElementById('block1');
//     mainImage.src = `./img/main-image-${color}.jpg`;
  
//     const thumbnailImages = document.querySelectorAll('.block');
//     const randomMainImage = imgs[Math.floor(Math.random() * imgs.length)].mainly[Math.floor(Math.random() * mainly.length)];

//     thumbnailImages.forEach((image) => {
//       image.src = randomMainImage;
//       main.src = mainImage;
//     });
//   };