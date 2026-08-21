
import { validateAddress } from "../redux/orders/OrderThunk";

export const getLocationDetails = (dispatch) => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Getting address details");
      dispatch(
        validateAddress({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
      );
    });
  }
};
