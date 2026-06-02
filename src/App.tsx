/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./components/Layout";
import { LanguageProvider } from "./contexts/LanguageContext";

const Home = lazy(() => import("./pages/Home").then(m => ({ default: m.Home })));
const Services = lazy(() => import("./pages/Services").then(m => ({ default: m.Services })));
const Programs = lazy(() => import("./pages/Programs").then(m => ({ default: m.Programs })));
const About = lazy(() => import("./pages/About").then(m => ({ default: m.About })));
const Contact = lazy(() => import("./pages/Contact").then(m => ({ default: m.Contact })));
const Knowledge = lazy(() => import("./pages/Knowledge").then(m => ({ default: m.Knowledge })));
const FAQ = lazy(() => import("./pages/FAQ").then(m => ({ default: m.FAQ })));
const Privacy = lazy(() => import("./pages/Privacy").then(m => ({ default: m.Privacy })));
const Terms = lazy(() => import("./pages/Terms").then(m => ({ default: m.Terms })));
const PersonalTraining = lazy(() => import("./pages/PersonalTraining").then(m => ({ default: m.PersonalTraining })));
const CustomerStories = lazy(() => import("./pages/CustomerStories").then(m => ({ default: m.CustomerStories })));

export default function App() {
  return (
    <LanguageProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="gioi-thieu" element={<About />} />
            <Route path="dich-vu" element={<Services />} />
            <Route path="chuong-trinh" element={<Programs />} />
            <Route path="kien-thuc" element={<Knowledge />} />
            <Route path="lien-he" element={<Contact />} />
            <Route path="cau-hoi-thuong-gap" element={<FAQ />} />
            <Route path="chinh-sach-bao-mat" element={<Privacy />} />
            <Route path="dieu-khoan-su-dung" element={<Terms />} />
            <Route path="huan-luyen-ca-nhan" element={<PersonalTraining />} />
            <Route path="cau-chuyen-khach-hang" element={<CustomerStories />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
