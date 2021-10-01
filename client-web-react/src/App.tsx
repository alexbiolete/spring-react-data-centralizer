import { FC, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NotFound from './views/NotFound/NotFound';
import Dashboard from './views/Dashboard/Dashboard';
import ImportForm from './views/ImportForm/ImportForm';
import { First } from './types/First';
import GeneratedTable from './views/GeneratedTable/GeneratedTable';
import FirstTable from './views/FirstTable/FirstTable';
import SecondTable from './views/SecondTable/SecondTable';
import { generatedTablePlaceholder } from './testing/generatedTablePlaceholder';
import { firstTablePlaceholder } from './testing/firstTablePlaceholder';
import { secondTablePlaceholder } from './testing/secondTablePlaceholder';

const App: FC = () => {
  const [generatedTableData, setGeneratedTableData] = useState(generatedTablePlaceholder);
  const [firstTableData, setFirstTableData] = useState(firstTablePlaceholder);
  const [secondTableData, setSecondTableData] = useState(secondTablePlaceholder);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="bg-gray-50 min-h-screen pt-16 pb-16 md:pb-0 flex flex-col justify-between">
        <div className="w-full max-w-7xl mx-auto md:py-8">
          <Switch>
            <Route path="/" exact>
              <Dashboard firstTableData={firstTableData} secondTableData={secondTableData} />
            </Route>
            <Route path="/generated" exact>
              <GeneratedTable data={generatedTableData} />
            </Route>
            <Route path="/first" exact>
              <FirstTable data={firstTableData} />
            </Route>
            <Route path="/first/import" exact>
              <ImportForm />
            </Route>
            <Route path="/second" exact>
              <SecondTable data={secondTableData} />
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
