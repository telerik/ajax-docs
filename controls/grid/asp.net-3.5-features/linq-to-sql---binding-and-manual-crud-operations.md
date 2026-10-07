---
title: LINQ to SQL - Binding and Manual CRUD Operations
page_title: LINQ to SQL Binding and Manual CRUD - RadGrid
description: Learn how to bind RadGrid to LINQ to SQL data and implement manual insert, update, and delete operations in ASP.NET AJAX.
slug: grid/asp.net-3.5-features/linq-to-sql---binding-and-manual-crud-operations
tags: linq,to,sql,-,binding,and,manual,crud,operations
published: True
position: 3
---

# LINQ to SQL - Binding and Manual CRUD Operations

LINQ to SQL is an object-relational mapping (ORM) implementation included in ASP.NET Framework 3.5. It lets you model a relational database with .NET classes, query the database with LINQ, and update, insert, or delete data. LINQ to SQL tracks changes to the objects and translates the queries and updates into SQL for the database.

LINQ to SQL supports transactions, views, and stored procedures. It also provides a way to integrate data validation and business logic rules into your data model.

For more information about LINQ to SQL, review the following resources:

- [Using LINQ to SQL](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/sql/linq/)
- [LINQ to SQL: .NET Language-Integrated Query for Relational Data](https://msdn.microsoft.com/en-us/library/bb425822.aspx).

## Binding RadGrid to LINQ to SQL

RadGrid for ASP.NET AJAX provides a programmatic way to bind to `IEnumerable` data returned from LINQ queries, as shown in the [manual LINQ update demo](https://demos.telerik.com/aspnet-ajax/grid/examples/dataediting/programaticlinqupdates/defaultcs.aspx). The example supports manual data editing, paging, and sorting. Handle the `NeedDataSource` event to provide the data source, and handle the `UpdateCommand`, `InsertCommand`, and `DeleteCommand` events to edit the data.

## Configuring the Grid and CRUD Event Handlers

The following code snippets show the example configuration. They also demonstrate how to configure `RadInputManager` to manage user input in the edit and insert forms.

> caption Example: Binding RadGrid to LINQ to SQL for manual CRUD operations

````ASP.NET
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">            function rowDblClick(sender, eventArgs) { sender.get_masterTableView().editItem(eventArgs.get_itemIndexHierarchical()); }            </script>
</telerik:RadCodeBlock>
<telerik:RadAjaxManager runat="server" ID="RadAjaxManager1" DefaultLoadingPanelID="RadAjaxLoadingPanel1">
    <AjaxSettings>
  <telerik:AjaxSetting AjaxControlID="RadGrid1">
    <UpdatedControls>
      <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
      <telerik:AjaxUpdatedControl ControlID="RadWindowManager1" />
      <telerik:AjaxUpdatedControl ControlID="RadInputManager1" />
    </UpdatedControls>
  </telerik:AjaxSetting>
</AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadAjaxLoadingPanel runat="server" ID="RadAjaxLoadingPanel1" />
<telerik:RadGrid RenderMode="Lightweight" runat="server" ID="RadGrid1" AutoGenerateColumns="false" AllowPaging="true"
    OnNeedDataSource="RadGrid1_NeedDataSource" OnUpdateCommand="RadGrid1_UpdateCommand"
    OnItemCreated="RadGrid1_ItemCreated" OnDeleteCommand="RadGrid1_DeleteCommand"
    OnInsertCommand="RadGrid1_InsertCommand">
    <MasterTableView DataKeyNames="ProductID" CommandItemDisplay="Top" InsertItemPageIndexAction="ShowItemOnCurrentPage">
  <Columns>
    <telerik:GridEditCommandColumn ButtonType="ImageButton" />
    <telerik:GridBoundColumn DataField="ProductID" HeaderText="Product ID" ReadOnly="true"
      ForceExtractValue="Always" ConvertEmptyStringToNull="true" />
    <telerik:GridBoundColumn DataField="ProductName" HeaderText="Product Name" />
    <telerik:GridBoundColumn DataField="UnitsInStock" HeaderText="Units In Stock" />
    <telerik:GridBoundColumn DataField="UnitPrice" HeaderText="Price" DataFormatString="{0:c}" />
    <telerik:GridButtonColumn ConfirmText="Delete this product?" ConfirmDialogType="RadWindow"
      ConfirmTitle="Delete" ButtonType="ImageButton" CommandName="Delete" />
  </Columns>
  <EditFormSettings>
    <EditColumn ButtonType="ImageButton" />
  </EditFormSettings>
    </MasterTableView>
    <PagerStyle Mode="NextPrevAndNumeric" />
    <ClientSettings>
  <ClientEvents OnRowDblClick="rowDblClick" />
</ClientSettings>
</telerik:RadGrid>
<telerik:RadInputManager RenderMode="Lightweight" runat="server" ID="RadInputManager1" Enabled="true">
    <telerik:TextBoxSetting BehaviorID="TextBoxSetting1">
    </telerik:TextBoxSetting>
    <telerik:NumericTextBoxSetting BehaviorID="NumericTextBoxSetting1" Type="Currency"
        AllowRounding="true" DecimalDigits="2">
    </telerik:NumericTextBoxSetting>
    <telerik:NumericTextBoxSetting BehaviorID="NumericTextBoxSetting2" Type="Number"
        AllowRounding="true" DecimalDigits="0" MinValue="0">
    </telerik:NumericTextBoxSetting>
</telerik:RadInputManager>
<telerik:RadWindowManager RenderMode="Lightweight" ID="RadWindowManager1" runat="server" />
````
````C#
private NorthwindDataContext _dataContext;
protected NorthwindDataContext DbContext
{
    get
    {
        if (_dataContext == null)
        {
            _dataContext = new NorthwindDataContext();
        }
        return _dataContext;
    }
}

public override void Dispose()
{
    if (_dataContext != null)
    {
        _dataContext.Dispose();
    }
    base.Dispose();
}

protected void RadGrid1_NeedDataSource(object source, GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = DbContext.Products;
}

protected void RadGrid1_UpdateCommand(object source, GridCommandEventArgs e)
{
    var editableItem = ((GridEditableItem)e.Item);
    var productId = (int)editableItem.GetDataKeyValue("ProductID");
            // retrieve the entity from the database
    var product = DbContext.Products.Where(n => n.ProductID == productId).FirstOrDefault();
    if (product != null)
    {
        //update entity's state             
        editableItem.UpdateValues(product);
        try
        {
            // submit changes to the database

            DbContext.SubmitChanges();
        }
        catch (System.Exception)
        {
            ShowErrorMessage();
        }
    }
}

private void ShowErrorMessage()
{
    RadAjaxManager1.ResponseScripts.Add(string.Format("window.radalert(\"Please enter valid data!\")"));
}

protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridEditableItem && (e.Item.IsInEditMode))
    {
        GridEditableItem editableItem = (GridEditableItem)e.Item;
        SetupInputManager(editableItem);
    }
}

