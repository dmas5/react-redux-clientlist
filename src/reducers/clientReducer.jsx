const clientReducer = (state = [], action) => {
    if (action.type === 'ADD_CLIENT') {
  
      return state.concat(action.payload)
    }
    else if (action.type === 'REMOVE_CLIENT') {
        return state.filter(c => c.id !== action.payload.id)
    }
    else if (action.type === 'SAVE_CLIENT') {
      return state.map(c => c.id !== action.payload.id ? c : action.payload)
    }
  
    return state
  }

export const addClient = (payload) => {
    return {type:'ADD_CLIENT', payload}
}
export const removeClient = (payload) => {
    return {type:'REMOVE_CLIENT',payload}
}
export const saveClient = (payload) => {
  return {type:'SAVE_CLIENT', payload}
}

  export default clientReducer;