import React, { useEffect, useState } from "react";
import Accordion from "../accordion/Accordion";
import Items from "../items/Items";
import style from "./Template.module.css";
import { TemplateType } from "../../../utils/enumUtils";
import { CreateItem } from "../create-item/CreateItem";
import { useDispatch, useSelector } from "react-redux";
import CreateEditStepSection from "../CreateStep/CreateEditStepSection";
import { Pen, Trash2, Save } from "lucide-react";
import {
  addTemplate,
  updateTemplate,
  deleteTemplate,
} from "../../../redux/template/templateSlice";

const Template = () => {
  const dispatch = useDispatch();
  const { response } = useSelector((state) => state.template);
  const [templateDetails, setTemplateDetails] = useState([]);
  const [showModal, setShowModal] = useState({
    stepId: null,
    templateId: null,
    sectionId: null,
    item: {},
    isOpen: false,
    type: null,
    isEdit: false,
  });
  const handleTemplateModal = (templateType) => {
    setShowModal(true);
  };
  const [templateId, setTemplateId] = useState(null);
  const [templateEditId, setTemplateEditId] = useState({
    id: null,
    name: "",
  });
  const [accordionIds, setAccordionIds] = useState(new Map());
  const handleToggle = (id) => {
    setAccordionIds((prev) => {
      const newMap = new Map(prev);
      if (newMap.has(id)) {
        newMap.delete(id);
      } else {
        newMap.set(id);
      }
      return newMap;
    });
  };
  // useEffect(() => {
  //   if (response.length > 0) {
  //     setTemplateDetails(response);
  //     setAccordionIds(new Map());
  //     setTemplateId(response.find((res)=>{
  //       res.id
  //     }));
  //   }
  // }, [response, templateId]);
  useEffect(() => {
    if (response.length === 0) {
      setTemplateId(null);
      return;
    }

    const selectedTemplateExists = response.some(
      (template) => template.id === templateId,
    );

    if (!selectedTemplateExists) {
      setTemplateId(response[0].id);
      setAccordionIds(new Map());
    }
    setTemplateDetails(response);
  }, [response, templateId]);
  const stepDetails = response.find((template) => {
    return template.id === templateId;
  });

  return (
    <div className={style.mainContainer}>
      {showModal.isOpen && (
        <div className={style.overLay}>
          {showModal.type === "tempalte" ||
          showModal.type === "step" ||
          showModal.type === "section" ? (
            <CreateEditStepSection
              showModal={showModal}
              setShowModal={setShowModal}
            />
          ) : (
            <CreateItem setShowModal={setShowModal} showModal={showModal} />
          )}
        </div>
      )}
      <div className={style.templateContainer}>
        <div className={style.templateHeader}>
          {templateDetails.map((template) => {
            return template.id === templateId ? (
              <div
                key={template.id}
                className={`${templateId === template.id ? style.activeTemplateName : ""} ${style.templateName}`}
                onClick={() => setTemplateId(template.id)}
              >
                {templateEditId.id === template.id ? (
                  <input
                    name="name"
                    value={templateEditId.name}
                    onChange={(e) => {
                      setTemplateEditId((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }));
                    }}
                  />
                ) : (
                  template.name
                )}
                <div>
                  {templateEditId.id === template.id ? (
                    <Save
                      size="15px"
                      className={style.editIcon}
                      onClick={() => {
                        dispatch(
                          updateTemplate({
                            templateId: templateEditId.id,
                            name: templateEditId.name,
                          }),
                        );

                        setTemplateEditId({
                          id: null,
                          name: "",
                        });
                      }}
                    />
                  ) : (
                    <Pen
                      size={"15px"}
                      className={style.editIcon}
                      onClick={() =>
                        setTemplateEditId({
                          id: template.id,
                          name: template.name,
                        })
                      }
                    />
                  )}
                </div>
                <div>
                  <Trash2
                    size={"15px"}
                    className={style.editIcon}
                    onClick={() =>
                      dispatch(deleteTemplate({ templateId: templateId }))
                    }
                  />
                </div>
              </div>
            ) : (
              <div
                key={template.id}
                className={`${templateId === template.id ? style.activeTemplateName : ""} ${style.templateName}`}
                onClick={() => setTemplateId(template.id)}
              >
                {template.name}
              </div>
            );
          })}
        </div>
        <div className={style.templateDetailsContainer}>
          <div className={style.itemContainer}>
            {stepDetails?.steps.map((step) => {
              return (
                <>
                  <Accordion
                    key={step?.id}
                    id={step?.id}
                    templateId={templateId}
                    stepId={step?.id}
                    type="step"
                    name={step?.name}
                    handleToggle={handleToggle}
                    accordionIds={accordionIds}
                    setShowModal={setShowModal}
                  />
                  {accordionIds.has(`step${step?.id}`) ? (
                    <div className={style.sectionContainer}>
                      {step?.sections?.map((section) => {
                        return (
                          <>
                            <Accordion
                              key={section?.id}
                              id={section?.id}
                              templateId={templateId}
                              stepId={step?.id}
                              sectionId={section?.id}
                              type="section"
                              name={section?.name}
                              handleToggle={handleToggle}
                              accordionIds={accordionIds}
                              setShowModal={setShowModal}
                            />
                            {accordionIds.has(`section${section?.id}`) ? (
                              <div className={style.itemDetails}>
                                {section?.items?.map((item) => {
                                  return (
                                    <Items
                                      key={item.id}
                                      item={item}
                                      templateId={templateId}
                                      stepId={step?.id}
                                      sectionId={section?.id}
                                      itemId={item?.id}
                                      id={item.id}
                                      setShowModal={setShowModal}
                                    />
                                  );
                                })}
                                <div
                                  className={style.addItem}
                                  onClick={() =>
                                    setShowModal({
                                      stepId: step.id,
                                      templateId: templateId,
                                      sectionId: section.id,
                                      isOpen: true,
                                    })
                                  }
                                >
                                  + Add Item
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </>
                        );
                      })}
                      <div
                        className={style.addItem}
                        onClick={() => {
                          setShowModal({
                            stepId: step.id,
                            templateId: templateId,
                            isOpen: true,
                            type: "section",
                          });
                        }}
                      >
                        + Add Section
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            })}
            <div
              className={style.addStep}
              onClick={() => {
                setShowModal({
                  templateId: templateId,
                  isOpen: true,
                  type: "step",
                });
              }}
            >
              + Add Step
            </div>
          </div>
        </div>
        <div className={style.footer}>
          <button>Cancel</button>
          <button>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Template;
