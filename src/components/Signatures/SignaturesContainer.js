import React from 'react';
import { connect } from 'react-redux';

import {
  checkSignature,
  uncheckSignature,
  deleteSignature,
  getSignatures,
} from '../../redux/signaturesReducer';
import Signatures from './Signatures';
import Spinner from '../Spinner/Spinner';

class SignaturesContainer extends React.PureComponent {
  componentDidMount() {
    this.props.getSignatures();
  }

  render() {
    const {
      signatures,
      checkSignature,
      uncheckSignature,
      isFetching,
      deleteSignature,
      checkedSignatures,
    } = this.props;

    return (
      <>
        {isFetching ? <Spinner /> : null}
        <Signatures
          signatures={signatures}
          checkSignature={checkSignature}
          uncheckSignature={uncheckSignature}
          deleteSignature={deleteSignature}
          checkedSignatures={checkedSignatures}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    signatures: state.signaturesPage.signatures,
    isFetching: state.signaturesPage.isFetching,
    checkedSignatures: state.signaturesPage.checkedSignatures,
  };
};

export default connect(
  mapStateToProps,
  {
    checkSignature,
    uncheckSignature,
    deleteSignature,
    getSignatures,
  },
)(SignaturesContainer);
