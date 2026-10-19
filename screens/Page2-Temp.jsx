import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Page2(){
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        <Text>page 2</Text>
        <Button title="To page 1" onPress={() => navigation.navigate('page1')} />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});