---
title: Accessing RadGrid
page_title: Accessing the Grid Server-Side - RadGrid | Telerik UI for ASP.NET AJAX
description: Accessing the Grid on server
slug: grid/accessing-values-and-controls/server-side/accessing-radgrid
published: True
position: 0
---

# Accessing RadGrid on Server-Side

## Declarative Grid

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server"></telerik:RadGrid>
````

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    RadGrid1.AllowSorting = true;
    RadGrid1.Rebind();
}
````

## Dynamically created Grid

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadGrid grid = new RadGrid();
    grid.ID = "RadGrid1";

    PlaceHolder1.Controls.Add(grid);
}

protected void RadButton1_Click(object sender, EventArgs e)
{
    RadGrid grid = PlaceHolder1.FindControl("RadGrid1") as RadGrid;
}
````



