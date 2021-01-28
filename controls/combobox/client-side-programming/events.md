---
title: Events
page_title: Events - RadComboBox
description: Check our Web Forms article about Events.
slug: combobox/client-side-programming/events
tags: events
published: True
position: 2
---

# Events



## 

**RadComboBox** supports a number of client-side events that let you customize its behavior:

* [ OnClientItemsRequestFailed ]({%slug combobox/client-side-programming/events/onclientitemrequestfailed%}) occurs when the load-on-demand callback error appears.

* [OnClientBlur]({%slug combobox/client-side-programming/events/onclientblur%}) occurs when RadComboBox loses focus.

* [OnClientDropDownOpening]({%slug combobox/client-side-programming/events/onclientdropdownopening%}) occurs before the drop-down list opens.

* [OnClientDropDownOpened]({%slug combobox/client-side-programming/events/onclientdropdownopened%}) occurs after the drop-down list has been opened.

* [OnClientDropDownClosing]({%slug combobox/client-side-programming/events/onclientdropdownclosing%}) occurs before the drop-down list closes.

* [OnClientDropDownClosed]({%slug combobox/client-side-programming/events/onclientdropdownclosed%}) occurs after the drop-down has been closed.

* [OnClientFocus]({%slug combobox/client-side-programming/events/onclientfocus%}) occurs when RadComboBox has just received input focus.

* [OnClientItemsRequesting]({%slug combobox/client-side-programming/events/onclientitemrequesting%}) occurs when the user triggers the load-on-demand mechanism by typing in the input area or clicking the drop-down toggle of RadComboBoxx. This event fires before the items are added.

* [OnClientItemsRequested]({%slug combobox/client-side-programming/events/onclientitemrequested%}) occurs immediately after the load-on-demand mechanism has bound new items to RadComboBox.

* [OnClientKeyPressing]({%slug combobox/client-side-programming/events/onclientkeypressing%}) occurs when a RadComboBox item is selected and the user presses a key.

* [OnClientSelectedIndexChanging]({%slug combobox/client-side-programming/events/onclientselectedindexchanging%}) occurs before the selected item is changed in response to a user action.

* [OnClientSelectedIndexChanged]({%slug combobox/client-side-programming/events/onclientselectedindexchanged%}) occurs after the selected item has been changed in response to a user action.

* [OnClientItemChecking]({%slug combobox/client-side-programming/events/onclientitemchecking%}) occurs when a particular item is about to be checked.

* [OnClientItemChecked]({%slug combobox/client-side-programming/events/onclientitemchecked%}) occurs after the selected item has been changed in response to a user action.

* [OnClientLoad]({%slug combobox/client-side-programming/events/onclientload%}) occurs after the RadComboBox has been fully initialized on the client-side.

* [OnClientTextChange]({%slug combobox/client-side-programming/events/onclienttextchange%}) occurs when the text in the input area has been changed.

* [OnClientItemDataBound]({%slug combobox/client-side-programming/events/onclientitemdatabound%}) occurs for each item that is created during **Web Service** Load on Demand (available after Q3 SP2 2008).

* [OnClientTemplateDataBound]({%slug combobox/client-side-programming/events/onclienttemplatedatabound%}) occurs after the client template is bound and the binding expression are evaluated.

* [OnClientCheckAllChecking]({%slug combobox/client-side-programming/events/onclientcheckallchecking%}) occurs before the check all items check box is checked.

* [OnClientCheckAllChecked]({%slug combobox/client-side-programming/events/onclientcheckallchecked%}) occurs after the check all items check box is checked.

To use these events, simply write a JavaScript function that can be called when the event occurs. Then assign the name of the JavaScript function as the value of the the corresponding **RadComboBox** property.

````ASPNET
<script language="javascript" type="text/javascript">
	function MyClientBlur(sender, eventArgs) {
		alert("blur");
	}
</script>

<telerik:radcombobox 
	id="RadComboBox1" 
	runat="server" 
	onclientblur="MyClientBlur">
</telerik:radcombobox>
````



You can also assign event handlers in client-side code:

````JavaScript
	
function MyClientBlur(sender, eventArgs) {
	alert("blur");
}

function pageLoad() {
	var combo = $find("<%= RadComboBox1.ClientID %>");
	combo.add_onClientBlur(MyClientBlur);
}
	
````



Another advantage of the client-side API is that you can detach an event handler dynamically:

````JavaScript
	
function RemoveEventHandler() {
	var combo = $find("<%= RadComboBox1.ClientID %>");
	combo.remove_onClientBlur(MyClientBlur); 
}
	
````



Note that on the client-side, the names of events are slightly different than on the server side. The following table shows the correspondance between client-side and server-side names:




| Client-SideName | Server-Side Name | Methods to Add and Remove |
| ------ | ------ | ------ |
|OnClientLoad|load|add_load, remove_load.||
|OnClientKeyPressing|keyPressing|add_keyPressing, remove_keyPressing.||
|OnClientSelectedIndexChanging|selectedIndexChanging|add_selectedIndexChanging, remove_selectedIndexChanging.||
|OnClientSelectedIndexChanged|selectedIndexChanged|add_selectedIndexChanged, remove_selectedIndexChanged.||
|OnClientItemsRequesting|itemsRequesting|add_itemsRequesting, remove_itemsRequesting.||
|OnClientItemsRequested|itemsRequested|add_itemsRequested, remove_itemsRequested.||
|OnClientDropDownOpening|dropDownOpening|add_dropDownOpening, remove_dropDownOpening.||
|OnClientDropDownOpened|dropDownOpened|add_dropDownOpened, remove_dropDownOpened.||
|OnClientDropDownClosing|dropDownClosing|add_dropDownClosing, remove_dropDownClosing.||
|OnClientDropDownClosed|dropDownClosed|add_dropDownClosed, remove_dropDownClosed.||
|OnClientItemsRequestFailed|itemsRequestFailed|add_itemsRequestFailed, remove_itemsRequestFailed.||
|OnClientFocus|onClientFocus|add_onClientFocus, remove_onClientFocus.||
|OnClientBlur|onClientBlur|add_onClientBlur, remove_onClientBlur.||
|OnClientTextChange|textChange|add_textChange, remove_textChange.||
|OnClientItemDataBound|itemDataBound|add_itemDataBound, remove_itemDataBound.||


# See Also

 * [Events]({%slug combobox/server-side-programming/events%})

 * [Overview]({%slug combobox/client-side-programming/overview%})
