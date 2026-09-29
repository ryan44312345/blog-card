import { Routes, Route } from "react-router-dom";
import CenteredLayout from "./layouts/CenteredLayout";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <CenteredLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </CenteredLayout>
  );
}