import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccountPage from './Components/User/UserAccountCreation';
import UserLogin from './Components/User/UserLogin';
import MainDashboard from './Components/Dashboard/MainDashboard';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminAccount from './Components/Admin/AdminCreation';
import UserDashboard from './Components/Dashboard/UserDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import AddParkingForm from './Components/Managament/Parking';
import ViewParkingPage from './Components/Managament/ViewParking';
import UserParkingPage from './Components/User/UserParking';
import PetrolPumpPage from './Components/Managament/PetrolBump';
import ATMPage from './Components/Managament/ATM';
import RestaurantPage from './Components/Managament/Restuarant';
import HospitalPage from './Components/Managament/Hospital';
import PoliceStationPage from './Components/Managament/PoliceStation';
import ShoppingMallPage from './Components/Managament/ShoppingMall';
import ViewBookingData from './Components/Managament/BookingInfo';
import AppointmentInfo from './Components/Managament/AppointmentInfo';
import ServicesPage from './Components/Dashboard/Services';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/'element={<MainDashboard/>}/>
        <Route path="/user-login" element={<UserLogin/>}/>
          <Route path="/user-account-create" element={<AccountPage/>}/>
          <Route path="/admin-login" element={<AdminLogin/>}/>
          <Route path="/admin-account-create" element={<AdminAccount/>}/>
          <Route path='/user-registration'element={<AccountPage/>}/>
          <Route path='/user-dashboard'element={<UserDashboard/>}/>
          <Route path='/admin-dashboard'element={<AdminDashboard/>}/>
          <Route path='/parking'element={<AddParkingForm/>}/>
          <Route path='/view-parking'element={<ViewParkingPage/>}/>
          <Route path='/user-parking'element={<UserParkingPage/>}/>
          <Route path='/petrolbump'element={<PetrolPumpPage/>}/>
          <Route path='atm'element={<ATMPage/>}/>
          <Route path='restaurant' element={<RestaurantPage/>}/>
          <Route path='/hospital' element={<HospitalPage/>}/>
          <Route path='police'element={<PoliceStationPage/>}/>
          <Route path='/shopping' element={<ShoppingMallPage/>}/>
          <Route path='booking'element={<ViewBookingData/>}/>
          <Route path='/appointmentInfo' element={<AppointmentInfo/>}/>
          <Route path='/services' element={<ServicesPage/>}/>


      </Routes>
    </div>
    </Router>
  );
}

export default App;
