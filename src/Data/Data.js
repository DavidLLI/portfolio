import Home from '../Home/Home';
import About from '../About/About';
import Group4Me from '../PortfolioContent/Group4Me';
import CCP from '../PortfolioContent/CCP';

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
  },
  {
    path: "/group4me",
    component: Group4Me
  },
  {
    path: "/ccp",
    component: CCP
  }
];