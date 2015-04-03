---
title: Detail Item Template
page_title: Detail Item Template | UI for ASP.NET AJAX Documentation
description: Detail Item Template
slug: grid/rows/detail-item-template
tags: detail,item,template
published: True
position: 5
---

# Detail Item Template



The __DetailItemTemplate__ is considered a part of the __GridDataItem__ and is rendered in a new row right after the __GridDataItem__ itself.

## 

The template is instantiated within a single cell that spans over the whole row/item.

````ASPNET
	  <telerik:RadGrid runat="server" ID="RadGrid1" AutoGenerateColumns="false">
	  <MasterTableView>
		<DetailItemTemplate>
			Text content
			<asp:Label ID="Label2" runat="server" Text='<%# Eval("DataField1") %>' />
			<asp:Label ID="Label1" runat="server" Text="Unbound label" />
			<%# Eval("DataField2") %>
		</DetailItemTemplate>
	  </MasterTableView>
	  </telerik:RadGrid>
````



There is a new item type in RadGrid - __GridItemType.DetailTemplateItem__. Due to the fact that the __GridDetailTemplateItem__ is an integral part of the __GridDataItem__, __ItemCreated__ and __ItemDataBound__ events won’t be triggered when it is created/bound. It is possible, however to get all items of type __GridDetailTemplateItem__ by using the __GetItems()__ method of the __GridTableView__.

Hiding the __GridDataItem__ will hide the __GridDetailTemplateItem__.

## Appearance and Styling

Base row style __(rgRow, rgAltRow)__ is applied according to the parent item’s current style.

## Accessing the DetailItemTemplate

It is important to note that the data cell of the new item can be directly accessed via the __DetailTemplateItemDataCell__ property of __GridDataItem__.
The new template supports databinding using the __DataItem__ of the corresponding __GridDataItem__.All items of type __GridDetailTemplateItem__ could be accessed by using the __GetItems()__ method of the __GridTableView__.![grid detail item template](images/grid_detail_item_template.jpg)

>note Note that __DetailItemTemplate__ is not supported when __MasterTableView ItemTemplate__ is used.
>


# See Also
