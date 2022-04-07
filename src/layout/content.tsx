import routes from '../router/route'
import NotFound from '@page/NotFound'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
function Content () {
    return (
        <Routes>
            {
                routes.map( item => {
                    return <Route key={item.path} path={item.path} element={<item.component></item.component>}></Route>
                  })
            }
        </Routes>
    )
}
export default Content