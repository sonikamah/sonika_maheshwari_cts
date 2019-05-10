const counterReducer = (state = 0, action) => {
    var type = action.type;
    var newState;
    switch(type) {
      case "INCREMENT": {
        newState = ++state;
        break;
      } 
      case "DECREMENT": {
        newState = --state;
        break;
      }
      case "RESET": {
        newState = 0;
        break;
      }
    }
    return newState;
  };

  export default counterReducer;