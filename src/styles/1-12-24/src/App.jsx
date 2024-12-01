import React from 'react';
import SignupForm from "./components/SignupForm";
import ImageCard from "./components/ImageCard";

const App = () => {
  return (
    <div className="app-container">
      <div className="form-section">
        <SignupForm />
      </div>
      <div className="image-section">
        <ImageCard />
      </div>
    </div>
  );
};

export default App;