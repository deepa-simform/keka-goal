import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { Overview } from "./pages/Overview";
import { ButtonShowcase } from "./pages/ButtonShowcase";
import BadgeShowcase from "./pages/BadgeShowcase";
import FormShowcase from "./pages/FormShowcase";
import ModalShowcase from "./pages/ModalShowcase";
import TableShowcase from "./pages/TableShowcase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="buttons" element={<ButtonShowcase />} />
          <Route path="badges" element={<BadgeShowcase />} />
          <Route path="forms" element={<FormShowcase />} />
          <Route path="modals" element={<ModalShowcase />} />
          <Route path="tables" element={<TableShowcase />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
