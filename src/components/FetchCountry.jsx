import fs from "fs/promises";

// This function only deals with fetching country data
async function fetchCountryData() {
  try {
    const response = await fetch("https://geolocation-db.com/json/");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null; // Return null or appropriate error handling
  }
}

// This function logs any string data to a file
async function logData(logEntry) {
  try {
    await fs.appendFile("data.log", logEntry);
    console.log("Data logged successfully");
  } catch (err) {
    console.error("Error logging data:", err);
  }
}

export default async function FetchCountry() {
  const data = await fetchCountryData();

  const logEntry = `${new Date().toUTCString()} - ${JSON.stringify(data)}\n`;
  await logData(logEntry);
  // Assuming this is meant to be used in a React component or similar, return data instead of JSX.

  return null;
}
