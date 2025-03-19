import React from 'react'
import {useRoutes} from 'react-router-dom'

export default function RoutesBody(props) {
    const routes = useRoutes(props.routes);
    return routes;
}
