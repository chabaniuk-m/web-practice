
const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return {...state, cart: []}
  }
  if (action.type === "REMOVE") {
    return {...state, cart: state.cart.filter((item) => item.id !== action.payload)}
  }
  if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return {...item, amount: item.amount + 1}
      }
      return item
    })
    return {...state, cart: tempCart}
  }
  if (action.type === 'DECREASE') {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return {...item, amount: item.amount - 1}
      }
      return item
    }).filter((item) => item.amount !== 0)
    return {...state, cart: tempCart}
  }
  if (action.type === 'GET_TOTALS') {
    let {total, amount} = state.cart.reduce((total, item) => {
      const {price, amount} = item
      total.total += price * amount
      total.amount += amount
      return total
    }, {
      total:0,
      amount:0
    })
    total = Math.round(total * 100) / 100.0
    return {...state, total, amount}
  }
  if (action.type === 'LOADING') {
    return {...state, loading: true}
  }
  if (action.type === 'DISPLAY_ITEMS') {
    return {...state, cart: action.payload, loading: false}
  }
  return state
}

export default reducer