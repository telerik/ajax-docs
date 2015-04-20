---
title: Manual CRUD Operations
page_title: Manual CRUD Operations | RadDataForm for ASP.NET AJAX 
description: Manual CRUD Operations
slug: dataform/data-editing/manual-crud-operations
tags: manual,crud,operations
published: True
position: 1
---

# Manual CRUD Operations



In this help article you will find helpful information on how to manually edit, insert or delete records using the RadDataForm API.

The general logic behind manual CRUD operations is the same as for the other data bound controls in the suite (**RadGrid**, **RadListView** and etc). It allows developers to manuallyhandle the operations thus providing extra flexibility. For extracting the values needed for performing therespective CRUD operation can use the **ExtractValues** method or reference the editors using **FindControl** and obtain their data.

## Updating records

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


## Inserting records

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


## Deleting records

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


## Example

The below provided code snippets illustrate a sample implementation of a scenario where a **RadDataForm** with manual operations is used.



````ASPNET
<telerik:RadDataForm ID="RadDataForm1" OnNeedDataSource="RadDataForm1_NeedDataSource" OnItemUpdating="RadDataForm1_ItemUpdating" 
    OnItemInserting="RadDataForm1_ItemInserting" OnItemDeleting="RadDataForm1_ItemDeleting"
     DataKeyNames="ID" runat="server">
    <ItemTemplate>
        ContactTitle:   '<%# Eval("ContactTitle") %>'
		<br />
        CompanyName: <%# Eval("CompanyName") %>
		<br />
        ContactName: <%# Eval("ContactName") %>
        <telerik:RadButton ID="InitInsertButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="InitInsert" Text="Insert" ToolTip="Insert" />
        <br />
        <telerik:RadButton ID="EditButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="Edit" Text="Edit" ToolTip="Edit" />
        <br />
        <telerik:RadButton ID="DeleteButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="Delete" Text="Delete" ToolTip="Delete" />
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
        <telerik:RadButton ID="UpdateButton" runat="server" ButtonType="SkinnedButton" CommandName="Update" Text="Update" ToolTip="Update" />
        <telerik:RadButton ID="CancelButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="Cancel" Text="Cancel" ToolTip="Cancel" />
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
        <telerik:RadButton ID="PerformInsertButton" runat="server" ButtonType="SkinnedButton" CommandName="PerformInsert" Text="Insert" ToolTip="Insert" />
        <telerik:RadButton ID="CancelButton" runat="server" ButtonType="SkinnedButton" CausesValidation="False" CommandName="Cancel" Text="Cancel" ToolTip="Cancel" />
    </InsertItemTemplate>
</telerik:RadDataForm>
````
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

