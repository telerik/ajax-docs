---
title: get_id()
page_title: get_id() | RadGrid for ASP.NET AJAX Documentation
description: get_id()
slug: grid/client-side-programming/griddataitem-object/properties/get_id()
tags: get_id()
published: True
position: 5
---

# get_id()



## 

Returns a String, representing the ClientID for the element. Can be used as an identificatorto save some of the records in a preserving collection.

````ASP.NET
	        <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True"
	            OnNeedDataSource="RadGrid1_NeedDataSource">
	            <ClientSettings>
	                <ClientEvents OnRowCreated="rowCreated" />
	            </ClientSettings>
	            <MasterTableView DataKeyNames="OrderID">
	            </MasterTableView>
	        </telerik:RadGrid>
````



````JavaScript
	            function rowCreated(sender, args) {
	                var item = args.get_item();
	                alert(item.get_id());
	            }
````


