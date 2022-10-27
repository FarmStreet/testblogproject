import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import ErrorBoundary from 'providers/ErrorBoundary/ErrorBoundary';
import {Provider} from "react-redux";
import {setupStore} from "store/store";

const root = createRoot(document.getElementById('root'))
const store = setupStore();

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Provider>
    </BrowserRouter>,
);
