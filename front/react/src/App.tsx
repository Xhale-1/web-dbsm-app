import "./app2.css";
import ModuleGrid from "./4ModuleGrid.tsx";
import { modules } from "./2struct_modules.tsx";

function App() {

  // useEffect(() => {
  //   // Уведомляем бэкенд о готовности фронтенда
  //   emit("frontend_ready", {}).catch(err => console.error("Failed to emit frontend_ready", err));
  // }, []);


  return (
    <main className="container">
      <div className="backingPlate">
        <ModuleGrid modules={modules} />
      </div>
    </main>
  );
}

export default App;
