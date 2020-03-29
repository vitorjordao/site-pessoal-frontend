import { action } from 'typesafe-actions';
import { TitleState } from './types'

export const selectTitle = (data: TitleState) => 
    action("@title", data);
