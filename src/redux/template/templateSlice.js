import { createSlice } from "@reduxjs/toolkit";
import { getTemplate } from "./templateThunk";

export const templateDetails = createSlice({
  name: "templateDetails",
  initialState: {
    response: [],
    // response: [
    //   {
    //     id: 1,
    //     name: "Ecorinse",
    //     steps: [
    //       {
    //         id: 1,
    //         name: "Laundry",
    //         sections: [
    //           {
    //             id: 1,
    //             name: "Regular",
    //             items: [
    //               {
    //                 id: 1,
    //                 item_name: "Wash and Iron",
    //                 item_unit: "kg",
    //                 unit_price: 70,
    //               },
    //               {
    //                 id: 2,
    //                 item_name: "Wash and Steam Iron",
    //                 item_unit: "kg",
    //                 unit_price: 100,
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     id: 2,
    //     name: "Eco Rinse 2",
    //     steps: [
    //       {
    //         id: 2,
    //         name: "Others",
    //         sections: [
    //           {
    //             id: 2,
    //             name: "Others 1",
    //             items: [
    //               {
    //                 id: 1,
    //                 item_name: "Wash and Iron",
    //                 item_unit: "kg",
    //                 unit_price: 70,
    //               },
    //               {
    //                 id: 2,
    //                 item_name: "Wash and Steam Iron",
    //                 item_unit: "kg",
    //                 unit_price: 100,
    //               },
    //             ],
    //           },
    //           {
    //             id: 3,
    //             name: "Others 2",
    //             items: [
    //               {
    //                 id: 3,
    //                 item_name: "Shirt",
    //                 item_unit: "piece",
    //                 unit_price: 70,
    //               },
    //               {
    //                 id: 4,
    //                 item_name: "Pant",
    //                 item_unit: "piece",
    //                 unit_price: 80,
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     id: 3,
    //     name: "Ecorinse 3",
    //     steps: [
    //       {
    //         id: 3,
    //         name: "Women",
    //         sections: [
    //           {
    //             id: 4,
    //             name: "Regular",
    //             items: [
    //               {
    //                 id: 5,
    //                 item_name: "Wash and Iron",
    //                 item_unit: "kg",
    //                 unit_price: 70,
    //               },
    //               {
    //                 id: 6,
    //                 item_name: "Wash and Steam Iron",
    //                 item_unit: "kg",
    //                 unit_price: 100,
    //               },
    //             ],
    //           },
    //           {
    //             id: 5,
    //             name: "Men",
    //             items: [
    //               {
    //                 id: 1,
    //                 item_name: "Shirt",
    //                 item_unit: "piece",
    //                 unit_price: 70,
    //               },
    //               {
    //                 id: 2,
    //                 item_name: "Pant",
    //                 item_unit: "piece",
    //                 unit_price: 80,
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // ],
    isLoading: "",
    error: "",
  },
  reducers: {
    addTemplate: (state, action) => {
      state.response = action.payload.newTemplate;
    },

    updateTemplate: (state, action) => {
      if (state.response?.id === action.payload.templateId) {
        state.response.name = action.payload.name;
      }
    },

    deleteTemplate: (state, action) => {
      if (state.response?.id === action.payload.templateId) {
        state.response = null;
      }
    },
    addStep: (state, action) => {
      if (state.response?.id === action.payload.templateId) {
        state.response.steps.push(action.payload.newStep);
      }
    },

    updateStep: (state, action) => {
      if (state.response?.id === action.payload.templateId) {
        const step = state.response.steps.find(
          (step) => step.id === action.payload.stepId,
        );

        if (step) {
          Object.assign(step, action.payload.stepDetails);
        }
      }
    },

    deleteStep: (state, action) => {
      if (state.response?.id === action.payload.templateId) {
        state.response.steps = state.response.steps.filter(
          (step) => step.id !== action.payload.stepId,
        );
      }
    },
    addSection: (state, action) => {
      if (state.response?.id === action.payload.templateId) {
        const step = state.response.steps.find(
          (step) => step.id === action.payload.stepId,
        );

        if (step) {
          step.sections.push(action.payload.newSection);
        }
      }
    },
    updateSection: (state, action) => {
      if (state.response?.id === action.payload.templateId) {
        const step = state.response.steps.find(
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
      if (state.response?.id === action.payload.templateId) {
        const step = state.response.steps.find(
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
      if (state.response?.id === action.payload.templateId) {
        const step = state.response.steps.find(
          (step) => step.id === action.payload.stepId,
        );
        if (step) {
          const section = step.sections.find(
            (section) => section.id === action.payload.sectionId,
          );

          if (section) {
            section.items.push(action.payload.newItem);
          }
        }
      }
    },
    updateItem: (state, action) => {
      if (state.response?.id === action.payload.templateId) {
        const step = state.response.steps.find(
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
      if (state.response?.id === action.payload.templateId) {
        const step = state.response.steps.find(
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
      .addCase(getTemplate.pending, (state, action) => {
        ((state.response = []), (state.error = ""), (state.isLoading = true));
      })
      .addCase(getTemplate.fulfilled, (state, action) => {
        ((state.response = action.payload),
          (state.error = ""),
          (state.isLoading = false));
      })
      .addCase(getTemplate.rejected, (state, action) => {
        ((state.response = []),
          (state.error = action.payload),
          (state.isLoading = false));
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
