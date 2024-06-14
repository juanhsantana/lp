import { Footer } from "./components/ui/footer";
import { AppRoute } from "./routes/AppRoute";

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen justify-between">
      <div className="container flex flex-1 flex-col w-full justify-center items-center pb-10">
        <AppRoute />
      </div>
      <Footer />
    </div>
  );
}

export default App;