private void SetupInputManager(GridEditableItem editableItem)
{
    // style and set ProductName column's textbox as required     
    var textBox = ((GridTextBoxColumnEditor)editableItem.EditManager.GetColumnEditor("ProductName")).TextBoxControl;
    textBox.ID = "TextBox1";
    InputSetting inputSetting = RadInputManager1.GetSettingByBehaviorID("TextBoxSetting1");
    inputSetting.TargetControls.Add(new TargetInput(textBox.UniqueID, true));
    inputSetting.InitializeOnClient = true;
    inputSetting.Validation.IsRequired = true;
    // style UnitPrice column's textbox   
    textBox = ((GridTextBoxColumnEditor)editableItem.EditManager.GetColumnEditor("UnitPrice")).TextBoxControl;
    textBox.ID = "TextBox2";
    inputSetting = RadInputManager1.GetSettingByBehaviorID("NumericTextBoxSetting1");
    inputSetting.InitializeOnClient = true;
    inputSetting.TargetControls.Add(new TargetInput(textBox.UniqueID, true));
    // style UnitsInStock column's textbox  
    textBox = ((GridTextBoxColumnEditor)editableItem.EditManager.GetColumnEditor("UnitsInStock")).TextBoxControl;
    textBox.ID = "TextBox3";
    inputSetting = RadInputManager1.GetSettingByBehaviorID("NumericTextBoxSetting2");
    inputSetting.InitializeOnClient = true;
    inputSetting.TargetControls.Add(new TargetInput(textBox.UniqueID, true));
}

