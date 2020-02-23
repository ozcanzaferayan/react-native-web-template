import App from "@monorepo/common";
import * as React from "react";
import { AppRegistry } from "react-native";

const Encapsulator = () => {
  return <App text="Web" />;
};

AppRegistry.registerComponent("App", () => Encapsulator);
AppRegistry.runApplication("App", {
  initialProps: {},
  rootTag: document.getElementById("root")
});
