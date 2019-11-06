// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function setCountClick(clickCount, tabId) {
  // console.log("Click count = ", clickCount);
  // console.log("tab", tabId);
  chrome.browserAction.setBadgeText(
    {"text": String(clickCount), "tabId": tabId});
};

chrome.tabs.onCreated.addListener(function(tab) {
  setCountClick(0, tab.id);
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status != null && changeInfo.status === "complete") {
    setCountClick(0, tabId);
  }
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // console.log("Received Message", message.greeting, "from", sender);
  // console.log("Received message from tab", sender.tab.id)
  const tabId = sender.tab.id
  chrome.browserAction.getBadgeText({tabId: tabId}, function(result) {
    // console.log("The current click for tab", sender.tab.id, "is", result)
    const badgeText = parseInt(result) + 1
    setCountClick(badgeText, tabId);
  });
});