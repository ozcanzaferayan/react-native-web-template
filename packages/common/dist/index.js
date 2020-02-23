"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
exports.App = function (props) {
    var image = require("./art/welcome.png");
    return (React.createElement(react_native_1.View, { style: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        } },
        React.createElement(react_native_1.Image, { resizeMode: "contain", style: { width: "100%", height: 300 }, source: image }),
        React.createElement(react_native_1.Text, { style: {
                textAlign: "center",
                fontSize: 50,
                fontFamily: "Helvetica",
                fontWeight: "bold"
            } }, "React Native " + props.text + "'e Ho\u015Fgeldiniz.")));
};
exports.default = exports.App;
