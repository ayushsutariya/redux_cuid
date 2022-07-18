const isLogged = (state = false, action) => {
    switch (action.type) {
      case "islogged":
        return !state;
      default:
        return state;
    }
  };
  
  export default isLogged;
  