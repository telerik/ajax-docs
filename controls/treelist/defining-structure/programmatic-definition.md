---
title: Programmatic Definition
page_title: Programmatic Definition | RadTreeList for ASP.NET AJAX Documentation
description: Programmatic Definition
slug: treelist/defining-structure/programmatic-definition
tags: programmatic,definition
published: True
position: 1
---

# Programmatic Definition



There are many cases when you need to create the **RadTreeList** control dynamically. In some scenarios you might want to declare it statically on the page and configure it with server-side code or build it entirely in code-behind. Both cases have some requirements that you should follow:

* **Create the RadTreeList entirely in code-behind** - here you should place all the code in the **Page_Init** event handler. Note that the columns have to be added to the Columns collection after their properties are set.This approach for creating the TreeList should be used when *creating TreeListTemplateColumns dynamically* (as well as any other templates).

* **Add the RadTreeList declaration statically in the page mark-up and configure itserver-side** - configuration is to be done in the **Page_Load** event handler and only on initial load (with Not IsPostBack condition) to avoid adding the same structure twice. In contrast to the scenario above, columns have to be added to the Columns collection before their properties are set.

The samples bellow illustrate both approaches:

## Create the RadTreeList entirely in code-behind on Page_Init



````ASPNET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" />
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<AjaxSettings>
		<telerik:AjaxSetting AjaxControlID="PlaceHolder1">
			<UpdatedControls>
				<telerik:AjaxUpdatedControl ControlID="PlaceHolder1" LoadingPanelID="RadAjaxLoadingPanel1" />
			</UpdatedControls>
		</telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<h3>RadTreeList created entirely in code-behind on Page_Init</h3>
