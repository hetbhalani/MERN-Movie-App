import React, { useState } from "react";
import Layout from "./Layout";
import SearchResults from "./SearchResults";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search value submission from Layout
  const handleSearchSubmit = (value) => {
    setSearchQuery(value);
  };

  return (
    <>
      <Layout onSearchSubmit={handleSearchSubmit} />
      <SearchResults searchQuery={searchQuery} />
    </>
  );
}

export default App;
