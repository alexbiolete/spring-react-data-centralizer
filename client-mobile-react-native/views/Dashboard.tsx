import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import DashboardCard from '../components/DashboardCard';

const Dashboard: React.FC<any> = ({ firstTableData, secondTableData }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <DashboardCard title="First Report Data" count={firstTableData.length} icon="bar-chart" />
      <DashboardCard title="Second Report Data" count={secondTableData.length} icon="bar-chart" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
    paddingTop: 16
  },
});

export default Dashboard;
