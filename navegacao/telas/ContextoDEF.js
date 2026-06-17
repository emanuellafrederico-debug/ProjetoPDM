import {Text, View} from 'react-native';

export default function ContextoDEF(){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
      <Text 
       onPress={() => alert('Você está na tela de contexto.')}
       style={{fontSize: 26, fontWeight: 'bold', marginTop: -200, backgroundColor: '#4287f5', color: 'white'}}> CONTEXTO </Text>
       <Text style={{fontSize: 20, padding: 15}}> Seu objetivo é defender! </Text>
       <Text style={{fontSize: 20, maxHeight: 400, maxWidth: 700}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor ultrices nunc. Donec iaculis eros id odio sagittis, quis euismod lorem tincidunt. Duis dapibus, elit nec accumsan finibus, ligula dolor porttitor massa, non pretium urna nisl at tellus. Donec varius diam purus, non finibus nisl sagittis et. Duis vel leo. </Text>
    </View>
  )
}
