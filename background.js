// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function setCountClick(clickCount = 0) {
  console.log("Click count = ", clickCount);
  chrome.browserAction.setBadgeText({"text": String(clickCount)});
};


chrome.runtime.onInstalled.addListener(function() {
  setCountClick();
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("Received Message", message.greeting, "from", sender);
  chrome.browserAction.getBadgeText({}, function(result) {
    let badgeText = parseInt(result) + 1
    setCountClick(badgeText);
  });
});