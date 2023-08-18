"use strict";
console.log('Background script running.');
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed.');
});
//# sourceMappingURL=background.js.map