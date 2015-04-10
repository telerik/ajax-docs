---
title: Transfer Specific Items with Transfer All Button
page_title: Transfer Specific Items with Transfer All Button | UI for ASP.NET AJAX Documentation
description: Transfer Specific Items with Transfer All Button
slug: listbox/how-to/transfer-specific-items-with-transfer-all-button
tags: transfer,specific,items,with,transfer,all,button
published: True
position: 2
---

# Transfer Specific Items with Transfer All Button



## 

By default, the Transfer All button will transfer all the items from RadListBox to the related RadListBox. This article shows how to transfer specific items when the Transfer All button is clicked. We will cancel the [OnClientTransferring]({%slug listbox/client-side-programming/events/onclienttransferring%}) event and will use the __transferItem__ client method to transfer the items that we need.

1. RadListBox declaration:

````ASPNET
	    <telerik:RadListBox ID="RadListBox1"
	       runat="server"
	       Skin="Vista"
	       AllowTransfer="true"   
	       TransferToID="RadListBox2"
	       DataKeyField="ID"  
	       OnClientTransferring="onClientTransferring"
	       DataTextField="Name"
	       DataValueField="ID"       
	       DataSourceID="SqlDataSource1" >    
	    </telerik:RadListBox>
	    <telerik:RadListBox ID="RadListBox2" runat="server"
	       Skin="Vista"
	       AllowTransfer="true">
	    </telerik:RadListBox>   
````



2. The OnClientTransferring handler:

````JavaScript
	     
	
	    function onClientTransferring(sender, e) {debugger
	       //cancel the event
	       e.set_cancel(true);
	       //manually transfer the appropriate items
	       var items = e.get_items();
	       for (var i = 0; i < items.length; i++) {
	           var item = items[i];
	           if (item.get_text() != "Select" || item.get_value() != "") {
	               sender.transferItem(item, e.get_sourceListBox(), e.get_destinationListBox());
	           }
	       }
	    }
	  
				
````



As a result when you click on the Transfer All button all items will be transferred expect these that have Text = "Select" or empty Value property.

# See Also

 * [RadListBox Object]({%slug listbox/client-side-programming/objects/radlistbox-object%})
