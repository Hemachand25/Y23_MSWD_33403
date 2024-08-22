import logo from './logo.jpeg';
import Student from './Components/Student';
import Header from './Components/Header';
import Footer from './Components/Footer'; 
import Courses from './Components/Courses';
import Faculty from './Components/Faculty';
import Schedule from './Components/Schedule';
import FeedbackForm from './Components/FeedbackForm';
import './App.css';
const user={logo: logo}
function App() {
  return (
    <div className="App">
      <Header></Header>
      <img src={user.logo}></img>
      <Student></Student>
       <Faculty></Faculty>
       <Courses></Courses>
       <FeedbackForm></FeedbackForm>

       <Schedule></Schedule>
       <Footer></Footer>
      

    </div>
  );
}

export default App;