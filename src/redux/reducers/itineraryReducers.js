export const updateItineraryNameReducer = (state, action) => {
  const { itineraryId, name } = action.payload;
  state.itineraries = state.itineraries.map((i) =>
    i.id === itineraryId ? { ...i, name } : i
  );
};

export const updateItinerarySummaryReducer = (state, action) => {
  const { itineraryId, summary } = action.payload;
  state.itineraries = state.itineraries.map((i) =>
    i.id === itineraryId ? { ...i, summary } : i
  );
};
