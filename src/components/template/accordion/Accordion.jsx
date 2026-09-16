import React from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import style from "./Accordion.module.css";
import { useDispatch } from "react-redux";
import {
  deleteStep,
  deleteSection,
} from "../../../redux/template/templateSlice";
import {
  updateStep,
  updateSection,
} from "../../../redux/template/templateSlice";

const Accordion = ({
  id,
  templateId,
  stepId,
  sectionId,
  type,
  name,
  handleToggle,
  accordionIds,
  setShowModal,
}) => {
  const dispatch = useDispatch();
  return (
    <div className={style.accordionMainDiv} id={id}>
      <div className={style.leftSideContainer}>
        <div
          className={style.downIcon}
          onClick={() => {
            handleToggle(`${type}${id}`);
          }}
        >
          {accordionIds.has(`${type}${id}`) ? (
            <ChevronDown size={"0.8rem"} />
          ) : (
            <ChevronRight size={"0.8rem"} />
          )}
        </div>
        <div className={style.stepHeading}>{name}</div>
      </div>
      <div className={style.rightSideContainer}>
        <div
          className={style.editBtn}
          onClick={() => {
            setShowModal({
              stepId: stepId,
              templateId: templateId,
              sectionId: sectionId,
              item: { id: id, name: name },
              isOpen: true,
              type,
              isEdit: true,
            });
          }}
        >
          Edit
        </div>
        <div
          className={style.deleteBtn}
          onClick={() => {
            type === "step"
              ? dispatch(
                  deleteStep({
                    templateId: templateId,
                    stepId: stepId,
                  }),
                )
              : dispatch(
                  deleteSection({
                    templateId: templateId,
                    stepId: stepId,
                    sectionId: sectionId,
                  }),
                );
          }}
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default Accordion;
