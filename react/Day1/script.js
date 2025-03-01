// const root=document.querySelector("#parent");
// const ul = document.createElement("ul");

// const li1 = document.createElement('li');
// li1.innerText="one";
// const li2 = document.createElement('li');
// li2.innerText="two";
// const li3 = document.createElement('li');
// li3.innerText = "three";


// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// root.appendChild(ul);

// root.appendChild(ele);

//console.log(React);
//console.log(ReactDOM);

// const root=document.querySelector("#parent");
// const reactRoot = ReactDOM.createRoot(root);

// const li1 = React.createElement("li",{
//     style:{
//         color:"blue",
//     }
// },"ITEM 1"); // -> type, options, children
// const li2 = React.createElement("li",{
//     className: "text-2"
// },"ITEM 2");
// const li3 = React.createElement("li",{},"ITEM 3");

// const ul = React.createElement("ul",{},[li1, li2, li3]);

// reactRoot.render(ul);

// const root=document.querySelector("#parent");
// const reactRoot = ReactDOM.createRoot(root);

// // const title = React.createElement("h1",{},"Hello form React DOM");
// // console.log(typeof title)
// // console.log(title);

// const title2 = {
//     $$typeof: Symbol.for("react.element"),
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         "children": "Hello form React DOM"
//     },
//     "_owner": null,
//     "_store": {}
// }

const root = document.querySelector("#parent");
const reactRoot = ReactDOM.createRoot(root)

// const title2 = <h1>Hello</h1> --> react element

const Title2 = () =>{
    return <h1>hello there</h1>
}

// reactRoot.render(title2());
reactRoot.render(<Title2 />)