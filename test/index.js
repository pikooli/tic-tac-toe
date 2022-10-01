import { solver } from "../solver1.js";
import grids from "../grids.js";
import assert from "assert";

it("should solve the colone configuration 1", () => {
  assert.equal(solver(grids.gridCol1, grids.SIZE), "x");
});

it("should solve the colone configuration 2", () => {
  assert.equal(solver(grids.gridCol2, grids.SIZE), "x");
});

it("should solve the colone configuration 3", () => {
  assert.equal(solver(grids.gridCol3, grids.SIZE), "x");
});

it("should solve the row configuration 1", () => {
  assert.equal(solver(grids.gridRow1, grids.SIZE), "x");
});

it("should solve the row configuration 2", () => {
  assert.equal(solver(grids.gridRow2, grids.SIZE), "x");
});

it("should solve the row configuration 3", () => {
  assert.equal(solver(grids.gridRow3, grids.SIZE), "x");
});

it("should solve the gridDiagLeft configuration", () => {
  assert.equal(solver(grids.gridDiagLeft, grids.SIZE), "x");
});

it("should solve the gridDiagRight configuration", () => {
  assert.equal(solver(grids.gridDiagRight, grids.SIZE), "x");
});
