import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

import MapView from "react-native-maps";

const images = [
  "https://imgyukle.com/f/2022/04/17/RuThDM.png",
  "https://imgyukle.com/f/2022/04/17/RuTBrn.png",
  "https://imgyukle.com/f/2022/04/17/RuTg5y.png",
  "https://imgyukle.com/f/2022/04/17/RuTibh.png",
];

const { width } = Dimensions.get("window");
const height = width;

const Motivation = () => {
  return (
    <View style={{ backgroundColor: "#06223d", flex: 1 }}>
      <ScrollView>
        <View style={styles.viewContainer}>
          <View style={styles.container}>
            <ScrollView
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.Scrollview}
            >
              {images.map((image, index) => (
                <Image
                  key={index}
                  source={{
                    uri: image,
                  }}
                  style={styles.image}
                />
              ))}
            </ScrollView>
          </View>
        </View>
        <View>
          <Text style={styles.mapHeader}>NEARBY GYMS</Text>
        </View>
        <View style={styles.mapper}>
          <MapView
            //region={}
            provider={MapView.PROVIDER_GOOGLE}
            showsUserLocation={true}
            userLocationPriority={"balanced"}
            style={styles.map}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Motivation;

const styles = StyleSheet.create({
  mapHeader: {
    textAlign: "center",
    color: "white",
    fontSize: 35,
    marginTop: 60,
  },

  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#06223d",
  },

  container: {
    marginTop: 85,
    width,
    height,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 5,
  },

  Scrollview: { width, height },
  image: { width, height, resizeMode: "cover" },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },

  mapper: {
    paddingLeft: 20,
    marginTop: 20,
    width,
    height,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 5,
  },

  map: {
    width: 373,
    height: 350,
  },
});
