import React from 'react'
import {Text,View,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import InfoBar from './infoBar'
import MenuBar from './MenuBar'
import GraphicGame from './GraphicGame'
import { connect } from 'react-redux'

const DELAY = 10000

class Game extends React.Component {
  componentDidMount(){
     this.myInterval = setInterval(() => {
       this.changePrix();
     }, DELAY)
 }
 changePrix(){
   const action = { type: "CHANGE_PRIX"}
   this.props.dispatch(action)
 }
  render() {
    const {navigate} = this.props.navigation;
    return (
    	<View style={styles.game}>
        <InfoBar navigation={navigate}/>
        <GraphicGame/>
        <MenuBar navigation={navigate}/>
    	</View>
    );
  }
}
const styles = StyleSheet.create({
  game: {
  	backgroundColor: '#273751',
    flex: 1

  }
});

const mapStateToProps = (state) => {
  return {
    lingots: state.lingots,
    entrepot: state.entrepot
  }
}

export default connect(mapStateToProps)(Game)