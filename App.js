import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude: -8.830508,
          longitude: 115.165099
        },
        title: 'Pura Batu Pageh',
        subtitle: ''
      },
      {
        key:2,
        latlng: {
          latitude: -8.598063,
          longitude: 115.191192
        },
        title: 'Pura Kereban Langit Sading',
        subtitle: ''
      },
      {
        key:3,
        latlng: {
          latitude: -8.132784,
          longitude: 115.256270
        },
        title: 'Pura Goa Raja'
      },
      {
        key:4,
        latlng: {
          latitude:- -8.322803,
          longitude: 115.446804
        },
        title: 'Pura Pajinengan Tap Sai '
      },
      {
        key:5,
        latlng: {
          latitude: -8.5159291,
          longitude: 115.3546752
        },
        title: 'Mata Air Tebing Pancoran Solas'
      },
      {
        key:6,
        latlng: {
          latitude: -8.7927051,
          longitude: 115.1362068
        },
        title: 'Goa Peteng Pura Tunjung Mekar'
      },
      {
        key:7,
        latlng: {
          latitude: -8.1546303,
          longitude: 114.5737358
        },
        title: 'Tirta Pengelukatan - Pura Sakti'
      },
      {
        key:8,
        latlng: {
          latitude: -8.451395,
          longitude: 115.3246454
        },
        title: 'Penglukatan Pura Taman Pecampuhan Sala'
      },
      {
        key:9,
        latlng: {
          latitude: -8.4451591,
          longitude: 115.3536394
        },
        title: 'Pengelukatan Manik Tirta Pesiraman Bangli'
      },
      {
        key:10,
        latlng: {
          latitude: -8.4749866,
          longitude: 115.3431
        },
        title: 'Pura Tirta Sudamala (Bangli)'
      },
      {
        key:11,
        latlng: {
          latitude: -8.623129,
          longitude: 115.1352489
        },
        title: 'Pura Campuhan Windhu Segara'
      },
      {
        key:12,
        latlng: {
          latitude: -8.4113156,
          longitude: 115.0890584
        },
        title: 'Tamba Waras'
      },
      {
        key:13,
        latlng: {
          latitude: -8.411988,
          longitude: 115.286082
        },
        title: 'Pura Dalem Pingit Sebatu'
      },
      {
        key:14,
        latlng: {
          latitude: -8.5207577,
          longitude: 115.3938432
        },
        title: 'Pura Tirta Celempung'
      },
      {
        key:15,
        latlng: {
          latitude: -8.4156985,
          longitude: 115.3131155
        },
        title: 'Pura Tirta Empul'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Letak Pura/Penglukatan di Bali
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> I_Made_Budiartha Maps</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#00B0FF',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#00B0FF',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});