const scale = [
  { value: 500, height: 70 },
  { value: 1000, height: 120 },
  { value: 2000, height: 170 },
  { value: 5000, height: 220 },
  { value: 10000, height: 270 },
];

export const calculateBarHeight = (value: number) => {
  let barHeight: number = 0;

  if (value <= scale[0].value) {
    barHeight = (value * scale[0].height) / scale[0].value;
  }

  for (let i = 0; i < scale.length; i++) {
    if (value > scale[i].value) {
      barHeight =
        scale[i].height +
        ((value - scale[i].value) * (scale[i + 1].height - scale[i].height)) /
          (scale[i + 1].value - scale[i].value);
    }
  }

  return barHeight;
};
