---
title: Accessing RadGrid
page_title: Accessing the Grid Server-Side - RadGrid
description: Learn how to access a declarative or dynamically created RadGrid on the server side.
slug: grid/accessing-values-and-controls/server-side/accessing-radgrid
components: ["grid"]
published: True
position: 0
---

# Accessing RadGrid on the Server Side

You can access a RadGrid from its server-side declaration or from the container that holds a dynamically created instance.

## Declarative Grid

> caption Enable sorting and rebind a declarative RadGrid

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server"></telerik:RadGrid>
````

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    // Enable sorting before refreshing the grid.
    RadGrid1.AllowSorting = true;
    RadGrid1.Rebind();
}
````
````VB
Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
    ' Enable sorting before refreshing the grid.
    RadGrid1.AllowSorting = True
    RadGrid1.Rebind()
End Sub
````

## Dynamically created Grid

> caption Create a RadGrid dynamically and access it from its placeholder

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    // Recreate the grid during initialization so it is available on postback.
    RadGrid grid = new RadGrid();
    grid.ID = "RadGrid1";

    PlaceHolder1.Controls.Add(grid);
}

protected void RadButton1_Click(object sender, EventArgs e)
{
    // Find the dynamically created grid from its naming container.
    RadGrid grid = PlaceHolder1.FindControl("RadGrid1") as RadGrid;
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs)
    ' Recreate the grid during initialization so it is available on postback.
    Dim grid As New RadGrid()
    grid.ID = "RadGrid1"

    PlaceHolder1.Controls.Add(grid)
End Sub

Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
    ' Find the dynamically created grid from its naming container.
    Dim grid As RadGrid = TryCast(PlaceHolder1.FindControl("RadGrid1"), RadGrid)
End Sub
````

## See Also

- [Accessing Values and Controls - Overview]({%slug grid/accessing-values-and-controls/overview %})
- [Accessing Tables]({%slug grid/accessing-values-and-controls/server-side/accessing-tables %})
- [Accessing Items]({%slug grid/accessing-values-and-controls/server-side/accessing-items %})
- [Accessing Cells]({%slug grid/accessing-values-and-controls/server-side/accessing-cells %})
- [Accessing Controls]({%slug grid/accessing-values-and-controls/server-side/accessing-controls %})

