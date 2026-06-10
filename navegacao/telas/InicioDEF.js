import {Text, View} from 'react-native';

export default function Perfil(){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent:'center', backgroundColor:'blue'}}>
      <Text 
        style={{fontSize: 26, fontWeight: 'bold'}}>
        INICIO DEF OI
      </Text>
      <button>botao oi</button>
    </View>
  )
}