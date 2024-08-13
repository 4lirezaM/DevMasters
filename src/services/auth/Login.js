const BASE_URL = "http://localhost:4000/v1";

export async function fetchLogIn(userName, password) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier: userName,
      password: password,
    }),
  });
  if (!response.ok) {
    const error = new Error(
      `there is an error in login fetch (status ${response.status})`,
    );
    error.status = response.status;
    throw error;
  }
  const data = await response.json();
  return data;
}

export async function fetchMe(userToken) {
  const res = await fetch(`${BASE_URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  if (!res.ok) throw new Error("there is an error in fetchMe api.");
  const data = await res.json();
  return data;
}
