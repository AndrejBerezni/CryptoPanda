const standardizeAndThrowError = (err: any) => {
  let message
  if (err instanceof Error) {
    message = err.message
  } else {
    message = 'Something went wrong, please refresh the page and try again.'
  }
  throw new Error(message)
}

export default standardizeAndThrowError
