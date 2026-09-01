// import React from "react";
// import style from "../admin/Admin.module.css";
// import { useState, useEffect } from "react";
// import {
//   Search,
//   LocationEditIcon,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// import Loading from "../../loader/Loading";
// import NoRecordComponent from "../../no-record/NoRecordComponent";
// import { getOrders, updateOrder, getDashboardDetails } from "../../../redux/orders/OrderThunk";
// import { useDispatch, useSelector } from "react-redux";

// export const OrderDetails = ({
//   setOrderId,
//   setOpenModal,
//   setHandleDeleteModal,
// }) => {
//   const [query, setQuery] = useState({});
//   const statusOptions = [
//     {
//       id: 1,
//       name: "Pending",
//     },
//     {
//       id: 2,
//       name: "Confirmed",
//     },
//     {
//       id: 3,
//       name: "Processing",
//     },
//     {
//       id: 4,
//       name: "Delivered",
//     },
//   ];
//   const dispatch = useDispatch();
//   const handleOpenViewModal = (id) => {
//     setOrderId(id);
//     setOpenModal(true);
//   };
//   const { isLoading, error } = useSelector((store) => store.orders.orderList);
//   const { data, has_next, has_previous, next_cursor, previous_cursor } =
//     useSelector((store) => store.orders.orderList.response);
//   const checkStatus = (status) => {
//     return status === "Delivered";
//   };
//   useEffect(() => {
//     if (query && query?.search) {
//       const timer = setTimeout(() => {
//         dispatch(getOrders(query));
//       }, 1000);
//       return () => clearTimeout(timer);
//     } else {
//       dispatch(getOrders(query));
//     }
//   }, [query]);
//   const [handleStatus, setHandleStatus] = useState({
//     id: "",
//     isOpen: "",
//     x: 0,
//     y: 0,
//   });
//   const [searchModal, setSearchModal] = useState(false);
//   const handleStatusDetails = async (id, status_id) => {
//     setHandleStatus({
//       id: "",
//       isOpen: "",
//     });
//     await dispatch(
//       updateOrder({ orderId: id, payload: { status: Number(status_id) } }),
//     );
//     dispatch(getOrders(query));
//   };
//   useEffect(() => {
//     dispatch(getOrders());
//         dispatch(getDashboardDetails());
//   }, [dispatch]);
//   return (
//   );
// };
