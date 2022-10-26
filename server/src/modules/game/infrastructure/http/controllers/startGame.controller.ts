import ControllerStructure from "./structure/controller.structure";
import {
  IReq,
  IRes,
} from "../../adapter/interface/controller.adapter.interfaces";

class StartGameController extends ControllerStructure {
  execute(request: IReq): Promise<IRes> {
    console.log(request);
    return undefined;
  }
}

export default new StartGameController();
