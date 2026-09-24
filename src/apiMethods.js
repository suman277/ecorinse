import { authService } from "./service/authService";

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
      headers: await authService.getHeaders(),
    });
    if (response.status === 401) {
      authService.clearToken();
      localStorage.removeItem("tokenDetails");
      window.location.replace("/login");

      throw new Error("Session expired. Please log in again.");
    }
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail);
    }
    if (responseType === "blob") {
      const blob = await response.blob();
      const contentDisposition = response.headers.get("Content-Disposition");
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
      headers: await authService.getHeaders(),
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (response.status === 401) {
      authService.clearToken();
      localStorage.removeItem("tokenDetails");
      window.location.replace("/login");
      throw new Error("Session expired. Please log in again.");
    }
    if (!response.ok) {
      throw new Error(data?.detail);
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
      headers: await authService.getHeaders(),
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (response.status === 401) {
      authService.clearToken();
      localStorage.removeItem("tokenDetails");
      window.location.replace("/login");
      throw new Error("Session expired. Please log in again.");
    }
    if (!response.ok) {
      throw new Error(data?.detail);
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
      headers: await authService.getHeaders(),
    });
    const data = await response.json();
    if (response.status === 401) {
      authService.clearToken();
      localStorage.removeItem("tokenDetails");
      window.location.replace("/login");
      throw new Error("Session expired. Please log in again.");
    }
    if (!response.ok) {
      throw new Error(data?.detail);
    }
    return data;
  } catch (error) {
    console.error("An internal error occured", error.message);
    throw error;
  }
};
