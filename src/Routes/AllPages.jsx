// Em AllPages, devemos incluir a rota dessa página
import { NavigationContainer, StackActions } from "@react-navigation/native";

// Rota nativa do stack navigator de cada dispositivo
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importar a página Start
import Start from "../Pages/Start";

// Traz a propriedade StackNavigator
const Stack = createNativeStackNavigator();

// Trazer as opções da pagina, criando uma função AllPages
export default function AllPages(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false,
                }}
            >

            <Stack.Screen name="Start" component={Start} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}