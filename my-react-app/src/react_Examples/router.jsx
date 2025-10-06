function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

/*Example 2*/
import {useParams } from 'react-router-dom';

function Info() {
  const { firstname } = useParams();
  return <h1>Hello, {firstname}!</h1>;
}

function App1() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/customer/Emil">Emil</Link> | 
        <Link to="/customer/Tobias">Tobias</Link> |
        <Link to="/customer/Linus">Linus</Link>
      </nav>

      <Routes>
        <Route path="/customer/:firstname" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

function Router(){
    return(
        <>
        <App />
        <App1 />
        </>
    );
}

export default Router