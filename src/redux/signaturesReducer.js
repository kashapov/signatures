const CHECKED = 'CHECKED';
const UNCHECKED = 'UNCHECKED';
const SET_SIGNATURES = 'SET_SIGNATURES';

let initialState = {
  signatures: [],
  isFetching: true,
};

const signaturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGNATURES:
      return {
        ...state,
        signatures: action.signatures,
      };
    case CHECKED:
      return {
        ...state,
        signatures: state.signatures.map(s => {
          if (s.id === action.signatureId) {
            return { ...s, isChecked: true };
          }
          return s;
        }),
      };
    case UNCHECKED:
      return {
        ...state,
        signatures: state.signatures.map(s => {
          if (s.id === action.signatureId) {
            return { ...s, isChecked: false };
          }
          return s;
        }),
      };
    default:
      return state;
  }
};

// Action Creators
export const setCheckedAC = signatureId => ({ type: CHECKED, signatureId });
export const setUncheckedAC = signatureId => ({ type: UNCHECKED, signatureId });
export const setSignaturesAC = signatures => ({
  type: SET_SIGNATURES,
  signatures,
});

export default signaturesReducer;
