import css from './App.module.css';
import Sidebar from "./components/Sidebar";
// import Content from './components/Content';
import ContentHooks from './components/ContentHooks';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <ContentHooks />
      <Sidebar />
    </div>
  );
}

export default App;