import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Details from './pages/Detail';
import Incidents from './pages/Incidents';
const AppStack  = createStackNavigator();


export default () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator  headerMode="none">
                 <AppStack.Screen name="Incidents" component={Incidents} />
                 <AppStack.Screen name="Details" component={Details} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};