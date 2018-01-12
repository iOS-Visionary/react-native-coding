/**
 * Created by yixue on 2018/1/9.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    NavigatorIOS
} from 'react-native';
import Project from './ProjectView'


export default class ProjectRoot extends Component<{}> {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                itemWrapperStyle={'blue'}
                initialRoute = {{
                    title:'首页',
                    component:Project,
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop:0,
    },

});


