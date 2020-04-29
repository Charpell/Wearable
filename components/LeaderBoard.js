import React from 'react'
import { Block, Text } from "./";
import { Image, StyleSheet, Dimensions } from "react-native"
import { FontAwesome } from '@expo/vector-icons'

const width = Dimensions.get("window").width 
const LeaderBoard = ({ data, index }) => {
    return (
        <Block flex={false} row style={styles.item}>
            <Block flex={false} style={{ marginLeft: 15 }}>
                <Image source={data.picture} style={{ marginTop: 20, width: 50, height: 50 }} />
                <Text style={{ margin: 10, color: "#0000FF" }}>{data.name}</Text>
            </Block>
            <Block flex={false} style={{ marginLeft: 15, width: "40%" }}>
                <Text gray h3>{data.steps}</Text>
                <Text gray>{data.avg} &#xb7; {data.time}</Text>
            </Block>
            <Block flex={false} style={{ marginLeft: 20 }}>
                { index === 0 ? <Image source={require('../assets/trophy.png')}  style={{ width: 70, height: 70 }} /> : null }
            </Block>
            <Block flex={false} style={{ position: "absolute", right: 15 }}>
                <FontAwesome name="angle-right" size={30} />
            </Block>
        </Block>
    )
}

const styles = StyleSheet.create({
    item: {
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#D9D2D2",
        width
    }
})

export default LeaderBoard
