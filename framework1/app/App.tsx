// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './index'; // Importando a tela de login
// import MainScreen from './page'; // Importando a tela principal

// const Stack = createStackNavigator();

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Função de sucesso do login
//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {!isLoggedIn ? (
//           // Passar a função onLoginSuccess corretamente
//           <Stack.Screen name="Login">
//             {() => <LoginScreen onLoginSuccess={handleLoginSuccess} />}
//           </Stack.Screen>
//         ) : (
//           <Stack.Screen name="Main" component={MainScreen} />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
