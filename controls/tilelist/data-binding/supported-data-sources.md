---
title: Supported Data Sources
page_title: Supported Data Sources | UI for ASP.NET AJAX Documentation
description: Supported Data Sources
slug: tilelist/data-binding/supported-data-sources
tags: supported,data,sources
published: True
position: 2
---

# Supported Data Sources



The datasource __RadTileList__ can use is an __IEnumerable__ collection.	This includes:

* Declarative ASP datasources (SqlDatasource, ObjectDataSource, LinqDataSource, RadClientDataSource etc.)

* DataTable

* List<> of custom objects

In order to preselect the structure of the control follow the information from the [Defining Structure help article]({%slug tilelist/data-binding/defining-structure%}).

## Declarative Datasource

The declarative DataSource controls in ASP can return the needed collection type. In order to use them, the __DataSourceID__property of the __RadTileList__ must be set to the __ID__ of the __declarative datasource control__.

Here is a simple example with an SqlDataSource:

````C#
		<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
			ProviderName="System.Data.SqlClient" SelectCommand="SELECT TOP(12) [ProductID], [ProductName], [UnitPrice] FROM [Products] WHERE ([CategoryID] = @CategoryID)">
			<SelectParameters>
				<asp:Parameter DefaultValue="8" Name="CategoryID" Type="Int32"></asp:Parameter>
			</SelectParameters>
		</asp:SqlDataSource>
		<telerik:RadTileList runat="server" DataSourceID="SqlDataSource1" ID="RadTileList1" Width="634px" TileRows="3"
			ScrollingMode="None" SelectionMode="Multiple" AutoPostBack="false">
			<DataBindings>
				<CommonTileBinding TileType="RadImageTile" DataTitleTextField="UnitPrice" DataNameField="ProductName" />
			</DataBindings>
		</telerik:RadTileList>
````



Once the SELECT statement is in place the control automatically receives the result from the query.

When __RadClientDataSource__ control is used for client-side data binding, the __ID__ of the control is set with the	TileList's __ClientDataSourceID__ property.

Here is a simple example with a __RadClientDataSource__:

````C#
		<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1">
	          <ClientEvents OnDataRequested="OnDataRequested" />
	          <DataSource>
	               <WebServiceDataSourceSettings ServiceType="OData">
	                    <Select Url="http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products" DataType="JSONP" />
	               </WebServiceDataSourceSettings>
	          </DataSource>
	     </telerik:RadClientDataSource>
		<telerik:RadTileList runat="server" ID="RadTileList1" Width="1015px" Height="500px"
	          ClientDataSourceID="RadClientDataSource1">
	          <DataBindings>
	               <CommonTileBinding DataNameField="ProductName" DataGroupNameField="CategoryID" 
					   DataBadgeValueField="UnitsInStock" TileType="RadImageTile" />
	          </DataBindings>
	     </telerik:RadTileList>
````



## Programmatic Datasources

In order to set a datasource from the __code-behind__ to the __RadTileList__ its __DataSource__property must be used and then its __DataBind()__ method must be called.

Here follow several examples.

### DataTable

This example will generate a simple DataTable with code so that its structure is clearly visible and easy to follow. Run the code to see how it behaves.

````C#
		<telerik:RadTileList runat="server" ID="RadTileList2">
			<DataBindings>
				<CommonTileBinding DataGroupNameField="GroupNameColumn" TileType="RadTextTile" Shape="Square" />
				<TextTileBinding DataTextField="TextColumn" />
			</DataBindings>
		</telerik:RadTileList>
````



>tabbedCode

````C#
		protected void Page_Load(object sender, EventArgs e)
		{
			if(!Page.IsPostBack)
			{
				RadTileList1.DataSource = GetDummyData();
				RadTileList1.DataBind();
			}
		}
	
		protected DataTable GetDummyData()
		{
			DataTable tbl = new DataTable();
			tbl.Columns.Add(new DataColumn("GroupNameColumn"));
			tbl.Columns.Add(new DataColumn("TextColumn"));
			//Note the order in which the group names are met
			tbl.Rows.Add(new object[] { "GroupOne", "GroupOne, Tile One" });
			tbl.Rows.Add(new object[] { "GroupOne", "GroupOne, Tile Two" });
			tbl.Rows.Add(new object[] { "GroupTwo", "GroupTwo, Tile One" });
			tbl.Rows.Add(new object[] { "GroupTwo", "GroupTwo, Tile Two" });
			tbl.Rows.Add(new object[] { "GroupThree", "GroupThree, Tile One" });
			tbl.Rows.Add(new object[] { "GroupThree", "GroupThree, Tile Two" });
			return tbl;
		}
	
````



