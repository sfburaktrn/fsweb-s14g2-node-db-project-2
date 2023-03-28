// ESNEK
const defaultCars = [
  {
    vin: "745",
    make: "Renault",
    model: "Megane",
    mileage: 12345,
  },
  {
    vin: "879",
    make: "Ford",
    model: "Focus",
    mileage: 12345,
  },
  {
    vin: "369",
    make: "Skoda",
    model: "SuperB",
    mileage: 12345,
  },
  {
    vin: "147",
    make: "Seat",
    model: "Leon",
    mileage: 12345,
  },
  {
    vin: "697",
    make: "Mercedes",
    model: "C250",
    mileage: 12345,
  },
  {
    vin: "746",
    make: "Opel",
    model: "Corsa",
    mileage: 12345,
  },
];
exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert(defaultCars);
};
