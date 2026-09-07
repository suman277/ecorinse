export const getAPI = async (url, query = {}, responseType = "json") => {
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
    const response = await fetch(finalUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail);
    }
    if (responseType === "blob") {
      const blob = await response.blob();
      console.log("File Data response", response);

      const contentDisposition = response.headers.get("Content-Disposition");
      console.log("content_disposition", contentDisposition);

      let fileName = "invoice.pdf";

      if (contentDisposition) {
        const match = contentDisposition.match(/filename="?([^"]+)"?/);

        if (match) {
          fileName = match[1];
        }
      }

      return {
        blob,
        fileName,
      };
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
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
    const data = await response.json();
    if (!response.ok) {
      throw data;
    }
    return data;
  } catch (error) {
    console.error("An internal error occurred:", error.message);
    throw error;
  }
};

export const postAPI = async (url, payload) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (!response.ok) {
      throw data;
    }

    return data;
  } catch (error) {
    console.error("An internal error occurred:", error.message);
    throw error;
  }
};

export const deleteAPI = async (url) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(response);
    if (!response.ok) {
      throw data;
    }
    return data;
  } catch (error) {
    console.error("An internal error occured", error.message);
    throw error;
  }
};
