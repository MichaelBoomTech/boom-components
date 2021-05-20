"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddShareIcons;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./main.css");

var _helpers = require("./helpers");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function AddShareIcons(props) {
  const [copyTooltipText, setCopyTooltipText] = (0, _react.useState)(props.copyActionTooltipText);
  if (!props.showAddToIcons && !props.showShareIcons) return null;
  const addToTypes = ['google', 'outlook', 'icalendar', 'yahoo'];
  const shareTypes = ['facebook', 'linkedin', 'twitter', 'copyLink'];
  const addIcons = props.showAddToIcons && addToTypes.map(type => {
    let clickHandler;
    if (type === 'google' || type === 'yahoo') clickHandler = e => (0, _helpers.openAddToUrl)(e, type, props.event);
    if (type === 'outlook' || type === 'icalendar') clickHandler = e => (0, _helpers.downloadSharer)(e, type, props.event);
    return /*#__PURE__*/_react.default.createElement("span", {
      key: type,
      className: "bmct-add-share-icon bmct-".concat(type, " ").concat(props.addToIconsCustomClassNames.join(' ')),
      onClick: clickHandler
    });
  });
  const eventUrl = (0, _helpers.generateEventUrl)(props.event, true, props.boomEventUrlBase, props.comp_id, props.instance);
  const shareIcons = props.showShareIcons && shareTypes.map(type => {
    const clickHandler = type === 'copyLink' ? e => (0, _helpers.copyLink)(e, props.event, setCopyTooltipText, props.copiedTooltipText, props.boomEventUrlBase, props.comp_id, props.instance) : e => (0, _helpers.openShareUrl)(e, type, eventUrl);
    return /*#__PURE__*/_react.default.createElement("span", {
      key: type,
      className: "bmct-add-share-icon bmct-".concat(type, " ").concat(props.shareIconsCustomClassNames.join(' ')),
      onClick: clickHandler,
      onMouseOut: () => type === 'copyLink' && setCopyTooltipText(props.copyActionTooltipText)
    }, type === 'copyLink' && /*#__PURE__*/_react.default.createElement("span", {
      className: "copy-tooltip"
    }, copyTooltipText));
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "bmct-icons-".concat(props.sequence)
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Changes are defined !!!!!!!!!!!!!"), props.showAddToIcons ? /*#__PURE__*/_react.default.createElement("div", {
    className: "bmct-icons-container ".concat(props.iconsSectionCustomClassNames.join(' '))
  }, /*#__PURE__*/_react.default.createElement("div", null, props.addToSectionTitle), /*#__PURE__*/_react.default.createElement("div", null, addIcons)) : null, props.showShareIcons ? /*#__PURE__*/_react.default.createElement("div", {
    className: "bmct-icons-container ".concat(props.iconsSectionCustomClassNames.join(' '))
  }, /*#__PURE__*/_react.default.createElement("div", null, props.shareSectionTitle), /*#__PURE__*/_react.default.createElement("div", null, shareIcons)) : null);
}