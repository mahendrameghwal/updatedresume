
const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SKIN_CODE':
      return { skin_code: action.payload }

    case 'SET_INPUT':
      return {...state, input_fields: [{...action.payload }]}

    case 'SET_INPUT_DATA':
      return {...state, input_data:{...state.input_data,...action.payload}} 
  
    default:
        break;
  }
}

export default Reducer