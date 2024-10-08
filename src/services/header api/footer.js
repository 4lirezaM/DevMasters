const BASE_URL = 'http://localhost:4000/v1';

export async function fetchNewLetter(email) {
  const response = await fetch(`${BASE_URL}/newsletters`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  if (!response.ok) {
    console.log('erorx');
    throw new Error(
      `Network response was not ok in Newsletters fetch (status ${response.status})`,
    );
  }

  const data = await response.json();
  return data;
}
