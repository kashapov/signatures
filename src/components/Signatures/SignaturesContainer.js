import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';

import {
  checkSignature,
  uncheckSignature,
  setSignatures,
  toggleIsFetching,
  deleteSignature,
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
    const { signatures, checkSignature, uncheckSignature, isFetching, deleteSignature } = this.props;

    return (
      <>
        {isFetching ? <Spinner /> : null}
        <Signatures
          signatures={signatures}
          checkSignature={checkSignature}
          uncheckSignature={uncheckSignature}
          deleteSignature={deleteSignature}
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

export default connect(
  mapStateToProps,
  {
    checkSignature,
    uncheckSignature,
    setSignatures,
    toggleIsFetching,
    deleteSignature,
  },
)(SignaturesContainer);