<asp:PlaceHolder ID="PlaceHolder1" runat="server" />
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	SelectCommand="SELECT [ReportsTo], [EmployeeID], [LastName], [FirstName], [HireDate], [City], [PostalCode], [Country] FROM [Employees]" />
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" />
````
````C#
protected void Page_Init(object sender, EventArgs e)
{
	RadTreeList treeList = new RadTreeList(); 
	treeList.ID = "RadTreeList1"; 
	treeList.DataKeyNames = new string[] { "EmployeeID" }; 
	treeList.ParentDataKeyNames = new string[] { "ReportsTo" }; 
	treeList.DataSourceID = "SqlDataSource1"; 
	treeList.AutoGenerateColumns = false; 
	treeList.AllowPaging = true; 
	treeList.PageSize = 7;

	TreeListBoundColumn boundColumn = new TreeListBoundColumn(); 
	boundColumn.DataField = "EmployeeID"; 
	boundColumn.UniqueName = "EmployeeID"; 
	boundColumn.HeaderText = "EmployeeID"; 
	treeList.Columns.Add(boundColumn); 

	boundColumn = new TreeListBoundColumn(); 
	boundColumn.DataField = "LastName"; 
	boundColumn.UniqueName = "LastName"; 
	boundColumn.HeaderText = "Last Name"; 
	treeList.Columns.Add(boundColumn); 
	
	boundColumn = new TreeListBoundColumn(); 
	boundColumn.DataField = "FirstName"; 
	boundColumn.UniqueName = "FirstName";
	boundColumn.HeaderText = "First Name"; 
	treeList.Columns.Add(boundColumn); 
	
	boundColumn = new TreeListBoundColumn(); 
	boundColumn.DataField = "HireDate"; 
	boundColumn.UniqueName = "HireDate"; 
	boundColumn.HeaderText = "Hire Date"; 
	boundColumn.DataFormatString = "{0:dd/MM/yyyy}"; 
	boundColumn.DataType = typeof(DateTime); 
	treeList.Columns.Add(boundColumn); 
	
	boundColumn = new TreeListBoundColumn(); 
	boundColumn.DataField = "City"; 
	boundColumn.UniqueName = "City"; 
	boundColumn.HeaderText = "City"; 
	treeList.Columns.Add(boundColumn); 
	
	boundColumn = new TreeListBoundColumn(); 
	boundColumn.DataField = "PostalCode"; 
	boundColumn.UniqueName = "PostalCode"; 
	boundColumn.HeaderText = "Postal Code"; 
	treeList.Columns.Add(boundColumn); 
	
	boundColumn = new TreeListBoundColumn(); 
	boundColumn.DataField = "Country"; 
	boundColumn.UniqueName = "Country"; 
	boundColumn.HeaderText = "Country"; 
	treeList.Columns.Add(boundColumn); 
	
	boundColumn = new TreeListBoundColumn(); 
	boundColumn.DataField = "ReportsTo"; 
	boundColumn.UniqueName = "ReportsTo"; 
	boundColumn.HeaderText = "Reports To"; 
	treeList.Columns.Add(boundColumn);

	PlaceHolder1.Controls.Add(treeList);
}			
````
````VB.NET
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Init
	Dim treeList As New RadTreeList()
	treeList.ID = "RadTreeList1"
	treeList.DataKeyNames = New String() {"EmployeeID"}
	treeList.ParentDataKeyNames = New String() {"ReportsTo"}
	treeList.DataSourceID = "SqlDataSource1"
	treeList.AutoGenerateColumns = False
	treeList.AllowPaging = True
	treeList.PageSize = 7

	Dim boundColumn As New TreeListBoundColumn()
	boundColumn.DataField = "EmployeeID"
	boundColumn.UniqueName = "EmployeeID"
	boundColumn.HeaderText = "EmployeeID"
	treeList.Columns.Add(boundColumn)

	boundColumn = New TreeListBoundColumn()
	boundColumn.DataField = "LastName"
	boundColumn.UniqueName = "LastName"
	boundColumn.HeaderText = "Last Name"
	treeList.Columns.Add(boundColumn)

	boundColumn = New TreeListBoundColumn()
	boundColumn.DataField = "FirstName"
	boundColumn.UniqueName = "FirstName"
	boundColumn.HeaderText = "First Name"
	treeList.Columns.Add(boundColumn)

	boundColumn = New TreeListBoundColumn()
	boundColumn.DataField = "HireDate"
	boundColumn.UniqueName = "HireDate"
	boundColumn.HeaderText = "Hire Date"
	boundColumn.DataFormatString = "{0:dd/MM/yyyy}"
	boundColumn.DataType = GetType(DateTime)
	treeList.Columns.Add(boundColumn)

	boundColumn = New TreeListBoundColumn()
	boundColumn.DataField = "City"
	boundColumn.UniqueName = "City"
	boundColumn.HeaderText = "City"
	treeList.Columns.Add(boundColumn)

	boundColumn = New TreeListBoundColumn()
	boundColumn.DataField = "PostalCode"
	boundColumn.UniqueName = "PostalCode"
	boundColumn.HeaderText = "Postal Code"
	treeList.Columns.Add(boundColumn)

	boundColumn = New TreeListBoundColumn()
	boundColumn.DataField = "Country"
	boundColumn.UniqueName = "Country"
	boundColumn.HeaderText = "Country"
	treeList.Columns.Add(boundColumn)

	boundColumn = New TreeListBoundColumn()
	boundColumn.DataField = "ReportsTo"
	boundColumn.UniqueName = "ReportsTo"
	boundColumn.HeaderText = "Reports To"
	treeList.Columns.Add(boundColumn)

	PlaceHolder1.Controls.Add(treeList)
End Sub
````


## Statically declared RadTreeList and configured on Page_Load



````ASPNET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" />    
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<AjaxSettings>
		<telerik:AjaxSetting AjaxControlID="RadTreeList2">
			<UpdatedControls>
				<telerik:AjaxUpdatedControl ControlID="RadTreeList2" LoadingPanelID="RadAjaxLoadingPanel1" />
			</UpdatedControls>
		</telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<h3>RadTreeList decalared statically with structure defined on Page_Load</h3>
