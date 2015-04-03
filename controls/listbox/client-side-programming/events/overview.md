---
title: Events Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: listbox/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview



## 

__RadListBox__ supports a number of client-side events that let you customize the behavior of the listbox:

* [OnClientLoad]({%slug listbox/client-side-programming/events/onclientload%}) client-side event occurs after RadListBox has been fully initialized on the client-side.

* [OnClientDeleting]({%slug listbox/client-side-programming/events/onclientdeleting%}) occurs before the items are deleted. This event can be canceled.

* [OnClientDeleted]({%slug listbox/client-side-programming/events/onclientdeleted%}) occurs after the items are deleted.

* [OnClientDragStart]({%slug listbox/client-side-programming/events/onclientdragstart%}) occurs as the drag operation occurs. This event can be canceled.

* [OnClientDragging]({%slug listbox/client-side-programming/events/onclientdragging%}) occurs while an item is being dragged. This event can be canceled.

* [OnClientDropping]({%slug listbox/client-side-programming/events/onclientdropping%}) occurs before the items are dropped. The event can be canceled.

* [OnClientDropped]({%slug listbox/client-side-programming/events/onclientdropped%}) occurs after the item/items are dropped.

* [OnClientItemDoubleClicking]({%slug listbox/client-side-programming/events/onclientitemdoubleclicking%}) occurs when the user double clicks the item using the mouse. The event can be canceled.

* [OnClientItemDoubleClicked]({%slug listbox/client-side-programming/events/onclientitemdoubleclicked%}) occurs after the user double clicks the item using the mouse.

* [OnClientItemChecking]({%slug listbox/client-side-programming/events/onclientitemchecking%}) occurs when the user selects a checkbox using mouse or keyboard. The event can be canceled.

* [OnClientItemChecked]({%slug listbox/client-side-programming/events/onclientitemchecked%}) occurs after the item has been checked.

* [OnClientCheckAllChecking]({%slug listbox/client-side-programming/events/onclientcheckallchecking%}) occurs when the user clicks on the CheckAll item. The event can be canceled.

* [OnClientCheckAllChecked]({%slug listbox/client-side-programming/events/onclientcheckallchecked%}) occurs after user clicks on the CheckAll item.

* [OnClientItemsRequesting]({%slug listbox/client-side-programming/events/onclientitemsrequesting%}) occurs before the items are added to the listbox' Items collection.

* [OnClientItemsRequested]({%slug listbox/client-side-programming/events/onclientitemsrequested%}) occurs after the load-on-demand mechanism has added new items to the listbox.

* [OnClientItemsRequestFailed]({%slug listbox/client-side-programming/events/onclientitemsrequestfailed%}) occurs when an error has occurred while loading elements using the load-on-demand mechanism.

* [OnClientReordering]({%slug listbox/client-side-programming/events/onclientreordering%}) client-side event occurs when the item or items are about to be reordered. This event can be canceled.

* [OnClientReordered]({%slug listbox/client-side-programming/events/onclientreordered%}) client-side event occurs after the item or items have been reordered.

* [OnClientTransferring]({%slug listbox/client-side-programming/events/onclienttransferring%}) client-side event occurs when the selected item is about to be transferred to the destination RadListBox. This event can be canceled.

* [OnClientTransferred]({%slug listbox/client-side-programming/events/onclienttransferred%}) client-side event occurs after the selected item has been transferred to the destination RadListBox.

* [OnClientSelectedIndexChanging]({%slug listbox/client-side-programming/events/onclientselectedindexchanging%}) client-side event occurs when the selected item is about to be changed. This event can be canceled.

* [OnClientSelectedIndexChanged]({%slug listbox/client-side-programming/events/onclientselectedindexchanged%}) occurs after the selected item has been changed.

* [OnClientTemplateDataBound]({%slug listbox/client-side-programming/events/onclienttemplatedatabound%}) occurs after the client template is bound and the binding expression are evaluated.

* [OnClientMouseOver]({%slug listbox/client-side-programming/events/onclientmouseover%})____client-side event occurs when the mouse cursor passes over an item.

* [OnClientMouseOut]({%slug listbox/client-side-programming/events/onclientmouseout%})____client-side event occurs just before the mouse passes out of an item.

* [OnClientContextMenu]({%slug listbox/client-side-programming/events/onclientcontextmenu%}) client-side event occurs when a user right clicks over a listbox item

To subscribe to a client event just set the appropriate property to the name of the javascript function that will handle the event. The function always receives two parameters - a sender (RadListBox firing the event) and event arguments having different methods.

````ASPNET
	    <telerik:radlistbox id="RadListBox1" allowdelete="true" onclientdeleted="onClientDeletedHandler"
	        runat="server"></telerik:radlistbox>
````



````JavaScript
	
	        function onClientDeletedHandler(sender, e) {
	            alert("Successfully deleted: " + e.get_item().get_text());
	        }
	
````



There is a shorter way to handle a client-side event:

````ASPNET
	    <telerik:radlistbox id="RadListBox2" allowdelete="true" 
	        onclientdeleted="(function(sender, e){ alert('Successfully deleted: ' + e.get_item().get_text()); })"
	        runat="server">
	    </telerik:radlistbox>
````



Similarly, you can set the property in code behind:

````C#
	     
	
	RadListBox1.OnClientDeleted = "onClientDeletedHandler"; 
				
````



# See Also

 * [Overview]({%slug listbox/client-side-programming/overview%})

 * [RadListBox Object]({%slug listbox/client-side-programming/objects/radlistbox-object%})

 * [RadListBoxItem Object]({%slug listbox/client-side-programming/objects/radlistboxitem-object%})

 * [Client-side Events Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/clientside/clientevents/defaultcs.aspx)
