---
title: showHeaderMenu
page_title: showHeaderMenu | RadGrid for ASP.NET AJAX Documentation
description: showHeaderMenu
slug: grid/client-side-programming/gridcolumn-object/methods/showheadermenu
tags: showheadermenu
published: True
position: 0
---

# showHeaderMenu



## 

Method which allows you to display the header context menu explicitly for a given column. The default position of the header context menu when invoking this method is the upper left corner of the corresponding column header cell.


|  **showHeaderMenu(event, offsetLeft, offsetTop)**  |  |
| ------ | ------ |
| **event** |The default browser event.|
| **offsetLeft(optional)** |The offset to the left from the default header context menu column position.|
| **offsetTop(optional)** |The offset to the right from the default header context menu column position.|

Example:

````JavaScript
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	    <script type="text/javascript">
	        function ShowFirstColumnHeaderMenu(ev) {
	            var grid = $find("<%=RadGrid1.ClientID %>");
	            //show the header context menu for the second column in the master table with 10 left/10 top offset
	            grid.get_masterTableView().get_columns()[1].showHeaderMenu(ev, 10, 10);
	        }
	     </script>
	    </telerik:RadCodeBlock>
	    
	    <telerik:RadGrid id="RadGrid1" runat="server">
	        <MasterTableView EnableHeaderContextMenu="true">
	        </MasterTableView>
	    </telerik:RadGrid> 
	    <input id="Button1" type="button" value="show header menu" onclick="ShowFirstColumnHeaderMenu(event);" />
````