<telerik:RadTreeList ID="RadTreeList2" runat="server">
</telerik:RadTreeList>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	SelectCommand="SELECT [ReportsTo], [EmployeeID], [LastName], [FirstName], [HireDate], [City], [PostalCode], [Country] FROM [Employees]" />
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" />
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (!IsPostBack)
	{
		RadTreeList2.DataKeyNames = new string[] { "EmployeeID" };
		RadTreeList2.ParentDataKeyNames = new string[] { "ReportsTo" };
		RadTreeList2.DataSourceID = "SqlDataSource1";
		RadTreeList2.AutoGenerateColumns = false;
		RadTreeList2.AllowPaging = true;
		RadTreeList2.PageSize = 7;

		TreeListBoundColumn boundColumn = new TreeListBoundColumn();
		RadTreeList2.Columns.Add(boundColumn);
		boundColumn.DataField = "EmployeeID";
		boundColumn.UniqueName = "EmployeeID";
		boundColumn.HeaderText = "EmployeeID";

		boundColumn = new TreeListBoundColumn();
		RadTreeList2.Columns.Add(boundColumn);
		boundColumn.DataField = "LastName";
		boundColumn.UniqueName = "LastName";
		boundColumn.HeaderText = "Last Name";

		boundColumn = new TreeListBoundColumn();
		RadTreeList2.Columns.Add(boundColumn);
		boundColumn.DataField = "FirstName";
		boundColumn.UniqueName = "FirstName";
		boundColumn.HeaderText = "First Name";

		boundColumn = new TreeListBoundColumn();
		RadTreeList2.Columns.Add(boundColumn);
		boundColumn.DataField = "HireDate";
		boundColumn.UniqueName = "HireDate";
		boundColumn.HeaderText = "Hire Date";
		boundColumn.DataFormatString = "{0:dd/MM/yyyy}";
		boundColumn.DataType = typeof(DateTime);

		boundColumn = new TreeListBoundColumn();
		RadTreeList2.Columns.Add(boundColumn);
		boundColumn.DataField = "City";
		boundColumn.UniqueName = "City";
		boundColumn.HeaderText = "City";

		boundColumn = new TreeListBoundColumn();
		RadTreeList2.Columns.Add(boundColumn);
		boundColumn.DataField = "PostalCode";
		boundColumn.UniqueName = "PostalCode";
		boundColumn.HeaderText = "Postal Code";

		boundColumn = new TreeListBoundColumn();
		RadTreeList2.Columns.Add(boundColumn);
		boundColumn.DataField = "Country";
		boundColumn.UniqueName = "Country";
		boundColumn.HeaderText = "Country";

		boundColumn = new TreeListBoundColumn();
		RadTreeList2.Columns.Add(boundColumn);
		boundColumn.DataField = "ReportsTo";
		boundColumn.UniqueName = "ReportsTo";
		boundColumn.HeaderText = "Reports To";
	}
}			
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	If Not IsPostBack Then
		RadTreeList2.DataKeyNames = New String() {"EmployeeID"}
		RadTreeList2.ParentDataKeyNames = New String() {"ReportsTo"}
		RadTreeList2.DataSourceID = "SqlDataSource1"
		RadTreeList2.AutoGenerateColumns = False
		RadTreeList2.AllowPaging = True
		RadTreeList2.PageSize = 7

		Dim boundColumn As New TreeListBoundColumn()
		RadTreeList2.Columns.Add(boundColumn)
		boundColumn.DataField = "EmployeeID"
		boundColumn.UniqueName = "EmployeeID"
		boundColumn.HeaderText = "EmployeeID"

		boundColumn = New TreeListBoundColumn()
		RadTreeList2.Columns.Add(boundColumn)
		boundColumn.DataField = "LastName"
		boundColumn.UniqueName = "LastName"
		boundColumn.HeaderText = "Last Name"

		boundColumn = New TreeListBoundColumn()
		RadTreeList2.Columns.Add(boundColumn)
		boundColumn.DataField = "FirstName"
		boundColumn.UniqueName = "FirstName"
		boundColumn.HeaderText = "First Name"

		boundColumn = New TreeListBoundColumn()
		RadTreeList2.Columns.Add(boundColumn)
		boundColumn.DataField = "HireDate"
		boundColumn.UniqueName = "HireDate"
		boundColumn.HeaderText = "Hire Date"
		boundColumn.DataFormatString = "{0:dd/MM/yyyy}"
		boundColumn.DataType = GetType(DateTime)

		boundColumn = New TreeListBoundColumn()
		RadTreeList2.Columns.Add(boundColumn)
		boundColumn.DataField = "City"
		boundColumn.UniqueName = "City"
		boundColumn.HeaderText = "City"

		boundColumn = New TreeListBoundColumn()
		RadTreeList2.Columns.Add(boundColumn)
		boundColumn.DataField = "PostalCode"
		boundColumn.UniqueName = "PostalCode"
		boundColumn.HeaderText = "Postal Code"

		boundColumn = New TreeListBoundColumn()
		RadTreeList2.Columns.Add(boundColumn)
		boundColumn.DataField = "Country"
		boundColumn.UniqueName = "Country"
		boundColumn.HeaderText = "Country"

		boundColumn = New TreeListBoundColumn()
		RadTreeList2.Columns.Add(boundColumn)
		boundColumn.DataField = "ReportsTo"
		boundColumn.UniqueName = "ReportsTo"
		boundColumn.HeaderText = "Reports To"
	End If
