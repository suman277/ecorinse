import { createSlice } from "@reduxjs/toolkit";
import { getTemplateDetails, getTemplates } from "./templateThunk";

const initialState = {
  templatedetails: {
    response: [],
    isLoading: false,
    error: "",
  },
  templates: {
    response: [],
    isLoading: false,
    error: "",
  },
};
export const templateDetails = createSlice({
  name: "templateDetails",
  initialState,
  reducers: {
    addTemplate: (state, action) => {
      state.templatedetails.response = action.payload.newTemplate;
    },

    updateTemplate: (state, action) => {
      if (state.response?.id === action.payload.templateId) {
        state.templatedetails.response.name = action.payload.name;
      }
    },

    deleteTemplate: (state, action) => {
      if (state.response?.id === action.payload.templateId) {
        state.templatedetails.templatedetailste.response = null;
      }
    },
    addStep: (state, action) => {
      console.log("Inside the addStep", action.payload);
      if (state.templatedetails.response?.id === action.payload.templateId) {
        state.templatedetails.response.steps.push(action.payload.newStep);
        console.log("after response ", state.templatedetails.response);
      }
    },

    updateStep: (state, action) => {
      if (state.templatedetails.response?.id === action.payload.templateId) {
        const step = state.templatedetails.response.steps.find(
          (step) => step.id === action.payload.stepId,
        );

        if (step) {
          Object.assign(step, action.payload.stepDetails);
        }
      }
    },

    deleteStep: (state, action) => {
      if (state.templatedetails.response?.id === action.payload.templateId) {
        state.templatedetails.response.steps = state.templatedetails.response.steps.filter(
          (step) => step.id !== action.payload.stepId,
        );
      }
    },
    addSection: (state, action) => {
      if (state.templatedetails.response?.id === action.payload.templateId) {
        const step = state.templatedetails.response.steps.find(
          (step) => step.id === action.payload.stepId,
        );

        if (step) {
          step.sections ??= [];
          step?.sections.push(action.payload.newSection);
        }
      }
    },
    updateSection: (state, action) => {
      if (state.templatedetails.response?.id === action.payload.templateId) {
        const step = state.templatedetails.response.steps.find(
          (step) => step.id === action.payload.stepId,
        );

        if (step) {
          const section = step.sections.find(
            (section) => section.id === action.payload.sectionId,
          );

          if (section) {
            Object.assign(section, action.payload.sectionDetails);
          }
        }
      }
    },

    deleteSection: (state, action) => {
      if (state.templatedetails.response?.id === action.payload.templateId) {
        const step = state.templatedetails.response.steps.find(
          (step) => step.id === action.payload.stepId,
        );

        if (step) {
          step.sections = step.sections.filter(
            (section) => section.id !== action.payload.sectionId,
          );
        }
      }
    },
    addItem: (state, action) => {
      if (state.templatedetails.response?.id === action.payload.templateId) {
        const step = state.templatedetails.response.steps.find(
          (step) => step.id === action.payload.stepId,
        );
        if (step) {
          const section = step.sections.find(
            (section) => section.id === action.payload.sectionId,
          );

          if (section) {
            section.items ??= []
            section.items.push(action.payload.newItem);
          }
        }
      }
    },
    updateItem: (state, action) => {
      if (state.templatedetails.response?.id === action.payload.templateId) {
        const step = state.templatedetails.response.steps.find(
          (step) => step.id === action.payload.stepId,
        );

        if (step) {
          const section = step.sections.find(
            (section) => section.id === action.payload.sectionId,
          );

          if (section) {
            const item = section.items.find(
              (item) => item.id === action.payload.item.id,
            );

            if (item) {
              Object.assign(item, action.payload.item);
            }
          }
        }
      }
    },
    deleteItem: (state, action) => {
      if (state.templatedetails.response?.id === action.payload.templateId) {
        const step = state.templatedetails.response.steps.find(
          (step) => step.id === action.payload.stepId,
        );

        if (step) {
          const section = step.sections.find(
            (section) => section.id === action.payload.sectionId,
          );

          if (section) {
            section.items = section.items.filter(
              (item) => item.id !== action.payload.itemId,
            );
          }
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTemplateDetails.pending, (state, action) => {
        ((state.templatedetails.response = []),
          (state.templatedetails.isLoading = true),
          (state.templatedetails.error = ""));
      })
      .addCase(getTemplateDetails.fulfilled, (state, action) => {
        ((state.templatedetails.response = action.payload),
          (state.templatedetails.error = ""),
          (state.templatedetails.isLoading = false));
      })
      .addCase(getTemplateDetails.rejected, (state, action) => {
        ((state.templatedetails.response = []),
          (state.templatedetails.error = action.payload),
          (state.templatedetails.isLoading = false));
      })
      .addCase(getTemplates.pending, (state, action) => {
        ((state.templates.response = []),
          (state.templates.error = ""),
          (state.templates.isLoading = true));
      })
      .addCase(getTemplates.fulfilled, (state, action) => {
        ((state.templates.response = action.payload.templates),
          (state.templates.error = ""),
          (state.templates.isLoading = false));
      })
      .addCase(getTemplates.rejected, (state, action) => {
        ((state.templates.response = []),
          (state.templates.error = action.payload),
          (state.templates.isLoading = false));
      });
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
