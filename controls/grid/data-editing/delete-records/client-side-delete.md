---
title: Client-side Delete
page_title: Client-side Delete | RadGrid for ASP.NET AJAX Documentation
description: Client-side Delete
slug: grid/data-editing/delete-records/client-side-delete
tags: client-side,delete
published: True
position: 1
---

# Client-side Delete



## 

In addition to the server/ajax delete feature of Telerik RadGrid there is support for delete operation client-side. This allows you to delete records without making additional round trip to the server.

Having delete operation on the client optimizes the performance as the source data is automatically refreshed only once on the subsequent post to the server. The user experience is improved because the delete action is done client-side and the table presentation is updated immediately. In order to trigger client-side delete action you need to add **GridClientDeleteColumn** to the Columns collection. This column is special type of **GridButtonColumn** designated for the task and you can have all the benefits of the **GridButtonColumn**.

````ASP.NET
	  <telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource1" runat="server">
	    <MasterTableView AllowAutomaticDeletes="True" DataKeyNames="OrderID,ProductID">
	      <Columns>
	        <telerik:GridClientDeleteColumn ConfirmText="Are you sure you want to delete the selected row?"
	          HeaderStyle-Width="35px" ButtonType="ImageButton" />
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
````



It has **ConfirmText** property that can be assigned like with the default **GridButtonColumn**. Moreover you can change the button type to Link, Push or Image button. When using the client-side delete feature you can still have:

* NoRecordsTemplate (including hierarchy) - when all records are deleted, you will see the NoRecordsTemplate.

* Hierarchy (no matter client/server or ajax) - works for all grid tables - Master and Details.

* The editing data functionality will remain unaffected- if you use the item index and try to open an item that was deleted on the client for edit, Telerik RadGrid will handle the case automatically and will open the next item.

* Automatic deletes with data source control under ASP.NET 2.0.

* Manual delete with ability to cancel the delete action on the server in the corresponding *DeleteCommand/ItemCommand* handler (by setting *e.Canceled* to *true*).
