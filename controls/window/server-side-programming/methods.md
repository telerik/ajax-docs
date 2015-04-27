---
title: Methods
page_title: Methods | RadWindow for ASP.NET AJAX Documentation
description: Methods
slug: window/server-side-programming/methods
tags: methods
published: True
position: 1
---

# Methods



## RadWindowManager specific methods


| Name | Description |
| ------ | ------ |
| **RadAlert** |Calls the RadAlert dialog when the page is loaded. Takes the following arguments:

1. Text - an HTML string to be shown as the alert message

1. Width - an integer for the width of the window

1. Height - an integer for the height of the window

1. Title - a string to be shown in the titlebar

1. callBackFnName - the name of the client-side JavaScript function to be called when the dialog is closed

1. imgUrl - optional - a string that is the URL of the new image that will be displayed on the left side of the dialog. If this parameter is not passed (or null/Nothing is passed) the default image is retained; if an empty string is passed the image is removed.|
| **RadConfirm** |Calls the RadConfirm dialog when the page is loaded. Takes the following arguments:

1. Text - an HTML string to be shown as the alert message

1. callBackFnName - the name of the client-side JavaScript function to be called when the dialog is closed

1. Width - an integer for the width of the window

1. Height - an integer for the height of the window

1. callerObject - This values should be null (Nothing), as this property is kept only for backwards compatibility

1. Title - a string to be shown in the titlebar

1. imgUrl - optional - a string that is the URL of the new image that will be displayed on the left side of the dialog. If this parameter is not passed (or null/Nothing is passed) the default image is retained; if an empty string is passed the image is removed.|
| **RadPrompt** |Calls the RadPrompt dialog when the page is loaded. Takes the following arguments:

1. Text - an HTML string to be shown as the alert message

1. callBackFnName - the name of the client-side JavaScript function to be called when the dialog is closed

1. Width - an integer for the width of the window

1. Height - an integer for the height of the window

1. callerObject - This values should be null (Nothing), as this property is kept only for backwards compatibility

1. Title - a string to be shown in the titlebar

1. initialValue - a string to be shown as the default value in the textbox|
