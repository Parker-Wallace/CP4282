import { Link } from "expo-router";
import { Pressable, View, Text } from "react-native";

export default function NavBar() {
    return (
    <View>
        <Link href={"/edit"} asChild>
            <Pressable>
                <Text>Edit</Text>
            </Pressable>
        </Link>
        <Link href={"/home"} asChild>
            <Pressable>
                <Text>Home</Text>
            </Pressable>
        </Link>
    </View>
    );
  }