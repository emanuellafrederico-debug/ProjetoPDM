import {Text, View} from 'react-native';

export default function Perfil(){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent:'center', backgroundColor:'red'}}>
      <Text 
        style={{fontSize: 26, fontWeight: 'bold'}}>
        INICIO ATk OI
      </Text>
      <button>botao oi</button>
    </View>
  )
}