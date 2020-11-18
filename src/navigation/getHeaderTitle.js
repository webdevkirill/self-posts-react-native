import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export const getHeaderTitle = (route) => {
    console.log(getFocusedRouteNameFromRoute(route))
    const routeName = getFocusedRouteNameFromRoute(route) || 'Main';

    switch (routeName) {
        case 'Main':
            return 'Все посты';
        case 'Booked':
            return 'Избранные';
    }
}