const root = document.querySelector("#root");
const btn = createElement("button", { classNames: ["list-day"] }, "Click me!");

root.append(btn)

btn.addEventListener('click', myFunc)

function myFunc() {
    alert('Taras chmo ebanoe') 
}

function createElement(type, { classNames }, ...childNodes) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.append(...childNodes);

  return elem;
}
