export const createLog = async (credits: number, type: string) => {
  const data = {
    amount: credits,
    type,
    startLng: 0,
    startLat: 0,
    endLng: 0,
    endLat: 0,
  };

  await fetch("https://carbon-api-production.up.railway.app/credit/log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const getLogs = async () => {
  const response = await fetch(
    "https://carbon-api-production.up.railway.app/credit/list",
    {
      method: "GET",
    },
  );

  return await response.json();
};

export const getFeed = async () => {
  const response = await fetch(
    "https://carbon-api-production.up.railway.app/feed",
    {
      method: "GET",
    },
  );

  console.log(JSON.stringify(await response.json()));
};

export const follow = async (username: string) => {
  await fetch(
    `https://carbon-api-production.up.railway.app/follow/${username}`,
  );
};
