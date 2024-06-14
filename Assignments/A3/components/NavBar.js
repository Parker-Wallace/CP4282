import { Link } from "expo-router";
import { Pressable, View, Text, StyleSheet } from "react-native";

export default function NavBar() {
    return (
    <View>
        <Link href={"/edit"} asChild>
            <Pressable style={styles.button}>
                <Text>Edit</Text>
            </Pressable>
        </Link>
        <Link href={"/"} asChild>
            <Pressable style={styles.button}>
                <Text>Home</Text>
            </Pressable>
        </Link>
    </View>
    );
  }
  const styles = StyleSheet.create({
    buttonContainer: {
      margin: 10,
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: 'gray',
      borderRadius: 5,
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });