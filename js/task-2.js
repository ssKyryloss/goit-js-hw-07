`use strict`
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Elephant Beside on Baby Elephant",
  },
  {
    url: "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Blue Geeen and Orange Parrot",
  },
  {
    url: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Zebras on Zebra",
  },
];

const galleryList = document.querySelector(".gallery");

const galleryItems = images.map(({ url, alt }) => {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = url;
  galleryImage.alt = alt;
  galleryImage.width = 300;

  galleryItem.append(galleryImage);

  return galleryItem;
});

galleryList.append(...galleryItems);

const gallery = document.querySelector(".gallery");
gallery.style.listStyle = "none";
gallery.style.display = "flex";
gallery.style.width = "1440px";
gallery.style.height = "848px";
gallery.style.padding = "100px 156px";
gallery.style.flexWrap = "wrap";
gallery.style.justifyContent = "center";
gallery.style.alignItems = "center";
gallery.style.gap = "48px 24px";
gallery.style.background = "#FFF";

const galleryImages = document.querySelectorAll(".gallery__image");
galleryImages.forEach((image) => {
  image.style.width = "360px";
  image.style.height = "300px";
  image.style.flexShrink = "0";
  image.style.background =
    "url(<path-to-image>), lightgray 0px -0.018px / 125% 100.012% no-repeat";
});