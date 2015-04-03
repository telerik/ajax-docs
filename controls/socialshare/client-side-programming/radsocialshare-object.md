---
title: RadSocialShare Object
page_title: RadSocialShare Object | UI for ASP.NET AJAX Documentation
description: RadSocialShare Object
slug: socialshare/client-side-programming/radsocialshare-object
tags: radsocialshare,object
published: True
position: 0
---

# RadSocialShare Object



The __RadSocialShare__ client-side object has a number of client-side properties and methods that you can use to manipulate the control in the browser. They are listed below. There are also a number of [client-side events]({%slug socialshare/client-side-programming/events/overview%}) that you can use to produce the logic required by your scenario.

This article contains the following sections:

* [Getters/Setters for the Public Properties](#getters/setters-for-the-public-properties)

* [Methods that Check a Condition or Invoke a Certain Behavior](#methods-that-check-a-condition-or-invoke-a-certain-behavior)

## Getters/Setters for the Public Properties


>caption Getters for the public properties

|  __Name__  |  __Description__  |
| ------ | ------ |
| __get_compactButtons__ |Returns the array of compact buttons|
| __get_compactPopup__ |Returns the compact popup object (a RadWindow, so its[client-side API](3D146C58-9C76-41A2-91CB-82FDBBF9CB52)can be used).|
| __get_emailPopup__ |Returns the email popup object (a RadWindow, so its[client-side API](3D146C58-9C76-41A2-91CB-82FDBBF9CB52)can be used).|
| __get_fbAppId__ |Returns the Facebook Application ID|
| __get_gaEnabled__ |Returns value which shows whether Google Analytics is enabled|
| __get_gaID__ |Returns the web property ID set for Google Analytics support|
| __get_hideIframesOnDialogMove__ |Returns a value which determines whether IFRAMEs are hidden while email or compact popup is being moved|
| __get_mainButtons__ |Returns the array of main buttons|
| __get_titleToShare__ |Returns the value of the TitleToShare property|
| __get_trackerId__ |Returns the Id of the tracker for the RadSocialShare instance|
| __get_urlToShare__ |Returns the value of the UrlToShare property|


>caption Setters for the public properties

|  __Name__  |  __Description__  |
| ------ | ------ |
| __set_fbAppId__ |Sets the Facebook Application ID|
| __set_gaID__ |Sets the web property ID set for Google Analytics support|
| __set_hideIframesOnDialogMove__ |Sets a value which determines whether IFRAMEs are hidden while email or compact popup is being moved|
| __set_stringsToShare__ |Dynamically sets new values for url and title to share. Takes two strings as arguments - url and title|

## Methods that Check a Condition or Invoke a Certain Behavior


>caption Methods that check a condition or invoke a certain behavior.

|  __Name__  |  __Description__  |
| ------ | ------ |
| __toggleCompactPopup__ |Toggles the visibility of the compact popup|
| __toggleEmailPopup__ |Toggles the visibility of the email popup|

# See Also[RadWindow client-side API](3D146C58-9C76-41A2-91CB-82FDBBF9CB52)
