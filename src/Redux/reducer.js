const initialState = {
  historyData: [
    {
      id: 0,
      area: "",
      time: "",
      city: "",
      country: "",
    },
  ],
  weatherData: {
    area: "",
    weather: "",
    desc: "",
    tempMin: 0,
    tempMax: 0,
    humidity: 0,
    time: "",
  },
  show: true
}

function nextDataId(datas) {
  const maxId = datas.reduce((maxId, data) => Math.max(data.id, maxId), -1)
  return maxId + 1
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case 'addHistory': {
      return {
        ...state,
        historyData: [
          ...state.historyData,
          {
            id: nextDataId(state.historyData),
            area: action.payload.area,
            time: action.payload.time,
            city: action.payload.city,
            country: action.payload.country,
          }
        ]
      }
    }
    case 'deleteHistory': {
      var dataArr = state.historyData;
      var filtered = dataArr.filter(function (data, index, arr) {
        return data.id !== action.payload;
      });
      return {
        ...state,
        historyData: filtered
      }
    }
    default:
      return state
  }
}