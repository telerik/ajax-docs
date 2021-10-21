---
title: Form Will not Submit after RadConfirm in Firefox
description: Form Will not Submit after RadConfirm in Firefox. Check it now!
type: how-to
page_title: Form Will not Submit after RadConfirm in Firefox
slug: window-form-will-not-submit-after-radconfirm-in-firefox
res_type: kb
---


## Problem

After showing a RadConfirm dialog, the form will not submit in FireFox when `form.submit()` is called or the `.click()` method of a RadButton does not initiate the postback as expected. This also applies for RadAlert and RadPrompt.

## Origin

This problem stems from a browser bug/limitation related to removing an input with JavaScript. You can read more about this issue in the [submit fails after input is removed from form (in Firefox)](http://stackoverflow.com/questions/11582981/submit-fails-after-input-is-removed-from-form-in-firefox) StackOverflow thread.

RadConfirm contains an input element because its rendering is based on a RadWindow. This input is dynamically generated with JavaScript when the RadConfirm is shown and then removed from the DOM when the RadConfirm closes (the entire RadConfirm is disposed at this point). This causes a removal of an input element which breaks the form submission in Firefox.

## Solution

Avoid using form.submit() and initiate the postback from a button. You can find examples in the [Button - Confirm Postback](http://demos.telerik.com/aspnet-ajax/button/examples/confirm/defaultcs.aspx) (see the RadConfirm function in scripts.js) and [Window - Confirm Dialog Integration](http://demos.telerik.com/aspnet-ajax/window/examples/confirmserverclicks/defaultcs.aspx) live demos. If the form submission was not initiated by a button click, you can add a button that you can hide with CSS.  

You can also try using the Classic RenderMode of the RadWindowManager because it does not use &lt;button&gt; elements but &lt;a&gt; elements to generate the buttons in the RadAlert/RadConfirm.

