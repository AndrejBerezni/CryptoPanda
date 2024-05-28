const calculateListPosition = (page: number, index: number) =>
  (page === 0 ? 0 : page - 1) * 10 + index + 1

export default calculateListPosition
