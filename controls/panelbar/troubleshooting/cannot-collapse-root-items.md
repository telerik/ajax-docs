---
title: Cannot Collapse Root Items
page_title: Cannot Collapse Root Items | UI for ASP.NET AJAX Documentation
description: Cannot Collapse Root Items
slug: panelbar/troubleshooting/cannot-collapse-root-items
tags: cannot,collapse,root,items
published: True
position: 0
---

# Cannot Collapse Root Items



## 

__PROBLEM__

Root items that have __ItemTemplate__ defined cannot be collapsed. This is by design and can be observed on our [online demo](http://demos.telerik.com/aspnet-ajax/panelbar/examples/functionality/templates/defaultcs.aspx).

__SOLUTION__

Add an additional item with no text as a child item of the root item and set its ItemTemplate.

__EXAMPLE__

The root item of this panelbar cannot be collapsed:

````ASPNET
	    <telerik:RadPanelBar ID="RadPanelBar2" runat="server" ExpandMode="FullExpandedItem">
	       <Items>
	           <telerik:RadPanelItem runat="server" Text="Root RadPanelItem1">
	               <ItemTemplate>
	                   <telerik:RadComboBox ID="RadComboBox1" runat="server">
	                   </telerik:RadComboBox>
	               </ItemTemplate>
	           </telerik:RadPanelItem>
	       </Items>
	    </telerik:RadPanelBar> 
````



The root item of this panelbar can be collapsed:

````ASPNET
	    <telerik:RadPanelBar ID="RadPanelBar1" runat="server">
	   <Items>
	       <telerik:RadPanelItem runat="server" Text="Root RadPanelItem1">
	           <Items>
	               <telerik:RadPanelItem>
	                   <ItemTemplate>
	                       <telerik:RadComboBox ID="RadComboBox1" runat="server">
	                       </telerik:RadComboBox>
	                   </ItemTemplate>
	               </telerik:RadPanelItem>
	           </Items>
	       </telerik:RadPanelItem>
	   </Items>
	</telerik:RadPanelBar> 
````


