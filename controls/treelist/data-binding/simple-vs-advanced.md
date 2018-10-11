---
title: Simple vs Advanced
page_title: Simple vs Advanced | RadTreeList for ASP.NET AJAX Documentation
description: Simple vs Advanced
slug: treelist/data-binding/simple-vs-advanced
tags: simple,vs,advanced
published: True
position: 0
---

# Simple vs Advanced



## Advanced binding with NeedDataSource event handling

There are several approaches you can use to bind RadTreeList control. However in all of them youshould make sure that the **DataKeyNames** and **ParentDataKeyNames** properties for the TreeList control are set.

The key to the advanced data binding of Telerik RadTreeList is handling correctly the **NeedDataSource** event. That's why we choose this exact name. 'Need' in this caseactually means that if at an exact moment the data-source property does not point to a valid data-source object,the treelist will not behave correctly. This event fires in the following cases:

* Right after **OnLoad**, Telerik RadTreeList checks the ViewState for storedTreeList-related information. If such information is missing (when the page loads for the first time), the **NeedDataSource** event is fired. This also means that if the **EnableViewState** property of the controlhas been set to **false**,the treelist will bind **each time the page** loads (not only the first time)

* After expand/collapse

* When paging event occurs

* When **other operations requiring Rebind** occurs

The advantages of using this event are that the developer does not need to write any code handling thelogic about when and how the data-binding should be processed. It is still the developer's responsibility toconstruct properly a data source object and assign it to the RadTreeList's DataSource property. In the code ofthe **NeedDataSource** handler you should prepare the data source (list of objects) forthe RadTreeList and assign it to the treelist's **DataSource** property. Also you shouldset the **DataKeyNames** and **ParentDataKeyNames** properties forthe treelist control.

>tip  **You should never call the DataBind() method from inside the NeedDataSource handler or mix simpledata-binding mode with advanced data-binding.** 
>


Alternatively, you can use **AccessDataSource/SqlDataSource/ObjectDataSource/XmlDataSource**	controls to populate Telerik RadTreeList with data - this is another advanced data-binding mode of the control.	See the the rest of the examples in this section for more information.

## Simple binding

Simple data-binding with the **DataBind()** method can be used in simple scenarioswhich does not require complex operations. The correct approach when using simple data-binding is to call the **DataBind()** method on the first page load when **!Page.IsPostBack** and after handling some event (sortevent for example). Keep in mind that if you choose simple data-binding, you will need to assign datasourceand rebind the treelist after each operation (expanding/collapsing, paging, sorting, etc.)

## Example

The code snippets below illustrate direct comparison between the simple and advanced binding regime of RadTreeList:



````ASPNET
<telerik:RadTreeList RenderMode="Lightweight" runat="server" ID="RadTreeList1" AllowPaging="true" PageSize="3"
	DataKeyNames="EmployeeID" OnItemCommand="RadTreeList1_ItemCommand" OnPageIndexChanged="RadTreeList1_PageIndexChanged"
	ParentDataKeyNames="ReportsTo">
</telerik:RadTreeList>
<telerik:RadTreeList RenderMode="Lightweight" runat="server" ID="RadTreeList2" AllowPaging="true" PageSize="3"
	DataKeyNames="EmployeeID" ParentDataKeyNames="ReportsTo" OnNeedDataSource="RadTreeList2_NeedDataSource">
</telerik:RadTreeList>
````
````C#
public DataTable GetDataTable()
{
	String ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
	SqlConnection conn = new SqlConnection(ConnString);
	SqlDataAdapter adapter = new SqlDataAdapter();
	adapter.SelectCommand = new SqlCommand("SELECT EmployeeID, LastName, FirstName, Title, TitleOfCourtesy, ReportsTo FROM Employees", conn);
	DataTable myDataTable = new DataTable();
	conn.Open();
	try
	{
		adapter.Fill(myDataTable);
	}
	finally
	{
		conn.Close();
	}
	return myDataTable;
}
protected void Page_Load(object sender, EventArgs e)
{
	if (!IsPostBack)
	{
		RadTreeList1.DataSource = GetDataTable();
		RadTreeList1.DataBind();
	}
}
protected void RadTreeList1_ItemCommand(object sender, TreeListCommandEventArgs e)
{
	if (e.CommandName == RadTreeList.ExpandCollapseCommandName)
	{
		RadTreeList1.DataSource = GetDataTable();
		RadTreeList1.DataBind();
	}
}
protected void RadTreeList1_PageIndexChanged(object source, TreeListPageChangedEventArgs e)
{
	RadTreeList1.CurrentPageIndex = e.NewPageIndex;
	RadTreeList1.DataSource = GetDataTable();
	RadTreeList1.DataBind();
}
protected void RadTreeList2_NeedDataSource(object source, TreeListNeedDataSourceEventArgs e)
{
	RadTreeList2.DataSource = GetDataTable();
}  
````
````VB.NET
Public Function GetDataTable() As DataTable
	Dim ConnString As [String] = ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString
	Dim conn As New SqlConnection(ConnString)
	Dim adapter As New SqlDataAdapter()
	adapter.SelectCommand = New SqlCommand("SELECT EmployeeID, LastName, FirstName, Title, TitleOfCourtesy, ReportsTo FROM Employees", conn)
	Dim myDataTable As New DataTable()
	conn.Open()
	Try
		adapter.Fill(myDataTable)
	Finally
		conn.Close()
	End Try
	Return myDataTable
End Function
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	If Not IsPostBack Then
		RadTreeList1.DataSource = GetDataTable()
		RadTreeList1.DataBind()
	End If
End Sub
Protected Sub RadTreeList1_ItemCommand(ByVal sender As Object, ByVal e As TreeListCommandEventArgs)
	If e.CommandName = RadTreeList.ExpandCollapseCommandName Then
		RadTreeList1.DataSource = GetDataTable()
		RadTreeList1.DataBind()
	End If
End Sub
Protected Sub RadTreeList1_PageIndexChanged(ByVal source As Object, ByVal e As TreeListPageChangedEventArgs)
	RadTreeList1.CurrentPageIndex = e.NewPageIndex
	RadTreeList1.DataSource = GetDataTable()
	RadTreeList1.DataBind()
End Sub
Protected Sub RadTreeList2_NeedDataSource(ByVal source As Object, ByVal e As TreeListNeedDataSourceEventArgs)
	RadTreeList2.DataSource = GetDataTable()
End Sub
````

