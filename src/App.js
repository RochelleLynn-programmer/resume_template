import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Header, WorkExp, Education, AboutMe, HomePage, PopUp } from "./components";
import educationList from "./education.json";
import workExpList from "./workexp.json";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/education">
          <Education educationList={educationList} />
        </Route>
        <Route path="/aboutme">
          <AboutMe />
        </Route>
        <Route path="/workexp">
          <WorkExp workExpList={workExpList} />
        </Route>
        <Route path="/cert/:id" render={(props) => <PopUp {...props} />} />
      </Switch>
    </>
  );
}

export default App;
