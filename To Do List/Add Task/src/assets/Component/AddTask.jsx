import React from "react";

const AddTask = ({ movies, deleteMovie }) => {
  return (
    <>
      <ol className="bg-[#b287fd] w-[100%]">
        {movies.map((movie) => (
          <li className="text-white m-1 flex justify-between items-center h-10 ml-5  " key={movie.id}>
            {movie.title}
            <button
              className="w-30 text-black cursor-pointer bg-white h-full rounded-full hover:bg-[#ff006a]"
              onClick={() => deleteMovie(movie.id)}
            >
              Delete Me!
            </button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default AddTask;
