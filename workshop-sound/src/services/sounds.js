export const playSound = (path) => {
  const sound = new Audio();
  sound.src = path;
  sound.play();
};
export const pauseSound = (a) => a;
