import { ADD_PERSON } from '../constant'

let initState = [{id: '001', name: 'tom', age: 18}]

export default function personReducer(previosState = initState, action) {
    let { type, data } = action
    switch(type) {
        case ADD_PERSON:
            return [...previosState, data]
        default:
            return previosState
    }
}