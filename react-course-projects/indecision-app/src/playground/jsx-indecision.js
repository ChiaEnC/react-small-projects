//JSX = javascript xml
const appObject = {
  title: "One",
  subtitle: "Give out one dollar to change the world",
  options: []
};
const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    appObject.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
};

// const template = (
//   <div>
//     {appObject.subtitle && <p>subtitle : {appObject.subtitle}</p>}
//     {appObject.options.length > 0 ? (
//       <p>this is your option</p>
//     ) : (
//       <p>No options</p>
//     )}
//   </div>
// );

// function getLocation(location) {
//   if (location) {
//     return <p>Location:{location}</p>;
//   }
//   return undefined;
// }
// const userName = "Vivian";
// const userAge = 24;
// const userlocation = "Enschede";
// const templateTwo = (
//   <div>
//     <h1>{appObject.title ? appObject.title : "Anonymous"}</h1>
//     {userAge && userAge >= 18 && <p>userAge : {userAge}</p>}
//     {getLocation(userlocation)}
//     {<h3>cool</h3>}
//   </div>
// );

// var template = React.createElement("h1", { id: "someid" }, "something new");
const removeAll = () => {
  appObject.options = [];
  renderApp();
};
const numbers = [100, 200, 300];

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * appObject.options.length);
  const option = appObject.options[randomNum];
  alert(option);
};

const renderApp = () => {
  var template = (
    <div>
      <h1>This is title</h1>
      <p>This is some info</p>
      <button
        disabled={appObject.options.length === 0}
        onClick={onMakeDecision}
      >
        What should I do?
      </button>
      <button onClick={removeAll}>remove</button>
      {/* {numbers.map(number => (
        <p key={number}>Number :{number}</p>
      ))} */}

      {appObject.options.map(item => (
        <li key={item}>item : {item}</li>
      ))}
      {/* <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol> */}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option </button>
      </form>
    </div>
  ); //paragraph
  var appRoot = document.getElementById("app");
  ReactDOM.render(template, appRoot);
};

renderApp();
//JSX = javascript xml
const appObject = {
  title: "One",
  subtitle: "Give out one dollar to change the world",
  options: []
};
const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    appObject.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
};

// const template = (
//   <div>
//     {appObject.subtitle && <p>subtitle : {appObject.subtitle}</p>}
//     {appObject.options.length > 0 ? (
//       <p>this is your option</p>
//     ) : (
//       <p>No options</p>
//     )}
//   </div>
// );

// function getLocation(location) {
//   if (location) {
//     return <p>Location:{location}</p>;
//   }
//   return undefined;
// }
// const userName = "Vivian";
// const userAge = 24;
// const userlocation = "Enschede";
// const templateTwo = (
//   <div>
//     <h1>{appObject.title ? appObject.title : "Anonymous"}</h1>
//     {userAge && userAge >= 18 && <p>userAge : {userAge}</p>}
//     {getLocation(userlocation)}
//     {<h3>cool</h3>}
//   </div>
// );

// var template = React.createElement("h1", { id: "someid" }, "something new");
const removeAll = () => {
  appObject.options = [];
  renderApp();
};
const numbers = [100, 200, 300];

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * appObject.options.length);
  const option = appObject.options[randomNum];
  alert(option);
};

const renderApp = () => {
  var template = (
    <div>
      <h1>This is title</h1>
      <p>This is some info</p>
      <button
        disabled={appObject.options.length === 0}
        onClick={onMakeDecision}
      >
        What should I do?
      </button>
      <button onClick={removeAll}>remove</button>
      {/* {numbers.map(number => (
        <p key={number}>Number :{number}</p>
      ))} */}

      {appObject.options.map(item => (
        <li key={item}>item : {item}</li>
      ))}
      {/* <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol> */}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option </button>
      </form>
    </div>
  ); //paragraph
  var appRoot = document.getElementById("app");
  ReactDOM.render(template, appRoot);
};

renderApp();
