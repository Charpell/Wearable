import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
  Dimensions,
  StatusBar
} from "react-native";
import * as Font from "expo-font";
import 'react-native-gesture-handler';
import LeaderBoard from './components/LeaderBoard'

const width = Dimensions.get("window").width


import { Block, Text } from "./components";
import * as theme from "./theme";
import * as mocks from "./mocks";
import Activity from './components/Activity'
import { Feather, AntDesign } from '@expo/vector-icons'
import { Asset } from "expo-asset"
import { AppLoading, Icon } from "expo"

console.disableYellowBox = false

class App extends Component {
  state = {
    isLoadingComplete: false
  }

  _loadResourcesAsync = async () => {
    const cacheImages = mocks.images.map(image => {
      return Asset.fromModule(image).downloadAsync()
    })
    return Promise.all([
      cacheImages,
      Font.loadAsync({
        "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
        "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
        "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
        "Phosphate-Inline-Regular": require("./assets/fonts/Phosphate-Inline-Regular.otf"),
        "Phosphate-Solid-Regular": require("./assets/fonts/Phosphate-Solid-Regular.otf"),
        "PhosphatePro-Inline": require("./assets/fonts/PhosphatePro-Inline.otf"),
        "PhosphatePro-Solid": require("./assets/fonts/PhosphatePro-Solid.otf")
      })
    ])
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };



  renderHeader() {
    const { activity } = this.props
    return (
      <>
      <Block flex={0.3} column style={{ paddingHorizontal: 15, backgroundColor: theme.colors.primary, height: 250 }}>
        <Block flex={false} row style={{ paddingVertical: 15 }}>
          <Block center row>
            <Block flex={false} color="#3d3d3d" style={{ padding: 5, borderRadius: 5, marginRight: 20 }}>
              <Feather name="menu" color="white" size={30} />
            </Block>
            <Text h1 white inline style={{ marginRight: -(25 + 5) }}>
              PALESTRA
            </Text>
          </Block>
        </Block>
        <Block flex={false} style={{ marginTop: 40, marginLeft: 20 }}>
          <Text h3 white >Your Activity</Text>
        </Block>
      </Block>

      <ScrollView
            style={{
              flexDirection: "row",
              padding: 20,
              paddingLeft: 12,
              paddingTop: 20,
              position: "absolute",
              top: 120
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
          {activity.map((data, index) => (
            <Activity key={index} data={data} />
          ))}
        </ScrollView>
      </>
    );
  }

  
  renderDots() {
    return (
        <Block flex={false}>
          <Block flex={false} color="gray2" style={{ position: "absolute", left: width /2, top: 40}}>
          <Text>Render Dots</Text>
        </Block>
        </Block>
    )
  }

  renderChallenge() {

    return (
      <Block flex={0.6} column style={styles.requests}>
        <Block style={styles.challenge}>
            <Block flex={false} style={{ marginTop: 10 }}>
              <Text style={{ marginLeft: 20 }} semibold h3 white bold>CHALLENGES</Text>
              <TouchableOpacity>
                <Block flex={false} row color="gray" style={{ width: '30%', padding: 5, borderRadius: 10, position: "absolute", right: 20 }}>
                  <AntDesign name="plus" size={15} color="#000000" />
                  <Text style={{ marginLeft: 20 }}>Join/Create</Text>
                </Block>
              </TouchableOpacity>
              <Block row flex={false} style={{  marginTop: 50, alignItems: "center", justifyContent: "space-around" }}>
                <Text white caption>{'0 ACTIVE'}</Text>
                <Text white caption>{'0 UPCOMINGS'}</Text>
                <Text white caption>{'0 COMPLETED'}</Text>
              </Block>
            </Block>
        </Block>
      </Block>
    );
  }
  

  leaderBoard() {
    const { users } = this.props
    return (
      <Block flex={false}>
        <Block style={{ margin: 20 }}>
          <Block center>
            <Text h3>Leader Board</Text>
          </Block>
          <Block row center style={{ marginVertical: 20 }}>
            <Text title  gray>Challenge:</Text>
            <Text h1 center style={{ marginLeft: 40 }}>{"10,000"}</Text>
            <Text style={{ marginLeft: 20, marginTop: 10 }} gray  caption>Steps</Text>
          </Block>
          <Block center style={{ borderBottomWidth: 1,
          borderBottomColor: theme.colors.gray, paddingBottom: 20 }}>
            <Text gray  style={{  marginTop: 20 }}>WEDNESDAY, APRIL 22</Text>
          </Block>
        </Block>
        {users.map((data, index) => (
          <LeaderBoard index={index} data={data} />
        ))}
      </Block>
    )
  }

  renderBadge() {

    return (
      <Block flex={0.6} column style={styles.badge}>
            <Block flex={false} style={{ width: '70%', marginLeft: 20 }}>
              <Text  h3>Badges</Text>
            </Block>
          <Block flex={false} row space="between">
            <Block center middle>
              <Image source={require("././assets/Dumbell.png")} style={{ marginTop: 20 }} />
              <Text style={{ marginTop: 5 }}>1000</Text>
            </Block>
            <Block center middle>
              <Image source={require("././assets/medal.png")} style={{ marginTop: 20 }} />
              <Text style={{ marginTop: 5 }}>2000</Text>
            </Block>
            <Block center middle>
              <Image source={require("././assets/Rocket.png")} style={{ marginTop: 20 }} />
              <Text style={{ marginTop: 5 }}>3000</Text>
            </Block>
          </Block>
      </Block>
    );
  }

  renderMood() {
    return (
      <Block row center style={{ backgroundColor: theme.colors.primary, height: 250}}>
        <Block flex={false} style={{ marginLeft: 20, width: "40%" }}>
          <Text white title>Set a Mood and pick a challenge</Text>
        </Block>
        <Block flex={false} style={{ marginLeft: 30 }}>
          <Image source={require('./assets/lion.png')} style={{ width: 150, height: 150 }} />
          <Text white h2>{'3,000 steps'}</Text>
        </Block>
      </Block>
    )
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }

    return (
      <SafeAreaView style={styles.safe}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <ScrollView style={styles.scroll}>
          {this.renderHeader()}
          {this.renderChallenge()}
          {this.leaderBoard()}
          {this.renderMood()}
        </ScrollView>
      </SafeAreaView>
    );
  }

}

export default App

App.defaultProps = {
  user: mocks.user,
  activity: mocks.activity,
  users: mocks.users
};



const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.primary
  },
  scroll: {
    flex: 1,
    backgroundColor: theme.colors.gray2
  },
  requests: {
    paddingTop: 55 + 20,
    paddingHorizontal: 15,
    zIndex: -1,
    marginTop: 250
  },
  requestsHeader: {
    paddingHorizontal: 20,
    paddingBottom: 15
  },
  challenge: {
    position: "absolute",
    width,
    height: 120,
    bottom: 0,
    backgroundColor: theme.colors.primary
  },
  badge: {
    marginTop: 20,
    borderBottomWidth: 1,
        borderBottomColor: theme.colors.gray,
        paddingBottom: 50
  }
});
