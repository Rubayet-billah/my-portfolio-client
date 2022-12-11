import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import AboutMe from "../../Pages/AboutMe/AboutMe";
import Blog from "../../Pages/Blog/Blog";
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
            path: '/about',
            element: <AboutMe></AboutMe>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/projects/:id',
            element: <ProjectDetails></ProjectDetails>,
            loader: ({ params }) => fetch(`https://my-portfolio-server-five.vercel.app/projects/${params.id}`)
        }
    ]
}])


export default router;