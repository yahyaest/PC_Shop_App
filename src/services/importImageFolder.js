export function importAll(r) {
  //let images = {};
 let images = [];
  r.keys().map((item, index) => {
   // images[item.replace("./", "")] = r(item);
   images.push(r(item));
  });
  return images;
}

export  const getImageIndex = (imageList, imageName) => {
  let imageIndex = -1;
  imageList.map((item, index) => {
    if (imageName && item.includes(imageName.split(".jpg")[0].split("_")[0])) {
      imageIndex = index;
    }
  });
  return imageIndex;
};