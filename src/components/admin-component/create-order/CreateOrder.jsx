import React from "react";
import { useState, useEffect } from "react";
import style from "./CreateOrder.module.css";
import BackgroundImage from "../../../assets/images/background/BackgroundImage.jpeg";
import { createOrder } from "../../../redux/orders/OrderThunk.js";
import { useDispatch } from "react-redux";
import {
  User2,
  MapPinIcon,
  MessageCircleMore,
  PhoneCall,
  Mail,
  LocationEditIcon,
  LandmarkIcon,
  Calendar1Icon,
  Timer,
} from "lucide-react";

// const date = now.toISOString().split("T")[0];
// const hour = String(now.getHours()).padStart(2, "0");
// const minute = String(now.getMinutes()).padStart(2, "0");
// const second = String(now.getSeconds()).padStart(2, "0");

// const time = `${hour}:${minute}:${second}`;

// console.log(time);

const CreateOrder = () => {
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const today = new Date().toISOString().split("T")[0];
  const maxDay = new Date();
  maxDay.setDate(maxDay.getDate() + 7);
  const maxDate = maxDay.toISOString().split("T")[0];
  const openingHour = 9;
  const closingHour = 18;
  const currentHour = new Date().getHours();
  const pickupSlots = [];
  for (let hour = openingHour; hour < closingHour; hour++) {
    pickupSlots.push({
      label: `${hour}:00 - ${hour + 1}:00`,
      value: `${String(hour).padStart(2, "0")}:00:00`,
      hour,
    });
  }
  const initialState = {
    name: "",
    phone_number: "",
    email: "",
    pickup_address: "",
    longitude: null,
    latitude: null,
    landmark: "",
    pickup_time: "",
    pickup_date: "",
    notes: "",
  };
  const [details, setDetails] = useState(initialState);
  const getLocation = () => {
    try {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          setDetails((prev) => ({
            ...prev,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }));
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  const formValidate = (details) => {
    const errorObj = {};
    if (!details.name) {
      errorObj.name = "Please Provide Name";
    } else if (details.name.trim().length < 3) {
      errorObj.name = "Invalid Name";
    }
    if (!details.phone_number) {
      errorObj.phone_number = "Please provide phone number";
    } else if (
      details.phone_number.trim().length < 10 ||
      details.phone_number.trim().length > 10
    ) {
      errorObj.phone_number = "Please provide a valid phone number";
    }

    // if (details.latitude === null) {
    //   errorObj.latitude = "Latitude is missing";
    // }

    // if (details.longitude === null) {
    //   errorObj.longitude = "Longitude is missing";
    // }
    if (details.landmark.trim() === "" || details.landmark.trim().length < 3) {
      errorObj.landmark = "Please Enter correct landmark";
    }
    setError(errorObj);
    return errorObj;
  };
  const isToday = details.pickup_date === today;
  const handleSubmit = (e) => {
    console.log(details);
    e.preventDefault();
    const errors = formValidate(details);
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }
    dispatch(createOrder(details));
    setDetails(initialState);
  };
  const [search, setSearch] = useState("");
  const [addressDiv, setaddressDiv] = useState(false);
  const [addressDetails, setAddressDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (!search.trim()) {
      return;
    }
    const timer = setTimeout(async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://photon.komoot.io/api/?q=${search}`,
        );
        const data = await response.json();
        setAddressDetails(data?.features);
      } catch (error) {
        console.error(error);
      }
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);
  return (
    <div className={style.mainContainer}>
      <div className={style.backgroundImg}>
        <h1>Place Your Order</h1>
        <h3>Fill in your details and we'll get back to you soon!</h3>
      </div>
      <div className={style.formContainer}>
        <div className={style.formInnerContainer}>
          <form className={style.formStyle} onSubmit={handleSubmit}>
            <section className={style.personalInfo}>
              <h2>Personal Information</h2>
              <hr></hr>
              <div className={style.nameDetails}>
                <div className={style.iconDetailContainer}>
                  <User2 color="#0E2E54" />
                  <span>Full Name *</span>
                </div>
                <div>
                  <input
                    className={style.inputText}
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    value={details.name}
                    onChange={handleChange}
                  ></input>
                </div>
                {error.name && (
                  <div className={style.errorText}>{error.name}</div>
                )}
              </div>
              <div className={style.nameDetails}>
                <div className={style.iconDetailContainer}>
                  <PhoneCall color="#0E2E54" />
                  <span>Contact Number *</span>
                </div>
                <div className={style.nameDetails}>
                  <input
                    className={style.inputText}
                    type="text"
                    placeholder="Enter Contact Number"
                    name="phone_number"
                    value={details.phone_number}
                    onChange={handleChange}
                  ></input>
                </div>
                {error.phone_number && (
                  <div className={style.errorText}>{error.phone_number}</div>
                )}
              </div>
              <div className={style.nameDetails}>
                <div className={style.iconDetailContainer}>
                  <Mail color="#0E2E54" />
                  <span>Email</span>
                </div>
                <div>
                  <input
                    className={style.inputText}
                    type="email"
                    placeholder="Enter Email Address"
                    name="email"
                    value={details.email}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </section>
            {/* <section className={style.addressDetails}>
              <h2>Address Details</h2>
              <hr></hr>
              <div className={style.nameDetails}>
                <div className={style.iconDetailContainer}>
                  <MapPinIcon color="#0E2E54" />
                  <span>Address *</span>
                </div>
                <div className={style.locationDiv}>
                  <div
                    onClick={() => {
                      setaddressDiv(true);
                    }}
                    className={style.addressInput}
                  >
                    <input
                      className={style.inputText}
                      className={style.inputClass}
                      type="text"
                      placeholder="Enter Address"
                      name="search"
                      onBlur={() => {
                        setaddressDiv(false);
                      }}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    ></input>
                    <MapPinIcon color="#0E2E54" />
                    {addressDiv && search.trim() && (
                      <div className={style.locationDetails}>
                        <div>{addressDetails?.details}</div>
                        {addressDetails?.map((feature) => {
                          return (
                            <div
                              id={feature.geometry.coordinates}
                              onClick={() => {
                                console.log("Clicked");
                                console.log(feature.geometry.coordinates);
                                setDetails((prev) => ({
                                  ...prev,
                                  longitude: feature.geometry.coordinates[0],
                                  latitude: feature.geometry.coordinates[1],
                                }));
                              }}
                              className={style.locItems}
                            >
                              {[
                                feature.properties.name,
                                feature?.properties?.district,
                                feature?.properties?.state,
                                feature?.properties?.country,
                              ].join(", ")}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                  <div className={style.nameDetails}>
                    <div className={style.iconDetailContainer}>
                      <LandmarkIcon color="#0E2E54" />
                      <span>Landmark *</span>
                    </div>
                    <div>
                      <input
                        className={style.inputText}
                        type="text"
                        placeholder="Enter Landmark"
                        name="landmark"
                        value={details.landmark}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
            <section className={style.addressDetails}>
              <h2>Address Details</h2>
              <hr />

              <div className={style.nameDetails}>
                <div className={style.iconDetailContainer}>
                  <MapPinIcon color="#0E2E54" />
                  <span>Address *</span>
                </div>

                <div className={style.locationDiv}>
                  <div className={style.locationOperator}>
                    <div className={style.addressInput}>
                      <input
                        className={style.inputClass}
                        type="text"
                        placeholder={
                          details.latitude && details.longitude
                            ? "Current location captured"
                            : "Click the location icon to use your current location"
                        }
                        readOnly
                        value={search}
                        onFocus={() => setaddressDiv(true)}
                        onBlur={() => {
                          setTimeout(() => {
                            setaddressDiv(false);
                          }, 150);
                        }}
                        onChange={(e) => {
                          setSearch(e.target.value);
                          setaddressDiv(true);
                        }}
                      />
                    </div>
                    <MapPinIcon
                      color="#0E2E54"
                      size={"3rem"}
                      className={style.mapIcon}
                      onClick={() => getLocation()}
                    />
                  </div>
                  {/* {addressDiv && search.trim() && (
                      <div className={style.locationDetails}>
                        {addressDetails?.map((feature) => {
                          const address = [
                            feature.properties.name,
                            feature.properties.district,
                            feature.properties.state,
                            feature.properties.country,
                          ]
                            .filter(Boolean)
                            .join(", ");

                          return (
                            <div
                              key={feature.geometry.coordinates.join(",")}
                              className={style.locItems}
                              onMouseDown={() => {
                                setDetails((prev) => ({
                                  ...prev,
                                  pickup_address: address,
                                  longitude: feature.geometry.coordinates[0],
                                  latitude: feature.geometry.coordinates[1],
                                }));

                                setSearch(address);
                                setaddressDiv(false);
                              }}
                            >
                              {address}
                            </div>
                          );
                        })}
                      </div>
                    )} */}
                  <div className={style.nameDetails}>
                    <div className={style.iconDetailContainer}>
                      <LandmarkIcon color="#0E2E54" />
                      <span>Landmark *</span>
                    </div>

                    <div>
                      <input
                        className={style.inputText}
                        type="text"
                        placeholder="Enter Landmark"
                        name="landmark"
                        value={details.landmark}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {(error.landmark || error.latitude || error.longitude) && (
                <div className={style.errorText}>
                  {error.landmark || error.latitude || error.longitude}
                </div>
              )}
            </section>
            {/* <section className={style.dateDetails}>
              <input type="date" min={today} max={maxDate}></input>
            </section> */}
            <section className={style.dateDetails}>
              <h2>Pickup Schedule</h2>
              <hr />

              <div className={style.nameDetails}>
                <div className={style.iconDetailContainer}>
                  <span>Pickup Date *</span>
                </div>

                <input
                  className={style.inputText}
                  type="date"
                  name="pickup_date"
                  min={today}
                  max={maxDate}
                  value={details.pickup_date}
                  onChange={handleChange}
                />
              </div>

              <div className={style.nameDetails}>
                <div className={style.iconDetailContainer}>
                  <span>Pickup Time *</span>
                </div>

                <select
                  className={style.inputText}
                  name="pickup_time"
                  value={details.pickup_time}
                  onChange={handleChange}
                >
                  <option value="">Select Pickup Slot</option>

                  {pickupSlots.map((slot) => (
                    <option
                      key={slot.value}
                      value={slot.value}
                      disabled={isToday && slot.hour <= currentHour}
                    >
                      {slot.label}
                    </option>
                  ))}
                </select>
              </div>
            </section>
            <section className={style.additionalDetails}>
              <h2>Additional Details</h2>
              <hr></hr>
              <div className={style.nameDetails}>
                <div className={style.iconDetailContainer}>
                  <MessageCircleMore color="#0E2E54" />
                  <span>Message</span>
                </div>
                <div>
                  <input
                    className={style.inputText}
                    type="text"
                    placeholder="Any additional details or special instruction..."
                    name="notes"
                    value={details.notes}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
            </section>
            <button className={style.submitBtn} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
