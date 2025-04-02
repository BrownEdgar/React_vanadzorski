export const initialState = [];


export const actionTypes = {
  SORT: "SORT",
  PUSH: "PUSH",
  CLEAR: "CLEAR",
  FILTER: "FILTER",
  REMOVE_DUBLICATES: "REMOVE_DUBLICATES",
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SORT: return state.toSorted((a, b) => a - b)
    case actionTypes.PUSH: return pushInArray(state, action.payload)
    case actionTypes.REMOVE_DUBLICATES: return removeDuplicates(state)
    case actionTypes.FILTER: return filteredArray(state, action.payload.callback)
    case actionTypes.CLEAR: return []

    default: return state

  }
}

const removeDuplicates = (state) => {
  return Array.from(new Set(state))
}

const pushInArray = (state, newElements) => {
  return Array.from(new Set([...state, ...newElements]))
}



const filteredArray = (state, callback) => {
  return state.filter(callback)
}
