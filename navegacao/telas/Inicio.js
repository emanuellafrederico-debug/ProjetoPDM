import {Text, View, StyleSheet, Button, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

import ContainerATK from '../ContainerATK';
import ContainerDEF from '../ContainerDEF';

const Stack = createStackNavigator();

export default function ContainerPrincipal() {
    return (
            <Stack.Navigator initialRouteName={"Inicio"}
            screenOptions={{headerStyle: {backgroundColor: '#dbdbdb'}, headerTitle: ' '}}>
                <Stack.Screen name="Inicio" component={Inicio} />
                <Stack.Screen name="ContainerDEF" component={ContainerDEF} />
                <Stack.Screen name="ContainerATK" component={ContainerATK} />
            </Stack.Navigator>
    );
}

function Inicio({navigation}){
  return(
    <View style={styles.container}>
      <Text style={{fontSize: 26, fontWeight: 'bold', marginTop: -200}}> INÍCIO </Text>
      <Text style={{fontSize: 16, padding: 30}}> Escolha uma equipe para participar: </Text>
      
        <Button title="EQUIPE DE DEFESA"
        onPress={() => navigation.navigate('ContainerDEF')}></Button>
        <br></br>
        <Button title="EQUIPE DE ATAQUE" 
        onPress={() => navigation.navigate('ContainerATK')}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


