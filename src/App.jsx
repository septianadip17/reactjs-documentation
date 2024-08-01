import "./index.css";

const isRed = true;

function MyButton() {
  return (
    <div>
      {isRed ? (
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          I'm a button
        </button>
      ) : (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          I'm a button
        </button>
      )}
    </div>
  );
}

export default function MyApp() {
  const user = {
    name: "iay",
  };
  return (
    <div>
      <h1 className="text-xl">hi, {user.name}</h1>
      <MyButton />
    </div>
  );
}

// const user = {
//   name: "Hedy Lamar",
//   imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
//   imageSize: 90
// };

// export default function Profile(){
//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <img className="avatar" src={user.imageUrl} alt={"Photo of " + user.name}
//       style={{
//         width: user.imageSize,
//         height: user.imageSize
//       }}/>
//     </div>
//   )
// }
