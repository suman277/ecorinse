import { validateAddress } from "../redux/orders/OrderThunk";

// export const getLocationDetails = (dispatch) => {
//   if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       console.log("Getting address details");
//       dispatch(
//         validateAddress({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         }),
//       );
//     });
//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }
// };


export const getLocationDetails = (dispatch) => {
  if (!("geolocation" in navigator)) {
    alert("Geolocation is not supported.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Location received");

      dispatch(
        validateAddress({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      );
    },

    (error) => {
      console.log("Geolocation error:", error);
      console.log("Error code:", error.code);
      console.log("Error message:", error.message);

      alert("Unable to get your current location.");
    }
  );
};