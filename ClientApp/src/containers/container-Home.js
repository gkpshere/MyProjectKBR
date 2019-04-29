import Home from '../components/Home';
import { connect } from 'react-redux';
import { actionCreators }  from '../action/action-saveContactDetails'

import { bindActionCreators } from 'redux'

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(actionCreators, dispatch)

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer;