import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function DesafioDEF(){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
      <Text style={{fontSize: 26, fontWeight: 'bold', backgroundColor: '#4287f5', color: 'white'}}> DESAFIO </Text>
      <Text style={{fontSize: 20, padding: 20, justifyContent: 'center'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra orci eu velit hendrerit aliquam. </Text>

      <Text style={{fontSize: 18, padding: 10}}> O que você gostaria de fazer? </Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('Caramba, e quem diria que treinar o estagiário valeira a pena?')}>
        <Text>Treinar seu estagiário</Text>
      </TouchableOpacity>
      <br></br>
      <TouchableOpacity style={styles.button} onPress={() => alert('Ufa! A vontade de enviar dados sensíveis da sua empresa foi grande, mas você resistiu.')}>
        <Text>Bloquear um email suspeito te enviando tentivas de phishing</Text>
      </TouchableOpacity>
      <br></br>
      <TouchableOpacity style={styles.button} onPress={() => alert('Sério? Força bruta? Esperava mais... ou menos.')}>
        <Text>Limitar a quantidade de solicitações por IP</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#4287f5',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    maxHeight: 60,
    padding: 15,
  },
});