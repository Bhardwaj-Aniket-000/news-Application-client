import { useState } from "react";

export const useFilter = (data, callback) => {
  const [query, setQuery] = useState("");
  const filteredArr = data.filter((obj) => callback(obj).includes(query));
  return [filteredArr, setQuery];
};

const FilterComponent = () => {
  const arr = [
    { id: 1, title: "aniket bhardwaj", age: 20, profession: "developer" },
    { id: 4, title: "sonu bhardwaj", age: 23, profession: "employee" },
    { id: 3, title: "gourav bhardwaj", age: 22, profession: "enginner" },
    { id: 5, title: "mohit bhardwaj", age: 24, profession: "manager" },
    { id: 2, title: "ankush bhardwaj", age: 21, profession: "owner" },
    { id: 2, title: "ankush bhardwaj", age: 21, profession: "owner" },
  ];
  const [filterArray, setQuery] = useFilter(arr, (obj) => obj.title);
  const [sortedArray, setSortedArray] = useState(() => () => {});
  const [showPopup, setShowPopup] = useState();

  return (
    <>
      <div className="w-60 flex flex-col gap-4 p-2 bg-slate-300 mx-auto" onClick={() => setShowPopup(() => showPopup ? false:true)}>
        <div>
          <button
            onClick={() => setQuery("")}
            className="bg-slate-400 px-3 py-1 rounded-md w-full"
          >
            clear filter Array
          </button>
          <button
            onClick={() => {
              setSortedArray(() => (a, b) => a.age - b.age);
            }}
            className="bg-slate-400 px-3 py-1 rounded-md w-full mt-2"
          >
            sort by age
          </button>
          <button
            onClick={() => {
              setSortedArray(() => (a, b) => b.age - a.age);
            }}
            className="bg-slate-400 px-3 py-1 rounded-md w-full mt-2"
          >
            sort by age
          </button>
          <button
            onClick={() => {
              setSortedArray(() => {});
            }}
            className="bg-slate-400 px-3 py-1 rounded-md w-full mt-2"
          >
            clear sort
          </button>
        </div>
        <p className="text-center">
          totalAge :
          {filterArray.reduce((crr, acc) => {
            return acc.age + crr;
          }, 0)}
        </p>
        <div className="w-full">
          <button className="text-green-500 capitalize font-bold" onClick={() => setShowPopup(true)}>Sign in</button>
          {showPopup && (
            <form className="flex flex-col w-1/2 bg-blue-500" onClick={(e) => e.stopPropagation()}>
              <input
                type="text"
                className="w-full mt-2 p-1 bg-transparent border border-slate-700 rounded-md"
              />
              <input
                type="password"
                className="w-full mt-2 p-1 bg-transparent border border-slate-700 rounded-md"
              />
              <button
                type="submit"
                className="p-1 rounded-md bg-green-500 border mt-2"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                submit
              </button>
            </form>
          )}
        </div>
        <select
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-1 rounded-md bg-gray-500 text-sm"
        >
          <option value="">--Select--</option>
          <option value="aniket bhardwaj">aniket bhardwaj</option>
          <option value="ankush bhardwaj">ankush bhardwaj</option>
          <option value="gourav bhardwaj">gourav bhardwaj</option>
          <option value="sonu bhardwaj">sonu bhardwaj</option>
          <option value="mohit bhardwaj">mohit bhardwaj</option>
        </select>
        <div className="w-full h-auto flex gap-2 flex-wrap bg-blue-500 p-2">
          {filterArray.sort(sortedArray).map((obj) => {
            return (
              <div
                className="p-2 text-center text-red-500 bg-slate-700 rounded-md"
                key={crypto.randomUUID()}
              >
                <p className="text-xs">{obj.title}</p>
                <p className="text-xs">{obj.age}</p>
                <p className="text-xs">{obj.profession}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FilterComponent;
