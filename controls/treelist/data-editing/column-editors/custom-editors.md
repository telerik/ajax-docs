---
title: Custom Editors
page_title: Custom Editors - RadTreeList
description: Check our Web Forms article about Custom Editors.
slug: treelist/data-editing/column-editors/custom-editors
tags: custom,editors
published: True
position: 1
---

# Custom Editors



RadTreeList provides a straightforward way to specify a non-default editor for an editable column. The **RadTreeList.CreateColumnEditor** event fires whenever a column editor needs to be initialized.

The event argument object of type TreeListCreateColumnEditorEventArgs provides the following properties:

* **Column** - the TreeListEditableColumn instance for which a column editor will be initialized.

* **DefaultEditor** - the default ITreeListColumnEditor instance that the column provides.

* **CustomEditorInitializer** - a delegate that does not accept parameters and returns an instance of type ITreeListColumnEditor.

## Custom Column Editors

The user is expected to provide a delegate function to **e.CustomEditorInitializer** that instantiates and returns an **ITreeListColumnEditor** object.A column editor instance usually accepts the target editable column in its constructor. With the following sample code, we provide a custom column editor for the "Notes" column in the RadTreeList:



````ASPNET
<telerik:RadTreeList RenderMode="Lightweight" runat="server" ID="RadTreeList1" OnCreateColumnEditor="RadTreeList1_CreateColumnEditor"
	DataSourceID="SqlDataSource1" AutoGenerateColumns="false" DataKeyNames="EmployeeID" ParentDataKeyNames="ReportsTo">
	<Columns>
		<telerik:TreeListBoundColumn DataField="EmployeeID" HeaderStyle-Width="60px" HeaderText="EmployeeID"
			UniqueName="EmployeeID" ReadOnly="true">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="LastName" HeaderText="Last Name" HeaderStyle-Width="60px"
			UniqueName="LastName">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="FirstName" HeaderText="First Name" HeaderStyle-Width="60px"
			UniqueName="FirstName">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="TitleOfCourtesy" HeaderText="Title of courtesy"
			HeaderStyle-Width="60px" UniqueName="Title">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="Notes" HeaderText="Notes" UniqueName="Notes">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="ReportsTo" HeaderText="ReportsTo" HeaderStyle-Width="65px"
			UniqueName="ReportsTo" ReadOnly="true" ForceExtractValue="Always">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListEditCommandColumn UniqueName="EditColumn" HeaderStyle-Width="57px"
			ButtonType="ImageButton">
		</telerik:TreeListEditCommandColumn>
	</Columns>
</telerik:RadTreeList>

<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
DeleteCommand="DELETE FROM [Employees] WHERE [EmployeeID] = @EmployeeID" InsertCommand="INSERT INTO [Employees] ([LastName], [FirstName], [TitleOfCourtesy], [Notes], [ReportsTo]) VALUES (@LastName, @FirstName, @TitleOfCourtesy, @Notes, @ReportsTo)"
SelectCommand="SELECT [EmployeeID], [LastName], [FirstName], [TitleOfCourtesy], [Notes], [ReportsTo] FROM [Employees]"
UpdateCommand="UPDATE [Employees] SET [LastName] = @LastName, [FirstName] = @FirstName, [TitleOfCourtesy] = @TitleOfCourtesy, [Notes] = @Notes, [ReportsTo] = @ReportsTo WHERE [EmployeeID] = @EmployeeID">
<DeleteParameters>
	<asp:Parameter Name="original_EmployeeID" Type="Int32" />
</DeleteParameters>
<UpdateParameters>
	<asp:Parameter Name="LastName" Type="String" />
	<asp:Parameter Name="FirstName" Type="String" />
	<asp:Parameter Name="TitleOfCourtesy" Type="String" />
	<asp:Parameter Name="Notes" Type="String" />
	<asp:Parameter Name="ReportsTo" Type="Int32" />
	<asp:Parameter Name="EmployeeID" Type="Int32" />
</UpdateParameters>
<InsertParameters>
	<asp:Parameter Name="LastName" Type="String" />
	<asp:Parameter Name="FirstName" Type="String" />
	<asp:Parameter Name="TitleOfCourtesy" Type="String" />
	<asp:Parameter Name="Notes" Type="String" />
	<asp:Parameter Name="ReportsTo" Type="Int32" />
