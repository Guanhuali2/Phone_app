import React, { Component } from 'react';
import { StyleSheet, Image,Text, View } from 'react-native';
import {ProfileFetch} from './ProfileFetch.js'
/*
View page for Profile
*/
class Profile extends Component {
  constructor(props) {
    super(props);
    const accessToken = '';
    this.profile = new ProfileFetch(accessToken)

    this.state = {
      loading: true
    }
    this.getFile();
  }

  async getFile(){
    const temp = await this.profile.file();
    if (temp == "failed"){
      this.setState({ hasError: true });
      return;
    }
    const body = this.profile.getState();
    this.setState({
      loading: false
    })
    try{
      this.setState({
        name: body.name,
        bio: body.bio,
        twitter: body.twitter,
        avatarUrl: body.avatarUrl,
        location: body.location,
        url: body.url,
        create: body.created,
        countres: body.countres,
        countfw: body.countfw,
        countfi: body.countfi
      })
    }
    catch(error){
      this.setState({ hasError: true });
    }
  }
  /*
  render the view page
  */
  render() {
    let normalView;
    //check if the page has error or not
    if(this.state.hasError){
      //if error found, it will show invalid warning
      normalView = (<View>
        <Text key='names' style={styles.titleText}>Invalid Profile Page</Text>
      </View>)
    }else{
      normalView = (<View style={styles.container}>
        <Image style={styles.tinyLogo} source={this.state.avatarUrl} />
        <Text key='names' style={styles.titleText}>{this.state.name}</Text>
        <Text key='bio' style={styles.titleText}>{this.state.bio}</Text>
        <Text key='username' style={styles.titleText}>{this.state.twitter}</Text>
        <Text key='location' style={styles.titleText}>{this.state.location}</Text>
        <Text key='website' style={styles.titleText}>{this.state.url}</Text>
        <Text key='create' style={styles.titleText}>{this.state.create}</Text>
        <Text key='countcou' style={styles.titleText}>{this.state.countres}</Text>
        <Text key='countfw' style={styles.titleText}>{this.state.countfw}</Text>
        <Text key='countfi' style={styles.titleText}>{this.state.countfi}</Text>
      </View>)
    }
    return (
      <View style={styles.container}>
        {this.state.loading ? <Text style={styles.titleText}>loading..</Text> : normalView}
        {/* {normalView} */}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
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
})
export default Profile

