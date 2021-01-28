---
title: Manual CRUD Operations
page_title: Manual CRUD Operations - RadDataForm
description: Check our Web Forms article about Manual CRUD Operations.
slug: dataform/data-editing/manual-crud-operations
tags: manual,crud,operations
published: True
position: 1
---

# Manual CRUD Operations



This help article explains how to manually edit, insert or delete records using the RadDataForm API.

The general logic behind manual CRUD operations is the same as for the other data bound controls in the suite (**RadGrid**, **RadListView** and so on). It allows developers to manually handle the operations, thus providing extra flexibility.

For extracting the values needed for performing the respective CRUD operation can use the **ExtractValues** method or reference the editors using **FindControl** and obtain their data.

When using custom template classes, define a method in the class that will return the data.

In this article:

* [Updating Records](#updating-records)
* [Inserting Records](#inserting-records)
* [Deleting Records](#deleting-records)
* [Example With Markup Declaration](#example-with-markup-declaration)
* [Example With Template Classes](#example-with-template-classes)

## Updating Records

In order to update an existing records you can follow the below listed steps.

1. Subscribe to the **ItemUpdating** event.

1. Reference the **RadDataFormEditableItem** that holds the data.

1. Extract the values entered by the user.

1. Execute the update.



````C#
protected void RadDataForm1_ItemUpdating(object sender, RadDataFormCommandEventArgs e)
{
    RadDataFormEditableItem editedItem = e.DataFormItem as RadDataFormEditableItem;
    Hashtable newValues = new Hashtable();
    editedItem.ExtractValues(newValues);
    Customer editedCustomer = dataSource.Find(x => x.ID == int.Parse(editedItem.GetDataKeyValue("ID").ToString()));
    editedCustomer.CompanyName = newValues["CompanyName"].ToString();
    editedCustomer.ContactName = newValues["ContactName"].ToString();
    editedCustomer.ContactTitle = newValues["ContactTitle"].ToString();
}
````
````VB.NET
Protected Sub RadDataForm1_ItemUpdating(sender As Object, e As RadDataFormCommandEventArgs)
    Dim editedItem As RadDataFormEditableItem = TryCast(e.DataFormItem, RadDataFormEditableItem)
    Dim newValues As New Hashtable()
    editedItem.ExtractValues(newValues)
    Dim editedCustomer As Customer = dataSource.Find(Function(x) x.ID = Integer.Parse(editedItem.GetDataKeyValue("ID").ToString()))
    editedCustomer.CompanyName = newValues("CompanyName").ToString()
    editedCustomer.ContactName = newValues("ContactName").ToString()
    editedCustomer.ContactTitle = newValues("ContactTitle").ToString()
End Sub
````


## Inserting Records

The logic here is similar to the above with one difference, here the **DataFormItem** available in the arguments is actually a **RadDataFormInsertItem**. Considering theaforementioned you can insert an item following these steps.

1. Subscribe to the **ItemInserting** event.

1. Obtain a reference to the **RadDataFormInserItem** that raised the event.

1. Extract the values from the insert item.

1. Perform the insert.



````C#
protected void RadDataForm1_ItemInserting(object sender, RadDataFormCommandEventArgs e)
{
    RadDataFormInsertItem insertedItem = e.DataFormItem as RadDataFormInsertItem
    Hashtable newValues = new Hashtable();
    insertedItem.ExtractValues(newValues);

    dataSource.Add(new Customer()
    {
        ID=dataSource[dataSource.Count-1].ID+1,
        CompanyName=newValues["CompanyName"].ToString(),
        ContactName=newValues["ContactName"].ToString(),
        ContactTitle = newValues["ContactTitle"].ToString()
    });
}
````
````VB.NET
Protected Sub RadDataForm1_ItemInserting(sender As Object, e As RadDataFormCommandEventArgs)
    Dim insertedItem As RadDataFormInsertItem = TryCast(e.DataFormItem, RadDataFormInsertItem)
    Dim newValues As New Hashtable()
    insertedItem.ExtractValues(newValues)

    dataSource.Add(New Customer() With { _
     .ID = dataSource(dataSource.Count - 1).ID + 1, _
     .CompanyName = newValues("CompanyName").ToString(), _
     .ContactName = newValues("ContactName").ToString(), _
     .ContactTitle = newValues("ContactTitle").ToString() _
    })
End Sub
````


## Deleting Records

When deleting a record the logic that we follow is described in the following steps.

1. Subscribe to the **ItemDeleting** event.

1. Using the id of the record (should be set as a **DataKeyName**) to obtain a reference to the record.

1. Delete the record.



````C#
protected void RadDataForm1_ItemDeleting(object sender, RadDataFormCommandEventArgs e)
{
    RadDataFormDataItem deletItem = e.DataFormItem as RadDataFormDataItem;
    dataSource.Remove(dataSource.Find(x => x.ID == int.Parse(deletItem.GetDataKeyValue("ID").ToString())));
}
````
````VB.NET
Protected Sub RadDataForm1_ItemDeleting(sender As Object, e As RadDataFormCommandEventArgs)
    Dim deletItem As RadDataFormDataItem = TryCast(e.DataFormItem, RadDataFormDataItem)
    dataSource.Remove(dataSource.Find(Function(x) x.ID = Integer.Parse(deletItem.GetDataKeyValue("ID").ToString())))
End Sub
````


## Example With Markup Declaration

The below provided code snippets illustrate a sample implementation of a scenario where a **RadDataForm** with manual operations is used.

>caption Markup definition

````ASPNET
<telerik:RadDataForm RenderMode="Lightweight" ID="RadDataForm1" OnNeedDataSource="RadDataForm1_NeedDataSource" OnItemUpdating="RadDataForm1_ItemUpdating" 
    OnItemInserting="RadDataForm1_ItemInserting" OnItemDeleting="RadDataForm1_ItemDeleting"
     DataKeyNames="ID" runat="server">
    <ItemTemplate>
        ContactTitle:   '<%# Eval("ContactTitle") %>'
		<br />
        CompanyName: <%# Eval("CompanyName") %>
		<br />
        ContactName: <%# Eval("ContactName") %>
        <telerik:RadButton RenderMode="Lightweight" ID="InitInsertButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="InitInsert" Text="Insert" ToolTip="Insert" />
        <br />
        <telerik:RadButton RenderMode="Lightweight" ID="EditButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="Edit" Text="Edit" ToolTip="Edit" />
        <br />
        <telerik:RadButton RenderMode="Lightweight" ID="DeleteButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="Delete" Text="Delete" ToolTip="Delete" />
    </ItemTemplate>
    <EditItemTemplate>
        Edit product with ID: '<%# Eval("ID") %>'
        <br />
        ContactTitle:
<asp:TextBox ID="ContactTitleTextBox" Text='<%# Bind("ContactTitle") %>' runat="server" />
        <br />
        CompanyName:
<asp:TextBox ID="CompanyNameTextBox" Text='<%# Bind("CompanyName") %>' runat="server" />
        <br />
        ContactName:
<asp:TextBox ID="ContactNameTextBox" Text='<%# Bind("ContactName") %>' runat="server" />
        <telerik:RadButton RenderMode="Lightweight" ID="UpdateButton" runat="server" ButtonType="SkinnedButton" CommandName="Update" Text="Update" ToolTip="Update" />
        <telerik:RadButton RenderMode="Lightweight" ID="CancelButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="Cancel" Text="Cancel" ToolTip="Cancel" />
    </EditItemTemplate>
    <InsertItemTemplate>
        Add New Record :
		<br />
		ContactTitle:
<asp:TextBox ID="ContactTitleTextBox" Text='<%# Bind("ContactTitle") %>' runat="server" />
        <br />
        CompanyName:
<asp:TextBox ID="CompanyNameTextBox" Text='<%# Bind("CompanyName") %>' runat="server" />
        <br />
        ContactName:
<asp:TextBox ID="ContactNameTextBox" Text='<%# Bind("ContactName") %>' runat="server" />
        <telerik:RadButton RenderMode="Lightweight" ID="PerformInsertButton" runat="server" ButtonType="SkinnedButton" CommandName="PerformInsert" Text="Insert" ToolTip="Insert" />
        <telerik:RadButton RenderMode="Lightweight" ID="CancelButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="Cancel" Text="Cancel" ToolTip="Cancel" />
    </InsertItemTemplate>
</telerik:RadDataForm>
````

>caption Server code - data binding and CRUD operations

````C#
private static readonly Random random = new Random();
static string[] contactNames = new string[] { "Antonio Moreno", "Elizabeth Lincoln", "Hanna Moos", "Jaime Yorres", "Georg Pipps",
    "Pascale Cartrain", "Paul Henriot", "Matti Karttunen", "Patricio Simpson","Howard Snyder"};
static string[] companyNames = new string[] { "Blauer See Delikatessen", "Folies gourmandes", "Hungry Coyote Import Store", "Let's Stop N Shop",
        "B's Beverages", "QUICK-Stop", "Split Rail Beer & Ale", "Wartian Herkku","Sant� Gourmet","Romero y tomillo" };
static string[] contactTitles = new string[] { "Marketing Assistant", "Sales Associate", "Sales Agent", "Sales Representative",
        "Owner", "Sales Manager", "Accounting Manager","Marketing Manager","Sales Consultant","Accountant"};

public List<Customer> dataSource
{
    get
    {
        object obj = Session["DataSource"];
        if (obj == null)
        {
            List<Customer> customers = new List<Customer>();
            int customerIndex = random.Next() % 10;
            for (int i = 0; i < 30; i++)
            {
                Customer customer = new Customer();
                customer.ID = i + 1;
                customer.ContactTitle = contactTitles[customerIndex];
                customer.CompanyName = companyNames[customerIndex];
                customer.ContactName = contactNames[customerIndex];
                customers.Add(customer);
            }
            Session["DataSource"] = customers;
        }
        return (List<Customer>)Session["DataSource"];
    }
    set
    {
        Session["DataSource"] = value;
    }
}

[Serializable]
public class Customer
{
    public int ID { get; set; }
    public string CompanyName { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
}

protected void RadDataForm1_ItemUpdating(object sender, RadDataFormCommandEventArgs e)
{
    RadDataFormEditableItem editedItem = e.DataFormItem as RadDataFormEditableItem;
    Hashtable newValues = new Hashtable();
    editedItem.ExtractValues(newValues);
    Customer editedCustomer = dataSource.Find(x => x.ID == int.Parse(editedItem.GetDataKeyValue("ID").ToString()));
    editedCustomer.CompanyName = newValues["CompanyName"].ToString();
    editedCustomer.ContactName = newValues["ContactName"].ToString();
    editedCustomer.ContactTitle = newValues["ContactTitle"].ToString();
}

protected void RadDataForm1_ItemInserting(object sender, RadDataFormCommandEventArgs e)
{
    RadDataFormInsertItem insertedItem = e.DataFormItem as RadDataFormInsertItem
    Hashtable newValues = new Hashtable();
    insertedItem.ExtractValues(newValues);

    dataSource.Add(new Customer()
    {
        ID=dataSource[dataSource.Count-1].ID+1,
        CompanyName=newValues["CompanyName"].ToString(),
        ContactName=newValues["ContactName"].ToString(),
        ContactTitle = newValues["ContactTitle"].ToString()
    });
}

protected void RadDataForm1_ItemDeleting(object sender, RadDataFormCommandEventArgs e)
{
    RadDataFormDataItem deletItem = e.DataFormItem as RadDataFormDataItem;
    dataSource.Remove(dataSource.Find(x => x.ID == int.Parse(deletItem.GetDataKeyValue("ID").ToString())));
}

protected void RadDataForm1_NeedDataSource(object sender, RadDataFormNeedDataSourceEventArgs e)
{
    RadDataForm1.DataSource = dataSource;
}
````
````VB.NET
Private Shared ReadOnly random As New Random()
Shared contactNames As String() = New String() {"Antonio Moreno", "Elizabeth Lincoln", "Hanna Moos", "Jaime Yorres", "Georg Pipps", "Pascale Cartrain", _
    "Paul Henriot", "Matti Karttunen", "Patricio Simpson", "Howard Snyder"}
Shared companyNames As String() = New String() {"Blauer See Delikatessen", "Folies gourmandes", "Hungry Coyote Import Store", "Let's Stop N Shop", "B's Beverages", "QUICK-Stop", _
    "Split Rail Beer & Ale", "Wartian Herkku", "Sant� Gourmet", "Romero y tomillo"}
Shared contactTitles As String() = New String() {"Marketing Assistant", "Sales Associate", "Sales Agent", "Sales Representative", "Owner", "Sales Manager", _
    "Accounting Manager", "Marketing Manager", "Sales Consultant", "Accountant"}

Public Property dataSource() As List(Of Customer)
    Get
        Dim obj As Object = Session("DataSource")
        If obj Is Nothing Then
            Dim customers As New List(Of Customer)()
            Dim customerIndex As Integer = random.[Next]() Mod 10
            For i As Integer = 0 To 29
                Dim customer As New Customer()
                customer.ID = i + 1
                customer.ContactTitle = contactTitles(customerIndex)
                customer.CompanyName = companyNames(customerIndex)
                customer.ContactName = contactNames(customerIndex)
                customers.Add(customer)
            Next
            Session("DataSource") = customers
        End If
        Return DirectCast(Session("DataSource"), List(Of Customer))
    End Get
    Set(value As List(Of Customer))
        Session("DataSource") = value
    End Set
End Property

<Serializable> _
Public Class Customer
    Public Property ID() As Integer
        Get
            Return m_ID
        End Get
        Set(value As Integer)
            m_ID = value
        End Set
    End Property
    Private m_ID As Integer
    Public Property CompanyName() As String
        Get
            Return m_CompanyName
        End Get
        Set(value As String)
            m_CompanyName = value
        End Set
    End Property
    Private m_CompanyName As String
    Public Property ContactName() As String
        Get
            Return m_ContactName
        End Get
        Set(value As String)
            m_ContactName = value
        End Set
    End Property
    Private m_ContactName As String
    Public Property ContactTitle() As String
        Get
            Return m_ContactTitle
        End Get
        Set(value As String)
            m_ContactTitle = value
        End Set
    End Property
    Private m_ContactTitle As String
End Class

Protected Sub RadDataForm1_ItemUpdating(sender As Object, e As RadDataFormCommandEventArgs)
    Dim editedItem As RadDataFormEditableItem = TryCast(e.DataFormItem, RadDataFormEditableItem)
    Dim newValues As New Hashtable()
    editedItem.ExtractValues(newValues)
    Dim editedCustomer As Customer = dataSource.Find(Function(x) x.ID = Integer.Parse(editedItem.GetDataKeyValue("ID").ToString()))
    editedCustomer.CompanyName = newValues("CompanyName").ToString()
    editedCustomer.ContactName = newValues("ContactName").ToString()
    editedCustomer.ContactTitle = newValues("ContactTitle").ToString()
End Sub

Protected Sub RadDataForm1_ItemInserting(sender As Object, e As RadDataFormCommandEventArgs)
    Dim insertedItem As RadDataFormInsertItem = TryCast(e.DataFormItem, RadDataFormInsertItem)
    Dim newValues As New Hashtable()
    insertedItem.ExtractValues(newValues)

    dataSource.Add(New Customer() With { _
     .ID = dataSource(dataSource.Count - 1).ID + 1, _
     .CompanyName = newValues("CompanyName").ToString(), _
     .ContactName = newValues("ContactName").ToString(), _
     .ContactTitle = newValues("ContactTitle").ToString() _
    })
End Sub

Protected Sub RadDataForm1_ItemDeleting(sender As Object, e As RadDataFormCommandEventArgs)
    Dim deletItem As RadDataFormDataItem = TryCast(e.DataFormItem, RadDataFormDataItem)
    dataSource.Remove(dataSource.Find(Function(x) x.ID = Integer.Parse(deletItem.GetDataKeyValue("ID").ToString())))
End Sub

Protected Sub RadDataForm1_NeedDataSource(sender As Object, e As RadDataFormNeedDataSourceEventArgs)
    RadDataForm1.DataSource = dataSource
End Sub
````

## Example With Template Classes

When using custom template classes, you need to create a method in the class that will return the data from the user input so you can identify the item and perform the necessary data source opeations. The built-in `ExtractValues` method cannot know the details of the class, so you need to implement it.

>caption Sample markup definition

````ASP.NET
<form id="form1" runat="server">
	<asp:ScriptManager ID="Scriptmanager1" runat="server" />
	<asp:PlaceHolder ID="Placeholder1" runat="server" />
	<asp:Label ID="lblLastAction" Text="" runat="server" />
</form>
````

>caption Sample server code that sets and uses the classes

````C#
protected void Page_Init(object sender, EventArgs e)
{
	RadDataForm rdf = new RadDataForm();
	rdf.ID = "theDataForm";
	rdf.NeedDataSource += rdf_NeedDataSource;
	rdf.ItemInserting += rdf_ItemInserting;
	rdf.ItemUpdating += rdf_ItemUpdating;
	rdf.ItemDeleting += rdf_ItemDeleting;

	//This example distinguishes the templates by passing a string argument for the sake of brevity
	rdf.InsertItemTemplate = new MyTemplate("insertMode");
	rdf.ItemTemplate = new MyTemplate("editMode");
	rdf.EditItemTemplate = new MyTemplate("updateMode");

	Placeholder1.Controls.Add(rdf);
}

void rdf_ItemDeleting(object sender, RadDataFormCommandEventArgs e)
{
	Hashtable item = new Hashtable();
	//check current mode so you know which template to access. This depends on which templates the Delete button is available on
	if (e.DataFormItem.IsInEditMode)
	{
		((sender as RadDataForm).EditItemTemplate as MyTemplate).GetTemplateData(out item);//method implemented in the template
	}
	else
	{
		((sender as RadDataForm).ItemTemplate as MyTemplate).GetTemplateData(out item);//method implemented in the template
	}
	//use the data you now have to perform the data source operation

	//show output
	ShowLastAction(item, "deleted");
}

void rdf_ItemUpdating(object sender, RadDataFormCommandEventArgs e)
{
	Hashtable item = new Hashtable();
	((sender as RadDataForm).EditItemTemplate as MyTemplate).GetTemplateData(out item);//method implemented in the template
	//use the data you now have to perform the data source operation

	//show output
	ShowLastAction(item, "updated");
}

void rdf_ItemInserting(object sender, RadDataFormCommandEventArgs e)
{
	Hashtable item = new Hashtable();
	((sender as RadDataForm).InsertItemTemplate as MyTemplate).GetTemplateData(out item);//method implemented in the template
	//use the data you now have to perform the data source operation

	//show output
	ShowLastAction(item, "created");
}

protected void ShowLastAction(Hashtable item, string operation)
{
	lblLastAction.Text = string.Format("item with data was {0}:<br />company name: {1}<br />contact name: {2}",
		operation,
		item["CompanyName"],
		item["ContactName"]);
}

void rdf_NeedDataSource(object sender, RadDataFormNeedDataSourceEventArgs e)
{
	String ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
	SqlConnection conn = new SqlConnection(ConnString);
	SqlDataAdapter adapter = new SqlDataAdapter();
	adapter.SelectCommand = new SqlCommand("SELECT CustomerID, CompanyName, ContactName, ContactTitle, Address FROM Customers", conn);

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

	(sender as RadDataForm).DataSource = myDataTable;
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
	Dim rdf As New RadDataForm()
	AddHandler rdf.NeedDataSource, AddressOf rdf_NeedDataSource
	AddHandler rdf.ItemInserting, AddressOf rdf_ItemInserting
	AddHandler rdf.ItemUpdating, AddressOf rdf_ItemUpdating
	AddHandler rdf.ItemDeleting, AddressOf rdf_ItemDeleting

	'This example distinguishes the templates by passing a string argument for the sake of brevity
	rdf.InsertItemTemplate = New MyTemplate("insertMode")
	rdf.ItemTemplate = New MyTemplate("editMode")
	rdf.EditItemTemplate = New MyTemplate("updateMode")
	Placeholder1.Controls.Add(rdf)
End Sub

Private Sub rdf_ItemDeleting(sender As Object, e As RadDataFormCommandEventArgs)
	Dim item As New Hashtable()
	'check current mode so you know which template to access. This depends on which templates the Delete button is available on
	If e.DataFormItem.IsInEditMode Then
		'method implemented in the template
		TryCast(TryCast(sender, RadDataForm).EditItemTemplate, MyTemplate).GetTemplateData(item)
	Else
		'method implemented in the template
		TryCast(TryCast(sender, RadDataForm).ItemTemplate, MyTemplate).GetTemplateData(item)
	End If
	'use the data you now have to perform the data source operation

	'show output
	ShowLastAction(item, "deleted")
End Sub

Private Sub rdf_ItemUpdating(sender As Object, e As RadDataFormCommandEventArgs)
	Dim item As New Hashtable()
	TryCast(TryCast(sender, RadDataForm).EditItemTemplate, MyTemplate).GetTemplateData(item)
	'method implemented in the template
	'use the data you now have to perform the data source operation
	'show output
	ShowLastAction(item, "updated")
End Sub

Private Sub rdf_ItemInserting(sender As Object, e As RadDataFormCommandEventArgs)
	Dim item As New Hashtable()
	TryCast(TryCast(sender, RadDataForm).InsertItemTemplate, MyTemplate).GetTemplateData(item)
	'method implemented in the template
	'use the data you now have to perform the data source operation
	'show output
	ShowLastAction(item, "created")
End Sub

Protected Sub ShowLastAction(item As Hashtable, operation As String)
	lblLastAction.Text = String.Format("item with data was {0}:<br />company name: {1}<br />contact name: {2}", operation, item("CompanyName"), item("ContactName"))
End Sub

Private Sub rdf_NeedDataSource(sender As Object, e As RadDataFormNeedDataSourceEventArgs)
	Dim ConnString As [String] = ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString
	Dim conn As New SqlConnection(ConnString)
	Dim adapter As New SqlDataAdapter()
	adapter.SelectCommand = New SqlCommand("SELECT CustomerID, CompanyName, ContactName, ContactTitle, Address FROM Customers", conn)

	Dim myDataTable As New DataTable()

	conn.Open()
	Try
		adapter.Fill(myDataTable)
	Finally
		conn.Close()
	End Try

	TryCast(sender, RadDataForm).DataSource = myDataTable
End Sub

````

>caption Sample template class definition that contains the `GetTemplateData` method

````C#
public class MyTemplate : ITemplate
{
	protected Label lblCompanyName;
	protected Label lblContactName;
	protected TextBox tBoxCompanyName;
	protected TextBox tBoxContactName;
	protected Button btnEdit;
	protected Button btnDelete;
	protected Button btnInitInsert;
	protected Button btnUpdate;
	protected Button btnCancel;
	protected Button btnPerformInsert;
	protected string mode;

	public MyTemplate(string currMode)
	{
		mode = currMode;
	}

	public void InstantiateIn(System.Web.UI.Control container)
	{
		//create some controls to show data
		tBoxCompanyName = new TextBox();
		tBoxCompanyName.ID = "tbCompanyName";
		tBoxCompanyName.DataBinding += tBoxCompanyName_DataBinding;
		if (mode == "editMode")
		{
			tBoxCompanyName.Enabled = false;
		}

		lblCompanyName = new Label();
		lblCompanyName.ID = "lblCompany";
		lblCompanyName.Text = "Company Name: ";
		lblCompanyName.AssociatedControlID = tBoxCompanyName.ID;

		container.Controls.Add(lblCompanyName);
		container.Controls.Add(tBoxCompanyName);

		tBoxContactName = new TextBox();
		tBoxContactName.ID = "tbContactName";
		tBoxContactName.DataBinding += tBoxContactName_DataBinding;
		if (mode == "editMode")
		{
			tBoxContactName.Enabled = false;
		}
		
		lblContactName = new Label();
		lblContactName.ID = "lblContact";
		lblContactName.Text = "Contact Name: ";
		lblContactName.AssociatedControlID = tBoxContactName.ID;

		container.Controls.Add(lblContactName);
		container.Controls.Add(tBoxContactName);

		//create command buttons, keep track of the mode.
		//this controls the template you need to call when obtaining data
		if (mode != "insertMode")
		{
			if (mode != "updateMode")
			{
				btnEdit = new Button();
				btnEdit.ID = "btnEdit";
				btnEdit.Text = "Edit item";
				btnEdit.CommandName = "Edit";
				container.Controls.Add(btnEdit);
			}
			
			btnDelete = new Button();
			btnDelete.ID = "btnDelete";
			btnDelete.Text = "Delete item";
			btnDelete.CommandName = "Delete";
			container.Controls.Add(btnDelete);

			btnInitInsert = new Button();
			btnInitInsert.ID = "btnInitInsert";
			btnInitInsert.Text = "Go to insert mode";
			btnInitInsert.CommandName = "InitInsert";
			container.Controls.Add(btnInitInsert);

			if (mode != "editMode")
			{
				btnUpdate = new Button();
				btnUpdate.ID = "btnUpdate";
				btnUpdate.Text = "Update item";
				btnUpdate.CommandName = "Update";
				container.Controls.Add(btnUpdate);
			}
		}
		else
		{
			btnPerformInsert = new Button();
			btnPerformInsert.ID = "btnPerformInsert";
			btnPerformInsert.Text = "Insert item";
			btnPerformInsert.CommandName = "PerformInsert";
			container.Controls.Add(btnPerformInsert);
		}

		if (mode != "editMode") 
		{
			btnCancel = new Button();
			btnCancel.ID = "btnCancel";
			btnCancel.Text = "Cancel operation";
			btnCancel.CommandName = "Cancel";
			container.Controls.Add(btnCancel);
		}
	}

	public void tBoxCompanyName_DataBinding(object sender, EventArgs e)
	{
		getFieldFromData("CompanyName", sender as TextBox);
	}

	public void tBoxContactName_DataBinding(object sender, EventArgs e)
	{
		getFieldFromData("ContactName", sender as TextBox);
	}

	public void getFieldFromData(string fieldName, TextBox tb)
	{
		RadDataFormDataItem item = tb.NamingContainer as RadDataFormDataItem;

		//avoid attempting to get data when inserting an item, as there is no data item associated with it
		if (item is RadDataFormInsertItem)
		{
			return;
		}
		//access the data item from the data source and put it in the textbox
		tb.Text = (item.DataItem as DataRowView).Row[fieldName].ToString();
	}

	public void GetTemplateData(out Hashtable newValues)
	{
		//build a hash table with the information from the template
		//so you can identify the item
		//consider adding an ID
		Hashtable tbl = new Hashtable();
		newValues = tbl;
		newValues.Add("CompanyName", tBoxCompanyName.Text);
		newValues.Add("ContactName", tBoxContactName.Text);
	}
}
````
````VB
Public Class MyTemplate
Implements ITemplate
	Protected lblCompanyName As Label
	Protected lblContactName As Label
	Protected tBoxCompanyName As TextBox
	Protected tBoxContactName As TextBox
	Protected btnEdit As Button
	Protected btnDelete As Button
	Protected btnInitInsert As Button
	Protected btnUpdate As Button
	Protected btnCancel As Button
	Protected btnPerformInsert As Button
	Protected mode As String

	Public Sub New(currMode As String)
		mode = currMode
	End Sub

	Public Sub InstantiateIn(container As System.Web.UI.Control) Implements ITemplate.InstantiateIn
		'create some controls to show data
		tBoxCompanyName = New TextBox()
		tBoxCompanyName.ID = "tbCompanyName"
		AddHandler tBoxCompanyName.DataBinding, AddressOf tBoxCompanyName_DataBinding
		If mode = "editMode" Then
			tBoxCompanyName.Enabled = False
		End If

		lblCompanyName = New Label()
		lblCompanyName.ID = "lblCompany"
		lblCompanyName.Text = "Company Name: "
		lblCompanyName.AssociatedControlID = tBoxCompanyName.ID

		container.Controls.Add(lblCompanyName)
		container.Controls.Add(tBoxCompanyName)

		tBoxContactName = New TextBox()
		tBoxContactName.ID = "tbContactName"
		AddHandler tBoxContactName.DataBinding, AddressOf tBoxContactName_DataBinding
		If mode = "editMode" Then
			tBoxContactName.Enabled = False
		End If

		lblContactName = New Label()
		lblContactName.ID = "lblContact"
		lblContactName.Text = "Contact Name: "
		lblContactName.AssociatedControlID = tBoxContactName.ID

		container.Controls.Add(lblContactName)
		container.Controls.Add(tBoxContactName)

		'create command buttons, keep track of the mode.
		'this controls the template you need to call when obtaining data
		If mode <> "insertMode" Then
			If mode <> "updateMode" Then
				btnEdit = New Button()
				btnEdit.ID = "btnEdit"
				btnEdit.Text = "Edit item"
				btnEdit.CommandName = "Edit"
				container.Controls.Add(btnEdit)
			End If

			btnDelete = New Button()
			btnDelete.ID = "btnDelete"
			btnDelete.Text = "Delete item"
			btnDelete.CommandName = "Delete"
			container.Controls.Add(btnDelete)

			btnInitInsert = New Button()
			btnInitInsert.ID = "btnInitInsert"
			btnInitInsert.Text = "Go to insert mode"
			btnInitInsert.CommandName = "InitInsert"
			container.Controls.Add(btnInitInsert)

			If mode <> "editMode" Then
				btnUpdate = New Button()
				btnUpdate.ID = "btnUpdate"
				btnUpdate.Text = "Update item"
				btnUpdate.CommandName = "Update"
				container.Controls.Add(btnUpdate)
			End If
		Else
			btnPerformInsert = New Button()
			btnPerformInsert.ID = "btnPerformInsert"
			btnPerformInsert.Text = "Insert item"
			btnPerformInsert.CommandName = "PerformInsert"
			container.Controls.Add(btnPerformInsert)
		End If

		If mode <> "editMode" Then
			btnCancel = New Button()
			btnCancel.ID = "btnCancel"
			btnCancel.Text = "Cancel operation"
			btnCancel.CommandName = "Cancel"
			container.Controls.Add(btnCancel)
		End If
	End Sub

	Public Sub tBoxCompanyName_DataBinding(sender As Object, e As EventArgs)
		getFieldFromData("CompanyName", TryCast(sender, TextBox))
	End Sub

	Public Sub tBoxContactName_DataBinding(sender As Object, e As EventArgs)
		getFieldFromData("ContactName", TryCast(sender, TextBox))
	End Sub

	Public Sub getFieldFromData(fieldName As String, tb As TextBox)
		Dim item As RadDataFormDataItem = TryCast(tb.NamingContainer, RadDataFormDataItem)

		'avoid attempting to get data when inserting an item, as there is no data item associated with it
		If TypeOf item Is RadDataFormInsertItem Then
			Return
		End If
		'access the data item from the data source and put it in the textbox
		tb.Text = TryCast(item.DataItem, DataRowView).Row(fieldName).ToString()
	End Sub

	Public Sub GetTemplateData(ByRef newValues As Hashtable)
		'build a hash table with the information from the template
		'so you can identify the item
		'consider adding an ID
		Dim tbl As New Hashtable()
		newValues = tbl
		newValues.Add("CompanyName", tBoxCompanyName.Text)
		newValues.Add("ContactName", tBoxContactName.Text)
	End Sub
End Class
````


