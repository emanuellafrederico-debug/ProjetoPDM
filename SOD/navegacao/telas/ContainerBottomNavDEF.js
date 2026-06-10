import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Telas
import Inicio from './InicioATK';
import Contexto from './Contexto';

const InicioNome = "Inicio";
const ContextoNome = "Contexto";

const Tab = createBottomTabNavigator();

export default function ContainerBottomNavDEF(){
    return (
        <Tab.Navigator
        initialRouteName={InicioNome}
        >
            <Tab.Screen name={ContextoNome} component={Contexto}/>

        </Tab.Navigator>
    )
}