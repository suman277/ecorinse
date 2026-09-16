import React, { useState } from "react";
import style from "./TemplateModal.module.css";
import { TemplateType } from "../../../utils/enumUtils";

const TemplateModal = () => {
  const initialStepDetails = {
    id: "",
    name: "",
  };
  const initialSectionDetails = {
    id: "",
    name: "",
  };
  const initialItemDetails = {
    id: "",
    item_name: "",
    item_quantity: null,
    item_unit: "",
  };
  const [stepDetails, setStepDetails] = useState(initialStepDetails);
  const [section, setSectionDetails] = useState(initialSectionDetails);
  const [item, setItemDetails] = useState(initialItemDetails);
  return (
    <>
      <div>Template Modal</div>
    </>
  );
};

export default TemplateModal;
