import React from 'react'
import { Block, Text } from "./";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
  } from "react-native";

const Activity = ({ data }) => {
    return (
            <Block card shadow color="white" style={styles.headerChart}>
                <Block flex={false} center>
                    <Text title>{data.time}</Text>
                </Block>
            <Block style={{ marginTop: 20 }}>
            <Block
                flex={0.7}
                row
                center
                middle
            >
                <Text h1 bold style={styles.title}>
                {data.steps}
                </Text>
                <Text body gray style={styles.subtitle}>
                Steps
                </Text>
            </Block>
            <Block
                flex={0.7}
                row
                center
                middle
                style={{ marginLeft: 20 }}
            >
                <Text h1 bold style={styles.title}>
                {data.miles}
                </Text>
                <Text body gray style={styles.subtitle}>
                Miles
                </Text>
            </Block>
            <Block
                flex={0.5}
                row
                center
                middle
                style={{ marginLeft: 60 }}
            >
                <Text h1 bold style={styles.title}>
                {data.minutes}
                </Text>
                <Text body  gray style={styles.subtitle}>
                Minutes
                </Text>
            </Block>
            </Block>
            </Block>
    )
}

const styles = StyleSheet.create({
    headerChart: {
      paddingTop: 20,
      paddingBottom: 20,
      zIndex: 1,
      width: 250,
      height: 230,
      marginLeft: 20
    },
    title: {
        marginRight: 20
    },
    subtitle: {
        marginTop: 10
    }
})
export default Activity
