import {Slot, Tabs} from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

// export default function HomeLayout() {
//     return (
//     <View style={styles.container}>
//         <Text>Testing</Text>
//         <Slot />
//         </View> )
// }

// const styles = StyleSheet.create({
//     container: {
//     flex:1,
//     justifyContent: 'top',
//     alignItems: 'center',
//     padding: 20,
// },
// });

export default function Page() {
    return <Tabs />
}