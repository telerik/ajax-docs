---
title: Visible/Enabled Conventions Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: grid/visible/enabled-conventions/overview
tags: overview
published: True
position: 0
---

# Visible/Enabled Conventions Overview



You can change the visibility of a __RadGrid__ control either client-side or server-side.

## Client-side

To change the visibility of a grid client-side, obtain a reference to the grid's DOM element in the rendered page and alter its __style.display__ property. Below is a rough outline of this approach:

````ASPNET
	  <script type="text/javascript">
	    function ShowGrid() {
	      $find("<%=RadGrid1.ClientID%>").get_element().style.display = "";
	    }
	    function HideGrid() {
	      $find("<%=RadGrid1.ClientID%>").get_element().style.display = "none";
	    }
	  </script>
	  <telerik:RadGrid ID="RadGrid1" runat="server">
	    <!-- your grid definition here -->
	  </telerik:RadGrid>
	  <br />
	  <input id="btnShowGrid" type="button" value="Show grid" onclick="ShowGrid()" />
	  <input id="btnHideGrid" type="button" value="Hide grid" onclick="HideGrid()" />
````



## Server-side

You can use the __Visible__ property of the grid or a container in which the control resides to change the visibility of the grid. When using this approach to change the visibility of the grid, be aware of the following points:

* When the grid visibility is initially set to __False__, you must switch the visibility of the __MasterTableView__ to display the grid after it has been hidden.

>note The __MasterTableView__ object represents the actual HTML table of the rendered grid image in the client browser. The __RadGrid__ instance is rendered as a __div__ tag that encloses the HTML table. Of course, you can hide the __RadGrid__ div as well if you wish.
>


* When the __Visible__ property of the __RadGrid__ control is set to __False__, the __NeedDataSource__ event does not fire. (This has been done to optimize performance). When you change the __Visible__ property of the grid to __True__, you must call the grid's __Rebind__ method so that it can bind to its data.

* When you make a hidden container (such as a __PlaceHolder__ or __Panel__) that holds the grid instance visible, you must rebind the grid by calling its __Rebind__ method. (see previous point).
