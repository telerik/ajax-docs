---
title: Resizing TreeList with Scrolling when Data is Less Than Scroll Height
page_title: Resizing TreeList with Scrolling when Data is Less Than Scroll Height | RadTreeList for ASP.NET AJAX Documentation
description: Resizing TreeList with Scrolling when Data is Less Than Scroll Height
slug: treelist/functionality/scrolling/how-to/resizing-treelist-with-scrolling-when-data-is-less-than-scroll-height
tags: resizing,treelist,with,scrolling,when,data,is,less,than,scroll,height
published: True
position: 2
---

# Resizing TreeList with Scrolling when Data is Less Than Scroll Height



## 

Sometimes your application may reduce the records that **RadTreeList** displays by some method such as adynamically changing the page size. When this occurs, the treelist automatically resizes its contentarea for the smaller amount of data, except when scrolling is enabled.

To reduce the size of the treelist when the data does not fill the content area when scrolling is enabled, use the client-side**TreeListCreated** event. In the **TreeListCreated** event handler, check whether theinner table height is less than the value of the **ClientSettings.Scrolling.ScrollHeight** property, and if so,explicitly modify the scroll area height to match the height of the data items.

The following example illustrates this technique:

````JavaScript
	  <script type="text/javascript">
	      function TreeListCreated(sender, eventArgs) {
	          //gets the main table scrollArea 
	          var scrollArea = document.getElementById(sender.get_element().id + "_rtlData");
	
	          var innerTable;
	
	          //gets the inner table    
	          for (var i = 0; i < scrollArea.childNodes.length; i++) {
	              if (scrollArea.childNodes[i].nodeName.toUpperCase() == "TABLE") {
	                  innerTable = scrollArea.childNodes[i];
	              }
	          }
	          var dataHeight = innerTable.clientHeight;
	
	          if (dataHeight < 350) {
	              scrollArea.style.height = dataHeight + 17 + "px";
	          }
	      }
	  </script>
````



````ASPNET
	 <telerik:RadTreeList ID="RadTreeList1" runat="server" DataSourceID="SqlDataSource1"
	        AutoGenerateColumns="true" AllowPaging="true" DataKeyNames="LocationID" ParentDataKeyNames="ParentLocationID">
	        <ClientSettings>
	            <Scrolling AllowScroll="true" UseStaticHeaders="true" ScrollHeight="350px" />
	            <ClientEvents OnTreeListCreated="TreeListCreated" />
	            <Selecting AllowItemSelection="true" />
	        </ClientSettings>
	    </telerik:RadTreeList>
	    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
	        SelectCommand="SELECT [LocationID], [LocationName], [Population], [Area], [ParentLocationID] FROM [WorldLocations]" />
````


