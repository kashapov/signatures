const CHECK_SIGNATURE = 'CHECK_SIGNATURE';
const UNCHECK_SIGNATURE = 'UNCHECK_SIGNATURE';
const SET_SIGNATURES = 'SET_SIGNATURES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const DELETE_SIGNATURE = 'DELETE_SIGNATURE';
const DELETE_CHECKED_SIGNATURES = 'DELETE_CHECKED_SIGNATURES';

let initialState = {
  signatures: [],
  checkedSignatures: [1, 3],
  isFetching: true,
};

const signaturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGNATURES:
      return {
        ...state,
        signatures: action.signatures,
      };
    case CHECK_SIGNATURE:
      return {
        ...state,
        signatures: state.signatures.map(s => {
          if (s.id === action.signatureId) {
            return { ...s, isChecked: true };
          }
          return s;
        }),
      };
    case UNCHECK_SIGNATURE:
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
    case DELETE_CHECKED_SIGNATURES:
      return {
        ...state,
        signatures: state.signatures.filter(
          signature => !state.checkedSignatures.includes(signature.id),
        ),
        checkedSignatures: [],
      };
    default:
      return state;
  }
};

// Action Creators
export const checkSignature = signatureId => ({
  type: CHECK_SIGNATURE,
  signatureId,
});
export const uncheckSignature = signatureId => ({
  type: UNCHECK_SIGNATURE,
  signatureId,
});
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
export const deleteCheckedSignatures = () => ({
  type: DELETE_CHECKED_SIGNATURES,
});

export default signaturesReducer;
