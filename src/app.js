import Header from './components/Header';
import Footer from './components/Footer';

const App = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default App;