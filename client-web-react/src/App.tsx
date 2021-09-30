import { FC, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NotFound from './views/NotFound/NotFound';
import Dashboard from './views/Dashboard/Dashboard';
import ImportForm from './views/ImportForm/ImportForm';
import GeneratedReport from './views/GeneratedReport/GeneratedReport';
import FirstReport from './views/FirstReport/FirstReport';
import SecondReport from './views/SecondReport/SecondReport';

const App: FC = () => {
  const [generatedReportData, setGeneratedReportData] = useState([]);
  const [firstReportData, setFirstReportData] = useState([]);
  const [secondReportData, setSecondReportData] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-gray-50 min-h-screen pt-16 pb-16 md:pb-0 flex flex-col justify-between">
        <div className="w-full max-w-7xl mx-auto md:py-8">
          <Switch>
            <Route path="/" exact>
              <Dashboard firstReportData={firstReportData} secondReportData={secondReportData} />
            </Route>
            <Route path="/generated" exact>
              <GeneratedReport />
            </Route>
            <Route path="/first" exact>
              <FirstReport />
            </Route>
            <Route path="/first/import" exact>
              <ImportForm />
            </Route>
            <Route path="/second" exact>
              <SecondReport />
            </Route>
            <Route path="/second/import" exact>
              <ImportForm />
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
