import React, { useEffect, useState } from "react";
import Accordion from "../accordion/Accordion";
import Items from "../items/Items";
import style from "./Template.module.css";
import { CreateItem } from "../create-item/CreateItem";
import { useDispatch, useSelector } from "react-redux";
import CreateEditStepSection from "../CreateStep/CreateEditStepSection";
import {
  getTemplates,
  getTemplateDetails,
  createUpdateTemplate,
} from "../../../redux/template/templateThunk.js";
import { Plus, Pen, Trash2, Save, X } from "lucide-react";

const Template = () => {
  const cleanTemplateKeys = (object) => {
    if (typeof object.id === "string") {
      const { id, ...detailsWithoutId } = object;
      return detailsWithoutId;
    }
    return object;
  };
  const [originalTemplate, setOriginalTemplate] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTemplates());
  }, []);
  const { response: templates } = useSelector(
    (state) => state.template.templates,
  );
  const [templateId, setTemplateId] = useState(null);
  const handleGetTemplateDetails = async (template_id) => {
    setTemplateId(template_id);

    const response = await dispatch(
      getTemplateDetails({ template_id }),
    ).unwrap();

    setOriginalTemplate(structuredClone(response));
  };
  const [editId, seteditId] = useState(0);
  const [templateName, setTemplateName] = useState("");
  const handleUpdateTemplateName = async (template_id) => {
    await dispatch(
      createUpdateTemplate({ id: template_id, name: templateName }),
    ).unwrap();
    setTemplateId(0);
    dispatch(getTemplates());
  };
  const { response: templateDetails } = useSelector(
    (state) => state.template.templatedetails,
  );
  const [showModal, setShowModal] = useState({
    stepId: null,
    templateId: null,
    sectionId: null,
    item: {},
    isOpen: false,
    type: null,
    isEdit: false,
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
  const handleUpdate = async () => {
    const payload = {
      ...cleanTemplateKeys(templateDetails),
      steps: templateDetails.steps.map((step) => ({
        ...cleanTemplateKeys(step),
        sections: step?.sections?.map((section) => ({
          ...cleanTemplateKeys(section),
          items: section?.items?.map((item) => cleanTemplateKeys(item)),
        })),
      })),
    };
    await dispatch(createUpdateTemplate(payload)).unwrap();
    setAccordionIds(new Map());
    dispatch(getTemplates());
  };

  const handleCancel = () => {
    dispatch(getTemplateDetails({ template_id: templateId }));
  };
  const hasChanges =
    JSON.stringify(originalTemplate) !== JSON.stringify(templateDetails);


  return (
    <div className={style.mainContainer}>
      {showModal.isOpen && (
        <div className={style.overLay}>
          {showModal.type === "template" ||
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
          <div className={style.templateHeadings}>
            {templates?.map((template) => {
              return editId === template?.id && templateId === template?.id ? (
                <div className={style.itemOps}>
                  <input
                    name="name"
                    value={templateName}
                    onChange={(e) => setTemplateName(e.target.value)}
                  />
                  <Save
                    size={"1rem"}
                    onClick={() => handleUpdateTemplateName(template?.id)}
                  />
                  <X size={"1rem"} onClick={() => seteditId(0)} />
                </div>
              ) : (
                <div
                  key={template?.id}
                  className={`${style.templateName} ${templateId === template?.id ? style.activeTemplateName : ""}`}
                  onClick={() => {
                    handleGetTemplateDetails(template.id);
                  }}
                >
                  {template?.name}
                  {templateId === template?.id && (
                    <div className={style.actionItems}>
                      <div className={style.iconDetails}>
                        <Pen
                          size={"1rem"}
                          onClick={() => {
                            (seteditId(template?.id),
                              setTemplateName(template?.name));
                          }}
                        />
                      </div>
                      <div className={style.iconDetails}>
                        <Trash2 size={"1rem"} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <button
            className={style.addTemplate}
            onClick={() =>
              setShowModal({
                isOpen: true,
                type: "template",
              })
            }
          >
            <Plus size={"15px"} />
            Add Template
          </button>
        </div>
        <div className={style.templateDetailsContainer}>
          <div className={style.itemContainer}>
            {templateId !== null ? (
              templateDetails?.steps?.map((step) => {
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
              })
            ) : (
              <div className={style.noTemplateSelection}>
                <div>Select a template to get started</div>
              </div>
            )}
            {templateId !== null ? (
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
            ) : (
              ""
            )}
          </div>
        </div>
        {templateId && (
          <div className={style.footer}>
            <button className={style.cancel} onClick={() => handleCancel()}>
              Cancel
            </button>
            <button
              className={`${style.saveChanges} ${
                !hasChanges ? style.disabled : ""
              }`}
              onClick={() => handleUpdate()}
              disabled={!hasChanges}
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Template;
