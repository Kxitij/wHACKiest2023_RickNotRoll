import React, { useState } from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'https://cdn.skypack.dev/react-icons/ti';

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({ title, content }) => /*#__PURE__*/
React.createElement("div", { className: "card" }, /*#__PURE__*/
React.createElement("h2", null, title), /*#__PURE__*/
React.createElement("p", null, content));



const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  return /*#__PURE__*/(
    React.createElement("div", { className: "carousel" },
    active > 0 && /*#__PURE__*/React.createElement("button", { className: "nav left", onClick: () => setActive(i => i - 1) }, /*#__PURE__*/React.createElement(TiChevronLeftOutline, null)),
    React.Children.map(children, (child, i) => /*#__PURE__*/
    React.createElement("div", { className: "card-container", style: {
        '--active': i === active ? 1 : 0,
        '--offset': (active - i) / 3,
        '--direction': Math.sign(active - i),
        '--abs-offset': Math.abs(active - i) / 3,
        'pointer-events': active === i ? 'auto' : 'none',
        'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
        'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block' } },

    child)),


    active < count - 1 && /*#__PURE__*/React.createElement("button", { className: "nav right", onClick: () => setActive(i => i + 1) }, /*#__PURE__*/React.createElement(TiChevronRightOutline, null))));


};

const App = () => /*#__PURE__*/
React.createElement("div", { className: "app" }, /*#__PURE__*/
React.createElement(Carousel, null,
[...new Array(1)].map((_, i) => /*#__PURE__*/
React.createElement(Card, { title: 'Community 1', content: "Surya" })),
React.createElement(Carousel, null,
[...new Array(1)].map((_, i) => /*#__PURE__*/
React.createElement(Card, { title: 'Community 2', content: "Kshitij" })),
React.createElement(Carousel, null,
[...new Array(1)].map((_, i) => /*#__PURE__*/
React.createElement(Card, { title: 'Community 3', content: "Rohan" }))))));






ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.body);