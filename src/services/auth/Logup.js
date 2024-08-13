const BASE_URL = "http://localhost:4000/v1";

export async function fetchLogUp(reqObject) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqObject),
  });
  if (!response.ok) {
    const error = new Error(
      `there is an error in logup fetch (status ${response.status})`,
    );
    error.status = response.status;
    throw error;
  }
  const data = await response.json();
  return data;
}
