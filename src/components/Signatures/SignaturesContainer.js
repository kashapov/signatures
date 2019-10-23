import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';

import {
  setCheckedAC,
  setUncheckedAC,
  setSignaturesAC,
} from '../../redux/signaturesReducer';
import Signatures from './Signatures';

class SignaturesContainer extends React.PureComponent {
  componentDidMount() {
    axios.get('/signatures.json').then(response => {
      this.props.setSignatures(response.data.signatures);
    });
  }

  render() {
    const { signatures, setChecked, setUnchecked } = this.props;

    return (
      <Signatures
        signatures={signatures}
        setChecked={setChecked}
        setUnchecked={setUnchecked}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    signatures: state.signaturesPage.signatures
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignaturesContainer);
