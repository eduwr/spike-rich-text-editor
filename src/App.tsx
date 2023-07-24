import "./App.css";
import { LexicalComponent } from "./components/Lexical";
import { QuillComponent } from "./components/Quill";
import { TipTapComponent } from './components/TipTap'

function App() {
  return (
    <>
      <QuillComponent />
      <TipTapComponent />
      <LexicalComponent />
    </>
  );
}

export default App;
