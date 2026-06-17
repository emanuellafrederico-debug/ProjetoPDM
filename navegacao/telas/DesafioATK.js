import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default function DesafioATK(){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
      <Text style={{fontSize: 26, fontWeight: 'bold', backgroundColor: '#f54242', color: 'white'}}> DESAFIO </Text>
      <Text style={{fontSize: 20, padding: 20, justifyContent: 'center'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra orci eu velit hendrerit aliquam. </Text>

      <Text style={{fontSize: 18, padding: 10}}> O que você gostaria de fazer? </Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('Foi efetivo! O estágiario ainda quer o jogo dele...')}>
        <Text>Enviar um link malicioso se passando por um jogo para o estagiário</Text>
      </TouchableOpacity>
      <br></br>
      <TouchableOpacity style={styles.button} onPress={() => alert('É... Eles nos bloquearam... Não foi dessa vez.')}>
        <Text>Mandar um e-mail solicitando o end-point deles</Text>
      </TouchableOpacity>
      <br></br>
      <TouchableOpacity style={styles.button} onPress={() => alert('Boa! Quero ver alguem conseguir usar o sistema deles nessa década.')}>
        <Text>Fazer um ataque DDOS</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: '#f54242',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    maxHeight: 60,
    padding: 15,
  },
});