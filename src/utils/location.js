export async function getLocation() {
    try {
      const response = await fetch("https://ip-api.com/json");
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      const data = await response.json();
      return data.city ? `${data.city}, ${data.country}` : "Localisation indisponible";
    } catch (error) {
      console.error("Cotonou,Benin:", error);
      return "Cotonou, Benin";
    }
  }
  