End Sub
````


## Creating template columns dynamically

When creating a TreeList dynamically that contains a template column, you must create the templates dynamically in	the code-behind and assign them to the **ItemTemplate**, **EditItemTemplate**, etc. properties of the column.

To create an **ItemTemplate** dynamically, you must define a custom class that implements the **ITemplate** interface.	For an **EditItemTemplate** and **InsertItemTemplate** the class that you will build needs to implement **IBindableTemplate**. Then you can assign an instance of the class to the respective property of the **TreeListTemplateColumn** object.

>note Column templates must be added in the **Page_Init** event handler, so that the template controls can be added to the ViewState.
>


Here follows a sample implementation including both kind of templates:



````ASPNET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	SelectCommand="SELECT [ReportsTo], [EmployeeID], [LastName], [FirstName], [HireDate], [City], [HomePhone], [Country], [Photo] FROM [Employees]"
	DeleteCommand="DELETE FROM [Employees] WHERE [EmployeeID] = @EmployeeID" InsertCommand="INSERT INTO [Employees] ([ReportsTo], [LastName], [FirstName] , [HomePhone]) VALUES (@ReportsTo, @LastName, @FirstName, @HomePhone)"
	UpdateCommand="UPDATE [Employees] SET [ReportsTo] = @ReportsTo, [LastName] = @LastName, [FirstName] = @FirstName , [HomePhone] = @HomePhone WHERE [EmployeeID] = @EmployeeID">
	<DeleteParameters>
		<asp:Parameter Name="EmployeeID" Type="Int32" />
	</DeleteParameters>
	<InsertParameters>
		<asp:Parameter Name="ReportsTo" Type="Int32" />
		<asp:Parameter Name="LastName" Type="String" />
		<asp:Parameter Name="FirstName" Type="String" />
		<asp:Parameter Name="HomePhone" Type="String" />
	</InsertParameters>
	<UpdateParameters>
		<asp:Parameter Name="ReportsTo" Type="Int32" />
		<asp:Parameter Name="LastName" Type="String" />
		<asp:Parameter Name="FirstName" Type="String" />
		<asp:Parameter Name="EmployeeID" Type="Int32" />
		<asp:Parameter Name="HomePhone" Type="String" />
	</UpdateParameters>
