import ShowUserInfo from './components/UserInfo';
import './App.css';

function App() {
  return (
   <div>
    <h1>Users</h1>
    <hr/>
    <ShowUserInfo name='Nazareth' age={23} email='nazarethbriseno@gmail.com'/>
    <ShowUserInfo name='Jose' age={23} email='rabago@gmail.com'/>
    <ShowUserInfo name='Laz' age={22} email='lazlantern767@gmail.com'/>
    <ShowUserInfo name='Marc' age={22} email='marcymarcyandthefunkybunch@gmail.com'/>
   </div>
  );
}

export default App;
