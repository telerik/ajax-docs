---
title: findElement
page_title: findElement | RadGrid for ASP.NET AJAX Documentation
description: findElement
slug: grid/client-side-programming/griddataitem-object/methods/findelement
tags: findelement
published: True
position: 1
---

# findElement



## 

This method takes control id for an argument and returns the corresponding DOM element of html or rendered server control inside the grid row. Useful to reference html elements of controls inside a grid item cell on the client.


>caption  

|  **findElement(id)**  |  |  |
| ------ | ------ | ------ |
| **id** |String|The id of a DOM element.|

Example:

````ASPNET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <MasterTableView> 
	            <Columns> 
	                <telerik:GridTemplateColumn> 
	                    <ItemTemplate> 
	                        <asp:Label ID="Label1" runat="server" /> 
	                    </ItemTemplate> 
	                </telerik:GridTemplateColumn> 
	            </Columns> 
	        </MasterTableView>
	        <ClientSettings>
	            <ClientEvents OnRowDataBound="RadGrid1_RowDataBound" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function RadGrid1_RowDataBound(sender, args) {
	            var lbl = args.get_item().findElement("Label1");
	            lbl.innerHTML = args.get_dataItem()["LastName"];
	        } 
````


