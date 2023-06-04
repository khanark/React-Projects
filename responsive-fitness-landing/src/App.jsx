import { Coaches, Footer, Hero, MainNav, TopNav, Welcome } from './components';

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <header className="flex flex-col header-image h-[620px]">
        <TopNav />
        <MainNav />
        <Hero />
      </header>

      <div className="">
        <Welcome />
        <Coaches />
        <Footer />
      </div>
    </div>
  );
};

export default App;
