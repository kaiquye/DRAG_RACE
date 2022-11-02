import * as cors from "cors";

class CorsConfig {
  Specs() {
    return cors({
      origin: "*",
      methods: "GET,POST, PATCH, DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 200,
    });
  }
}

export default new CorsConfig().Specs();
