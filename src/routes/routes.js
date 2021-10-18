import React from 'react';
//screens
import HomeScreen from '../screens/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import JSLevelScreen from '../screens/JSlevel';

const routes = {
    '/': () => <HomeScreen/>,
    '/Quiz': () => <QuizScreen/>,
    '/JSLevels': () => <JSLevelScreen/>
}

export default routes;