</InsertParameters>
</asp:SqlDataSource>
<asp:SqlDataSource runat="server" ID="SqlDataSource2" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
SelectCommand="SELECT DISTINCT [TitleOfCourtesy] FROM [Employees]"></asp:SqlDataSource>
````
````C#
protected void RadTreeList1_CreateColumnEditor(object sender, TreeListCreateColumnEditorEventArgs e)
{
	if (e.Column.DataField == "Notes")
	{
		TreeListTextBoxColumnEditor notesEditor = e.DefaultEditor as TreeListTextBoxColumnEditor;
		notesEditor.TextBoxControl.TextMode = TextBoxMode.MultiLine;
		notesEditor.TextBoxControl.Rows = 10;

	}
}
````
````VB.NET
Protected Sub RadTreeList1_CreateColumnEditor(ByVal sender As Object, ByVal e As TreeListCreateColumnEditorEventArgs)

	If e.Column.DataField = "Notes" Then
		Dim notesEditor As TreeListTextBoxColumnEditor = TryCast(e.DefaultEditor, TreeListTextBoxColumnEditor)
		notesEditor.TextBoxControl.TextMode = TextBoxMode.MultiLine

		notesEditor.TextBoxControl.Rows = 10
	End If
End Sub
````


## Implementing Custom Editors

To create a custom column editor, a developer needs to implement the ITreeListColumnEditor in a class.By convention, a column editor in RadTreeList does not have a default parameter-less constructor and accepts the TreeListEditableColumn instance in its constructor. Even though this is not a strict requirement for a custom column editor, this provides direct access to the editable column that the column editor will work for. The editor can then read settings from the column and apply them to edit controls initialized in the cells of the edited items.The example bellow demonstrates implementig of Custom Editor for the "TitleOfCourtesy" TreeList column:



````ASPNET
<telerik:RadTreeList RenderMode="Lightweight" runat="server" ID="RadTreeList1" OnCreateColumnEditor="RadTreeList1_CreateColumnEditor"
	DataSourceID="SqlDataSource1" AutoGenerateColumns="false" DataKeyNames="EmployeeID" ParentDataKeyNames="ReportsTo">
	<Columns>
		<telerik:TreeListBoundColumn DataField="EmployeeID" HeaderStyle-Width="60px" HeaderText="EmployeeID"
			UniqueName="EmployeeID" ReadOnly="true">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="LastName" HeaderText="Last Name" HeaderStyle-Width="60px"
			UniqueName="LastName">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="FirstName" HeaderText="First Name" HeaderStyle-Width="60px"
			UniqueName="FirstName">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="TitleOfCourtesy" HeaderText="Title of courtesy"
			HeaderStyle-Width="60px" UniqueName="Title">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="Notes" HeaderText="Notes" UniqueName="Notes">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListBoundColumn DataField="ReportsTo" HeaderText="ReportsTo" HeaderStyle-Width="65px"
			UniqueName="ReportsTo" ReadOnly="true" ForceExtractValue="Always">
		</telerik:TreeListBoundColumn>
		<telerik:TreeListEditCommandColumn UniqueName="EditColumn" HeaderStyle-Width="57px"
			ButtonType="ImageButton">
		</telerik:TreeListEditCommandColumn>
	</Columns>
</telerik:RadTreeList>

<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
DeleteCommand="DELETE FROM [Employees] WHERE [EmployeeID] = @EmployeeID" InsertCommand="INSERT INTO [Employees] ([LastName], [FirstName], [TitleOfCourtesy], [Notes], [ReportsTo]) VALUES (@LastName, @FirstName, @TitleOfCourtesy, @Notes, @ReportsTo)"
SelectCommand="SELECT [EmployeeID], [LastName], [FirstName], [TitleOfCourtesy], [Notes], [ReportsTo] FROM [Employees]"
UpdateCommand="UPDATE [Employees] SET [LastName] = @LastName, [FirstName] = @FirstName, [TitleOfCourtesy] = @TitleOfCourtesy, [Notes] = @Notes, [ReportsTo] = @ReportsTo WHERE [EmployeeID] = @EmployeeID">
<DeleteParameters>
	<asp:Parameter Name="original_EmployeeID" Type="Int32" />
</DeleteParameters>
<UpdateParameters>
	<asp:Parameter Name="LastName" Type="String" />
	<asp:Parameter Name="FirstName" Type="String" />
	<asp:Parameter Name="TitleOfCourtesy" Type="String" />
	<asp:Parameter Name="Notes" Type="String" />
	<asp:Parameter Name="ReportsTo" Type="Int32" />
	<asp:Parameter Name="EmployeeID" Type="Int32" />
