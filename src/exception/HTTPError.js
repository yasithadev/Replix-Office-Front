class HTTPError extends Error {
    constructor(message, status) {
      super(message);
      this.name = 'HTTPError';
      this.status = status;
    }
}
export default HTTPError;
/*// Usage

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new HTTPError(`HTTP error! status: ${response.status}`, response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof HTTPError) {
      if (error.status === 401) {
        console.error('Unauthorized access - 401 error');
        // Handle 401 error
      } else {
        console.error(`HTTP error occurred: ${error.status}`);
        // Handle other HTTP errors
      }
    } else {
      console.error('An unexpected error occurred:', error);
      // Handle other errors
    }
  }
}


fetchData('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));
*/