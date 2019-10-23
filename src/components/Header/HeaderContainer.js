import React from 'react';
import { connect } from 'react-redux';

import { deleteCheckedSignatures } from '../../redux/signaturesReducer';
import Header from './Header';

class HeaderContainer extends React.PureComponent {
  render() {
    const { checkedSignatures, deleteCheckedSignatures } = this.props;

    return (
      <Header
        checkedSignatures={checkedSignatures}
        deleteCheckedSignatures={deleteCheckedSignatures}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    checkedSignatures: state.signaturesPage.checkedSignatures,
  };
};

export default connect(
  mapStateToProps,
  {
    deleteCheckedSignatures,
  },
)(HeaderContainer);
