export function selectBook(book) {
  // selectBook is an action creator, it need to return an action
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
