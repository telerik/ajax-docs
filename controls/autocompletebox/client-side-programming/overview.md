---
title: Overview
page_title: Client-Side Programming Overview - RadAutoCompleteBox
description: Check our Web Forms article about Telerik's ASP.NET AutoCompleteBox Client-Side Programming Overview.
slug: autocompletebox/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-Side Programming Overview


**RadAutoCompleteBox** provides a flexible client-side API. You can easily interact with **RadAutoCompleteBox** in the browser using its client-side object. In addition to a variety of [client-side events]({%slug autocompletebox/client-side-programming/events%}), the client-side object model lets you achieve complicated tasks.


## Getting the RadAutoCompleteBox Client-side Object


**RadAutoCompleteBox** creates a client-side object with its **ClientID**. You can obtain the reference using the following JavaScript code:

````JavaScript
	
	var autoComplete = $find("<%= RadAutoCompleteBox1.ClientID %>");
	
````


## Cancelling an Event

Several client-side events occur immediately before **RadAutoCompleteBox** performs some action. These events have names that end with "-ing". You can use these events to cancel the **RadAutoCompleteBox's** action by using the **set_cancel** method of the **eventArgs** passed to the handler:

````JavaScript
	
	function onDropDownClosing(sender, eventArgs) {
        eventArgs.set_cancel(true);
        alert('The DropDown remains open.');
    }
	
````


