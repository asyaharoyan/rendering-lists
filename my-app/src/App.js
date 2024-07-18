import css from './App.module.css';
import Sidebar from "./components/Sidebar";
// import Content from './components/Content';
// import ContentHooks from './components/ContentHooks';
import ContentAPI from './components/ContentAPI';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <ContentAPI />
      <Sidebar />
    </div>
  );
}

export default App;