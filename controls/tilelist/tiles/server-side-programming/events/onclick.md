---
title: OnClick
page_title: OnClick | UI for ASP.NET AJAX Documentation
description: OnClick
slug: tilelist/tiles/server-side-programming/events/onclick
tags: onclick
published: True
position: 1
---

# OnClick



## 

The __Click__ server side event is triggered when a tile is clicked with the left mouse button (or is tapped on a touch device) and the __AutoPostBack__ property is set to __true__. [Navigation]({%slug tilelist/functionality/navigation%}) will not occur even if a NavigateUrl is provided in the given tile, but a postback will be invoked instead.

The event handler receives two arguments - of type __object__ that is a reference to the RadBaseTile control that fired the event and can be cast to it, and a __System.EventArgs__ object that can be used to get a reference to the clicked [Tile]({%slug tilelist/tiles/server-side-programming/tile-object%}) through its __Tile__ property. It returns an object of type *RadBaseTile*.

````ASPNET
	    <telerik:RadTextTile ID="Tile1" runat="server" AutoPostBack="true" 
	        Text="Tile for selection" 
	        OnClick="Tile1_Click">
	    </telerik:RadTextTile>
	    <asp:Label Text="" runat="server" ID="Label1"/>
````



>tabbedCode

````C#
	    protected void Tile1_Click(object sender, EventArgs e)
	    {
	        string script = "alert('Tile with ID  " + Tile1.ID + " is clicked');";
	        ScriptManager.RegisterStartupScript(this.GetType(), "Alert", script, true);
	    }
````



````VB.NET
	    Protected Sub Tile1_Click(sender As Object, e As EventArgs)
	        Dim script As String = "alert('Tile with ID  " + Tile1.ID + " is clicked');"
	        ClientScript.RegisterClientScriptBlock(Me.GetType(), "Alert", script, True)
	    End Sub
	#End Region
	
	End Class


>end
