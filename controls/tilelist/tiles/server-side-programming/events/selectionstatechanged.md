---
title: SelectionStateChanged
page_title: SelectionStateChanged | UI for ASP.NET AJAX Documentation
description: SelectionStateChanged
slug: tilelist/tiles/server-side-programming/events/selectionstatechanged
tags: selectionstatechanged
published: True
position: 0
---

# SelectionStateChanged



## 

The __SelectionStateChanged__ server-side event is fired when a [Tile is selected]({%slug tilelist/functionality/selecting%}) and __AutoPostBack__ is set to __true__. It allows the developer to obtain the selected tile in order to use that information.

The event handler receives two arguments - of type __object__ that is a reference to the RadBaseTile control that fired the event and can be cast to it, and a __System.EventArgs__ object.

>tip The API of the RadBaseTile object itself is used to obtain the tile selection, so this can be done in any other event.The OnSelectionStateChanged event only provides an immediate event that can be used by the developer.
>


````ASPNET
	    <telerik:RadTextTile ID="Tile1" runat="server" AutoPostBack="true" 
	        Text="Tile for selection" 
	        OnClick="Tile1_Click">
	    </telerik:RadTextTile>
	    <asp:Label Text="" runat="server" ID="Label1"/>
````



Here is an example how to get the selection state of tile:

>tabbedCode

````C#
	    protected void Tile1_SelectionStateChanged(object sender, EventArgs e)
	    {
	        Label1.Text = "The Tile is " + (Tile1.Selected ? "selected." : "not selected.");
	    }
````



````VB.NET
	    Protected Sub Tile1_SelectionStateChanged(sender As Object, e As EventArgs)
	        Label1.Text = "The Tile is " + If(Tile1.Selected, "selected.", "not selected.")
	    End Sub
	#End Region
	
	#Region "OnClick-get-tile-vb-0"
	    Protected Sub Tile1_Click(sender As Object, e As EventArgs)
	        Dim script As String = "alert('Tile with ID  " + Tile1.ID + " is clicked');"
	        ClientScript.RegisterClientScriptBlock(Me.GetType(), "Alert", script, True)
	    End Sub
	#End Region
	
	End Class


>end
