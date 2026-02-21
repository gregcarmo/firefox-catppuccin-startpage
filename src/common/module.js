const components = {
  "status-bar": Statusbar,
  "current-time": Clock,
  "weather-forecast": Weather,
  "tabs-list": Tabs,
  "crypto-rate": Crypto,
  "crypto-diff": CryptoDiff,
  "crypto-popup": CryptoPopup,
};

Object.keys(components).forEach((componentName) => {
  if (!CONFIG.disabled.includes(componentName)) customElements.define(componentName, components[componentName]);
});
