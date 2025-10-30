import DoctorContext from "./DoctorContext";

import React, { createContext, useState } from 'react';


const DoctorProvider = ({ children }) => {
  const [doctor, setDoctor] = useState(null);
  console.log(doctor);

  return (
    <DoctorContext.Provider value={{ doctor, setDoctor }}>
      {children}
    </DoctorContext.Provider>
  );
};
export default DoctorProvider;