import { EntityStateType } from "./entity-state-type";

export interface IBaseModel {
    entityState: EntityStateType;
    typeString?: string;
    [x: string]: any;
}

export interface EntityType extends IBaseModel {
}