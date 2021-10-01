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
// import { generatedTablePlaceholder } from './testing/generatedTablePlaceholder';
// import { firstTablePlaceholder } from './testing/firstTablePlaceholder';
// import { secondTablePlaceholder } from './testing/secondTablePlaceholder';

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
  /*
   * Use the following command if you have issues with testing your local hosted API and you have a
   * phone connected through USB:
   *   adb reverse tcp:8080 tcp:8080
   *
   * Otherwise, if you can't test the API, there are a few values as example added in ./tests/*.
   */
  const [generatedTableData, setGeneratedTableData] = React.useState([]);
  const [firstTableData, setFirstTableData] = React.useState([]);
  const [secondTableData, setSecondTableData] = React.useState([]);


  React.useEffect(() => {
    const getGenerated = async() => {
      const generatedFromServer = await fetchGenerated();
      setGeneratedTableData(generatedFromServer);
    };

    getGenerated();
  }, []);

  React.useEffect(() => {
    const getFirst = async() => {
      const firstFromServer = await fetchFirst();
      setFirstTableData(firstFromServer);
    };

    getFirst();
  }, []);

  React.useEffect(() => {
    const getSecond = async() => {
      const secondFromServer = await fetchSecond();
      setSecondTableData(secondFromServer);
    };

    getSecond();
  }, []);

  const fetchGenerated = async () => {
    // Use your local IPv4 address (from the same network as your phone) instead of localhost, if it does not work.
    const res = await fetch(
      `http://localhost:8080/api/generated`
    );
    const data = await res.json();

    console.log(data);

    return data;
  };

  const generateReport = async () => {
    const res = await fetch(
      `http://localhost:8080/api/generated/generate`
    );
    const data = await res.json();

    console.log(data);

    return data;
  };

  const fetchFirst = async () => {
    // Use your local IPv4 address (from the same network as your phone) instead of localhost, if it does not work.
    const res = await fetch(
      `http://localhost:8080/api/first`
    );
    const data = await res.json();

    console.log(data);

    return data;
  };

  const importFirst = async (e: React.ChangeEvent | React.FormEvent, file: any) => {
    const formData = new FormData();
    formData.append('file', file, file.name);

    e.preventDefault();

    const res = await fetch(
      `http://localhost:8080/api/first/import`,
      {
        method: 'POST',
        body: formData
      }
    );
    const data = await res.json();

    console.log(data);
  };

  const fetchSecond = async () => {
    // Use your local IPv4 address (from the same network as your phone) instead of localhost, if it does not work.
    const res = await fetch(
      `http://localhost:8080/api/second`
    );
    const data = await res.json();

    console.log(data);

    return data;
  };

  const importSecond = async (e: React.ChangeEvent | React.FormEvent, file: any) => {
    const formData = new FormData();
    formData.append('file', file, file.name);

    e.preventDefault();

    const res = await fetch(
      `http://localhost:8080/api/second/import`,
      {
        method: 'POST',
        body: formData
      }
    );
    const data = await res.json();

    console.log(data);
  };

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
          },
          // headerStyle: {
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
    color: '#6B7280'
  },
});

export default App;
