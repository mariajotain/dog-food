import { initialState } from "../../initState";
import { TOKEN_KEY } from "../../types/tokenType";

export const tokenReducer = (state = initialState.tokenUser, action) => {
    switch (action.type) {
    
        case TOKEN_KEY:
        if (state.length === 0){
            return action.payload;
        };
  
    
        default:
          return  state;
    } 
    };
    
  