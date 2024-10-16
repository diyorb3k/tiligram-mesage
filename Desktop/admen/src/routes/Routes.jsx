import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admen from "../components/admen";
import Dashboad from "../page/Dashboad/Dashboad";
import Guvohnomaberish from "../page/Guvohnoma/Guvohnomaberish";
import Hisobatlar from "../page/Hisobat/Hisobatlar";
import Kiritish from "../page/Kitoblar/Kiritish";
import Resurslarbazasi from "../page/Kitoblar/Resurslarbazasi";
import Sozlamalar from "../page/Kitoblar/Sozlamalar";
import Malumotlar from "../page/Tashkilot/Malumotlar";
import Tizimyuriqnomasi from "../page/Tizim yuriqnomasi/Tizimyuriqnomasi";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Admen />}>
      <Route path="Dashboad" element={<Dashboad />} />
      <Route path="Guvohnomaberish" element={<Guvohnomaberish />} />
      <Route path="Hisobatlar" element={<Hisobatlar />} />
      <Route path="Kiritish" element={<Kiritish />} />
      <Route path="Resurslarbazasi" element={<Resurslarbazasi />} />
      <Route path="Sozlamalar" element={<Sozlamalar />} />
      <Route path="Malumotlar" element={<Malumotlar />} />
      <Route path="Tizimyuriqnomasi" element={<Tizimyuriqnomasi />} />
    </Route>
  </Routes>
);  

export default AppRoutes;
