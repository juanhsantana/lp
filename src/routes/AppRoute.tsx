import { Loading } from "@/pages/Loading";
import { Quizz } from "@/pages/Quizz";
import { SalesPage } from "@/pages/SalesPage";
import { Start } from "@/pages/Start";
import { Routes, Route } from "react-router-dom";

export function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/quizz" element={<Quizz />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/sales-page" element={<SalesPage />} />
    </Routes>
  );
}
