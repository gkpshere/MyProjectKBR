import * as ActionTypes from '../constants/ActionTypes'

let initialState = {

}

export const ApplicationReducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.SAVE_CONTACT:
    console.log('reducer',JSON.stringify(action))
      return Object.assign({}, state, {
        data: action.data
      
      })


    default:
      return state
  }
}

