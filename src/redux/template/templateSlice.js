import { createSlice } from "@reduxjs/toolkit";

export const templateDetails = createSlice({
  name: "templateDetails",
  initialState: {
    // response: [],
    response: [
      {
        id: 1,
        name: "Ecorinse",
        steps: [
          {
            id: 1,
            name: "Laundry",
            sections: [
              {
                id: 1,
                name: "Regular",
                items: [
                  {
                    id: 1,
                    item_name: "Wash and Iron",
                    item_unit: "kg",
                    unit_price: 70,
                  },
                  {
                    id: 2,
                    item_name: "Wash and Steam Iron",
                    item_unit: "kg",
                    unit_price: 100,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Eco Rinse 2",
        steps: [
          {
            id: 2,
            name: "Others",
            sections: [
              {
                id: 2,
                name: "Others 1",
                items: [
                  {
                    id: 1,
                    item_name: "Wash and Iron",
                    item_unit: "kg",
                    unit_price: 70,
                  },
                  {
                    id: 2,
                    item_name: "Wash and Steam Iron",
                    item_unit: "kg",
                    unit_price: 100,
                  },
                ],
              },
              {
                id: 3,
                name: "Others 2",
                items: [
                  {
                    id: 3,
                    item_name: "Shirt",
                    item_unit: "piece",
                    unit_price: 70,
                  },
                  {
                    id: 4,
                    item_name: "Pant",
                    item_unit: "piece",
                    unit_price: 80,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Ecorinse 3",
        steps: [
          {
            id: 3,
            name: "Women",
            sections: [
              {
                id: 4,
                name: "Regular",
                items: [
                  {
                    id: 5,
                    item_name: "Wash and Iron",
                    item_unit: "kg",
                    unit_price: 70,
                  },
                  {
                    id: 6,
                    item_name: "Wash and Steam Iron",
                    item_unit: "kg",
                    unit_price: 100,
                  },
                ],
              },
              {
                id: 5,
                name: "Men",
                items: [
                  {
                    id: 1,
                    item_name: "Shirt",
                    item_unit: "piece",
                    unit_price: 70,
                  },
                  {
                    id: 2,
                    item_name: "Pant",
                    item_unit: "piece",
                    unit_price: 80,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    isLoading: "",
    error: "",
  },
  reducers: {
    addTemplate: (state, action) => {
      state.response = state.response.push(action.payload.newTemplate);
    },
    updateTemplate: (state, action) => {
      console.log(action.payload);
      state.response = state.response.map((template) => {
        if (template.id === action.payload.templateId) {
          return {
            ...template,
            name: action.payload.name,
          };
        }
        return template;
      });
    },
    deleteTemplate: (state, action) => {
      state.response = state.response.filter((template) => {
        return template.id !== action.payload.templateId;
      });
    },
    addStep: (state, action) => {
      console.log(action);
      state.response = state.response.map((template) => {
        console.log("template", template);
        if (template.id === action.payload.templateId) {
          return {
            ...template,
            steps: [...(template.steps || []), action.payload.newStep],
          };
        }
        return template;
      });
    },
    updateStep: (state, action) => {
      state.response = state.response.map((template) => {
        if (template.id === action.payload.templateId) {
          return {
            ...template,
            steps: template.steps.map((step) => {
              if (step.id === action.payload.stepId) {
                return {
                  ...step,
                  ...action.payload.stepDetails,
                };
              }
              return step;
            }),
          };
        }
        return template;
      });
    },
    deleteStep: (state, action) => {
      state.response = state.response.map((template) => {
        if (template.id === action.payload.templateId) {
          return {
            ...template,
            steps: template.steps.filter((step) => {
              return step.id !== action.payload.stepId;
            }),
          };
        }
        return template;
      });
    },
    addSection: (state, action) => {
      state.response = state.response.map((template) => {
        if (template.id === action.payload.templateId) {
          return {
            ...template,
            steps: template.steps.map((step) => {
              if (step.id === action.payload.stepId) {
                return {
                  ...step,
                  sections: [
                    ...(step.sections || []),
                    action.payload.newSection,
                  ],
                };
              }
              return step;
            }),
          };
        }
        return template;
      });
    },
    updateSection: (state, action) => {
      state.response = state.response.map((template) => {
        if (template.id === action.payload.templateId) {
          return {
            ...template,
            steps: template.steps.map((step) => {
              if (step.id === action.payload.stepId) {
                return {
                  ...step,
                  sections: step.sections.map((section) => {
                    return {
                      ...section,
                      ...action.payload.sectionDetails,
                    };
                  }),
                };
              }
              return step;
            }),
          };
        }
        return template;
      });
    },
    deleteSection: (state, action) => {
      state.response = state.response.map((template) => {
        if (template.id === action.payload.templateId) {
          return {
            ...template,
            steps: template.steps.map((step) => {
              if (step.id === action.payload.stepId) {
                return {
                  ...step,
                  sections: step.sections.filter((section) => {
                    return section.id !== action.payload.sectionId;
                  }),
                };
              }
              return step;
            }),
          };
        }
        return template;
      });
    },
    addItem: (state, action) => {
      state.response = state.response.map((template) => {
        if (template.id === action.payload.templateId) {
          return {
            ...template,
            steps: template.steps.map((step) => {
              if (step.id === action.payload.stepId) {
                return {
                  ...step,
                  sections: step?.sections?.map((section) => {
                    if (section.id === action.payload.sectionId) {
                      return {
                        ...section,
                        items: [
                          ...(section.items || []),
                          action.payload.newItem,
                        ],
                      };
                    }
                    return section;
                  }),
                };
              }
              return step;
            }),
          };
        }
        return template;
      });
    },
    updateItem: (state, action) => {
      state.response = state.response.map((template) => {
        if (template.id === action.payload.templateId) {
          return {
            ...template,
            steps: template.steps.map((step) => {
              if (step.id === action.payload.stepId) {
                return {
                  ...step,
                  sections: step.sections.map((section) => {
                    if (section.id === action.payload.sectionId) {
                      return {
                        ...section,
                        items: section.items.map((item) => {
                          if (item.id === action.payload.item.id) {
                            return {
                              ...item,
                              ...action.payload.item,
                            };
                          }
                          return item;
                        }),
                      };
                    }
                    return section;
                  }),
                };
              }
              return step;
            }),
          };
        }
        return template;
      });
    },
    deleteItem: (state, action) => {
      state.response = state.response.map((template) => {
        if (template.id === action.payload.templateId) {
          return {
            ...template,
            steps: template.steps.map((step) => {
              if (step.id === action.payload.stepId) {
                return {
                  ...step,
                  sections: step.sections.map((section) => {
                    if (section.id === action.payload.sectionId) {
                      return {
                        ...section,
                        items: section.items.filter((item) => {
                          return item.id !== action.payload.itemId;
                        }),
                      };
                    }
                    return section;
                  }),
                };
              }
              return step;
            }),
          };
        }
        return template;
      });
    },
  },
});

export const {
  addTemplate,
  updateTemplate,
  deleteTemplate,
  addStep,
  updateStep,
  deleteStep,
  addSection,
  updateSection,
  deleteSection,
  addItem,
  updateItem,
  deleteItem,
} = templateDetails.actions;

export default templateDetails.reducer;
