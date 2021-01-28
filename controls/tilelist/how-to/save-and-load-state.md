---
title: Save and Load State
page_title: Save and Load State - RadTileList
description: Check our Web Forms article about Save and Load State.
slug: tilelist/how-to/save-and-load-state
tags: save,load,state
published: True
position: 3
---

# Save and Load State

You can save and load the state of a **RadTileList** control for your end users by using [RadPersistenceFramework]({%slug persistenceframework/overview%}).

The [Selected]({%slug tilelist/functionality/selecting%}) state and the order of the tiles can be saved and loaded.

You can see this in action in the following demo: [Persisting TileList Settings](https://demos.telerik.com/aspnet-ajax/tilelist/examples/application-scenarios/persisting-tilelist-settings/defaultcs.aspx). A basic setup is shown in **Example 1**.

How to use saving and loading with this example:

1. Open the page in the browser and move the tiles around or select some of them.

1. Click the Save State button.

1. Load the page anew in the same browser (without re-initiating the same postback) so the session is kept.

1. Click the Load State button to load the state.


>caption Example 1: Save and load RadTileList state.

````ASP.NET
<telerik:RadPersistenceManager runat="server" ID="RadPersistenceManager1">
	<PersistenceSettings>
		<telerik:PersistenceSetting ControlID="RadTileList1" />
	</PersistenceSettings>
</telerik:RadPersistenceManager>

<telerik:RadButton RenderMode="Lightweight" ID="SaveButton" runat="server" Text="Save state" OnClick="SaveButton_Click" />
<telerik:RadButton RenderMode="Lightweight" ID="LoadButton" runat="server" Text="Load state" OnClick="LoadButton_Click" />

<telerik:RadTileList RenderMode="Lightweight" runat="server" ID="RadTileList1" Width="700px" Height="360px" TileRows="2" SelectionMode="Multiple" EnableDragAndDrop="true">
	<Groups>
		<telerik:TileGroup>
			<telerik:RadTextTile ID="RadTextTile1" runat="server" Text="group 1, tile 1" BackColor="Red"></telerik:RadTextTile>
			<telerik:RadTextTile ID="RadTextTile2" runat="server" Text="group 1, tile 2" BackColor="Green"></telerik:RadTextTile>
		</telerik:TileGroup>
		<telerik:TileGroup>
			<telerik:RadTextTile ID="RadTextTile3" runat="server" Text="group 2, tile 1" BackColor="Blue"></telerik:RadTextTile>
			<telerik:RadTextTile ID="RadTextTile4" runat="server" Text="group 3, tile 2" BackColor="Yellow"></telerik:RadTextTile>
		</telerik:TileGroup>
	</Groups>
</telerik:RadTileList>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (!IsPostBack && Object.Equals(Session["TileListPersistenceKey"], null))
	{
		LoadButton.Enabled = false;
	}
}

protected void SaveButton_Click(object sender, EventArgs e)
{
	Session["TileListPersistenceKey"] = this.Session.SessionID;
	string fileId = Session["TileListPersistenceKey"].ToString();
	LoadButton.Enabled = true;
	//you should set the provider key according to your business logic (e.g., the user ID), this is a basic example
	RadPersistenceManager1.StorageProviderKey = fileId;

	//save the state
	RadPersistenceManager1.SaveState();
}



protected void LoadButton_Click(object sender, EventArgs e)
{
	string fileId = Session["TileListPersistenceKey"].ToString();
	RadPersistenceManager1.StorageProviderKey = fileId;

	//load the state
	RadPersistenceManager1.LoadState();
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs)
	If Not IsPostBack AndAlso [Object].Equals(Session("TileListPersistenceKey"), Nothing) Then
		LoadButton.Enabled = False
	End If
End Sub

Protected Sub SaveButton_Click(sender As Object, e As EventArgs)
	Session("TileListPersistenceKey") = Me.Session.SessionID
	Dim fileId As String = Session("TileListPersistenceKey").ToString()
	LoadButton.Enabled = True
	'you should set the provider key according to your business logic (e.g., the user ID), this is a basic example
	RadPersistenceManager1.StorageProviderKey = fileId

	'save the state
	RadPersistenceManager1.SaveState()
End Sub

Protected Sub LoadButton_Click(sender As Object, e As EventArgs)
	Dim fileId As String = Session("TileListPersistenceKey").ToString()
	RadPersistenceManager1.StorageProviderKey = fileId

	'load the state
	RadPersistenceManager1.LoadState()
End Sub
````

>important The tiles whose state is saved and the tiles collection over which the state is loaded must be the same. If there is a difference in the tiles (e.g., their IDs change, their number changes, etc.), there may be issues ranging from missing tiles and incorrectly loaded state to errors. If you are creating tiles programmatically, see the [Programmatic Creation]({%slug tilelist/server-side-programming/programmatic-creation%}) article. If you are [data binding]({%slug tilelist/data-binding/overview%}) the control, ensure the data source returns the same information.


