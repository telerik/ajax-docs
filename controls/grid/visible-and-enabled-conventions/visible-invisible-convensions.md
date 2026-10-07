---
title: Control RadGrid Visibility
page_title: Control RadGrid Visibility - RadGrid
description: Learn how to show and hide RadGrid on the client and server in ASP.NET AJAX.
slug: grid/visible-and-enabled-conventions/visible-invisible-conventions
components: ["grid"]
tags: visible, invisible, client-side, server-side, grid
published: True
position: 0
---

# Control RadGrid Visibility

You can show or hide a **RadGrid** control on the client by changing its rendered element, or on the server by changing the **Visible** property.

## Client-Side

Get the grid's client object, access its rendered element, and change the element's `style.display` property. The following example uses buttons outside the grid to control its visibility.

> caption Show and hide a RadGrid by changing its client-side display style

````ASP.NET
<asp:ScriptManager ID="ScriptManager1" runat="server" />
<script type="text/javascript">
  function ShowGrid() {
    $find("<%= RadGrid1.ClientID %>").get_element().style.display = "";
  }
  function HideGrid() {
    $find("<%= RadGrid1.ClientID %>").get_element().style.display = "none";
  }
</script>
<telerik:RadGrid ID="RadGrid1" runat="server" RenderMode="Lightweight">
  <MasterTableView AutoGenerateColumns="True" />
</telerik:RadGrid>
<br />
<input id="btnShowGrid" type="button" value="Show grid" onclick="ShowGrid()" />
<input id="btnHideGrid" type="button" value="Hide grid" onclick="HideGrid()" />
````

## Server-Side

Set the **Visible** property of the grid or of a container such as a **PlaceHolder** or **Panel**. When the grid or its container becomes visible again, call `Rebind()` so that the grid can bind its data.

When **RadGrid.Visible** is initially `False`, also set **MasterTableView.Visible** to `True` before displaying the grid. **MasterTableView** represents the HTML table inside the `div` rendered for the **RadGrid** instance.

> note When **RadGrid.Visible** is `False`, the **NeedDataSource** event does not fire. Call `Rebind()` after setting the grid or its container to visible.

> caption Show a RadGrid after it was hidden on the server

````C#
RadGrid1.Visible = true;
RadGrid1.MasterTableView.Visible = true;
RadGrid1.Rebind();
````
````VB
RadGrid1.Visible = True
RadGrid1.MasterTableView.Visible = True
RadGrid1.Rebind()
````

## See Also

- [RadGrid client-side Visible property]({%slug grid/client-side-programming/radgrid-object/properties/get_visible()%})
- [RadGrid client-side set_visible method]({%slug grid/client-side-programming/radgrid-object/properties/set_visible()%})
