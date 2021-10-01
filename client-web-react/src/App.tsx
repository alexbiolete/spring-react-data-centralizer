import {
  FC,
  useState,
  useEffect,
  ChangeEvent,
  FormEvent
} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NotFound from './views/NotFound/NotFound';
import Dashboard from './views/Dashboard/Dashboard';
import ImportForm from './views/ImportForm/ImportForm';
import GeneratedTable from './views/GeneratedTable/GeneratedTable';
import FirstTable from './views/FirstTable/FirstTable';
import SecondTable from './views/SecondTable/SecondTable';
// import { generatedTablePlaceholder } from './testing/generatedTablePlaceholder';
// import { firstTablePlaceholder } from './testing/firstTablePlaceholder';
// import { secondTablePlaceholder } from './testing/secondTablePlaceholder';

const App: FC = () => {
  const [generatedTableData, setGeneratedTableData] = useState([]);
  const [firstTableData, setFirstTableData] = useState([]);
  const [secondTableData, setSecondTableData] = useState([]);

  useEffect(() => {
    const getGenerated = async() => {
      const generatedFromServer = await fetchGenerated();
      setGeneratedTableData(generatedFromServer);
    };

    getGenerated();
  }, []);

  useEffect(() => {
    const getFirst = async() => {
      const firstFromServer = await fetchFirst();
      setFirstTableData(firstFromServer);
    };

    getFirst();
  }, []);

  useEffect(() => {
    const getSecond = async() => {
      const secondFromServer = await fetchSecond();
      setSecondTableData(secondFromServer);
    };

    getSecond();
  }, []);

  const fetchGenerated = async () => {
    const res = await fetch(
      `http://localhost:8080/api/generated`
    );
    const data = await res.json();

    console.log(data);

    return data;
  };

  const generateReport = async () => {
    const res = await fetch(
      `http://localhost:8080/api/generated/generate`
    );
    const data = await res.json();

    console.log(data);

    return data;
  };

  const fetchFirst = async () => {
    const res = await fetch(
      `http://localhost:8080/api/first`
    );
    const data = await res.json();

    console.log(data);

    return data;
  };

  const importFirst = async (e: ChangeEvent | FormEvent, file: any) => {
    const formData = new FormData();
    formData.append('file', file, file.name);

    e.preventDefault();

    const res = await fetch(
      `http://localhost:8080/api/first/import`,
      {
        method: 'POST',
        body: formData
      }
    );
    const data = await res.json();

    console.log(data);
  };

  const fetchSecond = async () => {
    const res = await fetch(
      `http://localhost:8080/api/second`
    );
    const data = await res.json();

    console.log(data);

    return data;
  };

  const importSecond = async (e: ChangeEvent | FormEvent, file: any) => {
    const formData = new FormData();
    formData.append('file', file, file.name);

    e.preventDefault();

    const res = await fetch(
      `http://localhost:8080/api/second/import`,
      {
        method: 'POST',
        body: formData
      }
    );
    const data = await res.json();

    console.log(data);
  };

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
