import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MAIN_SCREEN, PROFILE_SCREEN } from 'constants/screens';
import strings from 'localization';

import MainScreen from 'screens/MainScreen';
import ProfileScreen from 'screens/ProfileScreen';
import HeaderButton from 'components/common/HeaderButton';

import conversationsIcon from 'assets/icons/conversations.png';
import profileIcon from 'assets/icons/profile.png';
import arrowRightIcon from 'assets/icons/arrow-right.png';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={MAIN_SCREEN}
      component={MainScreen}
      options={({ navigation }) => ({
        title: strings.MAIN.title,
        headerStyle: { height: 110 },
        headerTitleStyle: { fontSize: 13, letterSpacing: 1.95 },
        headerLeft: () => (
          <HeaderButton
            icon={profileIcon}
            onPress={() => navigation.navigate(PROFILE_SCREEN)}
            style={{
              marginLeft: 12,
              width: 23,
            }}
          />
        ),
        headerRight: () => (
          <HeaderButton
            icon={conversationsIcon}
            onPress={() => {}}
            style={{
              marginRight: 10,
              width: 28,
            }}
          />
        ),
      })}
    />
    <Stack.Screen
      name={PROFILE_SCREEN}
      component={ProfileScreen}
      options={({ navigation }) => ({
        title: strings.PROFILE.title,
        headerStyle: { height: 110, shadowColor: 'transparent' },
        headerTitleStyle: { fontSize: 13, letterSpacing: 1.95 },
        gestureDirection: 'horizontal-inverted',
        headerLeft: () => null,
        headerRight: () => (
          <HeaderButton
            icon={arrowRightIcon}
            onPress={() => navigation.goBack()}
            style={{
              marginRight: 21,
              width: 10,
            }}
          />
        ),
      })}
    />
  </Stack.Navigator>
);

export default AppStack;
