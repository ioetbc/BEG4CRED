import { one } from "./images/collections/faces/index.js";

const mapImageInitialPosition = (image, index, canvas) => {
  let positionX = 0;
  if (index === 0) {
    positionX = canvas.width - image.width / 2;
  } else {
    positionX = canvas.width - image.width / 2 + 600 * index * 2;
  }
  return positionX;
};

function NewCanvas() {
  const c = document.querySelector("canvas");
  var ctx = c.getContext("2d");

  c.ctx = ctx;
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  return c;
}

function ClearCvs(cvs) {
  cvs.ctx.fillRect(0, 0, cvs.width, cvs.height);
  cvs.ctx.fillStyle = "white";
}

const canvas = NewCanvas();

let User = { x: 0, imageInViewport: 0 };

const images = [...one];
let imagesOK = 0;
const imgs = [];
loadAllImages(start);

window.addEventListener(
  "wheel",
  (e) => {
    const isScrollingForward = e.wheelDeltaY < 0;
    if (-User.x <= canvas.width - 486 / 2) {
      User.imageInViewport = 0
    }

    if ((-User.x >= 4500 && -User.x <= 6000 && isScrollingForward)) return
    if ((-User.x <= 0 && -User.x >= -1000 && !isScrollingForward)) return
    User.x -= e.deltaY;
    ClearCvs(canvas);
    start();
  },
  false
);

function loadAllImages(callback) {
  for (var i = 0; i < images.length; i++) {
    var img = new Image();
    imgs.push(img);
    img.onload = function () {
      imagesOK++;
      if (imagesOK >= images.length) {
        callback();
      }
    };
    img.onerror = function () {
      alert("image load failed");
    };
    img.src = images[i].url;
  }
}

function start() {
  for (var i = 0; i < images.length; i++) {
    const { ctx } = canvas;
    const x = mapImageInitialPosition(images[i], i, canvas);

    ctx.drawImage(
      imgs[i],
      User.x + x,
      (canvas.height - images[i].height) / 2,
      images[i].width,
      images[i].height
    );
  }
}
