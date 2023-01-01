import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Error from "./pages/error"
import Game from "./pages/game"
import Start from "./pages/start"
import './sass/main.scss'

const router = createBrowserRouter([
    {
        errorElement: <Error />,
        children: [
            { path: '/', element: <Start /> },
            { path: '/game', element: <Game /> },
        ]
    },
])

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App