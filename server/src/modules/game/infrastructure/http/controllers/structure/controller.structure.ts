import {
  IReq,
  IRes,
} from "../../adapter/interface/controller.adapter.interfaces";

export default abstract class ControllerStructure {
  abstract execute(request: IReq): Promise<IRes>;
}
