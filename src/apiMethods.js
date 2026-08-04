export const getAPI = async (url, query = {}) => {
  try {
    const queryObj = {};
    for (const [key, value] of Object.entries(query)) {
      if (typeof value === "string") {
        if (value.trim() !== "") {
          queryObj[key] = value;
        }
      } else if (value !== undefined && value !== null) {
        queryObj[key] = value;
      }
    }
    const queryParam = new URLSearchParams(queryObj).toString();
    const finalUrl = queryParam ? `${url}?${queryParam}` : url;
    console.log("Inside get api");
    const response = await fetch(finalUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("An internal error occurred:", error.message);
    throw error;
  }
};

export const putAPI = async (url, payload) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("An internal error occurred:", error.message);
    throw error;
  }
};

export const postAPI = async (url, payload) => {
  console.log("Inside the postAPI", payload);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("An internal error occurred:", error.message);
    throw error;
  }
};
