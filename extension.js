/**
 * Get the current URL.
 *
 * @param {function(string)} callback called when the URL of the current tab
 *   is found.
 */

document.addEventListener('DOMContentLoaded', () => {
    var button = document.querySelector("button");
    button.addEventListener('click', function () {
        chrome.tabs.executeScript(null, {file: "catify.js"});
    });
});