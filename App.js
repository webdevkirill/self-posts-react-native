import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { bootstrap } from './src/bootstrap';
import { DrawerNavigation } from './src/navigation/DrawerNavigation';


export default function App() {

    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return (
            <AppLoading 
                onFinish={() => setIsReady(true)}
                startAsync={bootstrap}
            />
        )
    }

    return <DrawerNavigation />
}
