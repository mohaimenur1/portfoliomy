import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results, setResults] = useState([]);
  console.log(results);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    search();
  }, [term]);

  const renderResult = results.map((result) => {
    return (
      <div key={result.pageid} class="card w-75">
        <div class="card-body">
          <h5 class="card-title">{result.title}</h5>
          <p class="card-text">{result.snippet}</p>
          {/* <a href="#" class="btn btn-primary">
            Button
          </a> */}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="input-title">Search Here:</div>
      <div className="input-item">
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          placeholder="Search"
        />
      </div>
      {renderResult}
    </div>
  );
};

export default Search;
