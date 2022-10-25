import { Request, Response } from "express";
import { IFunctionController, IReq } from "./controller.adapter.interfaces";

class HttpAdapter {
  execute(controllerMethod: IFunctionController): any {
    return async function (req: Request, res: Response): Promise<Response> {
      const httpRequest: IReq = {
        body: req.body,
        params: req.params,
      };

      const response = await controllerMethod(httpRequest);

      if (!response?.status || !response?.json) {
        const error = new Error("invalid controller response");
        error.name = "adapter-error";
        throw error;
      }

      return res.status(response.status).json(response.json);
    };
  }
}

export default new HttpAdapter().execute;
