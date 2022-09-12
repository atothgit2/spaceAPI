const request = require("supertest");
const app = require("../app");

describe("Space test suite", () => {
  // Custom matcher
  expect.extend({
    toBeActive(received) {
      const pass = received === true;
      if (pass) {
        return {
          message: () =>
            `expected ${received} to be an acceptable flight status`,
          pass: true,
        };
      } else {
        // 'else' captures false negative test results
        return {
          message: () =>
            `expected ${received} to be an acceptable flight status of flight - only true is acceptable`,
          pass: false,
        };
      }
    },
  });
  // #1
  it("tests /destinations endpoints", async () => {
    const response = await request(app).get("/space/destinations");
    expect(response.body).toEqual([
      "Mars",
      "Moon",
      "Earth",
      "Mercury",
      "Venus",
      "Jupiter",
    ]);
    expect(response.body).toHaveLength(6);
    expect(response.statusCode).toBe(200);
    // Testing a single element in the array
    expect(response.body).toEqual(expect.arrayContaining(["Earth"]));
  });

  // #2
  it("tests /space/flights/seats endpoint - starship", async () => {
    const response = await request(app).get("/space/flights/seats");
    expect(response.body.starship).toEqual(
      expect.arrayContaining([expect.any(Object)])
    );
    // Checking that the starship Object contains firstClass Object which then contains a set of objects
    expect(response.body.starship).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ firstClass: expect.any(Object) }),
      ])
    );

    expect(response.body.starship).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ businessClass: expect.any(Object) }),
      ])
    );

    // Checking that under the bussinessClass Object we have the array drinks served
    expect(response.body.starship).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          businessClass: expect.objectContaining({
            drinksServed: expect.any(Array),
          }),
        }),
      ])
    );

    // Checking that under the firstClass: Object we have the option ludacris in the seatHover Object
    expect(response.body.starship).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          firstClass: expect.objectContaining({
            seatHover: expect.objectContaining({
              cryoMode: expect.arrayContaining(["ludacris"]),
            }),
          }),
        }),
      ])
    );

    // Checking that under the firstClass: Object we have the option plaid in the seatHover Object
    expect(response.body.starship).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          firstClass: expect.objectContaining({
            seatHover: expect.objectContaining({
              staticMode: expect.arrayContaining(["plaid"]),
            }),
          }),
        }),
      ])
    );
  });

  // #3
  it("tests /space/flights endpoint - positive test", async () => {
    const response = await request(app).get("/space/flights");
    expect(response.body[0].active).toBeActive();
  });

  it.skip("tests /space/flights endpoint - false negative", async () => {
    const response = await request(app).get("/space/flights");
    expect(response.body[0].active).not.toBeActive();
  });

  it.skip("tests /space/flights endpoint - failing test", async () => {
    const response = await request(app).get("/space/flights");
    expect(response.body[1].active).toBeActive();
  });
});
