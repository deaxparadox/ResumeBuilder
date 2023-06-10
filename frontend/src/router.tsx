import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Error from "./error";
import Resume from "./resume";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
    },
    {
        path: "/resume",
        errorElement: <Error />,
        element: <Resume />,
        children: [
        ],
    },
]);

export default router