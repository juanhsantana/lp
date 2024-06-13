import { Footer } from "./components/ui/footer";
import { AppRoute } from "./routes/AppRoute";

function App() {
  return (
    <>
      <div className="container flex flex-col w-full min-h-screen justify-center items-center">
        <AppRoute />
      </div>
      <Footer />
    </>
  );
}

export default App;
