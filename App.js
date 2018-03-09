import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView,TextInput,KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Notes from './componenets/Notes';

export default class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      noteArray : [],
      noteText : '',
    }
  }

  render() {

    
    let notes = this.state.noteArray.map((val,key) =>{
          return <Notes key={key} keyval={key} val={val} delete={()=> this.delete(key)}/>
    });

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>TODO</Text>
        </View>
        <ScrollView style={styles.items}>
            {notes}
        </ScrollView>

        <View  style={styles.footer}>

          <TextInput placeholder="Add Item" underlineColorAndroid="transparent"
          placeholderTextColor="black"  style={styles.addItemTextInput}
          onChangeText = {(noteText) => this.setState({noteText})}
          value = {this.state.noteText}
          returnKeyType="done"
          autoCapitalize="words"
          
          ></TextInput>
          <TouchableOpacity  onPress={this.add.bind(this)}>
            <View style={styles.btnContainer}>
            <Text style={styles.addbutton}>ADD</Text>
            </View>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    );
  }

  add(){
   if(this.state.noteText){
      let date = new Date().getFullYear() + '/' + (new Date().getMonth()+1) +'/' + new Date().getDate();
      this.state.noteArray.push({
        'text': this.state.noteText,
        'date': date,
        
      });
   }

   this.setState({noteArray: this.state.noteArray})
    this.setState({noteText:''})
  }

  delete(key){
   
    this.state.noteArray.splice(key,1);
    this.setState({noteArray: this.state.noteArray})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 50,
    width: '100%',
    backgroundColor: '#64B5F6',
    alignItems: 'center',
    padding: 5,
    marginTop: 22,
    borderBottomWidth: 5,
    borderBottomColor: '#ddd',

  },
  headerText : {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  items : {
    flex: 1,
    width: '100%',
    backgroundColor: '#c1c1c1',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    backgroundColor: '#64B5F6',
    padding: 5,
    borderTopWidth: 5,
    borderTopColor: '#ddd',

  },
  addItemTextInput : {
    width: '85%',
    height: '95%',
    backgroundColor:'#fff',
    margin : 2,
    paddingHorizontal : 10,
    borderRadius:10,
  },
  addbutton: {
    color: 'black',
    fontWeight:'bold',

  },
  btnContainer : {
    width: 40,
    height: 40,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 20,
    backgroundColor:'#e1e1e1',
    marginLeft: 1,
  }

});
