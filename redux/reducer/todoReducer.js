import { Add_Todo, Remove_Todo, Toggle_Todo } from "../action"

const initialState = {
    list: []
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_Todo:
        const { data, id, completed } = action.payload
        return{
            ...state,
            list:[
                ...state.list, {data, id, completed}
            ]
        }

    case Remove_Todo:
        let newList = state.list.filter((newItem)=> newItem.id !== action.id)
        return{
            ...state,
            list: newList
        }   

    case Toggle_Todo:
        return {
            ...state,
            list: state.list.map(item =>
                item.id === action.id ? { ...item, completed: !item.completed } : item
            )
        }

        default: return state
    }
}
