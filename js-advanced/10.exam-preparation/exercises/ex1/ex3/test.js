const { expect } = require("chai");
const cinema = require("./cinema");

describe("Tests for cinema.js", () => {
  describe("showMovies", () => {
    it("array includes available movies", () => {
      expect(cinema.showMovies(["King Kong","Joker"])).to.be.equal('King Kong, Joker');
    });
    it("array includes no movies", () => {
      expect(cinema.showMovies([])).to.be.equal(
        "There are currently no movies to show."
      );
    });
  });
  describe("ticketPrice", () => {
    it("correct schedule", () => {
      expect(cinema.ticketPrice("Premiere")).to.equal(12.00);
      expect(cinema.ticketPrice("Normal")).to.equal(7.50);
      expect(cinema.ticketPrice("Discount")).to.equal(5.50);
    });
    it("not correct schedule", () => {
      expect(() => {
        cinema.ticketPrice("ss");
      }).to.Throw();
      expect(() => {
        cinema.ticketPrice(1);
      }).to.Throw();
      expect(() => {
        cinema.ticketPrice([]);
      }).to.Throw();
      expect(() => {
        cinema.ticketPrice({});
      }).to.Throw();
    });
  });
  describe("swapSeatsInHall", () => {
    it("successful change of seat numbers", () => {
      expect(cinema.swapSeatsInHall(1, 20)).to.be.equal(
        "Successful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(5, 18)).to.be.equal(
        "Successful change of seats in the hall."
      );
    });
    it("UNsuccessful change of seat numbers", () => {
      expect(cinema.swapSeatsInHall(0, 20)).to.be.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(5, 21)).to.be.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall("1", 1)).to.be.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(5, '1')).to.be.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall([], 1)).to.be.equal(
        "Unsuccessful change of seats in the hall."
      );
    });
  });
});
