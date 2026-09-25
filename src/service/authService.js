const baseUrl = import.meta.env.VITE_BASE_URL;

class AuthService {
  constructor() {
    this.scheme = "";
    this.access_token = "";
    this.id_token = "";
    this.refresh_token = "";
    this.created_at = 0;
    this.expires_at = 0;
  }
  setToken(
    scheme,
    access_token,
    id_token,
    refresh_token,
    created_at,
    expires_at,
  ) {
    this.scheme = scheme;
    this.access_token = access_token;
    this.id_token = id_token;
    this.refresh_token = refresh_token;
    this.created_at = created_at;
    this.expires_at = expires_at;
  }
  clearToken() {
    this.setToken(null, null, null, null, null, null);
  }
  async getHeaders() {
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("ngrok-skip-browser-warning", "true");
    const token = await this.getAccessToken();
    if (token) {
      headers.set("Authorization", `${this.scheme || "Bearer"} ${token}`);
    }
    return headers;
  }
  async getAccessToken() {
    const now = Math.floor(Date.now() / 1000);
    const expiresAt = Math.floor(new Date(this.expires_at).getTime() / 1000);
    console.log(now);
    console.log(expiresAt);
    if (this.access_token) {
      if (expiresAt <= now + 30) {
        const response = await fetch(`${baseUrl}auth/token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_token: this.id_token,
            refresh_token: this.refresh_token,
          }),
        });
        if (response.ok) {
          const tokenDetails = await response.json();
          this.setToken(
            tokenDetails.scheme,
            tokenDetails.access_token,
            tokenDetails.id_token,
            tokenDetails.refresh_token,
            tokenDetails.created_at,
            tokenDetails.expires_at,
          );
          localStorage.setItem("tokenDetails", JSON.stringify(tokenDetails));
        } else {
          localStorage.removeItem("tokenDetails");
          window.location.replace("/login");
        }
        return this.access_token;
      } else {
        return this.access_token;
      }
    }
  }
}

export const authService = new AuthService();
