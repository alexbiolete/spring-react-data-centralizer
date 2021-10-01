import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Dashboard from './views/Dashboard';
import ImportForm from './views/ImportForm';
import GeneratedTable from './views/GeneratedTable';
import FirstTable from './views/FirstTable';
import SecondTable from './views/SecondTable';

type TabParamList = {
  Dashboard: undefined;
  Generated: undefined;
  FirstStackScreen: undefined;
  SecondStackScreen: undefined;
};

type FirstStackParamList = {
  First: undefined;
  Import: undefined;
};

type SecondStackParamList = {
  Second: undefined;
  Import: undefined;
}

const Tab = createBottomTabNavigator<TabParamList>();
const FirstStack = createNativeStackNavigator<FirstStackParamList>();
const SecondStack = createNativeStackNavigator<SecondStackParamList>();

const App: React.FC = () => {
  const [generatedTableData, setGeneratedTableData] = React.useState([]);
  const [firstTableData, setFirstTableData] = React.useState([]);
  const [secondTableData, setSecondTableData] = React.useState([]);

  const FirstStackScreen: React.FC = () => {
    return (
      <FirstStack.Navigator
        initialRouteName="First"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            // letterSpacing: 1.25,
            color: '#212837'
          },
          // headerStyle: {
          //   elevation: 0,     // remove shadow on Android
          //   shadowOpacity: 0, // remove shadow on iOS
          //   borderBottomWidth: 1,
          //   borderBottomColor: '#EDEDED'
          // }
        }}
      >
        <FirstStack.Screen name="First" options={({ navigation }) => ({
          headerRight: () => (
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Import")}
              >
                <MaterialIcon name="attach-file" size={24} style={styles.button} />
              </TouchableOpacity>
            </View>
          )
        })}>
          {() => <FirstTable />}
        </FirstStack.Screen>
        <FirstStack.Screen name="Import">
          {() => <ImportForm />}
        </FirstStack.Screen>
      </FirstStack.Navigator>
    );
  };

  const SecondStackScreen: React.FC = () => {
    return (
      <SecondStack.Navigator
        initialRouteName="Second"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            // letterSpacing: 1.25,
            color: '#212837'
          },          // headerStyle: {
          //   elevation: 0,     // remove shadow on Android
          //   shadowOpacity: 0, // remove shadow on iOS
          //   borderBottomWidth: 1,
          //   borderBottomColor: '#EDEDED'
          // }
        }}
      >
        <SecondStack.Screen name="Second" options={({ navigation }) => ({
          headerRight: () => (
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Import")}
              >
                <MaterialIcon name="attach-file" size={24} style={styles.button} />
              </TouchableOpacity>
            </View>
          )
        })}>
          {() => <SecondTable />}
        </SecondStack.Screen>
        <SecondStack.Screen name="Import">
          {() => <ImportForm />}
        </SecondStack.Screen>
      </SecondStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            // letterSpacing: 1.25,
            color: '#212837'
          },
          headerTitleAlign: 'center',
          // headerStyle: {
          //   elevation: 0,     // remove shadow on Android
          //   shadowOpacity: 0, // remove shadow on iOS
          //   borderBottomWidth: 1,
          //   borderBottomColor: '#EDEDED'
          // },
          tabBarActiveTintColor: '#0F7A58',
          tabBarInactiveTintColor: '#6C7180'
        }}
      >
        <Tab.Screen
          name="Dashboard"
          options={{
            tabBarLabel: "Dashboard",
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="pie-chart" color={color} size={size} />
            ),
          }}
        >
          {() => <Dashboard firstTableData={firstTableData} secondTableData={secondTableData} />}
        </Tab.Screen>
        <Tab.Screen
          name="Generated"
          options={{
            tabBarLabel: "Generated",
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="file-text" color={color} size={size} />
            ),
          }}
        >
          {() => <GeneratedTable />}
        </Tab.Screen>
        <Tab.Screen
          name="FirstStackScreen"
          options={{
            headerShown: false,
            tabBarLabel: "First",
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="bar-chart" color={color} size={size} />
            ),
          }}
        >
          {() => <FirstStackScreen />}
        </Tab.Screen>
        <Tab.Screen
          name="SecondStackScreen"
          options={{
            headerShown: false,
            tabBarLabel: "Second",
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="bar-chart" color={color} size={size} />
            ),
          }}
        >
          {() => <SecondStackScreen />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 12
  },
  button: {
    marginHorizontal: 12,
    color: '#777777'
  },
});

export default App;
