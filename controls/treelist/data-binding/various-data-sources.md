---
title: Various Data Sources
page_title: Various Data Sources - RadTreeList
description: Check our Web Forms article about Various Data Sources.
slug: treelist/data-binding/various-data-sources
tags: various,data,sources
published: True
position: 3
---

# Various Data Sources



## 

You can use a wide variety of data-sources for RadTreeList structure generation. A requirement isthat these custom objects implement the **ITypedList**/**IEnumarable** /**ICustomTypeDescriptor** interfaces and representing self-hierarchical data. Rememberto set the **DataKeyNames** and **ParentDataKeyNames** propertiesof the RadTreeList controls. Also note that the type of the fields used for DataKeyNames and ParentDatakeyNamesshould be the same.

The code in the next paragraph demonstrates how to:

* use **List** of custom objects with **Nullable** properties

* bind the RadTreeList to list of custom objects (Generic list)

* bind RadTreeList to a **DataReader**



````C#
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" />
<b>Binding RadTreeList to:</b>
<h3>List of custom objects with <b>Nullable</b> properties</h3>
<telerik:RadAjaxPanel ID="RadAjaxPanel1" LoadingPanelID="RadAjaxLoadingPanel1" runat="server">
	<telerik:RadTreeList RenderMode="Lightweight" runat="server" ID="RadTreeList1" DataKeyNames="ID" ParentDataKeyNames="PID"
		OnNeedDataSource="RadTreeList1_NeedDataSource" AutoGenerateColumns="false">
		<Columns>
			<telerik:TreeListBoundColumn DataField="Text" HeaderText="Text" UniqueName="Text">
			</telerik:TreeListBoundColumn>
			<telerik:TreeListBoundColumn DataField="ID" HeaderText="ID" UniqueName="ID">
			</telerik:TreeListBoundColumn>
			<telerik:TreeListBoundColumn DataField="PID" HeaderText="PID" UniqueName="PID">
			</telerik:TreeListBoundColumn>
		</Columns>
	</telerik:RadTreeList>
</telerik:RadAjaxPanel>
<h3>Generic list</h3>
<telerik:RadAjaxPanel ID="RadAjaxPanel2" LoadingPanelID="RadAjaxLoadingPanel1" runat="server">
	<telerik:RadTreeList RenderMode="Lightweight" runat="server" ID="RadTreeList2" DataKeyNames="ID" ParentDataKeyNames="ParentID"
		OnNeedDataSource="RadTreeList2_NeedDataSource" AutoGenerateColumns="false">
		<Columns>
			<telerik:TreeListBoundColumn DataField="Title" HeaderText="Title" UniqueName="Title">
				<HeaderStyle Width="200px" />
			</telerik:TreeListBoundColumn>
			<telerik:TreeListBoundColumn DataField="Description" HeaderText="Description" UniqueName="Description">
			</telerik:TreeListBoundColumn>
		</Columns>
	</telerik:RadTreeList>
</telerik:RadAjaxPanel>
<h3>DataReader</h3>
<telerik:RadAjaxPanel ID="RadAjaxPanel3" LoadingPanelID="RadAjaxLoadingPanel1" runat="server">
	<telerik:RadTreeList RenderMode="Lightweight" runat="server" ID="RadTreeList3" DataKeyNames="EmployeeID" ParentDataKeyNames="ReportsTo"
		OnNeedDataSource="RadTreeList3_NeedDataSource" OnDataBound="RadTreeList3_DataBound">
	</telerik:RadTreeList>
</telerik:RadAjaxPanel>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" />
````
````VB.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" />
<b>Binding RadTreeList to:</b>
<h3>List of custom objects with <b>Nullable</b> properties</h3>
<telerik:RadAjaxPanel ID="RadAjaxPanel1" LoadingPanelID="RadAjaxLoadingPanel1" runat="server">
	<telerik:RadTreeList RenderMode="Lightweight" runat="server" ID="RadTreeList1" DataKeyNames="ID" ParentDataKeyNames="PID"
		AutoGenerateColumns="false">
		<Columns>
			<telerik:TreeListBoundColumn DataField="Text" HeaderText="Text" UniqueName="Text">
			</telerik:TreeListBoundColumn>
			<telerik:TreeListBoundColumn DataField="ID" HeaderText="ID" UniqueName="ID">
			</telerik:TreeListBoundColumn>
			<telerik:TreeListBoundColumn DataField="PID" HeaderText="PID" UniqueName="PID">
			</telerik:TreeListBoundColumn>
		</Columns>
	</telerik:RadTreeList>
</telerik:RadAjaxPanel>
<h3>Generic list</h3>
<telerik:RadAjaxPanel ID="RadAjaxPanel2" LoadingPanelID="RadAjaxLoadingPanel1" runat="server">
	<telerik:RadTreeList RenderMode="Lightweight" runat="server" ID="RadTreeList2" DataKeyNames="ID" ParentDataKeyNames="ParentID"
		AutoGenerateColumns="false">
		<Columns>
			<telerik:TreeListBoundColumn DataField="Title" HeaderText="Title" UniqueName="Title">
				<HeaderStyle Width="200px" />
			</telerik:TreeListBoundColumn>
			<telerik:TreeListBoundColumn DataField="Description" HeaderText="Description" UniqueName="Description">
			</telerik:TreeListBoundColumn>
		</Columns>
	</telerik:RadTreeList>
</telerik:RadAjaxPanel>
<h3>DataReader</h3>
<telerik:RadAjaxPanel ID="RadAjaxPanel3" LoadingPanelID="RadAjaxLoadingPanel1" runat="server">
	<telerik:RadTreeList RenderMode="Lightweight" runat="server" ID="RadTreeList3" DataKeyNames="EmployeeID" ParentDataKeyNames="ReportsTo"
		AutoGenerateColumns="false">
		<Columns>
			<telerik:TreeListBoundColumn DataField="LastName" HeaderText="Last Name" UniqueName="LastName">
			</telerik:TreeListBoundColumn>
			<telerik:TreeListBoundColumn DataField="FirstName" HeaderText="First Name" UniqueName="FirstName">
			</telerik:TreeListBoundColumn>
			<telerik:TreeListBoundColumn DataField="Title" HeaderText="Title" UniqueName="Title">
			</telerik:TreeListBoundColumn>
			<telerik:TreeListBoundColumn DataField="TitleOfCourtesy" HeaderText="TitleOfCourtesy"
				UniqueName="TitleOfCourtesy">
			</telerik:TreeListBoundColumn>
		</Columns>
	</telerik:RadTreeList>
</telerik:RadAjaxPanel>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" />
````




````C#
protected void RadTreeList1_NeedDataSource(object sender, TreeListNeedDataSourceEventArgs e)
{
	ArrayList list = new ArrayList();
	list.Add(new TestListItem(1, "Item 1", 2));
	list.Add(new TestListItem(2, "Item 2", null));
	list.Add(new TestListItem(3, "Item 3", 2));
	list.Add(new TestListItem(4, "Item 4", 5));
	list.Add(new TestListItem(5, "Item 5", null));
	list.Add(new TestListItem(6, "Item 6", 2));
	list.Add(new TestListItem(7, "Item 7", 5));
	list.Add(new TestListItem(8, "Item 8", 3));
	list.Add(new TestListItem(9, "Item 9", 3));
	list.Add(new TestListItem(10, "Item 10", 3));
	RadTreeList1.DataSource = list;
}
protected void RadTreeList2_NeedDataSource(object sender, TreeListNeedDataSourceEventArgs e)
{
	RadTreeList2.DataSource = MyDataClass.GetData();
}
SqlConnection conn = null;
SqlDataReader reader = null;
protected void RadTreeList3_NeedDataSource(object sender, TreeListNeedDataSourceEventArgs e)
{
	String ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
	conn = new SqlConnection(ConnString);
	conn.Open();
	SqlCommand cmd = new SqlCommand("SELECT EmployeeID, LastName, FirstName, Title, TitleOfCourtesy, ReportsTo FROM Employees", conn);
	reader = cmd.ExecuteReader();
	RadTreeList3.DataSource = reader;
}
protected void RadTreeList3_DataBound(object sender, EventArgs e)
{
	reader.Close();
	conn.Close();
}
public class MyDataClass
{
	public static List<Item> GetData()
	{
		List<Item> data = new List<Item>();
		data.Add(new Item(1, "RadControls for ASP.NET Ajax", "Telerik RadControls for ASP.NET AJAX includes more than 70 controls with proven reliability that help you build high-quality, professional line of business web applications.", 0));
		data.Add(new Item(2, "RadControls for Silverlight", "RadControls are built on Microsoft Silverlight and include 40+ UI controls for building rich line-of-business Silverlight applications.", 0));
		data.Add(new Item(3, "RadGrid", "Codeless databinding, rich client-side operations, and a myriad of features topped with unbeatable performance is what defines the Telerik RadGrid for ASP.NET AJAX.", 1));
		data.Add(new Item(4, "RadEditor", "RadEditor is not simply an HTML Editor. It is what Microsoft chose to use in MSDN, CodePlex, TechNet, MCMS and even as an alternative to the default editor in SharePoint.", 1));
		data.Add(new Item(5, "RadScheduler", "With RadScheduler you can add rich scheduling UI to any ASP.NET application and enjoy a lightweight, yet highly customizable, component.", 1));
		data.Add(new Item(6, "RadGridView", "RadGridView is the ultimate Silverlight grid control that features unrivalled performance through LINQ-based data engine, remarkably flexible hierarchy model, advanced features such as Excel-like filtering, row details, totals, export to Word/Excel/CSV and many more.", 2));
		data.Add(new Item(7, "RadMenu", "Have you confronted the challenge to have to build a very complicated custom site menu system, while still keeping it simple for the end user? With RadMenu for Silverlight you will easily solve this puzzle.", 2));
		data.Add(new Item(8, "RadGauge", "If you are building business dashboards or you just need graphical indicators, you will find the new RadGauge control indispensable. ", 2));
		return data;
	}
}
public class Item
{
	public int ID { get; set; }
	public string Title { get; set; }
	public string Description { get; set; }
	public int ParentID { get; set; }
	public Item(int id, string title, string description, int parentID)
	{
		ID = id;
		Title = title;
		Description = description;
		ParentID = parentID;
	}
}
public class TestListItem
{
	public int? ID { get; set; }
	public int? PID { get; set; }
	public string Text { get; set; }
	public TestListItem(int? id, string text, int? pid)
	{
		ID = id;
		Text = text;
		PID = pid;
	}
}  
````
````VB.NET
Protected Sub RadTreeList1_NeedDataSource(ByVal sender As Object, ByVal e As TreeListNeedDataSourceEventArgs) Handles RadTreeList1.NeedDataSource
	Dim list As New ArrayList()
	list.Add(New TestListItem(1, "Item 1", 2))
	list.Add(New TestListItem(2, "Item 2", Nothing))
	list.Add(New TestListItem(3, "Item 3", 2))
	list.Add(New TestListItem(4, "Item 4", 5))
	list.Add(New TestListItem(5, "Item 5", Nothing))
	list.Add(New TestListItem(6, "Item 6", 2))
	list.Add(New TestListItem(7, "Item 7", 5))
	list.Add(New TestListItem(8, "Item 8", 3))
	list.Add(New TestListItem(9, "Item 9", 3))
	list.Add(New TestListItem(10, "Item 10", 3))
	RadTreeList1.DataSource = list
End Sub
Protected Sub RadTreeList2_NeedDataSource(ByVal source As Object, ByVal e As TreeListNeedDataSourceEventArgs) Handles RadTreeList2.NeedDataSource
	RadTreeList2.DataSource = MyDataClass.GetData()
End Sub
Private conn As SqlConnection = Nothing
Private reader As SqlDataReader = Nothing
Protected Sub RadTreeList3_NeedDataSource(ByVal source As Object, ByVal e As TreeListNeedDataSourceEventArgs) Handles RadTreeList3.NeedDataSource
	Dim ConnString As [String] = ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString
	conn = New SqlConnection(ConnString)
	conn.Open()
	Dim cmd As New SqlCommand("SELECT EmployeeID, LastName, FirstName, Title, TitleOfCourtesy, ReportsTo FROM Employees", conn)
	reader = cmd.ExecuteReader()
	RadTreeList3.DataSource = reader
End Sub
Protected Sub RadTreeList3_DataBound(ByVal sender As Object, ByVal e As EventArgs) Handles RadTreeList3.DataBound
	reader.Close()
	conn.Close()
End Sub
Public Class MyDataClass
	Public Shared Function GetData() As List(Of Item)
		Dim data As New List(Of Item)()
		data.Add(New Item(1, "RadControls for ASP.NET Ajax", "Telerik RadControls for ASP.NET AJAX includes more than 70 controls with proven reliability that help you build high-quality, professional line of business web applications.", 0))
		data.Add(New Item(2, "RadControls for Silverlight", "RadControls are built on Microsoft Silverlight and include 40+ UI controls for building rich line-of-business Silverlight applications.", 0))
		data.Add(New Item(3, "RadGrid", "Codeless databinding, rich client-side operations, and a myriad of features topped with unbeatable performance is what defines the Telerik RadGrid for ASP.NET AJAX.", 1))
		data.Add(New Item(4, "RadEditor", "RadEditor is not simply an HTML Editor. It is what Microsoft chose to use in MSDN, CodePlex, TechNet, MCMS and even as an alternative to the default editor in SharePoint.", 1))
		data.Add(New Item(5, "RadScheduler", "With RadScheduler you can add rich scheduling UI to any ASP.NET application and enjoy a lightweight, yet highly customizable, component.", 1))
		data.Add(New Item(6, "RadGridView", "RadGridView is the ultimate Silverlight grid control that features unrivalled performance through LINQ-based data engine, remarkably flexible hierarchy model, advanced features such as Excel-like filtering, row details, totals, export to Word/Excel/CSV and many more.", 2))
		data.Add(New Item(7, "RadMenu", "Have you confronted the challenge to have to build a very complicated custom site menu system, while still keeping it simple for the end user? With RadMenu for Silverlight you will easily solve this puzzle.", 2))
		data.Add(New Item(8, "RadGauge", "If you are building business dashboards or you just need graphical indicators, you will find the new RadGauge control indispensable. ", 2))
		Return data
	End Function
End Class
Public Class Item
	Public Property ID() As Integer
		Get
			Return m_ID
		End Get
		Set(ByVal value As Integer)
			m_ID = value
		End Set
	End Property
	Private m_ID As Integer
	Public Property Title() As String
		Get
			Return m_Title
		End Get
		Set(ByVal value As String)
			m_Title = value
		End Set
	End Property
	Private m_Title As String
	Public Property Description() As String
		Get
			Return m_Description
		End Get
		Set(ByVal value As String)
			m_Description = value
		End Set
	End Property
	Private m_Description As String
	Public Property ParentID() As Integer
		Get
			Return m_ParentID
		End Get
		Set(ByVal value As Integer)
			m_ParentID = value
		End Set
	End Property
	Private m_ParentID As Integer
	Public Sub New(ByVal id**1 As Integer, ByVal title**2 As String, ByVal description**3 As String, ByVal parentID**4 As Integer)
		ID = id**1
		Title = title**2
		Description = description**3
		ParentID = parentID**4
	End Sub
End Class
Public Class TestListItem
	Public Property ID() As System.Nullable(Of Integer)
		Get
			Return m_ID
		End Get
		Set(ByVal value As System.Nullable(Of Integer))
			m_ID = value
		End Set
	End Property
	Private m_ID As System.Nullable(Of Integer)
	Public Property PID() As System.Nullable(Of Integer)
		Get
			Return m_PID
		End Get
		Set(ByVal value As System.Nullable(Of Integer))
			m_PID = value
		End Set
	End Property
	Private m_PID As System.Nullable(Of Integer)
	Public Property Text() As String
		Get
			Return m_Text
		End Get
		Set(ByVal value As String)
			m_Text = value
		End Set
	End Property
	Private m_Text As String
	Public Sub New(ByVal id**1 As System.Nullable(Of Integer), ByVal text**2 As String, ByVal pid**3 As System.Nullable(Of Integer))
		ID = id**1
		Text = text**2
		PID = pid**3
	End Sub
End Class
````

