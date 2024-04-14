"use server";

const ACCESS_TOKEN_AUTH = process.env.PANTRY_API_KEY;

export async function writeQueries(queries) {
  const url = `https://getpantry.cloud/apiv1/pantry/${ACCESS_TOKEN_AUTH}/basket/newBasket93`;
  console.log(JSON.stringify({ searchHistory: queries }));
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchHistory: queries }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.log(`Error:${error}`);
  }
}
