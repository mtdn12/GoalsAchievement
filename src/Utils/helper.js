export const showTitle = str => {
  switch (str) {
    case 'new':
      return 'New Book List'
    case 'reading':
      return 'Reading Book List'
    case 'holding':
      return 'Holding Book List'
    case 'finish':
      return 'Finish Book List'
    default:
      return ''
  }
}
