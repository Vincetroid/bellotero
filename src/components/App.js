import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from '../components/ui/Header';
import theme from '../components/ui/Theme';
import HomePage from './Home';
import SolutionsPage from './Solutions';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <HomePage />} />
          <Route exact path="/solutions" component={() => <SolutionsPage />} />
          <Route exact path="/stories" component={() => <div>Stories</div>} />
          <Route exact path="/partners" component={() => <div>Partners</div>} />
          <Route exact path="/about" component={() => <div>About</div>} />
          <Route exact path="/blog" component={() => <div>Blog</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
