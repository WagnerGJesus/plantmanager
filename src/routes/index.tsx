import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './stack.routes';
//criado container de navegaçao para MIX de ROTAS
const Routes = () => (
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
)
export default Routes;