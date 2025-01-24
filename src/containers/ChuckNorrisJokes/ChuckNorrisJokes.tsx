import { useEffect, useState } from 'react';
import { IJokeResponse } from '../../types';
import JokeList from '../../components/JokeList/JokeList.tsx';
import ReceiveBtn from '../../components/ReceiveBtn/ReceiveBtn.tsx';

const ChuckNorrisJokes = () => {
  const [jokes, setJokes] = useState<string[]>([]);
  const URL = 'https://api.chucknorris.io/jokes/random';
  const limit = 5;

  const jokeRequest = async () => {
    setJokes([]);
    const URLArray: string[] = [];

    for (let i = 0; i < limit; i++) {
       URLArray.push(URL);
    }

    const jokeArray = await Promise.all(
      URLArray.map(async (url) => {
        const response = await fetch(url);
        if (response.ok) {
          const data: IJokeResponse = await response.json();
          return data.value;
        }
        throw new Error(response.statusText);
      })
    );

    setJokes(jokeArray);
  };

  useEffect(() => {
    jokeRequest();
  }, []);

  return (
    <>
      <div className="container">
        <div className="p-3">
          <h3 className="text-center">Chuck Norris Jokes</h3>
          <div className="">
            <JokeList jokes={jokes} />
          </div>
        </div>

          <ReceiveBtn jokeRequest = {jokeRequest} />
      </div>

    </>
  );
};

export default ChuckNorrisJokes;