const title = document.querySelector(".sidebar-title");
const priceElement = document.querySelector(".sidebar-price");
const content = document.querySelector(".sidebar-content");
const buy = document.querySelector(".sidebar-buy");
const more = document.querySelector(".sidebar-more");
// const number = document.querySelector(".sidebar-index");

const sidebarContent = [
  {
    title: "Quaerat",
    description:
      "First NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto.",
      price: 0.1,
      sold: false
  },
  {
    title: "cupiditate",
    description:
      "Second NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.",
    price: 0.3,
      sold: false
  },
  {
    title: "Porro",
    description:
      "Third NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.",
      price: 0.1,
      sold: true
  },
  {
    title: "nostrum",
    description:
      "Fourth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.",
      price: 0.2,
      sold: false
  },
  {
    title: "architecto",
    description:
      "Fifth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum.",
      price: 0.5,
      sold: true
  },
  {
    title: "delectus",
    description:
      "Sixth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto.",
      price: 0.1,
      sold: false
  },
  {
    title: "nostrum",
    description:
      "Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.",
      price: 0.2,
      sold: true
  },
  
  {
    title: "praesentium",
    description:
      "Eighth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.",
      price: 0.1,
      sold: false
  },
  {
    title: "consectetur",
    description:
      "Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.",
      price: 0.5,
      sold: true
  },
  {
    title: "laudantium",
    description:
      "Tenth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum.",
      price: 0.4,
      sold: false
  },
];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.classList[0], 10);
        const price = sidebarContent[index - 1].price
        const sold = sidebarContent[index - 1].sold
        title.innerHTML = sidebarContent[index - 1].title;
        const isDesktop = window.matchMedia("only screen and (min-width: 768px)").matches
        if (isDesktop) content.innerHTML = sidebarContent[index - 1].description;
        // number.innerHTML = `${index} / ${sidebarContent.length}`;
        priceElement.innerHTML = `${price} / ETH`;
        buy.innerHTML = sold ? 'SOLD' : 'PURCHASE';

        more.addEventListener('click', (e) => {
            e.preventDefault()
            page(`/details/:${sidebarContent[index - 1].title}`)
        })
      }
    });
  },
  { threshold: [.5] }
);

document.querySelectorAll(".image").forEach((img) => {
  observer.observe(img);
});