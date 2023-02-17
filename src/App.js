
import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/User/Authentication/Login/Login';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
    <Header></Header>

<Routes>
  <Route path="/login" element={<Login></Login>}></Route>

  <Route path="/" element={<Home></Home>}></Route>

  {/* <Route path="/dashboard" element={<Dashboard></Dashboard>}>
    <Route path="/dashboard" element={<DashboardHome />} />
    <Route path="/dashboard/review" element={<ReviewDashboard />} />
    <Route path="/dashboard/makeAdmin" element={<MakeAnAdmin />} />
    <Route path="/dashboard/myOrders" element={<MyOrder />} />
    <Route path="/dashboard/pay/:id" element={<Payment />} />
    <Route path="/dashboard/addMeals" element={<AddMeals />} />
    <Route path="/dashboard/deleteMeal" element={<DeleteMeal />} />
    <Route path="/dashboard/manageOrders" element={<ManageOrders />} />
  </Route> */}

  {/* <Route path="/myOrders/:id" element={<Edit></Edit>}></Route> */}

  {/* <Route path="/meals/:id" element={ <><PrivetRoute><BuyNow></BuyNow></PrivetRoute> </> }></Route> */}

  {/* <Route path="/" element={<Home></Home>}>
    <Route path="/" element={<Lunch />} />
    <Route path="/breakfast" element={<Breakfast />} />
    <Route path="/lunch" element={<Lunch />} />
    <Route path="/dinner" element={<Dinner />} />
  </Route> */}

  {/* <Route path="*" element={<Error></Error>}></Route> */}
</Routes>
<Footer></Footer>
    </>
  );
}

export default App;
