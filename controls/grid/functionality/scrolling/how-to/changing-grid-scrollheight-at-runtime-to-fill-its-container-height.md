---
title: Changing Grid ScrollHeight at Runtime to Fill its Container Height
page_title: Changing Grid ScrollHeight at Runtime to Fill its Container Height | RadGrid for ASP.NET AJAX Documentation
description: Changing Grid ScrollHeight at Runtime to Fill its Container Height
slug: grid/functionality/scrolling/how-to/changing-grid-scrollheight-at-runtime-to-fill-its-container-height
tags: changing,grid,scrollheight,at,runtime,to,fill,its,container,height
published: True
position: 2
---

# Changing Grid ScrollHeight at Runtime to Fill its Container Height



## 

In a **RadGrid** control with scrolling enabled, you can modify the default grid scroll height to match the height of its container element. The following steps describe how to achieve this:

1. Create a handler for the client-side **GridCreated** event.

1. In the **GridCreated** event handler, use the grid's **GridDataDiv** property to obtain a reference to the DOM element for the grid's scrollable region.

1. Alter the **style.height** attribute of this DOM element to make it equal the height of the grid's container element. Note that if static headers are enabled you will have to take into account the header height.

The following example illustrates this technique:

````ASPNET
	  <script type="text/javascript">
	    function GridCreated(sender, args) {
	      var scrollArea = sender.GridDataDiv;
	      var parent = $get("gridContainer");
	      var gridHeader = sender.GridHeaderDiv;
	      scrollArea.style.height = parent.clientHeight -
	        gridHeader.clientHeight + "px";
	    }
	  </script>
	  <div style="height: 500px; width: 800px" id="gridContainer">
	    <telerik:RadGrid ID="RadGrid1" runat="server" AutoGenerateColumns="true" DataSourceID="AccessDataSource1">
	      <ClientSettings>
	        <Scrolling AllowScroll="true" ScrollHeight="300px" UseStaticHeaders="true" />
	        <ClientEvents OnGridCreated="GridCreated" />
	      </ClientSettings>
	    </telerik:RadGrid>
	  </div>
	  <asp:AccessDataSource ID="AccessDataSource1" runat="server" DataFile="~/App_Data/Nwind.mdb"
	    SelectCommand="SELECT CustomerID, CompanyName, ContactName,
	        ContactTitle, Address, PostalCode FROM Customers"></asp:AccessDataSource>
````


