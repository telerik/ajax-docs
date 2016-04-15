---
title: Accessing Expression Items
page_title: Accessing Expression Items | RadFilter for ASP.NET AJAX Documentation
description: Accessing Expression Items
slug: filter/filter-expressions/accessing-expression-items
tags: accessing,expression,items
published: True
position: 3
---

# Accessing Expression Items



## Accessing Items

RadFilter exposes the **ExpressionItemCreated** event which is fired after each item creation.It provides a more easy and intuitive way of accessing the filter expression items. Depending on expressionthat was created the item in the arguments could be either **RadFilterSingleExpressionItem** or **RadFilterGroupExpression**.

Below is a sample code implementation which demonstrates how you can manipulate the filter items.	The code logic forbids the creation of sub-group expressions by hiding the **AddGroupExpressionButton** and populates the	**RadFilterDropDownEditor** with data.



````ASPNET
<div class="filterDiv">
    <telerik:RadFilter RenderMode="Lightweight" runat="server" ID="RadFilter1" FilterContainerID="RadGrid1" ShowApplyButton="true" 
        OnExpressionItemCreated="RadFilter1_ExpressionItemCreated">
        <FieldEditors>
            <telerik:RadFilterDropDownEditor FieldName="ShipCountry" DataTextField="ShipCountry"
                DataValueField="ShipCountry" />
        </FieldEditors>
    </telerik:RadFilter>
</div>
<telerik:RadGrid RenderMode="Lightweight" runat="server" ID="RadGrid1" AutoGenerateColumns="false" DataSourceID="SqlDataSource1"
    AllowPaging="true" AllowSorting="true" AllowFilteringByColumn="true">
    <MasterTableView IsFilterItemExpanded="false" CommandItemDisplay="Top">
        <Columns>
            <telerik:GridNumericColumn DataField="OrderID" HeaderText="OrderID" DataType="System.Int32">
            </telerik:GridNumericColumn>
            <telerik:GridDateTimeColumn DataField="OrderDate" HeaderText="OrderDate" DataFormatString="{0:MM/dd/yyyy}">
            </telerik:GridDateTimeColumn>
            <telerik:GridNumericColumn DataField="ShipVia" HeaderText="ShipVia" DataType="System.Int32">
            </telerik:GridNumericColumn>
            <telerik:GridBoundColumn DataField="ShipName" HeaderText="ShipName">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ShipAddress" HeaderText="ShipAddress">
            </telerik:GridBoundColumn>
            <telerik:GridNumericColumn DataField="Freight" HeaderText="Freight" DataType="System.Decimal">
            </telerik:GridNumericColumn>
            <telerik:GridNumericColumn DataField="ShipCountry" HeaderText="ShipCountry">
            </telerik:GridNumericColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
<asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="Select OrderID, OrderDate, ShipVia, ShipName, ShipAddress, Freight, ShipCountry FROM Orders">
</asp:SqlDataSource>
````
````C#
public DataTable GetDataTable(string query)
{
    String ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
    SqlConnection conn = new SqlConnection(ConnString);
    SqlDataAdapter adapter = new SqlDataAdapter();
    adapter.SelectCommand = new SqlCommand(query, conn);

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

protected void RadFilter1_ExpressionItemCreated(object sender, RadFilterExpressionItemCreatedEventArgs e)
{

    // Populate the RadDropDownList control for every ShipCountry field editor
    RadFilterSingleExpressionItem singleItem = e.Item as RadFilterSingleExpressionItem;
    if (singleItem != null && singleItem.FieldName == "ShipCountry" && singleItem.IsSingleValue)
    {
        RadDropDownList dropDownList = singleItem.InputControl as RadDropDownList;
        dropDownList.DataSource = GetDataTable("SELECT DISTINCT ShipCountry FROM Orders");
        dropDownList.DataBind();
    }

    // Removes the AddGroupExpressionButton for group expression other than the root group
    RadFilterGroupExpressionItem groupItem = e.Item as RadFilterGroupExpressionItem;
    if (groupItem != null)
    {
        if (groupItem.IsRootGroup) groupItem.RemoveButton.Visible = false;
        else groupItem.AddGroupExpressionButton.Visible = false;
    }
}
````
````VB.NET
Public Function GetDataTable(query As String) As DataTable
    Dim ConnString As [String] = ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString
    Dim conn As New SqlConnection(ConnString)
    Dim adapter As New SqlDataAdapter()
    adapter.SelectCommand = New SqlCommand(query, conn)

    Dim myDataTable As New DataTable()

    conn.Open()
    Try
        adapter.Fill(myDataTable)
    Finally
        conn.Close()
    End Try

    Return myDataTable
End Function

Protected Sub RadFilter1_ExpressionItemCreated(sender As Object, e As RadFilterExpressionItemCreatedEventArgs) Handles RadFilter1.ExpressionItemCreated

    ' Populate the RadDropDownList control for every ShipCountry field editor
    Dim singleItem As RadFilterSingleExpressionItem = TryCast(e.Item, RadFilterSingleExpressionItem)
    If singleItem IsNot Nothing AndAlso singleItem.FieldName = "ShipCountry" AndAlso singleItem.IsSingleValue Then
        Dim dropDownList As RadDropDownList = TryCast(singleItem.InputControl, RadDropDownList)
        dropDownList.DataSource = GetDataTable("SELECT DISTINCT ShipCountry FROM Orders")
        dropDownList.DataBind()
    End If

    ' Removes the AddGroupExpressionButton for group expression other than the root group
    Dim groupItem As RadFilterGroupExpressionItem = TryCast(e.Item, RadFilterGroupExpressionItem)
    If groupItem IsNot Nothing Then
        If groupItem.IsRootGroup Then
            groupItem.RemoveButton.Visible = False
        Else
            groupItem.AddGroupExpressionButton.Visible = False
        End If
    End If
End Sub
````


## 

In the tables below are listed the properties of the expression items according to the type.


#### RadFilterExpressionItem

|  **Property**  |  **Description**  |
| ------ | ------ |
| **FunctionalInterfaceContainer** |Gets the container holding the links menu - the GroupOperation(for RadFilterGroupExpressionItem), FilterFunction and the editor FieldName.|
| **ToolsInterfaceContainer** |Gets the container holding item specific controls. An input control for the RadFilterSingleExpressionItem and AddGroupExpression, AddItemExpression for the RadFilterGroupExpressionItem.|
| **RemoveButton** |Gets a reference to the remove button which removes an expression from the RadFilter expression tree.|


#### RadFilterGroupExpressionItem

|  **Property**  |  **Description**  |
| ------ | ------ |
| **GroupOperationChooserLink** |Gets the HyperLink control which chooses the item expression GroupOperation value|
| **AddExpressionButton** |Gets the LinkButton control which adds a new RadFilterSingleExpressionItem to the RadFilter expression items tree|
| **AddGroupExpressionButton** |Gets the LinkButton control which adds a new RadFilterGroupExpressionItem to the RadFilter expression items tree|


#### RadFilterSingleExpressionItem

|  **Property**  |  **Description**  |
| ------ | ------ |
| **FieldName** |Gets the associated RadFilterNonGroupExpression.FieldName value|
| **IsSingleValue** |Gets a value indicating if the expression item have only one value. If the property returns true the InputControl value will not be null|
| **IsDoubleValue** |Gets a value indicating if the expression item have two values (between filtering is performed). If the property returns true the SecondInputControl value will not be null|
| **InputControl** |The input control which determines an expression value. The property could return null if the Expression is not of type IRadFilterValueExpression|
| **SecondInputControl** |The second input control which determines the second expression value when performing between filtering. The property will not return null only when performing between filtering|
| **FieldNameChooserLink** |Gets the HyperLink control which is used for choosing the FieldName|
| **FilterFunctionChooserLink** |Gets the HyperLink control which is used for choosing the FilterFunction|
| **BetweenDelimeter** |Gets the LiteralControl which is placed between the two input controls when the filter function is "Between" or "NotBetween"|
