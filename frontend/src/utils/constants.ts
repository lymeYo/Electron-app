import { userModeType } from "_/redux/reducers/mainPage/mainPageCreators";

export const CREATEQUERYTYPE: userModeType = "create"
export const FINDQUERYTYPE: userModeType = "find"

export interface actionInterface {
  type: string
  [key:string]: any,
}

export type descriptionItemIndicatorType = "need" | "optionally" | "permissive" | "none"
export enum descriptionItemIndicatorEnum {
  NEED = "need",
  OPTIONALLY = "optionally",
  PERMISSIVE = "permissive",
  NONE = "none"
}

export enum InputInfoMessages {
  incorrectLengthData = "Некорректная длина данных"
}