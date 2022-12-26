import './App.css';
import { Lesson10 } from './pages/Lesson10';

import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Lesson10></Lesson10>}>Home</Route>
    )
  );
 
  return (
    <div>
      <RouterProvider fallback="<div>Hello</div>" router={router}></RouterProvider>
    </div>
  );
}

export default App;
