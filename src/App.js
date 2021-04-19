import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav'
import Contact from './pages/Contact'
import OurServices from './pages/OurServices'
import ServicesDetail from './pages/ServicesDetail'
import AboutUs from "./pages/AboutUs";
import { Switch, Route, useLocation } from 'react-router-dom'
// animation
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation()
  return (
    <div>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/services" exact>
            <OurServices />
          </Route>
          <Route path="/services/:id">
            <ServicesDetail />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
      <GlobalStyle />
    </div>
  );
}

export default App;
