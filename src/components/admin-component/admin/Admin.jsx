import React, { useEffect } from "react";
import { useState } from "react";
import ViewOrder from "../../common-components/view-order/ViewOrder";
import style from "./Admin.module.css";
import { useNavigate } from "react-router-dom";
import MainLogo from "../../../assets/images/navbar/MainLogo.jpeg";
import Loading from "../../loader/Loading.jsx";
import NoRecordComponent from "../../no-record/NoRecordComponent.jsx";
import Modal from "../../modal/Modal.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  getOrders,
  getDashboardDetails,
  updateOrder,
  deleteOrder,
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
  ChevronLeft,
  ChevronRight,
  CircleDotDashed,
} from "lucide-react";
import { FaS } from "react-icons/fa6";

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, has_next, has_previous, next_cursor, previous_cursor } =
    useSelector((store) => store.orders.orderList.response);
  const { isLoading, error } = useSelector((store) => store.orders.orderList);
  const dashboardDetails = useSelector(
    (store) => store.orders.dashboardDetails.response,
  );
  const [handleDeleteModal, setHandleDeleteModal] = useState({
    id: "",
    isOpen: false,
  });
  const handleDelete = async () => {
    setHandleDeleteModal({ id: "", isOpen: false });
    if (handleDeleteModal.id) {
      await dispatch(deleteOrder(Number(handleDeleteModal.id)));
    }
    dispatch(getOrders());
  };
  const [openModal, setOpenModal] = useState(false);
  const [orderId, setOrderId] = useState();
  const [query, setQuery] = useState({});
  const handleOpenViewModal = (id) => {
    setOrderId(id);
    setOpenModal(true);
  };
  const [handleStatus, setHandleStatus] = useState({
    id: "",
    isOpen: "",
    x: 0,
    y: 0,
  });
  const handleStatusDetails = async (id, status_id) => {
    setHandleStatus({
      id: "",
      isOpen: "",
    });
    await dispatch(
      updateOrder({ orderId: id, payload: { status: Number(status_id) } }),
    );
    dispatch(getOrders(query));
    dispatch(getDashboardDetails());
  };
  const handleCloseViewModal = () => {
    setOpenModal(false);
  };
  const statusOptions = [
    {
      id: 1,
      name: "Pending",
    },
    {
      id: 2,
      name: "Confirmed",
    },
    {
      id: 3,
      name: "Processing",
    },
    {
      id: 4,
      name: "Delivered",
    },
  ];
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
      {handleDeleteModal.isOpen && (
        <div className={style.deleteModal}>
          <Modal
            setHandleDeleteModal={setHandleDeleteModal}
            handleDelete={handleDelete}
          />
        </div>
      )}
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
              <CircleDotDashed color="#3E7620" />
            </div>
            <div className={style.dashContDetails}>
              <span className={style.dashHeading}>Pending</span>
              <span className={style.dashSubHeading}>
                {dashboardDetails?.pending}
              </span>
            </div>
          </div>
          <div className={style.detailDiv}>
            <div className={style.iconSize}>
              <Scooter color="#3E7620" />
            </div>
            <div className={style.dashContDetails}>
              <span className={style.dashHeading}>Confirmed</span>
              <span className={style.dashSubHeading}>
                {dashboardDetails?.accepted}
              </span>
            </div>
          </div>
          <div className={style.detailDiv}>
            <div className={style.iconSize}>
              <ClockArrowLeftIcon color="#3E7620" />
            </div>
            <div className={style.dashContDetails}>
              <span className={style.dashHeading}>Processing</span>
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
                <option value={"Pending"}>Pending</option>
                <option value={"Confirmed"}>Confirmed</option>
                <option value={"Processing"}>Processing</option>
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
                          search: e.target.value,
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
          {isLoading ? (
            <div className={style.loaderComp}>
              <Loading pageName={"Order Lists"} />
            </div>
          ) : (
            <div
              className={`${style.tableContents} ${handleStatus.isOpen ? style.tableContentsOverHid : ""}`}
            >
              <table>
                <thead>
                  <tr>
                    <th className={style.headerOps}>Order Ref Num</th>
                    <th className={style.headerOps}>Name</th>
                    <th className={style.headerOps}>Status</th>
                    <th className={style.headerOps}>Phone No.</th>
                    <th className={style.headerOps}>Landmark</th>
                    <th className={style.headerOps}>Location</th>
                    <th className={style.headerOps}>Date & Time</th>
                    <th className={style.headerOps}>Action</th>
                  </tr>
                </thead>
                {data?.length === 0 ? (
                  <tr>
                    <td colSpan={7}>
                      <NoRecordComponent />
                    </td>
                  </tr>
                ) : (
                  <tbody className={style.tableRow}>
                    {data?.map((order) => {
                      return (
                        <tr key={order.id}>
                                                    <td>{order?.order_ref_num}</td>
                          <td>{order.name}</td>
                          <td
                            tabIndex={order.id}
                            className={style.statusIcon}
                            onBlur={() =>
                              setHandleStatus({
                                id: "",
                                isOpen: false,
                                x: 0,
                                y: 0,
                              })
                            }
                          >
                            <div
                              onClick={(e) => {
                                console.log("Got clicked");
                                const rect =
                                  e.currentTarget.getBoundingClientRect();
                                setHandleStatus({
                                  id: order.id,
                                  isOpen: true,
                                  x: rect.left,
                                  y: rect.bottom,
                                });
                              }}
                            >
                              {order.status}
                            </div>
                            {order.id === handleStatus.id &&
                              handleStatus.isOpen && (
                                <div
                                  className={style.statusListOptions}
                                  style={{
                                    position: "fixed",
                                    left: handleStatus.x,
                                    top: handleStatus.y,
                                  }}
                                >
                                  {statusOptions.map((status) => {
                                    const statusCheck =
                                      status.name === order.status;
                                    return (
                                      <div
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          if (!statusCheck)
                                            handleStatusDetails(
                                              order.id,
                                              status.id,
                                            );
                                        }}
                                        key={status.id}
                                        className={`${style.statusOption} ${statusCheck ? style.activeStatusColor : ""}`}
                                      >
                                        {status.name}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                          </td>
                          <td
                            onClick={() => {
                              window.location.href = `tel:${order.phone_number}`;
                            }}
                          >
                            {order.phone_number}
                          </td>
                          <td>{order?.landmark}</td>
                          {order?.latitude ? (
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
                          ) : (
                            <td>{order?.pickup_address}</td>
                          )}
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
                                    className={style.actionBtns}
                                  >
                                    View
                                  </div>
                                  <div
                                    className={style.actionBtns}
                                    onClick={() => {
                                      setHandleDeleteModal({
                                        id: order.id,
                                        isOpen: true,
                                      });
                                    }}
                                  >
                                    Delete
                                  </div>
                                </div>
                              )}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                )}
              </table>
            </div>
          )}
          <div className={style.paginationOps}>
            <select
              className={style.paginationOptions}
              onChange={(e) => setQuery({ limit: e.target.value })}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
            </select>
            <div className={style.rightArrowBtn}>
              <button
                className={style.clickBtns}
                disabled={!has_previous}
                onClick={() =>
                  setQuery((prev) => ({
                    ...prev,
                    is_reverse: true,
                    cursor: previous_cursor,
                  }))
                }
              >
                <ChevronLeft />
              </button>
            </div>
            <div className={style.rightArrowBtn}>
              <button
                className={style.clickBtns}
                disabled={!has_next}
                onClick={() =>
                  setQuery((prev) => ({ ...prev, cursor: next_cursor }))
                }
              >
                <ChevronRight />
              </button>
            </div>
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
