const API_URL = "http://localhost:3005/api/bares";

export async function getAllBares() {
    try {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();
      return data.bares;
    } catch (error) {
      console.error(error);
    }
  }
  