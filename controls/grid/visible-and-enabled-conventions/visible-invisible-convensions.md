---
title: Visible Invisible Conventions
page_title: Visible Invisible Conventions | RadGrid for ASP.NET AJAX Documentation
description: Visible Invisible Conventions
slug: grid/visible-and-enabled-conventions/visible-invisible-conventions
tags: visible, invisible, conventions
published: True
position: 0
---

# Visible/Invisible Conventions


You can change the visibility of a **RadGrid** control either client-side or server-side.

## Client-side

To change the visibility of a grid client-side, obtain a reference to the grid's DOM element in the rendered page and alter its **style.display** property. Below is a rough outline of this approach:

````ASP.NET
<script type="text/javascript">
  function ShowGrid() {
    $find("<%=RadGrid1.ClientID%>").get_element().style.display = "";
  }
  function HideGrid() {
    $find("<%=RadGrid1.ClientID%>").get_element().style.display = "none";
  }
</script>
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
  <!-- your grid definition here -->
</telerik:RadGrid>
<br />
<input id="btnShowGrid" type="button" value="Show grid" onclick="ShowGrid()" />
<input id="btnHideGrid" type="button" value="Hide grid" onclick="HideGrid()" />
````



## Server-side

You can use the **Visible** property of the grid or a container in which the control resides to change the visibility of the grid. When using this approach to change the visibility of the grid, be aware of the following points:

* When the grid visibility is initially set to **False**, you must switch the visibility of the **MasterTableView** to display the grid after it has been hidden.

>note The **MasterTableView** object represents the actual HTML table of the rendered grid image in the client browser. The **RadGrid** instance is rendered as a **div** tag that encloses the HTML table. Of course, you can hide the **RadGrid** div as well if you wish.
>


* When the **Visible** property of the **RadGrid** control is set to **False**, the **NeedDataSource** event does not fire. (This has been done to optimize performance). When you change the **Visible** property of the grid to **True**, you must call the grid's **Rebind** method so that it can bind to its data.

* When you make a hidden container (such as a **PlaceHolder** or **Panel**) that holds the grid instance visible, you must rebind the grid by calling its **Rebind** method. (see previous point).
