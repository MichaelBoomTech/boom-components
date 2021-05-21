"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadSharer = downloadSharer;
exports.openAddToUrl = openAddToUrl;
exports.setLocation = setLocation;
exports.openShareUrl = openShareUrl;
exports.generateEventUrl = generateEventUrl;
exports.copyLink = copyLink;
exports.checkProps = checkProps;
exports.generateCustomClassNames = generateCustomClassNames;
exports.DEFAULTS = exports.encodeShareUrl = void 0;

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.string.split.js");

function downloadSharer(e, type, event) {
  e.stopPropagation();
  let desc = "".concat(event.desc ? "".concat(event.desc.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " "), "  ") : "").concat(event.venue.name || event.venue.phone || event.venue.email || event.venue.website ? "<p><b>Venue Details.</b></p>  " : "").concat(event.venue.name ? "".concat(event.venue.name, ",<br/>  ") : "").concat(event.venue.phone ? "".concat(event.venue.phone, ",<br/>  ") : "").concat(event.venue.email ? "".concat(event.venue.email, ",<br/>  ") : "").concat(event.venue.website ? "".concat(event.venue.website, ".<br/>  ") : "").concat(event.organizer.name || event.organizer.phone || event.organizer.email || event.organizer.website ? "<p><b>Organizer</b></p>  " : "").concat(event.organizer.name ? "".concat(event.organizer.name, ",<br/>  ") : "").concat(event.organizer.phone ? "".concat(event.organizer.phone, ",<br/>  ") : "").concat(event.organizer.email ? "".concat(event.organizer.email, ",<br/>  ") : "").concat(event.organizer.website ? "".concat(event.organizer.website, ".<br/>  ") : "");
  let icsSharer = "https://calendar.boomte.ch/createIcsFile?title=".concat(event.title, "&desc=").concat(encodeURIComponent(type === 'icalendar' ? desc.replace(/(<([^>]+)>)/ig, '') : desc), "&start=").concat(event.start, "&end=").concat(event.end, "&address=").concat(encodeURIComponent(event.venue.address));
  window.location.href = icsSharer;
}

function openAddToUrl(e, type, event) {
  e.stopPropagation();
  let eventDescription = event.desc ? createDesc(event) : "";
  let url;

  switch (type) {
    case 'google':
      if (event.all_day) url = 'https://calendar.google.com/calendar/r/eventedit?text=' + encodeURIComponent(event.title) + '&dates=' + moment(formatForAddtoCalendar(event, 'start', type)).format('YYYYMMDD') + "/" + moment(formatForAddtoCalendar(event, 'end')).format('YYYYMMDD') + '&details=' + encodeURIComponent(event.desc ? eventDescription : "") + '&location' + setLocation(event, 'encode') + '&sprop=name';else url = 'https://calendar.google.com/calendar/r/eventedit?text=' + encodeURIComponent(event.title) + '&dates=' + moment(formatForAddtoCalendar(event, 'start', type)).format('YYYYMMDD[T]HHmmss') + '/' + moment(formatForAddtoCalendar(event, 'end')).format('YYYYMMDD[T]HHmmss') + '&details=' + encodeURIComponent(event.desc ? eventDescription : "") + '&location' + setLocation(event, 'encode') + '&sprop=name';
      break;

    case 'yahoo':
      if (event.all_day) url = 'https://calendar.yahoo.com/?v=60&view=d&type=20&DUR=' + (event.all_day ? 'all_day' : '') + '&TITLE=' + encodeURIComponent(event.title) + '&ST=' + moment(formatForAddtoCalendar(event, 'start', type)).format('YYYYMMDD') + "&ET=" + moment(formatForAddtoCalendar(event, 'end', 'yahoo')).format('YYYYMMDD') + '&DESC=' + eventDescription + '&in_loc=' + setLocation(event);else url = 'https://calendar.yahoo.com/?v=60&view=d&type=20&TITLE=' + encodeURIComponent(event.title) + '&ST=' + moment(formatForAddtoCalendar(event, 'start', type)).format('YYYYMMDD[T]HHmmss') + "&ET=" + moment(formatForAddtoCalendar(event, 'end')).format('YYYYMMDD[T]HHmmss') + '&DESC=' + eventDescription + '&in_loc=' + setLocation(event);
      break;

    default:
      console.error('undefined calendar type');
  }

  window.open(url, '_blank');
  return;
}

function formatForAddtoCalendar(event, key, type) {
  let fullStart, fullEnd;

  if (event.all_day) {
    fullStart = moment(event.start).format('YYYY-MM-DD');

    if (event.end !== event.start) {
      fullEnd = moment(event.end).add(1, 'days').format('YYYY-MM-DD');
    } else {
      fullEnd = moment(event.end).format('YYYY-MM-DD');
      if (type !== "yahoo") fullEnd = moment(event.end).add(1, 'days').format('YYYY-MM-DD');
    }
  } else {
    fullStart = moment(event.start).format('YYYY-MM-DDTHH:mm:ss');
    fullEnd = moment(event.end).format('YYYY-MM-DDTHH:mm:ss');
  }

  if (type === 'yahoo' && event.end !== event.start) fullEnd = moment(fullEnd).subtract(1, 'day').format('YYYY-MM-DDTHH:mm:ss');
  return key === 'start' ? fullStart : fullEnd;
}

function setLocation(event, key) {
  let toGmapLinkBase = 'http://maps.google.com/?q=';

  if (event.location) {
    if (key === 'encode') return encodeURI(toGmapLinkBase + event.location);else return event.location;
  }

  let venue = event.venue;

  if (venue && venue.address) {
    if (key === 'encode') return encodeURI(toGmapLinkBase + venue.address + "+" + venue.city + "+" + venue.statesList + "+" + venue.postal + "+" + venue.country + "+");else return venue.address + ' ' + venue.city + ' ' + venue.statesList + ' ' + venue.postal + ' ' + venue.country;
  }

  return '';
}

const encodeShareUrl = str => {
  let id = str.split("");
  let i;

  for (i = 0; i < id.length; i++) {
    switch (id[i]) {
      case "1":
        id[i] = "H9";
        break;

      case "2":
        id[i] = "A8";
        break;

      case "3":
        id[i] = "J7";
        break;

      case "4":
        id[i] = "M6";
        break;

      case "5":
        id[i] = "R5";
        break;

      case "6":
        id[i] = "O4";
        break;

      case "7":
        id[i] = "L3";
        break;

      case "8":
        id[i] = "W2";
        break;

      case "9":
        id[i] = "U1";
        break;

      case "0":
        id[i] = "K0";
        break;

      default:
        return;
    }
  }

  let l = id.length;
  let chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  for (i = 0; i < l * 2 + 2; i = i + Math.ceil(Math.random() * 3)) {
    id.splice(i, 0, chars[Math.ceil(Math.random() * 26)]);
  }

  return id.join('');
};

exports.encodeShareUrl = encodeShareUrl;

const createDesc = event => "".concat(event.desc ? "".concat(event.desc, "%0D%0A%0D%0A") : "").concat(event.venue.name || event.venue.phone || event.venue.email || event.venue.website ? "Venue Details%0D%0A%0D%0A" : "").concat(event.venue.name ? "".concat(event.venue.name, "%0D%0A") : "").concat(event.venue.phone ? "".concat(event.venue.phone, "%0D%0A") : "").concat(event.venue.email ? "".concat(event.venue.email, "%0D%0A") : "").concat(event.venue.website ? "".concat(event.venue.website, "%0D%0A%0D%0A") : "").concat(event.organizer.name || event.organizer.phone || event.organizer.email || event.organizer.website ? "Organizer%0D%0A%0D%0A" : "").concat(event.organizer.name ? "".concat(event.organizer.name, "%0D%0A") : "").concat(event.organizer.phone ? "".concat(event.organizer.phone, "%0D%0A") : "").concat(event.organizer.email ? "".concat(event.organizer.email, "%0D%0A") : "").concat(event.organizer.website ? "".concat(event.organizer.website, "%0D%0A") : "");

function openShareUrl(e, type, eventUrl) {
  e.stopPropagation();
  let base;

  switch (type) {
    case 'facebook':
      base = 'https://facebook.com/sharer/sharer.php?u=';
      break;

    case 'linkedin':
      base = 'https://www.linkedin.com/sharing/share-offsite/?url=';
      break;

    case 'twitter':
      base = 'http://twitter.com/share?url=';
      break;

    default:
      console.error('undefined share url type');
  }

  window.open(base + eventUrl, "_blank");
  return;
}

function generateEventUrl(event, encode, boomEventUrlBase, comp_id, instance) {
  if (event.kind === 4) {
    return event.eventPageUrl || '';
  } else {
    return "".concat(boomEventUrlBase).concat(encodeShareUrl("".concat(event.id)), "?").concat(encode ? encodeURIComponent("comp_id=".concat(comp_id, "&instance=").concat(instance, "&startDate=").concat(event.repeat.type ? moment(event.start).format('YYYY-MM-DD') : "")) : "comp_id=".concat(comp_id, "&instance=").concat(instance), "&startDate=").concat(event.repeat.type ? moment(event.start).format('YYYY-MM-DD') : "");
  }
}

function copyLink(e, event, setCopyTooltipText) {
  let copiedTooltipText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULTS.copiedTooltipText;
  let boomEventUrlBase = arguments.length > 4 ? arguments[4] : undefined;
  let comp_id = arguments.length > 5 ? arguments[5] : undefined;
  let instance = arguments.length > 6 ? arguments[6] : undefined;
  e.stopPropagation();
  let a = document.createElement('textarea');
  a.innerText = generateEventUrl(event, false, boomEventUrlBase, comp_id, instance);
  document.body.appendChild(a);
  a.setSelectionRange(0, 99999);
  a.select();
  document.execCommand('copy');
  a.remove();
  setCopyTooltipText(copiedTooltipText);
}

function checkProps(props) {
  if (!props.showAddToIcons && !props.showShareIcons) {
    console.warn('AddShareIcons component is called, but both showAddToIcons and showShareIcons properties are falsy');
    return;
  }

  if (!props.comp_id) {
    console.error('component is not rendered as comp_id was missing in props or a falsy value is assagned to it');
    return;
  }

  if (!props.instance) {
    console.error('component is not rendered as instance was missing in props or a falsy value is assagned to it');
    return;
  }

  if (!props.event || !props.event.hasOwnProperty('id')) {
    console.error('component is not rendered as event object was missing in props or doesn\'t match to event object skeleton');
    return;
  }

  if (!props.boomEventUrlBase) {
    console.error('component is not rendered as boomEventUrlBase was missing in props or a falsy value is assagned to it');
    return;
  }

  return true;
}

function generateCustomClassNames(classNames) {
  var _ref;

  if (!classNames || classNames.length === 0) return '';
  return (_ref = ' ' + classNames.join(' ')) !== null && _ref !== void 0 ? _ref : '';
}

const DEFAULTS = {
  addToSectionTitle: 'Add to calendar',
  shareSectionTitle: 'Share Event',
  copyActionTooltipText: 'Copy event url',
  copiedTooltipText: 'Copied',
  sequence: ['vertical', 'horizontal']
};
exports.DEFAULTS = DEFAULTS;