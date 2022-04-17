import { render } from "react-dom";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

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
      <View style={styles.viewContainer}>
        <View style={style.container}>
          <ScrollView
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            style={style.Scrollview}
          >
            {images.map((image, index) => (
              <Image
                key={index}
                source={{
                  uri: image,
                }}
                style={style.image}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Motivation;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#06223d",
  },
});

const style = StyleSheet.create({
  container: {
    marginTop: 50,
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
});
