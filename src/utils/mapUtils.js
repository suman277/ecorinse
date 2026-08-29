import { validateAddress } from "../redux/orders/OrderThunk";

export const getLocationDetails = (dispatch) => {
  console.log("Got clicked");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Location received");

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log("Latitude:", latitude);
      console.log("Longitude:", longitude);

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
      console.log("Error message:", error.message);
    },

    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    }
  );
};