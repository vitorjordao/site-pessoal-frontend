import { createStore, Store } from 'redux';
import { TitleState } from './ducks/title/types';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
    title: TitleState;
}

const store: Store<ApplicationState>
    = createStore(rootReducer);

export default store;