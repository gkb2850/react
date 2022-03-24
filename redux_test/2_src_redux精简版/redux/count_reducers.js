/*
    1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
    2.reducer函数会接收到两个参数，分别为：之前的状态（previosState）,动作对象(action)
*/

let initState = 0
export default function countReducer(previosState = initState, action) {
    //从Action对象中获取：type,data
    const { type, data } = action
    switch(type) {
        case 'increment'://若是加
            return previosState + data
        case 'decrement'://若是减
            return previosState - data
        default:
            return previosState
    }
}