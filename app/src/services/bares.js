const API_URL = "https://reserbar-api.herokuapp.com/api/bares";

export async function getAllBares() {
  try {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data.bares;
  } catch (error) {
    console.error(error);
  }
}

export async function getXBares(quantity) {
  const bares = await getAllBares();
  let baresByQuantity = [];

  for (let index = 0; index < quantity; index++) {
    baresByQuantity = [...baresByQuantity, bares[index]];
  }

  return baresByQuantity;
}
