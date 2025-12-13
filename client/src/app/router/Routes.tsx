import { createBrowserRouter } from "react-router"
import App from "../layout/App"
import HomePage from "../../features/home/HomePage";
import PartsDashboard from "../../features/parts/dashboard/PartsDashboard";
import PartForm from "../../features/parts/form/PartForm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,  
        children:[
            {path: '', element:<HomePage /> },
            {path: 'parts', element:<PartsDashboard /> },
            {path: 'createPart', element:<PartForm /> }
        ]
    }
]);