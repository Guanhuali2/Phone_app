import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RepositoryFetch} from './RepositoryFetch.js'

/*
Repository view class
*/
class Repository extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
    const accessToken = '';
    this.res = new RepositoryFetch(accessToken);
    this.getFile();
  }
  /*
  get fetch result from model class, change state
  */
  async getFile(){
    const temp = await this.res.file();
    //if error found , report to the class state
    if (temp == "failed"){
      this.setState({ hasError: true });
      return;
    }
    const body = this.res.getfile();
    this.setState({
      loading:false
    })
    //if error found report to the class state
    try{
    this.setState({
      responsitory: body.responsitory
    })
    }
    catch(error){
      this.setState({ hasError: true });
    }
  }
  /*
  iteration to create list
  */
  iteratedict() {
    if (!this.state.responsitory) return null;
    return Object.keys(this.state.responsitory).map((keys) => (
      <View key={keys +'0'}  style={styles.container}>        
        <Text key= {keys +'4'} style={styles.titleText}>{this.state.responsitory[keys].name}</Text>  
        <Text key= {keys +'3'} style={styles.titleText}>{this.state.responsitory[keys].url}</Text>  
        <Text key= {keys +'2'} style={styles.titleText}>{this.state.responsitory[keys].owner.login}</Text>  
        <Text key= {keys +'1'} style={styles.titleText}>{this.state.responsitory[keys].description}</Text>  
      </View>
    )
    )
  }

  render() {
    let normalView;
    //if error found, print invalid page
    if(this.state.hasError){
      normalView = (<View keys = "haha">
        <Text key='names' style={styles.titleText}>Invalid Profile Page</Text>
      </View>)
    }else{
      normalView = (          
      <View keys="haha2" style={styles.container}>
        {this.iteratedict()}
      </View>)
    }

    return (
      <View keys="laji" style={styles.container}>
        {this.state.loading ? <Text style={styles.titleText}>loading..</Text> : normalView}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  titleText: {
    fontSize: 12,
    fontWeight: "bold"
  }
})
export default Repository