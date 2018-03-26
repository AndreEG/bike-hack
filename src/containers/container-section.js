import { connect } from 'react-redux';
import Section from '../components/Section';

function mapStateToProps(state){
 return { mapa : state.mapita }
}
 

export default connect(mapStateToProps)(Section)