protected void RadGrid1_InsertCommand(object source, GridCommandEventArgs e)
{
    var editableItem = ((GridEditableItem)e.Item);
    //create new entity           
    var product = new LinqToSql.Product();
    //populate its properties   
    Hashtable values = new Hashtable();
    editableItem.ExtractValues(values);
    product.ProductName = (string)values["ProductName"];
    if (values["UnitsInStock"] != null)
    {
        product.UnitsInStock = short.Parse(values["UnitsInStock"].ToString());
    }
    if (values["UnitPrice"] != null)
    {
        product.UnitPrice = decimal.Parse(values["UnitPrice"].ToString());
    }
    DbContext.Products.InsertOnSubmit(product);
    try
    {
            // submit changes to the database
        DbContext.SubmitChanges();
    }
    catch (System.Exception)
    {
        ShowErrorMessage();
    }
}

protected void RadGrid1_DeleteCommand(object source, GridCommandEventArgs e)
{
    var productId = (int)((GridDataItem)e.Item).GetDataKeyValue("ProductID");
    // retrieve the entity from the database
    var product = DbContext.Products.Where(n => n.ProductID == productId).FirstOrDefault();
    if (product != null)
    {
            // add the product for deletion
        DbContext.Products.DeleteOnSubmit(product);
        try
        {
            // submit changes to the database
            DbContext.SubmitChanges();
        }
        catch (System.Exception)
        {
            ShowErrorMessage();
        }
    }
}
````
````VB.NET
Private _dataContext As NorthwindDataContext
Protected ReadOnly Property DbContext() As NorthwindDataContext
    Get
        If _dataContext Is Nothing Then
            _dataContext = New NorthwindDataContext()
        End If
        Return _dataContext
    End Get
End Property
Public Overloads Overrides Sub Dispose()
    If _dataContext IsNot Nothing Then
        _dataContext.Dispose()
    End If
    MyBase.Dispose()
End Sub

Protected Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As GridNeedDataSourceEventArgs) Handles RadGrid1.NeedDataSource
    RadGrid1.DataSource = DbContext.Products
End Sub

Protected Sub RadGrid1_UpdateCommand(ByVal source As Object, ByVal e As GridCommandEventArgs) Handles RadGrid1.UpdateCommand
    Dim editableItem = (DirectCast(e.Item, GridEditableItem))
    Dim productId = DirectCast(editableItem.GetDataKeyValue("ProductID"), Integer)
    ' retrieve the entity from the database
    Dim product = DbContext.Products.Where(Function(n) n.ProductID = productId).FirstOrDefault()
    If product IsNot Nothing Then
        'update entity's state
        editableItem.UpdateValues(product)
        Try
            ' submit changes to the database
            DbContext.SubmitChanges()
        Catch generatedExceptionName As System.Exception
            ShowErrorMessage()
        End Try
    End If
End Sub

Private Sub ShowErrorMessage()
    RadAjaxManager1.ResponseScripts.Add(String.Format("window.radalert(""Please enter valid data!"")"))
End Sub

Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs) Handles RadGrid1.ItemCreated
    If TypeOf e.Item Is GridEditableItem AndAlso (e.Item.IsInEditMode) Then
        Dim editableItem As GridEditableItem = DirectCast(e.Item, GridEditableItem)
        SetupInputManager(editableItem)
    End If
