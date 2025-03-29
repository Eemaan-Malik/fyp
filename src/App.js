import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Modal from './components/Modal'; // Import the Modal component
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [formType, setFormType] = useState(null); // Manage which form is visible (SignUp or Login)

  const closeForm = () => {
    setFormType(null); // Close the form
  };

  return (
    <div className="App">
      <Navbar setFormType={setFormType} />
      
      <Landing />
      
      {/* Modal for displaying forms */}
      <Modal isOpen={formType !== null} closeModal={closeForm}>
        {formType === 'signUp' && <SignUpForm closeForm={closeForm} />}
        {formType === 'login' && <LoginForm closeForm={closeForm} />}
      </Modal>

      {/* Pass setFormType to Footer */}
      <Footer setFormType={setFormType} />
    </div>
  );
}

export default App;  
