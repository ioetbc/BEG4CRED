export const mapGridPosition = (grid) => {
  let position = { x: 0, y: 0 };
  switch (grid) {
    case grid === 1:
      position.x = -window.innerWidth + images[i].offsetX;
      position.y = -window.innerHeight + images[i].offsetY;
      break;
    case grid === 2:
      position.x = images[i].offsetX;
      position.y = -window.innerHeight + images[i].offsetY;
      break;
    case grid === 3:
      position.x = window.innerWidth + images[i].offsetX;
      position.y = -window.innerHeight + images[i].offsetY;
      break;
    case grid === 4:
      position.x = -window.innerWidth + images[i].offsetX;
      position.y = images[i].offsetY;
      break;
    case grid === 5:
      position.x = images[i].offsetX;
      position.y = images[i].offsetY;
      break;
    case grid === 6:
      position.x = window.innerWidth + images[i].offsetX;
      position.y = images[i].offsetY;
      break;
    case grid === 7:
      position.x = -window.innerWidth + images[i].offsetX;
      position.y = window.innerHeight + images[i].offsetY;
      break;
    case grid === 8:
      position.x = images[i].offsetX;
      position.y = window.innerHeight + images[i].offsetY;
      break;
    case grid === 9:
      position.x = window.innerWidth + images[i].offsetX;
      position.y = window.innerHeight + images[i].offsetY;
      break;
  }
  return position;
};
