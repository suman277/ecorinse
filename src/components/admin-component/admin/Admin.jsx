import React, { useEffect } from "react";
import { useState } from "react";
import ViewOrder from "../../common-components/view-order/ViewOrder";
import style from "./Admin.module.css";
import { useNavigate } from "react-router-dom";
import MainLogo from "../../../assets/images/navbar/MainLogo.jpeg";
import { useSelector, useDispatch } from "react-redux";
import {
  getOrders,
  getDashboardDetails,
} from "../../../redux/orders/OrderThunk.js";
import {
  MessageSquareDotIcon,
  GitPullRequestCreate,
  Scooter,
  ClockArrowLeftIcon,
  CalendarCheck2,
  Search,
  SearchCheck,
  LocationEditIcon,
  EllipsisVertical,
} from "lucide-react";

const Admin = () => {
  const navigate = useNavigate();
  const orders = useSelector((store) => store.orders.orderList.response.data);
  const dashboardDetails = useSelector(
    (store) => store.orders.dashboardDetails.response,
  );
  const [openModal, setOpenModal] = useState(false);
  const [orderId, setOrderId] = useState();
  const dispatch = useDispatch();
  const [query, setQuery] = useState({});
  const handleOpenViewModal = (id) => {
    setOrderId(id);
    setOpenModal(true);
  };
  const handleCloseViewModal = () => {
    setOpenModal(false);
  };
  useEffect(() => {
    if (query && query?.search) {
      const timer = setTimeout(() => {
        dispatch(getOrders(query));
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      dispatch(getOrders(query));
    }
  }, [query]);
  useEffect(() => {
    dispatch(getOrders());
    dispatch(getDashboardDetails());
  }, [dispatch]);
  const initalStateOptionMenu = {
    id: "",
    isOpen: "",
  };
  const [searchModal, setSearchModal] = useState(false);
  const [view, setView] = useState(initalStateOptionMenu);
  const handleOptionMenu = (id) => {
    if (id === view.id) {
      setView(initalStateOptionMenu);
    } else {
      setView({ id: id, isOpen: true });
    }
  };
  return (
    <div className={style.mainContainer}>
      <div className={style.parentContainer}>
        <div className={style.navBar}>
          <div>
            <img className={style.imgSpecs} src={MainLogo} />
          </div>
          <div className={style.notiWrapper}>
            <MessageSquareDotIcon color="#498E38" />
          </div>
        </div>
        <div className={style.dashboardContainer}>
          <div className={style.topHeader}>
            <div className={style.details}>
              <span className={style.headingText}>Order List</span>
            </div>
            <button
              className={style.orderBtn}
              onClick={() => navigate("/create-order")}
            >
              <GitPullRequestCreate size={"1rem"} />
              Create Order
            </button>
          </div>
        </div>
        <div className={style.itemContainers}>
          <div className={style.detailDiv}>
            <div className={style.iconSize}>
              <Scooter color="#3E7620" />
            </div>
            <div className={style.dashContDetails}>
              <span className={style.dashHeading}>To PickUp</span>
              <span className={style.dashSubHeading}>
                {dashboardDetails?.pending}
              </span>
            </div>
          </div>
          <div className={style.detailDiv}>
            <div className={style.iconSize}>
              <ClockArrowLeftIcon color="#3E7620" />
            </div>
            <div className={style.dashContDetails}>
              <span className={style.dashHeading}>In Progress</span>
              <span className={style.dashSubHeading}>
                {dashboardDetails?.in_progress}
              </span>
            </div>
          </div>
          <div className={style.detailDiv}>
            <div className={style.iconSize}>
              <CalendarCheck2 color="#3E7620" />
            </div>
            <div className={style.dashContDetails}>
              <span className={style.dashHeading}>Delivered</span>
              <span className={style.dashSubHeading}>
                {dashboardDetails?.delivered}
              </span>
            </div>
          </div>
        </div>
        <div className={style.detailContainer}>
          <div className={style.detailOps}>
            <div>
              <select
                className={style.searchBoxWidth}
                onChange={(e) => {
                  setQuery((prev) => ({ ...prev, status: e.target.value }));
                }}
              >
                <option value={""}>All</option>
                <option value={"Pending"}>Pickup</option>
                <option value={"Processing"}>In Progress</option>
                <option value={"Delivered"}>Delivered</option>
              </select>
            </div>
            <div>
              {searchModal ? (
                <div className={style.searchWidth}>
                  <div className={style.searchInputDiv}>
                    <Search onClick={() => setSearchModal(false)} />
                    <input
                      className={style.searchInput}
                      type="text"
                      placeholder="Search ..."
                      value={query?.search}
                      onChange={(e) => {
                        setQuery((prev) => ({
                          ...prev,
                          search: e.target.value.trim(),
                        }));
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  onClick={() => setSearchModal(true)}
                  className={style.searchIcon}
                >
                  <Search />
                </div>
              )}
            </div>
          </div>
          <hr className={style.hr}></hr>
          <div className={style.tableContents}>
            <table>
              <thead>
                <tr>
                  <th className={style.headerOps}>Name</th>
                  <th className={style.headerOps}>Status</th>
                  <th className={style.headerOps}>Phone No.</th>
                  <th className={style.headerOps}>Pickup Address</th>
                  <th className={style.headerOps}>Location</th>
                  <th className={style.headerOps}>Date & Time</th>
                  <th className={style.headerOps}>Action</th>
                </tr>
              </thead>
              <tbody className={style.tableRow}>
                {orders?.map((order) => {
                  return (
                    <tr key={order.id}>
                      <td>{order.name}</td>
                      <td>{order.status}</td>
                      <td
                        onClick={() => {
                          window.location.href = `tel:${order.phone_number}`;
                        }}
                      >
                        {order.phone_number}
                      </td>
                      <td>{order.pickup_address}</td>
                      <td
                        onClick={() =>
                          window.open(
                            `https://www.google.com/maps?q=${order.latitude},${order.longitude}`,
                            "_blank",
                          )
                        }
                      >
                        <LocationEditIcon />
                      </td>
                      <td>
                        <div className={style.dateTime}>
                          <span>{order.pickup_date}</span>
                          <span>{order.pickup_time}</span>
                        </div>
                      </td>
                      <td>
                        <button
                          className={style.actnBtn}
                          onBlur={() => setView(initalStateOptionMenu)}
                          onClick={() => handleOptionMenu(order.id)}
                        >
                          <EllipsisVertical />
                          {order.id === view.id && view.isOpen && (
                            <div className={style.dropDownIcon}>
                              <div
                                onClick={() => {
                                  handleOpenViewModal(order.id);
                                }}
                              >
                                View
                              </div>
                              <div>Edit</div>
                            </div>
                          )}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {openModal && (
        <div className={style.overlay}>
          <div className={style.popUpContainer}>
            <ViewOrder handleClose={handleCloseViewModal} orderId={orderId} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
