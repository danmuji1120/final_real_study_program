const path = require("node:path");
const fs = require("fs");

const user = {
  id: 5,
  firstName: "Maria",
  lastName: "Williams",
  age: 34,
  email: "m.williams@example.com",
  address: {
    streetAddress: "123 Main St",
    city: "Anytown",
    state: "US",
    postalCode: "12345",
  },
  phoneNumbers: [
    {
      type: "home",
      number: "555-555-5554",
    },
    {
      type: "work",
      number: "555-555-5555",
    },
  ],
};

class PathTest {
  writeJson() {
    const userJson = JSON.stringify(user);

    fs.writeFile(path.join(__dirname, "data.json"), userJson, (error) => {
      // throwing the error
      // in case of a writing problem
      if (error) {
        // logging the error
        console.error(error);

        throw error;
      }

      console.log("data.json written correctly");
    });
  }
}

module.exports = PathTest;
