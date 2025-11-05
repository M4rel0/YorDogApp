import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Image } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Tabslayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          maxWidth: 1200,
          justifyContent: 'space-around',

          alignItems: 'center',
          backgroundColor: '#312416',
          paddingTop: 5,
          alignContent: 'center',
          height: 45,
          borderTopWidth: 0,
        },
        tabBarLabelPosition: 'below-icon',
        tabBarItemStyle: {},
      }}
    >
      <Tabs.Screen
        name="perfil"
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../../assets/images/patinha.png')}
              style={{ width: 34, height: 34, margin: 0, padding: 0 }}
            />
          ),
          tabBarBadge: 3,
        }}
      />

      <Tabs.Screen
        name="appindex"
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../../assets/images/casinha.png')}
              style={{ width: 34, height: 34, margin: 0, padding: 0 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="menutind"
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../../assets/images/osso.png')}
              style={{ width: 34, height: 34, margin: 0, padding: 0 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mensagem"
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../../../assets/images/mensagem.png')}
              style={{ width: 34, height: 34, margin: 0, padding: 0 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
