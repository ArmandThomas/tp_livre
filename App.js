import styled from "styled-components/native";
import {HomePage} from "./components/HomePage";
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import {LivrePage} from "./components/LivrePage";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <ContainerApp>
              <Stack.Navigator>
                  <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }}   />
                  <Stack.Screen name="LivrePage" component={LivrePage} options={
                      ({route}) => ({
                          title: route.params.titre
                      })
                  } />
              </Stack.Navigator>
          </ContainerApp>
      </NavigationContainer>

  );
}

const ContainerApp = styled.View`
    background-color: #eee;
    flex: 1;
`;
