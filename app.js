const title = document.querySelector(".sidebar-title");
const content = document.querySelector(".sidebar-content");
const number = document.querySelector(".sidebar-index");

const sidebarContent = [
  {
    title: "First NFT",
    description:
      "First NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto.",
  },
  {
    title: "Second NFT",
    description:
      "Second NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.",
  },
  {
    title: "Third NFT",
    description:
      "Third NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.",
  },
  {
    title: "Fourth NFT",
    description:
      "Fourth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.",
  },
  {
    title: "Fifth NFT",
    description:
      "Fifth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum.",
  },
  {
    title: "Sixth NFT",
    description:
      "Sixth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto.",
  },
  {
    title: "Seventh NFT",
    description:
      "Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.",
  },
  {
    title: "Eighth NFT",
    description:
      "Eighth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.",
  },
  {
    title: "Ninth NFT",
    description:
      "Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.",
  },
  {
    title: "Tenth NFT",
    description:
      "Tenth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum.",
  },
];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.classList[0], 10);
        title.innerHTML = sidebarContent[index - 1].title;
        content.innerHTML = sidebarContent[index - 1].description;
        number.innerHTML = `${index} / ${sidebarContent.length}`;
      }
    });
  },
  { threshold: [1] }
);

document.querySelectorAll(".image").forEach((img) => {
  observer.observe(img);
});

const element = document.querySelector("#horizontal-container");

element.addEventListener('wheel', (event) => {
  event.preventDefault();
  const both = event.deltaY + event.deltaX
  element.scrollBy({
    left: both,
  });
});
