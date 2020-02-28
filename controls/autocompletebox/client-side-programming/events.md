---
title: Events
page_title: Client-Side Programming Events | RadAutoCompleteBox for ASP.NET AJAX Documentation
description: Events
slug: autocompletebox/client-side-programming/events
tags: events
published: True
position: 1
---

# Events

## 

**RadAutoCompleteBox** supports a number of client-side events that let you customize its behavior:

* [ OnClientDropDownOpening ]({%slug autocompletebox/client-side-programming/events/onclientdropdownopening%}) occurs right before the drop-down container is opened.

* [ OnClientDropDownOpened ]({%slug autocompletebox/client-side-programming/events/onclientdropdownopened%}) occurs right after the drop-down container is opened.

* [ OnClientDropDownClosing ]({%slug autocompletebox/client-side-programming/events/onclientdropdownclosing%}) occurs right before the drop-down container is closed.

* [ OnClientDropDownClosed ]({%slug autocompletebox/client-side-programming/events/onclientdropdownclosed%}) occurs right after the drop-down container is closed.

* [ OnClientEntryAdding ]({%slug autocompletebox/client-side-programming/events/oncliententryadding%}) occurs right before an entry is added into the Entry collection. The event will be raised only if the input type of RadAutoCompleteBox is set to "*Token*".

* [ OnClientEntryAdded ]({%slug autocompletebox/client-side-programming/events/oncliententryadded%}) occurs right after an entry is added into the Entry collection. The event will be raised only if the input type of RadAutoCompleteBox is set to "*Token*".

* [ OnClientEntryRemoving ]({%slug autocompletebox/client-side-programming/events/oncliententryremoving%}) occurs right before an entry is removed from the Entry collection. The event will be raised only if the input type of RadAutoCompleteBox is set to "*Token*".

* [ OnClientEntryRemoved ]({%slug autocompletebox/client-side-programming/events/oncliententryremoved%}) occurs right after an entry is removed from the Entry collection. The event will be raised only if the input type of RadAutoCompleteBox is set to "*Token*".

* [ OnClientTextChanged ]({%slug autocompletebox/client-side-programming/events/onclienttextchanged%}) occurs when the text currently present in the input area is changed and RadAutoComplete has lost its focus. The event will be raised only if the input type of RadAutoCompleteBox is set to "*Text*".

* [ OnClientRequesting ]({%slug autocompletebox/client-side-programming/events/onclientrequesting%}) occurs right before a request for items is sent to the data source.

* [ OnClientRequested ]({%slug autocompletebox/client-side-programming/events/onclientrequested%}) occurs when the request for items is completed, and the items are loaded into the drop-down container.

* [ OnClientRequestFailed ]({%slug autocompletebox/client-side-programming/events/onclientrequestfailed%}) occurs in case of unsuccessful request sent to the data source.

* [ OnClientDropDownItemDataBound ]({%slug autocompletebox/client-side-programming/events/onclientdropdownitemdatabound%}) occurs for each item that is created during a request to a Web service.

To use these events, simply write a JavaScript function that can be called when the event occurs. Then assign the name of the JavaScript function as the value of the the corresponding **RadAutoCompleteBox** property.

````ASPNET
<script language="javascript" type="text/javascript">
	function MyClientDropDownClosed(sender, eventArgs) {
		alert("Drop-down closed.");
	}
</script>

<telerik:RadAutoCompleteBox RenderMode="Lightweight" 
	id="RadAutoCompleteBox1" 
	runat="server" 
	OnClientDropDownClosed="MyClientDropDownClosed">
</telerik:RadAutoCompleteBox>
````



You can also assign event handlers in client-side code:

````JavaScript
	
function MyClientDropDownClosed(sender, eventArgs) {
	alert("Drop-down closed.");
}

function pageLoad() {
	var autoComplete = $find("<%= RadAutoCompleteBox1.ClientID %>");
	autoComplete.add_dropDownClosed(MyClientDropDownClosed);
}
	
````


Another advantage of the client-side API is that you can detach an event handler dynamically:

````JavaScript
	
function RemoveEventHandler() {
	var autoComplete = $find("<%= RadAutoCompleteBox1.ClientID %>");
	autoComplete.remove_dropDownClosed(MyClientDropDownClosed);
}
	
````


Note that on the client-side, the names of events are slightly different than those used in the mark-up declaration of the control. The following table lists all the **add** and **remove** handler functions for **RadAutoCompleteBox** client-side events:


| Name in the mark-up | Methods to Add and Remove handler |
| ------ | ------ |
|OnClientDropDownOpening|add_dropDownOpening(), remove_dropDownOpening().||
|OnClientDropDownOpened|add_dropDownOpened(), remove_dropDownOpened().||
|OnClientDropDownClosing|add_dropDownClosing(), remove_dropDownClosing().||
|OnClientDropDownClosed|add_dropDownClosed(), remove_dropDownClosed().||
|OnClientEntryAdding|add_entryAdding(), remove_entryAdding().||
|OnClientEntryAdded|add_entryAdded(), remove_entryAdded().||
|OnClientEntryRemoving|add_entryRemoving(), remove_entryRemoving().||
|OnClientEntryRemoved|add_entryRemoved(), remove_entryRemoved().||
|OnClientTextChanged|add_textChanged(), remove_textChanged().||
|OnClientRequesting|add_requesting(), remove_requesting().||
|OnClientRequested|add_requested(), remove_requested().||
|OnClientRequestFailed|add_requestFailed(), remove_requestFailed().||
|OnClientDropDownItemDataBound|add_dropDownItemDataBound(), remove_dropDownItemDataBound().||


For a live example of using client-side events, see [Client Events Demo](https://demos.telerik.com/aspnet-ajax/autocompletebox/examples/programming/clientevents/defaultcs.aspx).

# See Also

 * [Overview]({%slug autocompletebox/client-side-programming/overview%})
