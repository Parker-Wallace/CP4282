import {View, Text, Pressable} from 'react-native';
import { Link } from 'expo-router';

export default function Page() {

    return(
        <>
        <Text>yuo are on update</Text>
        <Link href="/" asChild>
        <Pressable>
            <Text>Home</Text>
        </Pressable>
        </Link>
        </>
    )
}
