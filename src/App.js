import { Router , Route,BrowserRouter } from 'react-router-dom';

import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Home/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/index" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about-us" element={<AboutUs/>}></Route>
      <Route path="/team" element={<Team/>}></Route>
      <Route path="/testimonials" element={<Testimonial/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/blog" element={<Blogs/>}></Route>
      <Route path="/blog-detail" element={<BlogDetail/>}></Route>
      <Route path="/contact" element={<ContactUs/>}></Route>
    </Routes>
  </BrowserRouter>
};

export default App;
