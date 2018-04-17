import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import Icon from "react-native-vector-icons/dist/Ionicons";

export default class CalendarScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.calendarTitle}>
            <Text style={styles.calendarTitleText}>Kalender</Text>
          </View>
          <Calendar
            theme={{
              arrowColor: "#8bc250",
              monthTextColor: "#8bc250",
              selectedDayBackgroundColor: "#8bc250",
              dotColor: "#8bc250",
              todayTextColor: "#8bc250"
            }}
            style={{
              padding: 10
            }}
            markedDates={{
              "2018-04-18": {
                selected: true
              },
              "2018-04-15": { marked: true },
              "2018-04-20": { marked: true },
              "2018-04-22": { marked: true },
              "2018-04-26": { marked: true },
              "2018-04-29": { marked: true }
            }}
            renderArrow={direction => (
              <Icon
                name={`${
                  direction === "left" ? "ios-arrow-back" : "ios-arrow-forward"
                }`}
                size={20}
                color="#8bc250"
              />
            )}
          />

          <View style={styles.eventContainer}>
            <Text style={styles.eventHeader}>MINE AFTALER</Text>
            <View style={styles.event}>
              <View style={styles.eventTimeContainer}>
                <Text style={styles.eventTime}>12:00</Text>
                <Text style={styles.eventTime}>13:30</Text>
              </View>
              <View style={styles.eventText}>
                <Text style={styles.eventTitle}>Mode hos AZ Web</Text>
                <Text style={styles.eventDesc}>
                  Produktionsvej 1, 2600 Glostrup
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#eff3f6"
  },
  calendarTitle: {
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#fff"
  },
  calendarTitleText: {
    fontSize: 28,
    color: "#8bc250"
  },
  eventContainer: {
    marginVertical: 15
  },
  eventHeader: {
    fontSize: 16,
    color: "#000",
    marginVertical: 10
  },
  event: {
    flexDirection: "row",
    marginVertical: 15
  },
  eventTimeContainer: {
    borderRightWidth: 2,
    borderRightColor: "#8bc250",
    paddingRight: 10
  },
  eventTime: {
    fontSize: 25
  },
  eventText: {
    flex: 1,
    marginLeft: 10
  },
  eventTitle: {
    marginTop: 10,
    fontSize: 20,
    color: "#000"
  }
});
