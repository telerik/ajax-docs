---
title: OnClick
page_title: OnClick - RadTile
description: Check our Web Forms article about OnClick.
slug: tilelist/tiles/server-side-programming/events/onclick
tags: onclick
published: True
position: 1
---

# OnClick


 

The **Click** server side event is triggered when a tile is clicked with the left mouse button (or is tapped on a touch device) and the **AutoPostBack** property is set to **true**. [Navigation]({%slug tilelist/functionality/navigation%}) will not occur even if a NavigateUrl is provided in the given tile, but a postback will be invoked instead.

The event handler receives two arguments - of type **object** that is a reference to the RadBaseTile control that fired the event and can be cast to it, and a **System.EventArgs** object that can be used to get a reference to the clicked [Tile]({%slug tilelist/tiles/server-side-programming/tile-object%}) through its **Tile** property. It returns an object of type *RadBaseTile*.

````ASP.NET
<telerik:RadTextTile ID="Tile1" runat="server" AutoPostBack="true" 
    Text="Tile for selection" 
    OnClick="Tile1_Click">
</telerik:RadTextTile>
<asp:Label Text="" runat="server" ID="Label1"/>
````





````C#
protected void Tile1_Click(object sender, EventArgs e)
{
    string script = "alert('Tile with ID  " + Tile1.ID + " is clicked');";
    ScriptManager.RegisterStartupScript(this.GetType(), "Alert", script, true);
}
````
````VB
Protected Sub Tile1_Click(sender As Object, e As EventArgs)
    Dim script As String = "alert('Tile with ID  " + Tile1.ID + " is clicked');"
    ClientScript.RegisterClientScriptBlock(Me.GetType(), "Alert", script, True)
End Sub
````


