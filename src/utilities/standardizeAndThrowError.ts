const standardizeErrorMessage = (err: any): string => {
  let message
  if (err instanceof Error) {
    message = err.message
    if (message === 'Failed to fetch') {
      return 'API calls per minute exceeded - please wait and try again later.'
    }
  } else {
    message = 'Something went wrong, please refresh the page and try again.'
  }
  return message
}

export default standardizeErrorMessage
