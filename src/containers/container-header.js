import { connect } from 'react-redux';
import Header from '../components/Header';

function mapStateToProps(state){
 return { header : state.myHeader }
}
 

export default connect(mapStateToProps)(Header)