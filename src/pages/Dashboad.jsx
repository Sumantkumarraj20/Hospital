import Layout from '../hocs/Layout'
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';


function Dashboad(props) {
  const {isAuthenticated} = props;
  if(!isAuthenticated){
    return <Navigate to='/login'/>;
  }
  return (
    <Layout>
      <div>
        Dashboad
      </div>
    </Layout>
   
  );
}

const mapStateToProps = state => ({
  user: state.rootReducer.auth.user,
  isAuthenticated: state.rootReducer.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Dashboad);