````VB.NET
		Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
			If Not Page.IsPostBack Then
				RadTileList1.DataSource = GetDummyData()
				RadTileList1.DataBind()
			End If
		End Sub
	
		Protected Function GetDummyData() As DataTable
			Dim tbl As New DataTable()
			tbl.Columns.Add(New DataColumn("GroupNameColumn"))
			tbl.Columns.Add(New DataColumn("TextColumn"))
			'Note the order in which the group names are met
			tbl.Rows.Add(New Object() {"GroupOne", "GroupOne, Tile One"})
			tbl.Rows.Add(New Object() {"GroupOne", "GroupOne, Tile Two"})
			tbl.Rows.Add(New Object() {"GroupTwo", "GroupTwo, Tile One"})
			tbl.Rows.Add(New Object() {"GroupTwo", "GroupTwo, Tile Two"})
			tbl.Rows.Add(New Object() {"GroupThree", "GroupThree, Tile One"})
			tbl.Rows.Add(New Object() {"GroupThree", "GroupThree, Tile Two"})
			Return tbl
		End Function
	#End Region
	
	
	#Region "tilelist-databinding-supportedDatasources-programmatic-List-vb-2"
		Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
			If Not Page.IsPostBack Then
				Dim sampleData As New List(Of TileDataMocking)()
				sampleData.Add(New TileDataMocking("http://www.telerik.com/", "Learn more about Telerik"))
				sampleData.Add(New TileDataMocking("http://www.sitefinity.com/", "Explore Sitefinity"))
				sampleData.Add(New TileDataMocking("http://www.icenium.com/", "Discover Icenium"))
				RadTileList2.DataSource = sampleData
				RadTileList2.DataBind()
			End If
		End Sub
	
		Public Class TileDataMocking
			Public Sub New(tileUrls As String, tileTexts As String)
				_TileUrls = tileUrls
				_TileTexts = tileTexts
			End Sub
			Private _TileUrls As String
			Public Property TileUrls() As String
				Get
					Return _TileUrls
				End Get
				Set(value As String)
					_TileUrls = value
				End Set
			End Property
			Private _TileTexts As String
			Public Property TileTexts() As String
				Get
					Return _TileTexts
				End Get
				Set(value As String)
					_TileTexts = value
				End Set
			End Property
		End Class
	#End Region
	
	End Class


>end

### List of custom objects

This example will use a custom class and create a short List with its instances that will be passed to the RadTileList. The names of the fields in thecustom class are used for the databinding properties of the TileList.

````C#
		<telerik:RadTileList runat="server" ID="RadTileList2">
			<DataBindings>
				<CommonTileBinding TileType="RadTextTile" Shape="Wide" DataNavigateUrlField="TileUrls" Target="_blank" />
				<TextTileBinding DataTextField="TileTexts" />
			</DataBindings>
		</telerik:RadTileList>
````



>tabbedCode

````C#
		protected void Page_Load(object sender, EventArgs e)
		{
			if (!Page.IsPostBack)
			{
				List<TileDataMocking> sampleData = new List<TileDataMocking>();
				sampleData.Add(new TileDataMocking("http://www.telerik.com/", "Learn more about Telerik"));
				sampleData.Add(new TileDataMocking("http://www.sitefinity.com/", "Explore Sitefinity"));
				sampleData.Add(new TileDataMocking("http://www.icenium.com/", "Discover Icenium"));
				RadTileList2.DataSource = sampleData;
				RadTileList2.DataBind();
			}
		}
	
		public class TileDataMocking
		{
			public TileDataMocking(string tileUrls, string tileTexts)
			{
				_TileUrls = tileUrls;
				_TileTexts = tileTexts;
			}
			private string _TileUrls;
			public string TileUrls
			{
				get { return _TileUrls; }
				set { _TileUrls = value; }
			}
			private string _TileTexts;
			public string TileTexts
			{
				get { return _TileTexts; }
				set { _TileTexts = value; }
			}
		}
````



````VB.NET
		Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
			If Not Page.IsPostBack Then
				Dim sampleData As New List(Of TileDataMocking)()
				sampleData.Add(New TileDataMocking("http://www.telerik.com/", "Learn more about Telerik"))
				sampleData.Add(New TileDataMocking("http://www.sitefinity.com/", "Explore Sitefinity"))
				sampleData.Add(New TileDataMocking("http://www.icenium.com/", "Discover Icenium"))
				RadTileList2.DataSource = sampleData
				RadTileList2.DataBind()
			End If
		End Sub
	
		Public Class TileDataMocking
			Public Sub New(tileUrls As String, tileTexts As String)
				_TileUrls = tileUrls
				_TileTexts = tileTexts
			End Sub
			Private _TileUrls As String
			Public Property TileUrls() As String
				Get
					Return _TileUrls
				End Get
				Set(value As String)
					_TileUrls = value
				End Set
			End Property
			Private _TileTexts As String
			Public Property TileTexts() As String
				Get
					Return _TileTexts
				End Get
				Set(value As String)
					_TileTexts = value
				End Set
			End Property
		End Class
	#End Region
	
	End Class


>end

# See Also

 * [Defining Structure]({%slug tilelist/data-binding/defining-structure%})

 * [Overview]({%slug tilelist/data-binding/overview%})
