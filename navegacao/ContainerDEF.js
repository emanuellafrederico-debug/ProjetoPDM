import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaInicial from './telas/ContextoDEF';
import Desafio from './telas/DesafioDEF';

const inicioNome = "Início";
const desafioNome = "Desafio";

const Tab = createBottomTabNavigator();

function ContainerPrincipal() {
    return (
            <Tab.Navigator
                initialRouteName={inicioNome}
                screenOptions={{
                  headerShown:false, 
                  tabBarStyle:{
                    padding: 10,
                    height: 70
                  }
                  }}>
                <Tab.Screen name={inicioNome} component={TelaInicial} />
                <Tab.Screen name={desafioNome} component={Desafio} />
            </Tab.Navigator>
    );
}

export default ContainerPrincipal;