</UpdateParameters>
<InsertParameters>
	<asp:Parameter Name="LastName" Type="String" />
	<asp:Parameter Name="FirstName" Type="String" />
	<asp:Parameter Name="TitleOfCourtesy" Type="String" />
	<asp:Parameter Name="Notes" Type="String" />
	<asp:Parameter Name="ReportsTo" Type="Int32" />
</InsertParameters>
</asp:SqlDataSource>
<asp:SqlDataSource runat="server" ID="SqlDataSource2" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
SelectCommand="SELECT DISTINCT [TitleOfCourtesy] FROM [Employees]"></asp:SqlDataSource>
````
````C#
protected void Page_Load(object sender, EventArgs e)
	{
		if (!Page.IsPostBack)
		{
			RadTreeList1.ExpandedIndexes.Add(new TreeListHierarchyIndex { LevelIndex = 0, NestedLevel = 0 });
		}
	}
	protected void RadTreeList1_CreateColumnEditor(object sender, TreeListCreateColumnEditorEventArgs e)
	{
		if (e.Column.DataField == "TitleOfCourtesy")
		{
			e.CustomEditorInitializer = new TreeListCreateCustomEditorDelegate(delegate
			{
				TreeListComboEditor editor = new TreeListComboEditor(e.Column);
				editor.ComboBox.DataSourceID = "SqlDataSource2";
				editor.ComboBox.DataTextField = "TitleOfCourtesy";
				editor.ComboBox.DataValueField = "TitleOfCourtesy";

				return editor;
			});
		}

	}
}
public class TreeListComboEditor : TreeListColumnEditor
{
	public TreeListComboEditor(TreeListEditableColumn column)
		: base(column)
	{
		InitializeCombo();
	}

	public RadComboBox ComboBox
	{
		get;
		private set;
	}

	protected virtual void InitializeCombo()
	{
		ComboBox = new RadComboBox();
		ComboBox.ID = base.GenerateControlID();
	}

	public override IEnumerable GetValues()
	{
		yield return ComboBox.SelectedValue;
	}

	public override void Initialize(TreeListEditableItem editItem, Control container)
	{
		container.Controls.Add(ComboBox);
	}

	public override void SetValues(IEnumerable values)
	{
		object value = TreeListColumnEditor.GetFirstValueFromEnumerable(values);
		if (value != null)
		{
			ComboBox.SelectedValue = value.ToString();
		}
	}
}
````
````VB.NET
Protected Sub RadTreeList1_CreateColumnEditor(ByVal sender As Object, ByVal e As TreeListCreateColumnEditorEventArgs)
	If e.Column.DataField = "TitleOfCourtesy" Then
		Dim editor As TreeListComboEditor = New TreeListComboEditor(e.Column)
		editor.ComboBox.DataSourceID = "SqlDataSource2"
		editor.ComboBox.DataTextField = "TitleOfCourtesy"
		editor.ComboBox.DataValueField = "TitleOfCourtesy"
		e.CustomEditorInitializer = New TreeListCreateCustomEditorDelegate(Function() editor)
	End If
End Sub

Public Class TreeListComboEditor
	Inherits TreeListColumnEditor
	Public Sub New(ByVal column As TreeListEditableColumn)
		MyBase.New(column)
		InitializeCombo()
	End Sub

	Public Property ComboBox() As RadComboBox
		Get
			Return m_ComboBox
		End Get
		Private Set(ByVal value As RadComboBox)
			m_ComboBox = value
		End Set
	End Property
	Private m_ComboBox As RadComboBox

	Protected Overridable Sub InitializeCombo()
		ComboBox = New RadComboBox()
		ComboBox.ID = MyBase.GenerateControlID()
	End Sub

	Public Overrides Function GetValues() As IEnumerable
		Return (ComboBox.SelectedValue)
	End Function

	Public Overrides Sub Initialize(ByVal editItem As TreeListEditableItem, ByVal container As Control)
		container.Controls.Add(ComboBox)
	End Sub

	Public Overrides Sub SetValues(ByVal values As IEnumerable)
		Dim value As Object = TreeListColumnEditor.GetFirstValueFromEnumerable(values)
		If value IsNot Nothing Then
			ComboBox.SelectedValue = value.ToString()
		End If
	End Sub
End Class
````


Alternatively to implementing the ITreeListColumnEditor interface, a developer can decide to subclass from the abstract TreeListColumnEditor class that provides some handy properties and methods.

# See Also

 * [Auto-Generated Editors]({%slug treelist/data-editing/column-editors/auto-generated-editors%})

 * [Custom Editors](https://demos.telerik.com/aspnet-ajax/treeList/examples/dataediting/customeditors/defaultcs.aspx)