## Hiding Tiles

Usually, a control is hidden by setting its server `Visible` property to `false`. Since the built-in TileList persistence relies on the same collection of tiles being used for loading and saving the state, you should not hide a tile on the server. Doing so can result in incorrect state being saved or loaded because the collection will be different.

To **hide tiles** and persist their state you can use **JavaScript** as of **Q1 2016**.


>caption Example 2: Hide tile on the client and save the state

````ASP.NET
<telerik:RadPersistenceManager runat="server" ID="RadPersistenceManager1">
	<PersistenceSettings>
		<telerik:PersistenceSetting ControlID="RadTileList1" />
	</PersistenceSettings>
</telerik:RadPersistenceManager>

<telerik:RadButton RenderMode="Lightweight" ID="SaveButton" runat="server" Text="Save state" OnClick="SaveButton_Click" />
<telerik:RadButton RenderMode="Lightweight" ID="LoadButton" runat="server" Text="Load state" OnClick="LoadButton_Click" />
<telerik:RadButton RenderMode="Lightweight" ID="HideTileButton" runat="server" Text="Hide Tile" OnClientClicked="hideTile" AutoPostBack="false" />

<script>
	function hideTile() {
		var tileList = $find("<%=RadTileList1.ClientID%>");
		//get a reference to the tile, there are various ways to do that (e.g., $find() or via its group, or the get_tileByName(nameString) method of the RadTileList
		var tile = tileList.get_allTiles()[1];

		//hide the tile
		tile.set_visible(false);
		//update the groups state before saving the state
		tileList.updateTileGroupsState();
	}
</script>

<telerik:RadTileList RenderMode="Lightweight" runat="server" ID="RadTileList1" Width="700px" Height="360px" TileRows="2" SelectionMode="Multiple" EnableDragAndDrop="true">
	<Groups>
		<telerik:TileGroup>
			<telerik:RadTextTile ID="RadTextTile1" runat="server" Text="group 1, tile 1" BackColor="Red"></telerik:RadTextTile>
			<telerik:RadTextTile ID="RadTextTile2" runat="server" Text="group 1, tile 2" BackColor="Green"></telerik:RadTextTile>
			<telerik:RadTextTile ID="RadTextTile3" runat="server" Text="group 1, tile 3" BackColor="Green"></telerik:RadTextTile>
		</telerik:TileGroup>
		<telerik:TileGroup>
			<telerik:RadTextTile ID="RadTextTile4" runat="server" Text="group 2, tile 1" BackColor="Blue"></telerik:RadTextTile>
			<telerik:RadTextTile ID="RadTextTile5" runat="server" Text="group 3, tile 2" BackColor="Yellow"></telerik:RadTextTile>
		</telerik:TileGroup>
	</Groups>
</telerik:RadTileList>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (!IsPostBack && Object.Equals(Session["TileListPersistenceKey"], null))
	{
		LoadButton.Enabled = false;
	}
}

protected void SaveButton_Click(object sender, EventArgs e)
{
	Session["TileListPersistenceKey"] = this.Session.SessionID;
	string fileId = Session["TileListPersistenceKey"].ToString();
	LoadButton.Enabled = true;
	//you should set the provider key according to your business logic (e.g., the user ID), this is a basic example
	RadPersistenceManager1.StorageProviderKey = fileId;

	//save the state
	RadPersistenceManager1.SaveState();
}

protected void LoadButton_Click(object sender, EventArgs e)
{
	string fileId = Session["TileListPersistenceKey"].ToString();
	RadPersistenceManager1.StorageProviderKey = fileId;

	//Load the state
	RadPersistenceManager1.LoadState();
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs)
	If Not IsPostBack AndAlso [Object].Equals(Session("TileListPersistenceKey"), Nothing) Then
		LoadButton.Enabled = False
	End If
End Sub

Protected Sub SaveButton_Click(sender As Object, e As EventArgs)
	Session("TileListPersistenceKey") = Me.Session.SessionID
	Dim fileId As String = Session("TileListPersistenceKey").ToString()
	LoadButton.Enabled = True
	'you should set the provider key according to your business logic (e.g., the user ID), this is a basic example
	RadPersistenceManager1.StorageProviderKey = fileId

	'save the state
	RadPersistenceManager1.SaveState()
End Sub

Protected Sub LoadButton_Click(sender As Object, e As EventArgs)
	Dim fileId As String = Session("TileListPersistenceKey").ToString()
	RadPersistenceManager1.StorageProviderKey = fileId

	'load the state
	RadPersistenceManager1.LoadState()
End Sub
````




# See Also

* [Live Demo: Persisting TileList Settings](https://demos.telerik.com/aspnet-ajax/tilelist/examples/application-scenarios/persisting-tilelist-settings/defaultcs.aspx)

* [Drag and Drop Tiles]({%slug tilelist/functionality/drag-and-drop%})
