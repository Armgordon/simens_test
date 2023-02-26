import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from '@store';
import App from './components/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App store={createStore()} />);
