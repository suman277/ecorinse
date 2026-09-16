import style from "./CreateStep.module.css";
import React from "react";
import { TemplateType } from "../../../utils/enumUtils";
import { useEffect, useState } from "react";
import {
  addStep,
  addSection,
  updateStep,
  updateSection,
} from "../../../redux/template/templateSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidV4 } from "uuid";

const CreateEditStepSection = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  useEffect(() => {
    if (showModal.item) {
      setName(showModal.item.name);
    }
  }, [showModal]);
  console.log(showModal);
  return (
    <div className={style.mainHeader}>
      <div className={style.header}>
        {showModal.isEdit ? "Edit" : "Add"}{" "}
        {showModal.type === "section"
          ? "Section"
          : showModal.type === "template"
            ? "Template"
            : "Step"}
      </div>
      <div className={style.inputBox}>
        <h5>
          {" "}
          {showModal.type === "section"
            ? "Section"
            : showModal.type === "template"
              ? "Template"
              : "Step"}{" "}
          Name
        </h5>
        <input
          className={style.inputClass}
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={`Enter ${showModal.type === TemplateType.SECTION ? "Section" : showModal.type === TemplateType.TEMPLATE ? "Template" : "Step"}`}
        />
      </div>
      <div className={style.editOps}>
        <button
          className={style.cancel}
          onClick={() => {
            setShowModal({
              stepId: null,
              templateId: null,
              sectionId: null,
              item: {},
              isOpen: false,
              type: null,
            });
          }}
        >
          Cancel
        </button>
        <button
          className={`${style.add} ${name.length <= 0 ? style.disabled : ""}`}
          disabled={name.length <= 0}
          onClick={() => {
            showModal.isEdit
              ? showModal.type === "step"
                ? dispatch(
                    updateStep({
                      templateId: showModal.templateId,
                      stepId: showModal.stepId,
                      stepDetails: {
                        ...showModal.item,
                        name: name,
                      },
                    }),
                  )
                : showModal.type === "section"
                  ? dispatch(
                      updateSection({
                        templateId: showModal.templateId,
                        stepId: showModal.stepId,
                        sectionId: showModal.sectionId,
                        sectionDetails: {
                          ...showModal.item,
                          name: name,
                        },
                      }),
                    )
                  : showModal.type === "template"
                    ? dispatch(updateTemplate())
                    : null
              : showModal.type === "step"
                ? dispatch(
                    addStep({
                      templateId: showModal.templateId,
                      newStep: { name: name, id: uuidV4() },
                    }),
                  )
                : showModal.type === "section"
                  ? dispatch(
                      addSection({
                        templateId: showModal.templateId,
                        stepId: showModal.stepId,
                        newSection: { name: name, id: uuidV4() },
                      }),
                    )
                  : showModal.type === "template"
                    ? dispatch(addTemplate())
                    : null;

            setShowModal(false);
          }}
        >
          {showModal?.isEdit ? "Edit" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default CreateEditStepSection;

// showModal.type === "step"
//   ? dispatch(
//       addStep({
//         templateId: showModal.templateId,
//         newStep: { name: name, id: uuidV4() },
//       }),
//     )
//   : showModal.type === "section"
//     ? dispatch(
//         addSection({
//           templateId: showModal.templateId,
//           stepId: showModal.stepId,
//           newSection: { name: name, id: uuidV4() },
//         }),
//       )
//     : "";
