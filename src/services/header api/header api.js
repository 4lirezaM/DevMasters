const BASE_URL = 'http://localhost:4000/v1';

async function fetchTopbarLinks() {
  const response = await fetch(`${BASE_URL}/menus/topbar`);
  if (!response.ok) {
    throw new Error(
      `Network response was not ok in top bar fetch (status ${response.status})`,
    );
  }
  const data = await response.json();
  return data;
}

async function fetchMenuLinks() {
  const response = await fetch(`${BASE_URL}/menus`);
  if (!response.ok) {
    throw new Error(
      `Network response was not ok in menu fetch (status ${response.status})`,
    );
  }
  const data = await response.json();
  return data;
}

export { fetchTopbarLinks, fetchMenuLinks };
