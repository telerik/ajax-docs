---
title: Load On Demand
page_title: Load On Demand | RadListBox for ASP.NET AJAX Documentation
description: Load On Demand
slug: listbox/functionality/load-on-demand
tags: load,on,demand
published: True
position: 7
---

# Load On Demand

The following article demonstrates the different types of usage of the **LoadOnDemnad** mechanism with **RadListBox**.

## General Usage of the RadListBox' Load On Demand Mechanism.

1. Set the **EnableLoadOnDemand** property to **true**.

1. Set **Height** to RadListBox. If the **EnableLoadOnDemand** property is set to **true**, but there is no **Height** set, RadListBox will not utilize on demand loading.

1. Assign a data source to RadListBox, this can be done both from code-behind or declaratively.

The DataSource property needs to be set each and every time the server is hit. This is necessary, because when a request for the next portion of items is fired, the RadListBox needs to calculate the position of the scroll and acquire the corresponding set of items. They are not added to the Items collection and thus not allowing manipulating them on the server.

Here is short example of how RadListBox should be bound in a Load on Demand scenarios:

````ASPNET
<telerik:radlistbox runat="server" id="RadListBox1" height="200px" enableloadondemand="true" width="300px">
````

````C#	
protected void Page_Load(object sender, EventArgs e)
{
	RadListBox1.DataSource = GetData();
	if (!Page.IsPostBack)
	{
		RadListBox1.DataBind();
	}
}

private static int[] GetData()
{

	var itemsCount = 300;
	var arr = new int[itemsCount];

	for (var i = 0; i < itemsCount; i++)
	{
		arr[i] = i;
	}
	return arr;

}	
````
````VB.NET	
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	RadListBox1.DataSource = GetData()
	If Not Page.IsPostBack Then
		RadListBox1.DataBind()
	End If

End Sub

Private Shared Function GetData() As Integer()

	Dim itemsCount = 300
	Dim arr = New Integer(itemsCount - 1) {}

	For i As var = 0 To itemsCount - 1
		arr(i) = i
	Next
	Return arr

End Function
````

Another example, demonstrating binding to a declarative datasource. In this case there is no code behind code needed. One only need to set the DataSourceID and DataTextField property of RadListBox:

````ASPNET
<telerik:RadListBox RenderMode="Lightweight" runat="server" ID="RadListBox1" Height="200px" DataKeyField="ProductID"
	DataTextField="ProductName" DataValueField="ProductID"
	EnableLoadOnDemand="true" Width="300px" CheckBoxes="true" DataSourceID="SqlDataSource1">
</telerik:RadListBox>

<asp:SqlDataSource runat="server" ID="SqlDataSource1" 
	ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
	SelectCommand="SELECT [ProductID], [ProductName] FROM [Alphabetical list of products]">
</asp:SqlDataSource>				
````

On client-side, Load on demand is triggered in the following occasions:

1. Scroll using the mouse wheel - this fires LOD as items are being scrolled.

1. Scroll via moving the scrollbar - this fires LOD on mouse up, i.e. the items are going to be requested only after the user has finished scrolling.

>note RadListBox will load only the items that fit in the visible area.
>


Accessing item using the API :

>note You need to use the **GetItemAsync** method instead of **GetItem** 
>


* GetItemAsync accepts two parameters, the index of the item that you seek and a callback function in which the item will be provided. Example:

````JavaScript	    
<script type="text/javascript">
	function requestItem() {
		var listBox = $find("RadListBox1");
		var item = listBox.getItemAsync(60, function (item) { alert(item.get_text()); });
	}
</script>				
````

If the sought item is loaded, RadListBox will immediately pass it to the callback. If it is not, a request will be made to the server and upon retrieval the item will be passed as an argument to the provided callback.

>tip You could use RadLoadingPanel to display loading template between the AJAX requests. Just place a loading panel on the page and set the LoadingPanelID property of the ListBox to the RadLoadingPanel ones.
>


>note Load On Demand limitations:
>
1.Any server-side operations (Transfer,Reorder, SelectedIndexChanged) are not supported on the server.
1.Client-side Reordering is not supported in LOD scenarios.
1.Whereas transferring the selected items is possible, transfer all items is not supported since in LOD scenarios this would most likely cause the browser to halt.>


## Custom Implementation of Load On Demand Mechanism, Handling ItemsRequested Event.

The **ItemsRequested** event handler of the **RadListBox** could be use for achieving a custom implementation of the **LoadOnDemand** scenario. You could use the RadListBox' client-side method - **requestItems()**, in order to initiate the load-on-demand callback. The usage of the method will cause the **ItemsRequest** server event to fire, where you could handle the binding of the control. You could pass two parameters with the **requestItems()** method, in order to implement a custom binding of the RadListBox:

* **Index** - specifying the StartIndex, from which the datasource will be loaded.

* **Count** - specifying the ItemsPerRequest, which needs to be acquired from the underlying datasource.

In the example bellow, you could observe how a button in the **FooterTemplate** of the RadListBox is used, in order to load the underlying datasource in portions.

````ASPNET
<telerik:RadListBox RenderMode="Lightweight" runat="server"
	ID="RadListBox1"
	Height="200px"
	OnItemsRequested="RadListBox1_ItemsRequested"
	OnClientLoad="OnClientLoad"
	DataTextField="ShipName"
	DataValueField="OrderID">
	<FooterTemplate>
		<telerik:RadButton
			runat="server"
			Width="97%"
			Text="Load Next Portion"
			ID="Button"
			OnClientClicked="OnClientClicked"
			AutoPostBack="false">
		</telerik:RadButton>
	</FooterTemplate>
</telerik:RadListBox>
````

````JavaScript
<script type="text/javascript">
	function OnClientLoad(sender) {
		var listBox = sender;
		listBox.requestItems(listBox.get_items().get_count(), 10);
	}

	function OnClientClicked(sender, eventArgs) {
		var listBox = $find("RadListBox1");
		listBox.requestItems(listBox.get_items().get_count(), 10);
	}
</script>
````

````C#
protected void RadListBox1_ItemsRequested(object sender, RadListBoxItemsRequestedEventArgs e)
{
	SqlDataAdapter adapter = new SqlDataAdapter("SELECT TOP 40 [OrderID], [ShipName] FROM [Orders]",
		 ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString);

	DataTable data = new DataTable();
	adapter.Fill(data);

	int endOffset = Math.Min(e.StartIndex + e.Count, data.Rows.Count);

	for (int i = e.StartIndex; i < endOffset; i++)
	{
		RadListBox1.Items.Add(new RadListBoxItem(data.Rows[i]["ShipName"].ToString(), data.Rows[i]["OrderID"].ToString()));
	}
}
````
````VB
Protected Sub RadListBox1_ItemsRequested(sender As Object, e As RadListBoxItemsRequestedEventArgs)
	Dim adapter As New SqlDataAdapter("SELECT TOP 40 [OrderID], [ShipName] FROM [Orders]", ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString)

	Dim data As New DataTable()
	adapter.Fill(data)

	Dim endOffset As Integer = Math.Min(e.StartIndex + e.Count, data.Rows.Count)

	For i As Integer = e.StartIndex To endOffset - 1
		RadListBox1.Items.Add(New RadListBoxItem(data.Rows(i)("ShipName").ToString(), data.Rows(i)("OrderID").ToString()))
	Next
End Sub
````

# See Also

 * [Load On Demand Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/functionality/loadondemand/defaultcs.aspx)
