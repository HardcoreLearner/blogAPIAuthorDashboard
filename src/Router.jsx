import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Error from "./Error";
import Auth from "./Auth";
import ArticleEdit from "./ArticleEdit";


const Router = () => {
    const router = createBrowserRouter([
        {   path: "/", 
            element: <App />,
            errorElement: <Error />
        },
        {   path: "/auth", 
            element: <Auth/>,
            errorElement: <Error />
        },
        {   path: "/article", 
            element: <ArticleEdit />,
            errorElement: <Error />
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;