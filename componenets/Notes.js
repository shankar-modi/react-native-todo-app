import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity  } from 'react-native';

export default class Notes extends React.Component {
  render() {
    return (
          
          <View style={styles.notes} key={this.props.keyval}>
              <View style={styles.description}>
                <Text numberOfLines={1} style={styles.itemdescription}>{this.props.val.text}</Text>
                <Text style={styles.itemdate}>{this.props.val.date}</Text>
              </View>
              <View style={styles.done}>
              <TouchableOpacity  onPress={this.props.delete}>
                <Text>Delete</Text>
                </TouchableOpacity>
              </View>
          </View>
    );
  }

  add(){
    alert("Note added");
  }
}

const styles = StyleSheet.create({
  
  notes : {
    flex: 1,
    height: 80,
    backgroundColor: 'white',
    marginBottom: 3,
    flexDirection: 'row',
    paddingVertical: 20,
    paddingLeft: 10,
    
  
  },
  description : {
    flex: 3,
  },
  done : {
    flex: 1,
    paddingVertical: 15,
  
  },
  itemdescription:{
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemdate : {
    color: 'black',
    fontSize: 14,
    marginTop:5,
  }



});
