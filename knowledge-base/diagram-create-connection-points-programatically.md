---
title: Create Connection Points Programatically in RadDiagram
description: Create Connection Points Programatically in RadDiagram. Check it now!
type: how-to
page_title: Create Connection Points Programatically in RadDiagram
slug: diagram-create-connection-points-programatically
res_type: kb
---

## Description

In some scenarios, you may want to add intermediate connection points between the shapes in order to achieve specific layout. This can be done both through the markup, and by creating the needed connection points programmatically when the connection type is set to Polyline.

## Solution

The default type of the connections in RadDiagram is Cascading. In order to be able to add custom points to a connection, you have to make sure that the connection's type is set to **Polyline**. Once this is done, you can define the desired DiagramConnectionPoint objects by assigning the coordinates where you need to visualize them in them like follows:

````ASPX
<telerik:RadDiagram ID="RadDiagram1" runat="server">
    <ConnectionDefaultsSettings Type="Polyline"></ConnectionDefaultsSettings>
    <ShapesCollection>
        <telerik:DiagramShape Id="s1" Width="100" Height="60" X="20" Y="20"></telerik:DiagramShape>
        <telerik:DiagramShape Id="s2" Width="100" Height="60" X="300" Y="20"></telerik:DiagramShape>
    </ShapesCollection>
</telerik:RadDiagram>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    Telerik.Web.UI.DiagramConnection connection = new Telerik.Web.UI.DiagramConnection();
    connection.FromSettings.ShapeId = "s1";
    connection.ToSettings.ShapeId = "s2";
    connection.PointsCollection.Add(new Telerik.Web.UI.DiagramConnectionPoint() { X = 150, Y = 50 });
    connection.PointsCollection.Add(new Telerik.Web.UI.DiagramConnectionPoint() { X = 150, Y = 20 });
    connection.PointsCollection.Add(new Telerik.Web.UI.DiagramConnectionPoint() { X = 270, Y = 20 });
    connection.PointsCollection.Add(new Telerik.Web.UI.DiagramConnectionPoint() { X = 270, Y = 50 });
    RadDiagram1.ConnectionsCollection.Add(connection);
}
````

## See Also

- [RadDiagram Connection](https://docs.telerik.com/devtools/aspnet-ajax/controls/diagram/structure/connection)

- [Telerik.Web.UI.DiagramConnectionPoint](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/DiagramConnectionPoint)


