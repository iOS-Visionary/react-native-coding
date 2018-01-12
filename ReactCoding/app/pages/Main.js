/**
 * Created by yixue on 2018/1/9.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TabBarIOS
} from 'react-native';

import Project from './ProjectRoot'
import Tweet from './TweetRoot'
import * as Colors from '../constants/Colors'

export default class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            seletedTabBarItem:'project',
        }
    }
    render(){
        return(
            <TabBarIOS tintColor={Colors.APP_THEME_COLOR}>
                <TabBarIOS.Item
                    renderAsOriginal={true}
                    icon={{uri:'task_normal.png', scale:3}}
                    selectedIcon={{uri:'task_selected.png', scale:3}}
                    title='任务'
                    selected={this.state.seletedTabBarItem == 'project'}
                    onPress={() => this.setState({seletedTabBarItem:'project'})}
                >
                    <Project/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                    renderAsOriginal={true}
                    icon={{uri:'tweet_normal.png', scale:3}}
                    selectedIcon={{uri:'tweet_selected.png', scale:3}}
                    title='冒泡'
                    selected={this.state.seletedTabBarItem == 'task'}
                    onPress={() => this.setState({seletedTabBarItem:'task'})}
                >
                    <Tweet/>
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
}