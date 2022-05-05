require("dotenv").config();
let pubKey = "";
let priKey = "";

const {
  PUBLIC_KEY,
  PRIVATE_KEY,
} = process.env;
pubKey = PUBLIC_KEY;
priKey = PRIVATE_KEY;

module.exports = {
  pubKey: pubKey,
  priKey: priKey,
};
