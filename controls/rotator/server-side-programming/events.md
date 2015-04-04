---
title: Events
page_title: Events | UI for ASP.NET AJAX Documentation
description: Events
slug: rotator/server-side-programming/events
tags: events
published: True
position: 1
---

# Events



RadRotator control exposes 3 important events

## ASPX

````ASPNET
	    <telerik:RadRotator ID="RadRotator1" runat="server" Width="200" ItemWidth="100" Height="100"
	        ItemHeight="100" DataSourceID="XmlDataSource1" OnItemCreated="RadRotator1_ItemCreated"
	        OnItemDataBound="RadRotator1_ItemDataBound" OnItemClick="RadRotator1_ItemClick">
	        <ItemTemplate>
	            <asp:Image ID="Image1" runat="server" ImageUrl='<%# XPath("ImageURL") %>' AlternateText="IMAGE"
	                CssClass="itemTemplate" />
	        </ItemTemplate>
	    </telerik:RadRotator>
````



## OnItemCreated event

Called for every RadRotator's item when its template is created. This event is called before the OnItemDataBind one



````C#
		protected void RadRotator1_ItemCreated(object sender, RadRotatorEventArgs e)
		{
			Image image1 = e.Item.FindControl("Image1") as Image;// Find the asp:Image server control
			string imageURL = image1.ImageUrl; // ImageURL is NOT available yet
		}
````
````VB
	
	    Protected Sub RadRotator1_ItemCreated(ByVal sender As Object, ByVal e As RadRotatorEventArgs)
	        Dim image1 As Image = TryCast(e.Item.FindControl("Image1"), Image) ' Find the asp:Image server control
	        Dim imageURL As String = image1.ImageUrl ' ImageURL is NOT available yet
	    End Sub
	
	#End Region
	
	#Region "rotator-server-side-events_vb_1"
	    Protected Sub RadRotator1_ItemDataBound(ByVal sender As Object, ByVal e As RadRotatorEventArgs)
	        Dim image1 As Image = TryCast(e.Item.FindControl("Image1"), Image) ' Find the asp:Image server control
	        Dim imageURL As String = image1.ImageUrl ' ImageURL is already available
	    End Sub
	
	#End Region
	
	#Region "rotator-server-side-events_vb_2"
	    Protected Sub RadRotator1_ItemClick(ByVal sender As Object, ByVal e As RadRotatorEventArgs)
	        Dim rotator As RadRotator = TryCast(sender, RadRotator)
	        rotator.InitialItemIndex = e.Item.Index ' Persist the index
	    End Sub
	#End Region
	
	
	End Class




## OnItemDataBound event

Called for every RadRotator's item after it is databound. This event is called after the OnItemCreated one



````C#
		protected void RadRotator1_ItemDataBound(object sender, RadRotatorEventArgs e)
		{
			Image image1 = e.Item.FindControl("Image1") as Image;// Find the asp:Image server control
			string imageURL = image1.ImageUrl; // ImageURL is already available
		}
````
````VB
	    Protected Sub RadRotator1_ItemDataBound(ByVal sender As Object, ByVal e As RadRotatorEventArgs)
	        Dim image1 As Image = TryCast(e.Item.FindControl("Image1"), Image) ' Find the asp:Image server control
	        Dim imageURL As String = image1.ImageUrl ' ImageURL is already available
	    End Sub
	
	#End Region
	
	#Region "rotator-server-side-events_vb_2"
	    Protected Sub RadRotator1_ItemClick(ByVal sender As Object, ByVal e As RadRotatorEventArgs)
	        Dim rotator As RadRotator = TryCast(sender, RadRotator)
	        rotator.InitialItemIndex = e.Item.Index ' Persist the index
	    End Sub
	#End Region
	
	
	End Class




## OnItemClick event

Called when a RadRotator's item is clicked and the click event is not canceled client-side. This event can be used in order to maintain the last shown item's index



````C#
		protected void RadRotator1_ItemClick(object sender, RadRotatorEventArgs e)
		{
			RadRotator rotator = sender as RadRotator;
			rotator.InitialItemIndex = e.Item.Index;// Persist the index 
		}
````
````VB
	    Protected Sub RadRotator1_ItemClick(ByVal sender As Object, ByVal e As RadRotatorEventArgs)
	        Dim rotator As RadRotator = TryCast(sender, RadRotator)
	        rotator.InitialItemIndex = e.Item.Index ' Persist the index
	    End Sub
	#End Region
	
	
	End Class



