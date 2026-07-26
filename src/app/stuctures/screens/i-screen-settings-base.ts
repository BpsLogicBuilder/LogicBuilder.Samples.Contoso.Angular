import { ViewTypeEnum } from "./i-view-type";
import { ICommandButton } from "../i-command-button";
import { IValidationResult } from "../i-validation-result";

export interface IScreenSettingsBase {
    viewType: ViewTypeEnum;
    commandButtons: ICommandButton[];
    validationResults: IValidationResult[];
    [x: string]: any;
}
