const scale = [
  { value: 500, height: 70 },
  { value: 1000, height: 120 },
  { value: 2000, height: 170 },
  { value: 5000, height: 220 },
  { value: 10000, height: 270 },
];

export const calculateBarHeight = (value: number) => {
  let barHeight: number = 0;

  for (let i = 0; i < scale.length; i++) {
    if (value > scale[i].value) {
      continue;
    } else if (value <= scale[i].value) {
      barHeight = (value * scale[i].height) / scale[i].value;
    }
    break;
  }

  return barHeight;
};
