import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./navigation pages/Header";
import Home from "./navigation pages/Home";
import About from "./navigation pages/head_components/About";
import Gallery from "./navigation pages/head_components/Gallery";
import Hire from "./navigation pages/head_components/Hire";
import Terms from "./navigation pages/head_components/Terms";
import TypesOfServices from "./navigation pages/head_components/TypesOfServices";
import Contact from "./navigation pages/head_components/Contact";



import Information from "./navigation pages/Sidebar/components/Information";
import Rules from "./navigation pages/Sidebar/components/Rules";
import Reservation from "./navigation pages/Sidebar/components/Reservation";
import Special from "./navigation pages/Sidebar/components/Special";

import Counter from "./navigation pages/Sidebar/components/Counter";
import Suggestions from "./navigation pages/Sidebar/components/Suggestions";
import Compatible from "./navigation pages/Sidebar/components/Compatible";
import Browser from "./navigation pages/Sidebar/components/Browser";
import FAQs from "./navigation pages/Sidebar/components/FAQs";
import Privacy from "./navigation pages/Sidebar/components/Privacy";


import OpLogin from "./navigation pages/OpLogin";
import EticLogin from "./navigation pages/EticLogin";
import Account from "./navigation pages/Account";
import TicketStatus from "./navigation pages/TicketStatus";

import RouteTable from "./home_components/RouteTable";
import Chtr from "./home_components/topdest/Chtr";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<About />} />
            {/* <Route path="/Duplicate" element={<Duplicate />} /> */}
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Hire" element={<Hire />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/TypesOfServices" element={<TypesOfServices />} />
            <Route path="/Contact" element={<Contact />} />

            {/* for section pages */}
            <Route path="/Information" element={<Information />} />
            <Route path="/Rules" element={<Rules />} />
            <Route path="/Reservation" element={<Reservation />} />
            <Route path="/Special" element={<Special />} />

            <Route path="/Counter" element={<Counter />} />
            <Route path="/Suggestions" element={<Suggestions />} />
            <Route path="/Compatible" element={<Compatible />} />
            <Route path="/Browser" element={<Browser />} />
            <Route path="/FAQs" element={<FAQs />} />
            <Route path="/Privacy" element={<Privacy />} />
            </Route>
            <Route path="/Home" element={<Home />} />
            <Route path="/TicketStatus" element={<TicketStatus />} />
            <Route path="/OpLogin" element={<OpLogin />} />
            <Route path="/EticLogin" element={<EticLogin />} />
            <Route path="/EticLogin/Account" element={<Account />} />
            <Route path="/TopDestination/RouteTable" element={<RouteTable />} />
            <Route path="/TopDestination/Chtr" element={<Chtr />} />
        </Routes>
        
      </BrowserRouter>
    </div>

  );
}

export default App;
