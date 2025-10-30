import React, { useState } from 'react';
import DocterCard from '../../components/doctors/DocterCard';
import { doctors } from '../../assets/data/docters';

const Doctor = () => {
  const [inputsearch, setInputsearch] = useState(''); // Initialize as an empty string
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleSearch = () => {
    if (inputsearch.trim() === '') {
      // If the search input is empty, reset to the full list of doctors
      setFilteredDoctors(doctors);
      return;
    }

    const filtered = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(inputsearch.toLowerCase()) || // Search by name
      doctor.specialization.toLowerCase().includes(inputsearch.toLowerCase()) // Search by specialization
    );
    setFilteredDoctors(filtered);
  };

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer"
              placeholder="Search Doctor by Name or Specialization"
              value={inputsearch}
              onChange={(e) => setInputsearch(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doct) => (
                <DocterCard key={doct.id} doctors={doct} />
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">
                No doctors found matching your search.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctor;