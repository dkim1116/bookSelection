export function selectBook(book) {
  // SelectBook is an ActionCreator, it needs to return an action,
  // Which is an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
