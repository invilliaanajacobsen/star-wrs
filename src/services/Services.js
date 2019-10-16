import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [resultDatas, setResults] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setErrors] = useState(false);

  async function fetchUrl() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json)

      if (json) {
        setResults(json.results);
        let results = json.results;

        const resultObj = json.results.map(async (result) => {
          let url = `https://www.googleapis.com/customsearch/v1?q=${result.name}&cx=006556936853971270487%3Atip6rjdt3xu&searchType=image&key=AIzaSyCV5v1NbhR02akfxiH1LpvOZWcczCMwNWY`
          let response = await fetch(url);
          let json = await response.json();
          const img = json ? json.items[0].image.thumbnailLink : { img: "" };
          results = { ...result, img }

          return {
            results
          }
        });

        setResults(resultObj);
        setLoading(false);
      }
    } catch (error) {
      setErrors(error);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return [data, loading, setData, setLoading, resultDatas, error];
}
export { useFetch };
