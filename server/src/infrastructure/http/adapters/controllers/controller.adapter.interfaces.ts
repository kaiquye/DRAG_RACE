export interface IRes {
  status: number;
  json: object | string | null;
}

export interface IReq {
  body: object | undefined;
  params: object | undefined;
}

export type IFunctionController = (data: IReq) => Promise<IRes>;
