import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [cookies, setCookies] = useState(0);
  const [level, setLevel] = useState("Increase cookie count");
  const [cookieImage, setCookieImage] = useState(
    require("./assets/cookie.png")
  );

  useEffect(() => {
    if ((cookies > 10) & (cookies < 20)) {
      setLevel("Eric Mikida");
      setCookieImage(require("./assets/cookie.png"));
    } else if ((cookies > 20) & (cookies < 30)) {
      setLevel("Its Carl's Fault");
      setCookieImage(require("./assets/cracked-cookie.png"));
    } else if ((cookies > 30) & (cookies < 40)) {
      setLevel("Paul Dick");
      setCookieImage(require("./assets/cracked-cookie-2.png"));
    } else if (cookies > 40) {
      setLevel("Paul Dick Pro Max");
    }
  }, [cookies]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.UBHeader}>
        <Image
          source={require("./assets/ubacm.png")}
          style={styles.HeaderLogo}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>UB ACM'S</Text>
          <Text style={styles.title}>COOKIE CLICKER!</Text>
        </View>
        <Pressable
          onPress={() => setCookies((prev) => prev + 1)}
          style={styles.cookieContainer}
        >
          <Image
            resizeMode="contain"
            source={cookieImage}
            style={styles.cookie}
          />
        </Pressable>
        <View style={styles.inputsContainer}>
          <View style={{ width: "40%" }}>
            <Text style={styles.inputLabel}>NO. COOKIES</Text>
            <TextInput
              value={cookies.toString()}
              style={[styles.input, { width: "70%" }]}
            />
          </View>
          <View style={{ width: "55%" }}>
            <Text style={styles.inputLabel}>LEVEL</Text>
            <TextInput
              value={level}
              style={[styles.input, { width: "100%" }]}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>INSTRUCTIONS: CLICK THE COOKIE!</Text>
          <Text style={styles.footerText}>YOU WILL AUTOMATICALLY UPGRADE </Text>
          <Text style={styles.footerText}>DEPENDING ON THE AMOUNT OF</Text>
          <Text style={styles.footerText}>COOKIES COLLECTED!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  UBHeader: {
    width: "100%",
    height: "15%",
    backgroundColor: "#0047AB",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },
  HeaderLogo: {
    width: "25%",
    height: "40%",
    resizeMode: "contain",
  },
  main: {
    backgroundColor: "#dd225d",
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  titleContainer: {
    paddingTop: 20,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  cookieContainer: {
    height: "45%",
    width: "65%",
    alignItems: "center",
  },
  cookie: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  inputsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: "5%",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 10,
    height: 40,
    padding: 10,
  },
  inputLabel: {
    color: "#fff",
    fontWeight: "bold",
    paddingBottom: 10,
  },
  footer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  footerText: {
    color: "#fff",
    marginVertical: 2,
  },
});
