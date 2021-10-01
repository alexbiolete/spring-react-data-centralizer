import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const DashboardCard: React.FC<any> = ({ title, data, icon }) => {
  return (
    <View style={styles.container}>
      <FeatherIcon name={icon} style={styles.icon} size={196} />
      <Text style={styles.title}>{title}</Text>
      {data.length > 0 ? (
        <Text style={styles.content}>
          {data.length} entries
        </Text>
      ) : (
        <Text style={styles.content}>
          No data available
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'relative',
    height: 180,
    marginBottom: 16,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#D2FBE5',
    borderWidth: 1,
    borderColor: '#EDEDED',
    borderRadius: 24,
    flex: 1,
    alignItems: 'flex-end',
  },
  icon: {
    position: 'absolute',
    top: -32,
    left: -4,
    color: '#A9F5D1',
  },
  title: {
    marginVertical: 4,
    textTransform: 'uppercase',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    color: '#0D6047',
  },
  content: {
    marginVertical: 4,
    textTransform: 'uppercase',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1EBC83',
  }
});

export default DashboardCard;
