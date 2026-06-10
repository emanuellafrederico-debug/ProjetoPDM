import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Telas
import Inicio from './telas/InicioATK';
import Contexto from './telas/Contexto';

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