---
title:  Custom Storage Provider
page_title: Custom Storage Provider - RadPersistenceFramework
description: Check our Web Forms article about Custom Storage Provider.
slug: persistenceframework/functionality/-custom-storage-provider
tags: custom,storage,provider
published: True
position: 0
---

#  Custom Storage Provider

**RadPersistenceManager** provides the ability for using different providers to store the save state of the controls.

## Implementing a Custom Storage Provider

By default **RadPersistenceManager** store the save state of the controls in an XML file to physical directory within the web application. You may need an alternative mechanism in some scenarios (e.g. saving the state of the control in a Cookie, Database etc.). To create a custom storage provider you need to create a decedent of **IStateStorageProvider** and implement its methods.

The steps to implement a custom storage provider are:

1. Create a class that implements **IStateStorageProvider**

2. Implement **SaveStateToStorage** and **LoadStateFromStorage** methods.

	**C#**
	
        using Telerik.Web.UI.PersistenceFramework;

		public class CustomStorageProvider : IStateStorageProvider
		{
			public void SaveStateToStorage(string key, string serializedState)
			{
				// Save the serialized state somewhere
			}

			public string LoadStateFromStorage(string key)
			{
				return "The saved state";
			}
		}
	
	**VB**
	
        Imports Telerik.Web.UI.PersistenceFramework

		Public Class CustomStorageProvider
			Implements Telerik.Web.UI.PersistenceFramework.IStateStorageProvider
			Public Sub SaveStateToStorage(key As String, serializedState As String) Implements IStateStorageProvider.SaveStateToStorage
				' Save the serialized state somewhere
			End Sub

			Public Function LoadStateFromStorage(key As String) As String Implements IStateStorageProvider.LoadStateFromStorage
				Return "The saved state"
			End Function
		End Class

3. Set the storage provider used by **RadPersistenceManager** for storing the serialized control state.

	**C#**
	
		protected void Page_Init(object sender, EventArgs e)
		{
			RadPersisterManager1.StorageProvider = new CustomStorageProvider();
		}
		
	**VB**
		
		Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
			RadPersisterManager1.StorageProvider = New CustomStorageProvider()
		End Sub

		
The example below demonstrates how to store the state of the **RadGrid** directly to the database.


````ASP.NET
<telerik:RadPersistenceManager ID="RadPersistenceManager1" runat="server">
    <PersistenceSettings>
        <telerik:PersistenceSetting ControlID="RadGrid1" />
    </PersistenceSettings>
</telerik:RadPersistenceManager>
<telerik:RadComboBox RenderMode="Lightweight" runat="server" ID="UserSelection" AutoPostBack="true" Width="200px">
    <Items>
        <telerik:RadComboBoxItem Text="User1" Value="1" Selected="true"></telerik:RadComboBoxItem>
        <telerik:RadComboBoxItem Text="User2" Value="2"></telerik:RadComboBoxItem>
        <telerik:RadComboBoxItem Text="User3" Value="3"></telerik:RadComboBoxItem>
    </Items>
</telerik:RadComboBox>
<asp:Button Text="Save settings" ID="SaveSetting" OnClick="SaveSetting_Click" runat="server" />
<asp:Button Text="Load settings" ID="LoadSetting" OnClick="LoadSetting_Click" runat="server" />
<telerik:RadGrid RenderMode="Lightweight" runat="server" ID="RadGrid1" GridLines="None" ShowFooter="True"
    DataSourceID="SqlDataSource1" AllowFilteringByColumn="True" AllowSorting="True"
    ShowGroupPanel="True" AllowPaging="true" PageSize="10">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="CustomerID" DataSourceID="SqlDataSource1"
        EnableHeaderContextMenu="true">
        <Columns>
            <telerik:GridBoundColumn DataField="CustomerID" DefaultInsertValue="" HeaderText="CustomerID"
                ReadOnly="True" SortExpression="CustomerID" UniqueName="CustomerID">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="CompanyName" DefaultInsertValue="" HeaderText="CompanyName"
                SortExpression="CompanyName" UniqueName="CompanyName">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ContactName" DefaultInsertValue="" HeaderText="ContactName"
                SortExpression="ContactName" UniqueName="ContactName">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ContactTitle" DefaultInsertValue="" HeaderText="ContactTitle"
                SortExpression="ContactTitle" UniqueName="ContactTitle">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="City" DefaultInsertValue="" HeaderText="City"
                SortExpression="City" UniqueName="City">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
    <ClientSettings AllowDragToGroup="True" AllowColumnsReorder="True">
        <Resizing AllowColumnResize="true"></Resizing>
    </ClientSettings>
</telerik:RadGrid>
<asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT [CustomerID], [CompanyName], [ContactName], [ContactTitle], [Address], [City] FROM [Customers]"
    runat="server"></asp:SqlDataSource>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadPersistenceManager1.StorageProvider = new DBStorageProvider();
}

