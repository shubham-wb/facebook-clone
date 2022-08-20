import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
const PrivateRoute = (props) => {
  const from = props.History.pathname;
  return props.auth.isLoggedin ? (
    props.children
  ) : (
    <Navigate to="/login" state={from}></Navigate>
  );
};
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(PrivateRoute);

//connect redux store se private route ko jod rha hai