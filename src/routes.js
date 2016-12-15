import { App } from './components';
import { ChampionsContainer, ChampionProfileContainer } from './containers';
console.log('ChampionProfileContainer', ChampionProfileContainer);

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: ChampionsContainer },
  childRoutes: [
    { path: '/profile', component: ChampionProfileContainer },
  ],
};

export default routes;