</asp:SqlDataSource>
````
````C#
protected void Page_Init(object sender, EventArgs e)
{
	RadTreeList treeList = new RadTreeList();
	treeList.ID = "RadTreeList1";
	treeList.DataKeyNames = new string[] { "EmployeeID" };
	treeList.ParentDataKeyNames = new string[] { "ReportsTo" };
	treeList.DataSourceID = "SqlDataSource1";
	treeList.AutoGenerateColumns = false;
	treeList.AllowPaging = true;
	treeList.PageSize = 7;

	TreeListBoundColumn boundColumn = new TreeListBoundColumn();
	boundColumn = new TreeListBoundColumn();
	boundColumn.DataField = "FirstName";
	boundColumn.UniqueName = "FirstName";
	boundColumn.HeaderText = "First Name";
	treeList.Columns.Add(boundColumn);

	boundColumn = new TreeListBoundColumn();
	boundColumn.DataField = "LastName";
	boundColumn.UniqueName = "LastName";
	boundColumn.HeaderText = "Last Name";
	treeList.Columns.Add(boundColumn);

	TreeListTemplateColumn templateColumn;
	templateColumn = new TreeListTemplateColumn();
	templateColumn.HeaderText = "Home Phone";
	templateColumn.DataField = "HomePhone";
	templateColumn.UniqueName = "HomePhone";
	templateColumn.ItemTemplate = new PhoneTemplate(templateColumn.DataField);
	templateColumn.EditItemTemplate = new PhoneEditableTemplate(templateColumn.DataField);
	treeList.Columns.Add(templateColumn);

	templateColumn = new TreeListTemplateColumn();
	templateColumn.HeaderText = "Photo";
	templateColumn.DataField = "Photo";
	templateColumn.UniqueName = "TemplateColumn";
	templateColumn.ReadOnly = true;
	templateColumn.ItemTemplate = new PhotoTemplate(templateColumn.DataField);

	treeList.Columns.Add(templateColumn);

	TreeListEditCommandColumn editColumn = new TreeListEditCommandColumn();
	editColumn.HeaderText = "Edit";
	editColumn.ShowAddButton = false;
	treeList.Columns.Add(editColumn);

	PlaceHolder1.Controls.Add(treeList);
}

private class PhotoTemplate : ITemplate
{
	protected RadBinaryImage image;
	protected CheckBox boolValue;
	private string colName;

	public PhotoTemplate(string cName)
	{
		colName = cName;
	}

	public void InstantiateIn(System.Web.UI.Control container)
	{
		image = new RadBinaryImage();
		image.ID = "templateColumnPhoto";
		image.ResizeMode = BinaryImageResizeMode.Crop;
		image.Height = Unit.Pixel(80);
		image.Width = Unit.Pixel(60);
		image.DataBinding += new EventHandler(image_DataBinding);
		boolValue = new CheckBox();
		boolValue.AutoPostBack = true;
		boolValue.Checked = true;
		boolValue.CheckedChanged += new EventHandler(boolValue_CheckedChanged);
		boolValue.Text = "Show/Hide photo";
		boolValue.ID = "boolValue";
		boolValue.Enabled = true;
		container.Controls.Add(image);
		container.Controls.Add(boolValue);
	}

	void boolValue_CheckedChanged(object sender, EventArgs e)
	{
		CheckBox cBox = (CheckBox)sender;
		TreeListDataItem container = (TreeListDataItem)cBox.NamingContainer;
		container.FindControl("templateColumnPhoto").Visible = cBox.Checked;
	}

	void image_DataBinding(object sender, EventArgs e)
	{
		RadBinaryImage img = (RadBinaryImage)sender;
		TreeListDataItem container = (TreeListDataItem)img.NamingContainer;
		img.DataValue = (byte[])((DataRowView)container.DataItem)["Photo"];
	}
}

private class PhoneTemplate : ITemplate
{
	protected LiteralControl phoneNumber;
	private string colName;

	public PhoneTemplate(string cName)
	{
		colName = cName;
	}

	public void InstantiateIn(System.Web.UI.Control container)
	{
		phoneNumber = new LiteralControl();
		phoneNumber.ID = "phoneLbl";
		phoneNumber.DataBinding += new EventHandler(phoneNumber_DataBinding);
		container.Controls.Add(phoneNumber);
	}