protected void SaveSetting_Click(object sender, EventArgs e)
{
    string user = UserSelection.SelectedValue;
    RadPersistenceManager1.StorageProviderKey = user;
    RadPersistenceManager1.SaveState();
}
protected void LoadSetting_Click(object sender, EventArgs e)
{
    string user = UserSelection.SelectedValue;
    RadPersistenceManager1.StorageProviderKey = user;
    RadPersistenceManager1.LoadState();
    RadGrid1.Rebind();
}
````
````VB
Protected Sub Page_Init(sender As Object, e As EventArgs) Handles Me.Init
    RadPersistenceManager1.StorageProvider = New DBStorageProvider()
End Sub

Protected Sub SaveSetting_Click(sender As Object, e As EventArgs)
    Dim user As String = UserSelection.SelectedValue
    RadPersistenceManager1.StorageProviderKey = user
    RadPersistenceManager1.SaveState()
End Sub
Protected Sub LoadSetting_Click(sender As Object, e As EventArgs)
    Dim user As String = UserSelection.SelectedValue
    RadPersistenceManager1.StorageProviderKey = user
    RadPersistenceManager1.LoadState()
    RadGrid1.Rebind()
End Sub
````



````C#
using Telerik.Web.UI.PersistenceFramework;

public class DBStorageProvider : IStateStorageProvider
{
	//Declare a global SqlConnection SqlConnection
	SqlConnection SqlConnection = new SqlConnection(ConfigurationManager.ConnectionStrings["UserSettingsConnectionString"].ConnectionString);
	//Declare a global SqlDataAdapter SqlDataAdapter
	public SqlDataAdapter SqlDataAdapter = new SqlDataAdapter();
	//Declare a global SqlCommand SqlCommand
	public SqlCommand SqlCommand = new SqlCommand();

	public void SaveStateToStorage(string key, string serializedState)
	{
		int userID = int.Parse(key);
		string userSettings = serializedState;

		//Open the SqlConnection
		SqlConnection.Open();
		//Update Query to update the Datatable  
		string updateQuery = "UPDATE UserSetting set UserID='" + userID + "',UserSaveSettings='" + userSettings + "'";
		SqlCommand.CommandText = updateQuery;
		SqlCommand.Connection = SqlConnection;
		SqlCommand.ExecuteNonQuery();
		//Close the SqlConnectio
		SqlConnection.Close();
	}
	public string LoadStateFromStorage(string key)
	{

		string selectQuery = "SELECT UserID, UserSaveSettings FROM UserSetting WHERE UserID = '" + key + "'";
		SqlDataAdapter adapter = new SqlDataAdapter();
		adapter.SelectCommand = new SqlCommand(selectQuery, SqlConnection);
		DataTable myDataTable = new DataTable();
		SqlConnection.Open();

		try
		{
			adapter.Fill(myDataTable);
		}
		finally
		{
			SqlConnection.Close();
		}

		return myDataTable.Rows[0]["UserSaveSettings"].ToString();
	}
}
````
````VB
Imports Telerik.Web.UI.PersistenceFramework

Public Class DBStorageProvider
    Implements IStateStorageProvider
    'Declare a global SqlConnection SqlConnection
    Private SqlConnection As New SqlConnection(ConfigurationManager.ConnectionStrings("UserSettingsConnectionString").ConnectionString)
    'Declare a global SqlDataAdapter SqlDataAdapter
    Public SqlDataAdapter As New SqlDataAdapter()
    'Declare a global SqlCommand SqlCommand
    Public SqlCommand As New SqlCommand()

    Public Sub SaveStateToStorage(key As String, serializedState As String) Implements IStateStorageProvider.SaveStateToStorage
        Dim userID As Integer = Integer.Parse(key)
        Dim userSettings As String = serializedState

        'Open the SqlConnection
        SqlConnection.Open()
        'Update Query to update the Datatable  
        Dim updateQuery As String = (Convert.ToString("UPDATE UserSetting set UserID='" + userID + "',UserSaveSettings='") & userSettings) + "'"
        SqlCommand.CommandText = updateQuery
        SqlCommand.Connection = SqlConnection
        SqlCommand.ExecuteNonQuery()
        'Close the SqlConnectio
        SqlConnection.Close()
    End Sub
    Public Function LoadStateFromStorage(key As String) As String Implements IStateStorageProvider.LoadStateFromStorage

        Dim selectQuery As String = (Convert.ToString("SELECT UserID, UserSaveSettings FROM UserSetting WHERE UserID = '") & key) + "'"
        Dim adapter As New SqlDataAdapter()
        adapter.SelectCommand = New SqlCommand(selectQuery, SqlConnection)
        Dim myDataTable As New DataTable()
        SqlConnection.Open()

        Try
            adapter.Fill(myDataTable)
        Finally
            SqlConnection.Close()
        End Try

        Return myDataTable.Rows(0)("UserSaveSettings").ToString()
    End Function
End Class
````






 
