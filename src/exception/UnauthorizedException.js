import HTTPError from './HTTPError';
class UnauthorizedException extends HTTPError {
    constructor(message = 'Unauthorized access', status = 401) {
      super(message, status);
      this.name = 'UnauthorizedException';
    }
}
export default UnauthorizedException;
/*
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 401) {
        throw new UnauthorizedException();
      } else {
        throw new HTTPError(`HTTP error! status: ${response.status}`, response.status);
      }
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof UnauthorizedException) {
      console.error('UnauthorizedException:', error.message); // Handle 401 error
    } else if (error instanceof HTTPError) {
      console.error(`HTTPError occurred: ${error.status} - ${error.message}`); // Handle other HTTP errors
    } else {
      console.error('An unexpected error occurred:', error); // Handle other errors
    }
  }
}

// Usage
fetchData('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));
*/
  