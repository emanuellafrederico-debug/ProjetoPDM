import { createStackNavigator } from '@react-navigation/stack';

import ContainerATK from './navegacao/ContainerATK';
import ContainerDEF from './navegacao/ContainerDEF';

const atkNome = "ContainerATK";
const defNome = "ContainerDEF";

const Stack = createStackNavigator();

export const Rotas = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name={atkNome} component={ContainerATK} />
                <Stack.Screen name={defNome} component={ContainerDEF} />
            </Stack.Navigator>
    );
}

/*const RootStack = createNativeStackNavigator({
  initialRoute: "telaInicial",
  screens: {
    ATK: ContextoATK,
    DEF: ContextoDEF,
  }
})

const Navigation = createStaticNavigation(RootStack);

export default function Inicio(){
  return(
      <Navigation/>
  )
}*/