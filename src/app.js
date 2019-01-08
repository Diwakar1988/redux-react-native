import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import {fetchPeopleFromAPI} from './actions'

let styles
const App = (props) => {
  const{
    container,
    text,
    button,
    buttonText
  } = styles

  const {people,isFetching} = props.people

  return (
        <View style={container}>
            <Text style={text}>Star War People</Text>
            <TouchableHighlight style={button} onPress={props.getPeople}>
              <Text style={buttonText}>Fetch Data</Text>
            </TouchableHighlight>
            {
              isFetching && <Text>Loading...</Text>
            }
            {
              people.length ? (
                people.map((person,index)=>{
                  return(
                    <View key={index}>
                      <Text>Name: {person.name}</Text>
                      <Text>Birth Year: {person.birth_year}</Text>
                    </View>
                  )
                })
              ) : null
            }
        </View>
  )

}

styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginTop: 20,
    marginTop: 20
  },
  text:{
    textAlign:'center'
  },
  button:{
    backgroundColor: '#0000FF',
    height: 60,
    justifyContent:'center',
    alignContent:'center',
  },
  buttonText:{
    color:'#FFFFFF'
  }
});

function mapStateToProps(state){
  return {
    people : state.people
  }
}
function mapDispatchToProps(dispatch){
  return {
    getPeople: ()=> dispatch(fetchPeopleFromAPI())
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (App)