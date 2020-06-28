import { Reducer, combineReducers } from 'redux';
import toolsReducer, {
  State as ToolsState,
} from 'src/features/weather/reducers/toolsReducer';

export interface CombinedState {
  tools: ToolsState,
};

const combinedReducer: Reducer<CombinedState> = combineReducers({
  tools: toolsReducer,
});

export default combinedReducer;
