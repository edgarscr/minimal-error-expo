import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default function App() {
  const initialRegion = {
    latitude: -12.046374, // Coordenadas de Lima, Perú
    longitude: -77.042793,
    latitudeDelta: 0.04,
    longitudeDelta: 0.02,
  };
  const markers = [
    {
      id: "1",
      title: "Ubicación 1",
      description: "Descripción de la ubicación 1",
      coordinate: {
        latitude: -12.046374,
        longitude: -77.042793,
      },
    },
    {
      id: "2",
      title: "Ubicación 2",
      description: "Descripción de la ubicación 2",
      coordinate: {
        latitude: -12.056374,
        longitude: -77.052793,
      },
    },
    {
      id: "3",
      title: "Ubicación 3",
      description: "Descripción de la ubicación 3",
      coordinate: {
        latitude: -12.036374,
        longitude: -77.032793,
      },
    },
  ];
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        provider={PROVIDER_GOOGLE}
        onMapReady={() => {
          console.log("handleMapReady");
        }}
        onMapLoaded={() => {
          console.log("handleMapLoaded");
        }}
        /*onLayout={() => {
                if (!mapDataLoaded) {
                    setMapDataLoaded(true)
                }
            }}*/
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsTraffic={true}
        loadingEnabled={true}
        zoomEnabled={true}
        zoomControlEnabled={false}
        showsScale={false}
        showsCompass={false}
        userInterfaceStyle="light"
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    flex: 1,
    width: "100%",
  },
});
