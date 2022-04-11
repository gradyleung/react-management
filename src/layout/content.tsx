import  { SetRoutes }  from '../router/route'
import NotFound from '@page/NotFound'
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom'
function Content () {
    return (
        // <Routes>
        //     {
        //         routes.map( item => {
        //             return (<Route key={item.path} path={item.path} element={<item.component></item.component>}
        //                 render={}>
        //             </Route>
        //             )
        //           })
        //     }
        // </Routes>
        // <Router>
            <SetRoutes/>
        // </Router> 
    )
}
export default Content