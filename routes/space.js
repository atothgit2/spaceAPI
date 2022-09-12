var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send("Checkout /space/flights, /space/destinations or /space/flight/seats for more information on this route");
});

router.get('/destinations', function (req, res, next) {
  res.send(["Mars", "Moon", "Earth", "Mercury", "Venus", "Jupiter"
  ]);
});

router.get('/flights', function (req, res, next) {
  res.send([
    {
      "id": "dragon1",
      "name": "Dragon 1",
      "type": "capsule",
      "active": true,
      "crew_capacity": 0,
      "sidewall_angle_deg": 15,
      "orbit_duration_yr": 2,
      "dry_mass_kg": 4200,
      "dry_mass_lb": 9300,
      "first_flight": "2010-12-8",
      "heat_shield": {
        "material": "PICA-X",
        "size_meters": 3.6,
        "temp_degrees": 3000,
        "dev_partner": "NASA"
      },
    },
    {
      "id": "dragon2",
      "name": "Dragon 2",
      "type": "capsule",
      "active": false,
      "crew_capacity": 7,
      "sidewall_angle_deg": 15,
      "orbit_duration_yr": 2,
      "dry_mass_kg": 6350,
      "dry_mass_lb": 14000,
      "first_flight": null,
      "heat_shield": {
        "material": "PICA-X",
        "size_meters": 3.6,
        "temp_degrees": 3000,
        "dev_partner": "NASA"
      },
    },
    {
      "id": "blue-origin",
      "name": "Blue Origin",
      "type": "capsule",
      "active": false,
      "crew_capacity": 3,
      "sidewall_angle_deg": 13,
      "orbit_duration_yr": 2,
      "dry_mass_kg": 1250,
      "dry_mass_lb": 5000,
      "first_flight": null,
      "heat_shield": {
        "material": "PICA-Z",
        "size_meters": 3.6,
        "temp_degrees": 3000,
        "dev_partner": "NASA"
      },
    },
    {
      "id": "dynetics",
      "name": "Dynetics",
      "type": "capsule",
      "active": false,
      "crew_capacity": 4,
      "sidewall_angle_deg": 10,
      "orbit_duration_yr": 2,
      "dry_mass_kg": 2200,
      "dry_mass_lb": 5000,
      "first_flight": null,
      "heat_shield": {
        "material": "PICA-Y",
        "size_meters": 3.6,
        "temp_degrees": 3000,
        "dev_partner": "NASA"
      },
    }
  ]);
});

router.get('/flights/seats', function (req, res, next) {
  res.send({
    starship: [
      {
        firstClass: {
          heatedSeats: true,
          chairOptions: ["leather", "wollen"],
          vaultAccess: true,
          drinksServed: ["tea", "coffee", 'space-special', "wine"],
          windowAccess: true,
          privateCabin: "2",
          VRAccess: "unlimited",
          cost: "$20000",
          seatHover: { cryoMode: ['extreme', 'ludacris', 'plaid'], staticMode: ['ludacris', 'plaid'] }
        },
        businessClass: {
          heatedSeats: true,
          chairOptions: ["plastic", "wollen"],
          vaultAccess: false,
          drinksServed: ["tea", "coffee", 'space-special', "wine"],
          windowAccess: true,
          privateCabin: "1",
          VRAccess: "optional",
          cost: "$15000",
          seatHover: { cryoMode: ['extreme', 'ludacris', 'plaid'] }
        }
      }
    ],
    blueOrigin: [
      {
        firstClass: {
          heatedSeats: true,
          chairOptions: ["leather", "wollen"],
          vaultAccess: true,
          drinksServed: ["tea", "coffee", 'space-special', "wine"],
          windowAccess: true,
          privateCabin: "2",
          VRAccess: "unlimited",
          cost: "$30000"
        },
        businessClass: {
          heatedSeats: true,
          chairOptions: ["plastic", "wollen"],
          vaultAccess: false,
          drinksServed: ["tea", "coffee", 'space-special', "wine"],
          windowAccess: true,
          privateCabin: "1",
          VRAccess: "optional",
          cost: "$20000"
        }
      }
    ]
  });
});


module.exports = router;
