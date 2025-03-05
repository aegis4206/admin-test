import './App.css'
import MyAdmin from "./admin";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from 'jotai';


const App = () => <>
    <Provider>
        <MyAdmin />
    </Provider>
</>;

export default App;
