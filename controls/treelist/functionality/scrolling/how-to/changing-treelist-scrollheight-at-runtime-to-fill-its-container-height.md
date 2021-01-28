---
title: Changing TreeList ScrollHeight at Runtime to Fill its Container Height
page_title: Changing TreeList ScrollHeight at Runtime to Fill its Container Height - RadTreeList
description: Check our Web Forms article about Changing TreeList ScrollHeight at Runtime to Fill its Container Height.
slug: treelist/functionality/scrolling/how-to/changing-treelist-scrollheight-at-runtime-to-fill-its-container-height
tags: changing,treelist,scrollheight,at,runtime,to,fill,its,container,height
published: True
position: 0
---

# Changing TreeList ScrollHeight at Runtime to Fill its Container Height



## 

In a **RadTreeList** control with scrolling enabled, you can modify
the default treelist scroll height to match the height of its container element.
The following steps describe how to achieve this:

1. Create a handler for the client-side **TreeListCreated** event.

1. In the **TreeListCreated** event handler, use the treelist's dataDiv to obtain a reference to the DOM element for the treelist's scrollable region.

1. Alter the **style.height** attribute of this DOM element to make it equal the height of the treelist's container element. Note that if static headers are enabled you will have to take into account the header height.

The following example illustrates this technique:

````JavaScript
<script type="text/javascript">
   function TreeListCreated(sender, args) {
	   var scrollArea = $get(sender.get_element().id + '_rtlData');
	   var parent = $get("treelistContainer")
	   var header = $get(sender.get_element().id + '_rtlHeader')
	   scrollArea.style.height = parent.clientHeight - header.clientHeight + "px";
   }
</script>
````



````ASPNET
  <div style="height: 500px; width: 800px" id="treelistContainer">
	<telerik:RadTreeList RenderMode="Lightweight" ID="RadTreeList1" runat="server" DataSourceID="SqlDataSource1"
		AutoGenerateColumns="true" DataKeyNames="EmployeeID" ParentDataKeyNames="ReportsTo">
		<ClientSettings>
			<Scrolling AllowScroll="true" UseStaticHeaders="true" ScrollHeight="300px" />
			<ClientEvents OnTreeListCreated="TreeListCreated" />
		</ClientSettings>
	</telerik:RadTreeList>
</div>
<asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	SelectCommand="SELECT EmployeeID, FirstName, LastName, ReportsTo FROM [Employees]" />
````


