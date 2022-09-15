import { IDrinking, ISign, ISocialStatus } from './index';

export interface IOptions {
    socialStatus: ISocialStatus[]
    signs: ISign[]
    drinking: IDrinking[]
}