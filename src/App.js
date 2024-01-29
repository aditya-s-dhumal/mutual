
// App.jsx

import React from 'react';
import SmallCapHome from './components/SmallCapHome';
import SmallCapReturns from './components/SmallCapReturns';

import MidCapHome from './components/MidCapHome';
import MidCapReturns from './components/MidCapReturns';

import LargeCapHome from './components/LargeCapHome';
import LargeCapReturns from './components/LargeCapReturns';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Equity Funds App</h1>
        <ul>
          <li>
            <Link to="/small-cap">Small Cap Equity Funds</Link><br></br>
          </li>
          <li>
            <Link to="/mid-cap">Mid Cap Equity Funds</Link><br></br>
          </li>
          <li>
            <Link to="/large-cap">Large Cap Equity Funds</Link>
          </li>
        </ul>

        <Routes>
         <Route path="/small-cap/*" element={<SmallCapHome />} />
         <Route path="/small-cap/returns/:type" element={<SmallCapReturns />} />

         <Route path="/mid-cap/*" element={<MidCapHome />} />
         <Route path="/mid-cap/returns/:type" element={<MidCapReturns />} />

         <Route path="/large-cap/*" element={<LargeCapHome />} />
         <Route path="/large-cap/returns/:type" element={<LargeCapReturns />} />
         
        </Routes>

      </div>
    </Router>
  );
};

export default App;




// // App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import SmallCapHome from './components/SmallCapHome';
// import SmallCapReturns from './components/SmallCapReturns';
// import MidCapHome from './components/MidCapHome';
// import MidCapReturns from './components/MidCapReturns';
// import LargeCapHome from './components/LargeCapHome';
// import LargeCapReturns from './components/LargeCapReturns';

// const App = () => {
//   return (
//     <Router>
//       <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
//         <h1 className="text-4xl font-bold mb-8">Equity Funds App</h1>
//         <ul className="flex space-x-4">
//           <li>
//             <Link to="/small-cap" className="text-blue-500 hover:underline">
//               Small Cap Equity Funds
//             </Link>
//           </li>
//           <li>
//             <Link to="/mid-cap" className="text-blue-500 hover:underline">
//               Mid Cap Equity Funds
//             </Link>
//           </li>
//           <li>
//             <Link to="/large-cap" className="text-blue-500 hover:underline">
//               Large Cap Equity Funds
//             </Link>
//           </li>
//         </ul>

//         <Routes>
//           <Route path="/small-cap/*" element={<SmallCapHome />} />
//           <Route path="/small-cap/returns/:type" element={<SmallCapReturns />} />

//           <Route path="/mid-cap/*" element={<MidCapHome />} />
//           <Route path="/mid-cap/returns/:type" element={<MidCapReturns />} />

//           <Route path="/large-cap/*" element={<LargeCapHome />} />
//           <Route path="/large-cap/returns/:type" element={<LargeCapReturns />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