	void phoneNumber_DataBinding(object sender, EventArgs e)
	{
		LiteralControl lbl = (LiteralControl)sender;
		TreeListDataItem container = (TreeListDataItem)lbl.NamingContainer;
		lbl.Text = ((DataRowView)container.DataItem)["HomePhone"].ToString();
	}
}

private class PhoneEditableTemplate : IBindableTemplate
{
	RadMaskedTextBox phoneMask;
	string colName;

	public PhoneEditableTemplate(string cName)
	{
		colName = cName;
	}

	public void InstantiateIn(System.Web.UI.Control container)
	{
		phoneMask = new RadMaskedTextBox();
		phoneMask.ID = "phoneTxt";
		phoneMask.Mask = "(###) ###-####";
		phoneMask.DataBinding += new EventHandler(phoneMask_DataBinding);
		container.Controls.Add(phoneMask);
	}

	void phoneMask_DataBinding(object sender, EventArgs e)
	{
		RadMaskedTextBox txt = (RadMaskedTextBox)sender;
		TreeListEditableItem container = (TreeListEditableItem)txt.NamingContainer;
		txt.TextWithLiterals = ((DataRowView)container.DataItem)["HomePhone"].ToString();
	}

	public IOrderedDictionary ExtractValues(System.Web.UI.Control control)
	{
		OrderedDictionary values = new OrderedDictionary();
		values[colName] = phoneMask.TextWithLiterals;
		return values;
	}
}
````
````VB.NET
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs)
	Dim treeList As New RadTreeList()
	treeList.ID = "RadTreeList1"
	treeList.DataKeyNames = New String() {"EmployeeID"}
	treeList.ParentDataKeyNames = New String() {"ReportsTo"}
	treeList.DataSourceID = "SqlDataSource1"
	treeList.AutoGenerateColumns = False
	treeList.AllowPaging = True
	treeList.PageSize = 7

	Dim boundColumn As New TreeListBoundColumn()
	boundColumn = New TreeListBoundColumn()
	boundColumn.DataField = "FirstName"
	boundColumn.UniqueName = "FirstName"
	boundColumn.HeaderText = "First Name"
	treeList.Columns.Add(boundColumn)

	boundColumn = New TreeListBoundColumn()
	boundColumn.DataField = "LastName"
	boundColumn.UniqueName = "LastName"
	boundColumn.HeaderText = "Last Name"
	treeList.Columns.Add(boundColumn)

	Dim templateColumn As TreeListTemplateColumn
	templateColumn = New TreeListTemplateColumn()
	templateColumn.HeaderText = "Home Phone"
	templateColumn.DataField = "HomePhone"
	templateColumn.UniqueName = "HomePhone"
	templateColumn.ItemTemplate = New PhoneTemplateColumn(templateColumn.DataField)
	templateColumn.EditItemTemplate = New PhoneEditableTemplate(templateColumn.DataField)
	treeList.Columns.Add(templateColumn)

	templateColumn = New TreeListTemplateColumn()
	templateColumn.HeaderText = "Photo"
	templateColumn.DataField = "Photo"
	templateColumn.UniqueName = "TemplateColumn"
	templateColumn.[ReadOnly] = True
	templateColumn.ItemTemplate = New PhotoTemplateColumn(templateColumn.DataField)

	treeList.Columns.Add(templateColumn)

	Dim editColumn As New TreeListEditCommandColumn()
	editColumn.HeaderText = "Edit"
	editColumn.ShowAddButton = False
	treeList.Columns.Add(editColumn)

	PlaceHolder1.Controls.Add(treeList)
End Sub

