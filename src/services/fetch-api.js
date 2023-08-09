export async function fetchData(url) {
  return await fetch(url, {
    headers: {
      accept: 'application/json',
      Authorization: 'd9e80b20e643122ebd230a9efed67c63',
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
