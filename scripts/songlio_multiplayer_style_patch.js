// ==UserScript==
// @name        songl.io multiplayer player name style patch
// @namespace   Freebee1693
// @match       https://songl.io/*
// @grant       none
// @version     1.0.0
// @author      Freebee1693
// @license     Apache License 2.0
// @description A script to prevent funny people from spamming with their player player names.
// ==/UserScript==

setInterval(() => {
  existingStylePatch = document.querySelector("#songlio_style_patch");
  stylePatch = existingStylePatch ?? document.createElement('style');
  stylePatch.innerHTML = `
  .solo-game__rankings__item__name {
      max-width: 15rem;
  }
  `;
  stylePatch.id = "songlio_style_patch";
  if( !existingStylePatch ) document.head.appendChild(stylePatch);
}, 5);
