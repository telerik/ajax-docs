---
title: Accessing a RadTreeView Embedded in Another Control
page_title: Accessing a RadTreeView Embedded in Another Control | RadTreeView for ASP.NET AJAX Documentation
description: Accessing a RadTreeView Embedded in Another Control
slug: treeview/application-scenarios/client-side-programming/accessing-a-radtreeview-embedded-in-another-control
tags: accessing,a,radtreeview,embedded,in,another,control
published: True
position: 5
---

# Accessing a RadTreeView Embedded in Another Control



## 

To find a RadTreeView client-side instance when embedded in another control, use server side functionality to locate the RadTreeView ClientID. In the following example the RadTreeView is embedded in a RadMenu item template.

````ASPNET
	    <telerik:RadMenu ID="RadMenu1" runat="server">
	        <ItemTemplate>
	            <telerik:RadTreeView ID="RadTreeView1" runat="server">
	            </telerik:RadTreeView>
	        </ItemTemplate>
	    </telerik:RadMenu>
````



````JavaScript
	
	    <script type="text/javascript">
	        var tree = $find('<%=RadMenu1.Items[0].FindControl("RadTreeView1").ClientID %>');  
	    </script>
	
````


