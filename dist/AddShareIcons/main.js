"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddShareIcons;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.string.includes.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./main.css");

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function AddShareIcons(props) {
  var _props$copyActionTool, _props$addToSectionTi, _props$shareSectionTi;

  const [copyTooltipText, setCopyTooltipText] = (0, _react.useState)((_props$copyActionTool = props.copyActionTooltipText) !== null && _props$copyActionTool !== void 0 ? _props$copyActionTool : _helpers.DEFAULTS.copyActionTooltipText);
  if (!(0, _helpers.checkProps)(props)) return null;
  const addToTypes = ['google', 'outlook', 'icalendar', 'yahoo'];
  const shareTypes = ['facebook', 'linkedin', 'twitter', 'copyLink'];
  const addIcons = props.showAddToIcons && addToTypes.map(type => {
    let clickHandler;
    if (type === 'google' || type === 'yahoo') clickHandler = e => (0, _helpers.openAddToUrl)(e, type, props.event);
    if (type === 'outlook' || type === 'icalendar') clickHandler = e => (0, _helpers.downloadSharer)(e, type, props.event);
    return /*#__PURE__*/_react.default.createElement("span", {
      key: type,
      className: "bmct-add-share-icon bmct-".concat(type).concat((0, _helpers.generateCustomClassNames)(props.addToIconsCustomClassNames)),
      onClick: clickHandler
    });
  });
  const eventUrl = (0, _helpers.generateEventUrl)(props.event, true, props.boomEventUrlBase, props.comp_id, props.instance);
  const shareIcons = props.showShareIcons && shareTypes.map(type => {
    const clickHandler = type === 'copyLink' ? e => (0, _helpers.copyLink)(e, props.event, setCopyTooltipText, props.copiedTooltipText, props.boomEventUrlBase, props.comp_id, props.instance) : e => (0, _helpers.openShareUrl)(e, type, eventUrl);
    return /*#__PURE__*/_react.default.createElement("span", {
      key: type,
      className: "bmct-add-share-icon bmct-".concat(type).concat((0, _helpers.generateCustomClassNames)(props.shareIconsCustomClassNames)),
      onClick: clickHandler,
      onMouseOut: () => {
        var _props$copyActionTool2;

        return type === 'copyLink' && setCopyTooltipText((_props$copyActionTool2 = props.copyActionTooltipText) !== null && _props$copyActionTool2 !== void 0 ? _props$copyActionTool2 : _helpers.DEFAULTS.copyActionTooltipText);
      }
    }, type === 'copyLink' && /*#__PURE__*/_react.default.createElement("span", {
      className: "copy-tooltip"
    }, copyTooltipText));
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "bmct-icons-".concat(_helpers.DEFAULTS.sequence.includes(props.sequence) ? props.sequence : _helpers.DEFAULTS.sequence[0])
  }, props.showAddToIcons ? /*#__PURE__*/_react.default.createElement("div", {
    className: "bmct-icons-container".concat((0, _helpers.generateCustomClassNames)(props.iconsSectionCustomClassNames))
  }, /*#__PURE__*/_react.default.createElement("div", null, (_props$addToSectionTi = props.addToSectionTitle) !== null && _props$addToSectionTi !== void 0 ? _props$addToSectionTi : _helpers.DEFAULTS.addToSectionTitle), /*#__PURE__*/_react.default.createElement("div", null, addIcons)) : null, props.showShareIcons ? /*#__PURE__*/_react.default.createElement("div", {
    className: "bmct-icons-container".concat((0, _helpers.generateCustomClassNames)(props.iconsSectionCustomClassNames))
  }, /*#__PURE__*/_react.default.createElement("div", null, (_props$shareSectionTi = props.shareSectionTitle) !== null && _props$shareSectionTi !== void 0 ? _props$shareSectionTi : _helpers.DEFAULTS.shareSectionTitle), /*#__PURE__*/_react.default.createElement("div", null, shareIcons)) : null);
}

AddShareIcons.propTypes = {
  comp_id: _propTypes.default.string.isRequired,
  instance: _propTypes.default.string.isRequired,
  event: _propTypes.default.object.isRequired,
  boomEventUrlBase: _propTypes.default.string.isRequired,
  iconsSectionCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string),
  showAddToIcons: _propTypes.default.bool,
  addToSectionTitle: _propTypes.default.string,
  addToIconsCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string),
  showShareIcons: _propTypes.default.bool,
  shareSectionTitle: _propTypes.default.string,
  shareIconsCustomClassNames: _propTypes.default.arrayOf(_propTypes.default.string),
  copyActionTooltipText: _propTypes.default.string,
  copiedTooltipText: _propTypes.default.string,
  sequence: _propTypes.default.oneOf(['vertical', 'horizontal'])
};