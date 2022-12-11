import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Home from "../../Pages/Homepage/Home/Home";
import ProjectDetails from "../../Pages/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([{
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/projects/:id',
            element: <ProjectDetails></ProjectDetails>,
            loader: ({ params }) => fetch(`http://localhost:5000/projects/${params.id}`)
        }
    ]
}])


export default router;