import '../styles/global.css';
import { ScrollContainer } from './ScrollContainer';
import { ProgressBar } from './ProgressBar';

export const App = () => {
    const app = document.createElement('div');
    app.id = 'app';

    app.appendChild(ScrollContainer());
    app.appendChild(ProgressBar());

    return app;
};
