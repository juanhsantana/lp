import { Start } from "@/pages/Start";
import { Routes, Route } from "react-router-dom";

export function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
    </Routes>
  );
}
