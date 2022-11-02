import { Request, Response } from "express";
import {
  IFunctionController,
  IReq,
} from "./interface/controller.adapter.interfaces";

class HttpAdapter {
  execute(controllerMethod: IFunctionController): any {
    return async function (req: Request, res: Response): Promise<Response> {
      const httpRequest: IReq = {
        body: req.body,
        params: req.params,
      };

      try {
        const result = await controllerMethod(httpRequest);

        return res.status(result?.status || 200).json(result?.json);
      } catch (error) {
        return res.status(500).json("internal error, contact an administrator");
      }
    };
  }
}

export default new HttpAdapter().execute;
