import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container p-8 max-w-md gap-y-2 flex flex-col">
      <h1 className="align-center">Welcome to StarBucket project!</h1>

      <div className="flex justify-around p-4">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite w-12 " alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri w-12" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react w-12" alt="React logo" />
        </a>
      </div>

      <p>Click on the logos to learn more.</p>

      <form
        className="column flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <Input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <Button type="submit" className="bg-black">
          Greet
        </Button>
      </form>

      <p className="">{greetMsg}</p>
    </div>
  );
}

export default App;
