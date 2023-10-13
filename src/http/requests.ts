export const createLog = async (credits: number, type: string) => {
  const data = {
    amount: credits,
    type,
    startLng: 0,
    startLat: 0,
    endLng: 0,
    endLat: 0,
  };

  const response = await fetch(
    "https://carbon-api-production.up.railway.app/credit/log",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
};
