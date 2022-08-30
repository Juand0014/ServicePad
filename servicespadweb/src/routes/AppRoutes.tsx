import { Routes, Route } from 'react-router-dom';
import { Home, AddArticle } from "../pages";
import { RoutesType } from './routes.types';

export const AppRouter = () => {
	
const mainRoutes: RoutesType = [
		{
			path: "/",
			element: <Home />
		},
		{
			path: "/home",
			element: <Home />
		},
		{
			path: "/add-article",
			element: <AddArticle />
		}
	];

	return (
			<Routes>
				{mainRoutes.map((route, index) =>  <Route key={index} {...route} />)}
			</Routes>
	);
}