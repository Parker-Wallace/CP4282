import { View, Text } from 'react-native';

import { Link } from 'expo-router';


export default function Page() {
  return (
    <View>
      <Text>HomePage</Text>
      <Link href="/update">About</Link>
    </View>
  );
}
