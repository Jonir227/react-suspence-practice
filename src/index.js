import React from 'react';
import { unstable_createRoot } from 'react-dom';
import App from './App';

// 새로 만들어진 Root 랜더 메소드.
const root = document.getElementById('root');
unstable_createRoot(root).render(<App />);
