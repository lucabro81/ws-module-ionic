import {BtnAlertStructureVO} from "./BtnAlertStructureVO";

export interface DefaultAlertStructureVO {
    title: string,
    subTitle:string,
    buttons:Array<BtnAlertStructureVO>
}