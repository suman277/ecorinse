import { validateAddress } from "../redux/orders/OrderThunk";

export const getLocationDetails = (dispatch) => {
  console.log("Got clicked");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      dispatch(
        validateAddress({
          latitude,
          longitude,
        })
      );
    },

    (error) => {
      console.log("Geolocation error:", error);
      console.log("Error code:", error.code);
    },

    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    }
  );
};