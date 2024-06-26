"use server";

export async function getAnagrams(letters) {
  const url = `http://www.anagramica.com/all/${letters}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.all;
  } catch (error) {
    console.log(`Error:${error}`);
  }
}
