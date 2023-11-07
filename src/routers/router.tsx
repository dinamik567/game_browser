import {  createBrowserRouter } from "react-router-dom";
import { CardGameDetails } from '../components/Card-games-details';
import { loader as cardDetailsLoader } from '../components/Card-games-details/'
import App  from '../App'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: 'card-details/:userId',
        element: <CardGameDetails/>,
        loader: cardDetailsLoader,
    }
])

// export const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <App />
//     }
//   ])