End Sub

Private Sub SetupInputManager(ByVal editableItem As GridEditableItem)
    ' style and set ProductName column's textbox as required
    Dim textBox = (DirectCast(editableItem.EditManager.GetColumnEditor("ProductName"), GridTextBoxColumnEditor)).TextBoxControl
    textBox.ID = "TextBox1"
    Dim inputSetting As InputSetting = RadInputManager1.GetSettingByBehaviorID("TextBoxSetting1")
    inputSetting.TargetControls.Add(New TargetInput(textBox.UniqueID, True))
    inputSetting.InitializeOnClient = True
    inputSetting.Validation.IsRequired = True
    ' style UnitPrice column's textbox
    textBox = (DirectCast(editableItem.EditManager.GetColumnEditor("UnitPrice"), GridTextBoxColumnEditor)).TextBoxControl
    textBox.ID = "TextBox2"
    inputSetting = RadInputManager1.GetSettingByBehaviorID("NumericTextBoxSetting1")
    inputSetting.InitializeOnClient = True
    inputSetting.TargetControls.Add(New TargetInput(textBox.UniqueID, True))
    ' style UnitsInStock column's textbox
    textBox = (DirectCast(editableItem.EditManager.GetColumnEditor("UnitsInStock"), GridTextBoxColumnEditor)).TextBoxControl
    textBox.ID = "TextBox3"
    inputSetting = RadInputManager1.GetSettingByBehaviorID("NumericTextBoxSetting2")
    inputSetting.InitializeOnClient = True
    inputSetting.TargetControls.Add(New TargetInput(textBox.UniqueID, True))
End Sub

Protected Sub RadGrid1_InsertCommand(ByVal source As Object, ByVal e As GridCommandEventArgs) Handles RadGrid1.InsertCommand
    Dim editableItem = (DirectCast(e.Item, GridEditableItem))
    'create new entity
    Dim product = New LinqToSql.Product()
    'populate its properties
    Dim values As New Hashtable()
    editableItem.ExtractValues(values)
    product.ProductName = DirectCast(values("ProductName"), String)
    If values("UnitsInStock") IsNot Nothing Then
        product.UnitsInStock = Short.Parse(values("UnitsInStock").ToString())
    End If
    If values("UnitPrice") IsNot Nothing Then
        product.UnitPrice = Decimal.Parse(values("UnitPrice").ToString())
    End If
    DbContext.Products.InsertOnSubmit(product)
    Try
        ' submit changes to the database
        DbContext.SubmitChanges()
    Catch generatedExceptionName As System.Exception
        ShowErrorMessage()
    End Try
End Sub

Protected Sub RadGrid1_DeleteCommand(ByVal source As Object, ByVal e As GridCommandEventArgs) Handles RadGrid1.DeleteCommand
    Dim productId = DirectCast((DirectCast(e.Item, GridDataItem)).GetDataKeyValue("ProductID"), Integer)
    ' retrieve the entity from the database
    Dim product = DbContext.Products.Where(Function(n) n.ProductID = productId).FirstOrDefault()
    If product IsNot Nothing Then
        'add the product for deletion
        DbContext.Products.DeleteOnSubmit(product)
        Try
            ' submit changes to the database
            DbContext.SubmitChanges()
        Catch generatedExceptionName As System.Exception
            ShowErrorMessage()
        End Try
    End If
End Sub
````

## See Also

- [Automatic LINQ to SQL CRUD operations]({%slug grid/asp.net-3.5-features/linq-to-sql---binding-and-automatic-crud-operations%})
- [Entity Framework binding and CRUD operations]({%slug grid/asp.net-3.5-features/entity-framework---binding-and-crud-operations%})
- [Client binding to WCF and ADO.NET data services]({%slug grid/asp.net-3.5-features/client-binding-to-wcf-web-service-and-ado.net-data-service%})

