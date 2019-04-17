import Home from '../Home/Home';
import About from '../About/About';

export const Routes = [
  {
    path: "/",
    exact: true,
    name: 'Design',
    component: Home
  },
  {
    path: "/about",
    name: 'About',
    component: About
  }
];