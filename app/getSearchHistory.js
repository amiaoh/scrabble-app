"use server";

const ACCESS_TOKEN_AUTH = process.env.PANTRY_API_KEY;
export async function getSearchHistory() {
  const url = `https://getpantry.cloud/apiv1/pantry/${ACCESS_TOKEN_AUTH}/basket/newBasket93`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.searchHistory;
  } catch (error) {
    console.log(`Error:${error}`);
  }
}
