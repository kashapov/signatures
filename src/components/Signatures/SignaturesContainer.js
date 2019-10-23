import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';

import {
  setCheckedAC,
  setUncheckedAC,
  setSignaturesAC,
  toggleIsFetchingAC,
} from '../../redux/signaturesReducer';
import Signatures from './Signatures';
import Spinner from '../Spinner/Spinner';

class SignaturesContainer extends React.PureComponent {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get('/signatures.json').then(response => {
      this.props.toggleIsFetching(false);
      this.props.setSignatures(response.data.signatures);
    });
  }

  render() {
    const { signatures, setChecked, setUnchecked, isFetching } = this.props;

    return (
      <>
        {isFetching ? <Spinner /> : null}
        <Signatures
          signatures={signatures}
          setChecked={setChecked}
          setUnchecked={setUnchecked}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    signatures: state.signaturesPage.signatures,
    isFetching: state.signaturesPage.isFetching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setChecked: signatureId => {
      dispatch(setCheckedAC(signatureId));
    },
    setUnchecked: signatureId => {
      dispatch(setUncheckedAC(signatureId));
    },
    setSignatures: signatures => {
      dispatch(setSignaturesAC(signatures));
    },
    toggleIsFetching: isFetching => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignaturesContainer);
