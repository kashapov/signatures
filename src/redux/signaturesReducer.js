const CHECKED = 'CHECKED';
const UNCHECKED = 'UNCHECKED';
const SET_SIGNATURES = 'SET_SIGNATURES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const DELETE_SIGNATURE = 'DELETE_SIGNATURE';

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
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case DELETE_SIGNATURE:
      return {
        ...state,
        signatures: state.signatures.filter(
          signature => signature.id !== action.signatureId,
        ),
      };
    default:
      return state;
  }
};

// Action Creators
export const setChecked = signatureId => ({ type: CHECKED, signatureId });
export const setUnchecked = signatureId => ({ type: UNCHECKED, signatureId });
export const setSignatures = signatures => ({
  type: SET_SIGNATURES,
  signatures,
});
export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const deleteSignature = signatureId => ({
  type: DELETE_SIGNATURE,
  signatureId,
});

export default signaturesReducer;
