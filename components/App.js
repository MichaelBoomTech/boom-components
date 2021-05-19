"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("./AddShareIcons/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  let exampleEvent1 = {
    "id": 343491,
    "title": "Open Air Poetry Reading and Discussion",
    "start": "2021-04-21",
    "end": "2021-04-27",
    "all_day": 1,
    "image": "https:\/\/static.wixstatic.com\/media\/11062b_b31efefcdf3846849b7fe93d9203f105~mv2_d_6200_4132_s_4_2.jpg",
    "desc": "<p>Four amazing evenings of poetry reading and discussion! We will do a poetry reading from various poets followed by an interactive discussion. Each day there will be three poets whose works will be read and discussed.<br>If you want to attend and listen to some great poetry, please register. Our organizers will get back to you.<\/p>",
    "color": "color-13",
    "venue": {
      "name": "Virginia Road",
      "address": "1485 Virginia Road, San Marino, CA 91108, USA",
      "city": "",
      "statesList": "",
      "country": "",
      "postal": "",
      "phone": "",
      "email": "",
      "website": "",
      "showMap": "1",
      "showMapLink": "1",
      "lat": "34.1204167",
      "long": "-118.1201348"
    },
    "organizer": {
      "name": "",
      "phone": "",
      "website": "",
      "email": ""
    },
    "repeat": {
      "type": "",
      "interval": "",
      "end": "",
      "advanced": "",
      "exclude": ""
    },
    "kind": "0",
    "categories": [],
    "guests": [],
    "registration": null,
    "tickets": null
  };

  if (!exampleEvent1.all_day) {
    exampleEvent1.startTime = moment(exampleEvent1.start).format('HH:mm');
    exampleEvent1.endTime = moment(exampleEvent1.end).format('HH:mm');
  }

  let exampleEvent2 = {
    "id": 343490,
    "title": "Yoga at the Beach",
    "start": "2021-04-26T13:00:00",
    "end": "2021-04-26T14:00:00",
    "all_day": 0,
    "image": "https:\/\/static.wixstatic.com\/media\/11062b_30464ec0744e445198eb1b60f2b594c2~mv2_d_5327_3551_s_4_2.jpg",
    "desc": "Leave your stress at the office! Come join us this Tuesday afternoon for yoga during your lunch break.",
    "color": "color-8",
    "venue": {
      "name": "Marina del Rey",
      "address": "Marina del Rey, CA, USA",
      "city": "",
      "statesList": "",
      "country": "",
      "postal": "",
      "phone": "",
      "email": "",
      "website": "",
      "showMap": "1",
      "showMapLink": "1",
      "lat": "33.9802893",
      "long": "-118.4517449"
    },
    "organizer": {
      "name": "",
      "phone": "",
      "website": "",
      "email": ""
    },
    "repeat": {
      "type": "",
      "interval": "",
      "end": "",
      "advanced": "",
      "exclude": ""
    },
    "kind": "0",
    "categories": [],
    "guests": [],
    "registration": null,
    "tickets": null
  };

  if (!exampleEvent2.all_day) {
    exampleEvent2.startTime = moment(exampleEvent2.start).format('HH:mm');
    exampleEvent2.endTime = moment(exampleEvent2.end).format('HH:mm');
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_index.default, {
    comp_id: 'comp-knoo8ma8',
    instance: 'YBqfV6G8MmNwzv-dQ5ASggk5froH6YF9uReO2n3FbNw.eyJpbnN0YW5jZUlkIjoiMjFmZDIwNzUtYWFiMy00NDc5LWIxZTYtZDk3M2YxNzc2NDFhIiwiYXBwRGVmSWQiOiIxM2I0YTAyOC0wMGZhLTcxMzMtMjQyZi00NjI4MTA2YjhjOTEiLCJzaWduRGF0ZSI6IjIwMjEtMDUtMThUMDY6MDc6NDcuMDY0WiIsImRlbW9Nb2RlIjpmYWxzZSwiYWlkIjoiYTk2ZWI5NzUtM2YyNS00NzQyLTg3MWUtNDJkNDNkMzdiNGJlIiwic2l0ZU93bmVySWQiOiJjZDQ4NmE0Ny0yODA4LTQxYmUtYjA0NS0xMGI2MDdhZTFiZTQifQ',
    event: exampleEvent2,
    iconsSectionCustomClassNames: ['loo'],
    showAddToIcons: true,
    addToSectionTitle: 'Add to calendar',
    addToIconsCustomClassNames: ['addToIconsCustomClassNames', 'addToIconsCustomClassNames111111'],
    showShareIcons: true,
    shareSectionTitle: 'Share Event',
    shareIconsCustomClassNames: ['shareIconsCustomClassNames', 'shareIconsCustomClassNames11111'],
    boomEventUrlBase: 'https://calendar.boomte.ch/single/',
    copyActionTooltipText: 'Copy event url',
    copiedTooltipText: 'Copied',
    sequence: 'horizontal'
  }));
}

var _default = App;
exports.default = _default;