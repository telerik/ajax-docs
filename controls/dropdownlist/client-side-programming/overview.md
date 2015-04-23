---
title: Overview
page_title: Client-side Programming Overview | UI for ASP.NET AJAX Documentation
description: Telerik's ASP.NET RadDropDownList Client-side Programming Overview
slug: dropdownlist/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



**RadDropDownList** provides a flexible client-side API. You can easily interact with RadDropDownList in the browser using its client-side object. In addition to a variety of [client-side events]({%slug dropdownlist/client-side-programming/events%}), the client-side object model lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadDropDownList client-side object

**RadDropDownList** creates a client-side object with its **ClientID**. You can obtain the reference using the following JavaScript code:

````JavaScript
	
var dropdownlist = $find("<%= RadDropDownList1.ClientID %>");
	
````



## Getting an instance of a particular RadDropDownListItem

Once you have the client-side object of RadDropDownList, you can use the **findItemByText()/findItemByValue** method to get the instance of a particular item:

````JavaScript
	
var dropdownlist = $find("<%= RadDropDownList1.ClientID %>");
var item = dropdownlist.findItemByText(text);
	
````



## Cancelling an action

Several client side events occur immediately before the RadDropDownList performs some action. These events all have names that end in "-ing". You can use these events to cancel the action by using the **set_cancel** method of the second argument passed to the handler:

````JavaScript
	
function onClientDropDownClosing(sender, eventArgs) {
    eventArgs.set_cancel(true);
}
	
````



## Calling a client-side method

When you get the instance of RadDropDownList object, you can call client-side methods to perform certain tasks. Consider the following examples:

* **openDropDown()**

````JavaScript
	
function OpenDropDownFunction() {
    var dropdownlist = $find("<%= RadDropDownList1.ClientID %>");
    dropdownlist.openDropDown();
}
	
````



* **closeDropDown()**

````JavaScript
	
function CloseDropDownFunction() {
    var dropdownlist = $find("<%= RadDropDownList1.ClientID %>");
    dropdownlist.closeDropDown();
}
	
````



* **set_enabled(value)**

````JavaScript
	
function EnableDropDownList() {
    var dropdownlist = $find("<%= RadDropDownList1.ClientID %>");
    dropdownlist.set_enabled(true);
}
	
````


