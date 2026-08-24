import React from "react";
import { useEffect } from "react";
import { MapPin } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Order.module.css";
import { getLocationDetails } from "../../utils/mapUtils";

const Address = ({ details, handleUserDetails, setuserDetails }) => {
  const dispatch = useDispatch();
  const { response, isLoading, error } = useSelector(
    (state) => state.orders.addressDetails,
  );
  console.log("user_details", details);
  
  useEffect(() => {
    if (response) {
      setuserDetails((prev) => ({
        ...prev,
        longitude: response.longitude,
        latitude: response.latitude,
        address_details: response.address_details,
      }));
    }
  }, [response]);

  return (
    <div className={style.addressMainContainer}>
      <div>
        {isLoading ? (
          <div
            className={`${style.addressDiv} ${isLoading ? style.disbaleDiv : ""}`}
          >
            <div className={style.mapIcon}>
              <MapPin />
            </div>
            <span>Getting Current Location ...</span>
          </div>
        ) : error.trim() !== "" ? (
          <div className={style.errorAddressDetailDiv}>
            <div className={style.mapIcon}>
              <MapPin />
            </div>
            <div className={style.errorText}>{error}</div>
          </div>
        ) : response ? (
          <div className={style.successAddressContainer}>
            <div>
              <MapPin />
            </div>
            <div>
              <div>
                <h6>DETECTED LOCATION</h6>
                <span className={style.locationDetails}>
                  {response.address_details}
                </span>
              </div>
              <span>
                <a
                  className={style.mapLink}
                  target="_blank"
                  href={`https://www.google.com/maps?q=${response.latitude},${response.longitude}`}
                >
                  View Location On Google Maps
                </a>
              </span>
            </div>
          </div>
        ) : (
          <div
            className={style.addressDiv}
            onClick={() => {
              getLocationDetails(dispatch);
            }}
          >
            <div className={style.mapIcon}>
              <MapPin />
            </div>
            <span>Get Current Location</span>
          </div>
        )}
        {/* <div
          className={`${style.addressDiv} ${isLoading ? style.disbaleDiv : ""}`}
          onClick={() => {
            getLocationDetails(dispatch);
          }}
        >
          <div className={style.mapIcon}>
            <MapPin />
          </div>
          <span>
            {isLoading
              ? "Getting Current Location ..."
              : "Use Current Location"}
          </span>
        </div> */}
      </div>
      <div className={style.inputFormAddressContainer}>
        <div className={style.inputFrom}>
          <label htmlFor="name">
            <h5>Full Name</h5>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Hixxxx"
            name="name"
            value={details?.name}
            className={style.inputDetails}
            onChange={(e) => {
              handleUserDetails(e);
            }}
          ></input>
        </div>
        <div className={style.inputFrom}>
          <label htmlFor="phone">
            <h5>Phone</h5>
          </label>
          <input
            id="phone"
            type="text"
            placeholder="98xxxxxxxx"
            name="phone"
            value={details?.phone}
            className={style.inputDetails}
            onChange={(e) => {
              handleUserDetails(e);
            }}
          ></input>
        </div>
        {details?.address_details?.trim() === "" ? (
          <div className={style.inputFrom}>
            <label htmlFor="locality">
              <h5>Locality</h5>
            </label>
            <input
              type="text"
              id="locality"
              placeholder="Locality"
              name="address_details"
              value={details?.address_details}
              className={style.inputDetails}
              onChange={(e) => {
                handleUserDetails(e);
              }}
            ></input>
          </div>
        ) : (
          ""
        )}
        <div className={style.inputFrom}>
          <label htmlFor="landmakr">
            <h5>FLAT / HOUSE NO.</h5>
          </label>
          <input
            type="text"
            id="landmakr"
            placeholder="B-07, Prestige Park ..."
            name="landmark"
            value={details?.landmark}
            className={style.inputDetails}
            onChange={(e) => {
              handleUserDetails(e);
            }}
          ></input>
        </div>
        <div className={style.inputFrom}>
          <label htmlFor="instruction">
            <h5>SPECIAL INSTRUCTIONS(OPTIONAL)</h5>
          </label>
          <input
            type="text"
            id="instruction"
            placeholder="Gate Code 0xxx"
            name="notes"
            value={details?.notes}
            className={style.inputDetails}
            onChange={(e) => {
              handleUserDetails(e);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Address;