Private Class PhotoTemplateColumn
	Implements ITemplate
	Protected image As RadBinaryImage
	Protected boolValue As CheckBox
	Private colName As String

	Public Sub New(ByVal cName As String)
		colName = cName
	End Sub

	Public Sub InstantiateIn(ByVal container As System.Web.UI.Control) Implements ITemplate.InstantiateIn
		image = New RadBinaryImage()
		image.ID = "templateColumnPhoto"
		image.ResizeMode = BinaryImageResizeMode.Crop
		image.Height = Unit.Pixel(80)
		image.Width = Unit.Pixel(60)
		AddHandler image.DataBinding, AddressOf image_DataBinding
		boolValue = New CheckBox()
		boolValue.AutoPostBack = True
		boolValue.Checked = True
		AddHandler boolValue.CheckedChanged, AddressOf boolValue_CheckedChanged
		boolValue.Text = "Show/Hide photo"
		boolValue.ID = "boolValue"
		boolValue.Enabled = True
		container.Controls.Add(image)
		container.Controls.Add(boolValue)
	End Sub

	Private Sub boolValue_CheckedChanged(ByVal sender As Object, ByVal e As EventArgs)
		Dim cBox As CheckBox = DirectCast(sender, CheckBox)
		Dim container As TreeListDataItem = DirectCast(cBox.NamingContainer, TreeListDataItem)
		container.FindControl("templateColumnPhoto").Visible = cBox.Checked
	End Sub

	Private Sub image_DataBinding(ByVal sender As Object, ByVal e As EventArgs)
		Dim img As RadBinaryImage = DirectCast(sender, RadBinaryImage)
		Dim container As TreeListDataItem = DirectCast(img.NamingContainer, TreeListDataItem)
		img.DataValue = DirectCast(DirectCast(container.DataItem, DataRowView)("Photo"), Byte())
	End Sub
End Class

Private Class PhoneTemplateColumn
	Implements ITemplate
	Protected phoneNumber As LiteralControl
	Private colName As String

	Public Sub New(ByVal cName As String)
		colName = cName
	End Sub

	Public Sub InstantiateIn(ByVal container As System.Web.UI.Control) Implements ITemplate.InstantiateIn
		phoneNumber = New LiteralControl()
		phoneNumber.ID = "phoneLbl"
		AddHandler phoneNumber.DataBinding, AddressOf phoneNumber_DataBinding
		container.Controls.Add(phoneNumber)
	End Sub

	Private Sub phoneNumber_DataBinding(ByVal sender As Object, ByVal e As EventArgs)
		Dim lbl As LiteralControl = DirectCast(sender, LiteralControl)
		Dim container As TreeListDataItem = DirectCast(lbl.NamingContainer, TreeListDataItem)
		lbl.Text = DirectCast(container.DataItem, DataRowView)("HomePhone").ToString()
	End Sub
End Class

Private Class PhoneEditableTemplate
	Implements IBindableTemplate
	Private phoneMask As RadMaskedTextBox
	Private colName As String

	Public Sub New(ByVal cName As String)
		colName = cName
	End Sub

	Public Sub InstantiateIn(ByVal container As System.Web.UI.Control) Implements ITemplate.InstantiateIn
		phoneMask = New RadMaskedTextBox()
		phoneMask.ID = "phoneTxt"
		phoneMask.Mask = "(###) ###-####"
		AddHandler phoneMask.DataBinding, AddressOf phoneMask_DataBinding
		container.Controls.Add(phoneMask)
	End Sub

	Private Sub phoneMask_DataBinding(ByVal sender As Object, ByVal e As EventArgs)
		Dim txt As RadMaskedTextBox = DirectCast(sender, RadMaskedTextBox)
		Dim container As TreeListEditableItem = DirectCast(txt.NamingContainer, TreeListEditableItem)
		txt.TextWithLiterals = DirectCast(container.DataItem, DataRowView)("HomePhone").ToString()
	End Sub

	Public Function ExtractValues(ByVal control As System.Web.UI.Control) As IOrderedDictionary Implements IBindableTemplate.ExtractValues
		Dim values As New OrderedDictionary()
		values(colName) = phoneMask.TextWithLiterals
		Return values
	End Function
End Class
````

