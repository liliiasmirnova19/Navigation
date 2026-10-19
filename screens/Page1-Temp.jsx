import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Page1(){
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        <Text>Page 1</Text>
        <Button title="To page 2" onPress={() => navigation.navigate('Page2')} />
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