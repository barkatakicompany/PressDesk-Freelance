// import React from 'react'
// import { useRouteMatch } from 'react-router'

// const generatePage = page => {
//     const component = () => require(`../pages/${page.charAt(0).toUpperCase() + page.slice(1)}/${page}`).default

//     try {
//         console.log(`../pages/${page}`)
//         return React.createElement(component())
//     } catch(err) {
//         console.warn(err)
//         return React.createElement(() => 404)
//     }
// }

// export default function PageRenderer() {
//     const {
//         params: { page }
//     } = useRouteMatch()

//     return generatePage(page)
// }