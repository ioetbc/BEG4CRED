const sidebarContent = [
    {
      title: "Quaerat",
      description:
        "First NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto.",
        price: 0.1,
        sold: false,
        image: 'images/collections/faces/3.jpg'
    },
    {
      title: "cupiditate",
        description:
        "Second NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.",
        price: 0.3,
        sold: false,
        image: 'images/collections/faces/2.jpg'
    },
    {
      title: "Porro",
      description:
        "Third NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.",
        price: 0.1,
        sold: true,
        image: 'images/collections/faces/4.jpg'
    },
    {
      title: "nostrum",
      description:
        "Fourth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.",
        price: 0.2,
        sold: false,
        image: 'images/collections/faces/5.jpg'
    },
    {
      title: "architecto",
      description:
        "Fifth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum.",
        price: 0.5,
        sold: true,
        image: 'images/collections/faces/2.jpg'
    },
    {
      title: "delectus",
      description:
        "Sixth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto.",
        price: 0.1,
        sold: false,
        image: 'images/collections/faces/3.jpg'
    },
    {
      title: "nostrum",
      description:
        "Seventh NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse.",
        price: 0.2,
        sold: true,
        image: 'images/collections/faces/4.jpg'
    },
    
    {
      title: "praesentium",
      description:
        "Eighth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi.",
        price: 0.1,
        sold: false,
        image: 'images/collections/faces/5.jpg'
    },
    {
      title: "consectetur",
      description:
        "Ninth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum porro aliquam? Placeat modi quibusdam sit consequatur.",
        price: 0.5,
        sold: true,
        image: 'images/collections/faces/2.jpg'
    },
    {
      title: "laudantium",
      description:
        "Tenth NFT lorem ipsum dolor sit amet consectetur adipisicing elit. Porro praesentium neque esse? Quaerat, ex cupiditate architecto atque laudantium delectus nostrum.",
        price: 0.4,
        sold: false,
        image: 'images/collections/faces/3.jpg'
    },
];

const productPage = document.querySelector(".product-page");
const aboutPage = document.querySelector(".about-page");
const aboutMenu = document.querySelector(".about-menu");
const closeButtonProduct = document.querySelector(".close-button-product");
const closeButtonAbout = document.querySelector(".close-button-about");
const nftTitle = document.querySelector(".nft-title");
const nftPrice = document.querySelector(".nft-price");
const nftDescription = document.querySelector(".nft-description");
const nftImage = document.querySelector(".nft-image");

aboutMenu.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('clocked')
  page('/about')
})

page('/about', function(){
  aboutPage.style.bottom = 0
});

page('/', () => {
  productPage.style.bottom = '-100vh'
})

page('/details/:*', function(ctx){
    const title = ctx.params[0]

    const data = sidebarContent.filter((nft) => nft.title === title)[0]
    console.log('data', data)
    productPage.style.bottom = 0
    nftTitle.innerHTML = data.title
    nftPrice.innerHTML = `Price: ${data.price} ETH`
    nftDescription.innerHTML = data.description
    // nftImage.src = `../${data.image}`
});


closeButtonProduct.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicked')
    page(`/`)
})

closeButtonAbout.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicked')
    page(`/`)
})
  
page.start()