import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';

import {
  setChecked,
  setUnchecked,
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
    const { signatures, setChecked, setUnchecked, isFetching, deleteSignature } = this.props;

    return (
      <>
        {isFetching ? <Spinner /> : null}
        <Signatures
          signatures={signatures}
          setChecked={setChecked}
          setUnchecked={setUnchecked}
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
    setChecked,
    setUnchecked,
    setSignatures,
    toggleIsFetching,
    deleteSignature,
  },
)(SignaturesContainer);
