export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    quote
  }
}

export const removeQuote = Id => {
  return {
    type: 'REMOVE_QUOTE',
    quote
  }
}
