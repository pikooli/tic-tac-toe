const SIZE = 3;

// prettier-ignore
const gridDiagRight =
[
  "", "", "x",
  "", "x", "",
  "x", "", "",
];

// prettier-ignore
const gridDiagLeft =
[
  "x", "", "",
  "", "x", "",
  "", "", "x",
];

// prettier-ignore
const gridRow1 =
[
  "x", "x", "x",
  "", "", "",
  "", "", "",
];

// prettier-ignore
const gridRow2 =
[
  "", "", "",
  "x", "x", "x",
  "", "", "",
];

// prettier-ignore
const gridRow3 =
[
  "", "", "",
  "", "", "",
  "x", "x", "x",
];

// prettier-ignore
const gridCol1 =
[
  "x", "", "",
  "x", "", "",
  "x", "", "",
];

// prettier-ignore
const gridCol2 =
[
  "", "x", "",
  "", "x", "",
  "", "x", "",
];

// prettier-ignore
const gridCol3 =
[
  "", "", "x",
  "", "", "x",
  "", "", "x",
];

export default {
  SIZE,
  gridDiagRight,
  gridDiagLeft,
  gridRow1,
  gridRow2,
  gridRow3,
  gridCol1,
  gridCol2,
  gridCol3,
};
