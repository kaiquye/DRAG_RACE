import express from "express";
const log = console.log;

const application = function () {
  try {
    const PORT = 3002;
    const app = express();

    app.use(express.json());

    app.listen(PORT, () => log("Bomb Has Been Planted..."));
  } catch (e) {
    console.log(e);
  }
};

application();
