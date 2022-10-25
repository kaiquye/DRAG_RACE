import {
  IReq,
  IRes,
} from "../adapters/controllers/controller.adapter.interfaces";

class Controller {
  async execute(data: IReq): Promise<IRes> {
    console.log(data);

    return undefined;
  }
}

export default new Controller();
