---
title: LINQ To SQL - Binding and Manual CRUD Operations
page_title: LINQ To SQL - Binding and Manual CRUD Operations | RadGrid for ASP.NET AJAX Documentation
description: LINQ To SQL - Binding and Manual CRUD Operations
slug: grid/asp.net-3.5-features/linq-to-sql---binding-and-manual-crud-operations
tags: linq,to,sql,-,binding,and,manual,crud,operations
published: True
position: 3
---

# LINQ To SQL - Binding and Manual CRUD Operations



## 

LINQ to SQL is an ORM (object relational mapping) implementation that ships in the ASP.NET Framework 3.5 release, and which allows you to model a relational database using .NET classes.You can then query the database using LINQ, as well as update/insert/delete data from it. LINQ to SQL provides a runtime infrastructure for managing relational data as objects without losing the ability to query. It does this by translating language-integrated queries into SQL for execution by the database, and then translating the tabular results back into objects you define. Your application is then free to manipulate the objects while LINQ to SQL stays in the background tracking your changes automatically.

LINQ to SQL fully supports transactions, views, and stored procedures.It also provides an easy way to integrate data validation and business logic rules into your data model.

For more information concerning LINQ to SQL review ScottGu's series of blog posts on this subject or the MSDN tutorial linked below:

Using LINQ to SQL (from [part 1](http://weblogs.asp.net/scottgu/archive/2007/05/19/using-linq-to-sql-part-1.aspx) to [part 5](http://weblogs.asp.net/scottgu/archive/2007/07/16/linq-to-sql-part-5-binding-ui-using-the-asp-linqdatasource-control.aspx))

[LINQ to SQL: .NET Language-Integrated Query for Relational Data](http://msdn.microsoft.com/en-us/library/bb425822.aspx)

RadGrid for ASP.NET AJAX exposes programmatic way to binding itself to IEnumerable data returned from LINQ queries which is presented in the [ following online demo ](http://demos.telerik.com/aspnet-ajax/grid/examples/dataediting/programaticlinqupdates/defaultcs.aspx) of the product. Additionally, the grid from the example supports manual data editing operations as well as paging and sorting. The main points are to intercept the *NeedDataSource * event to pass a data source to the control and the *UpdateCommand*, *InsertCommand *and *DeleteCommand *events to edit the data in it.

Here are the code snippets from the example referenced in the previous paragraph (it also demonstrates how to configure *RadInputManager *to manage the user input inside the edit/insert form)

````ASP.NET
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
    <script type="text/javascript">            function rowDblClick(sender, eventArgs) { sender.get_masterTableView().editItem(eventArgs.get_itemIndexHierarchical()); }            </script>
</telerik:RadCodeBlock>
<telerik:RadAjaxManager runat="server" ID="RadAjaxManager1" DefaultLoadingPanelID="RadAjaxLoadingPanel1">
    <ajaxsettings>
  <telerik:AjaxSetting AjaxControlID="RadGrid1">
    <UpdatedControls>
      <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
      <telerik:AjaxUpdatedControl ControlID="RadWindowManager1" />
      <telerik:AjaxUpdatedControl ControlID="RadInputManager1" />
    </UpdatedControls>
  </telerik:AjaxSetting>
</ajaxsettings>
</telerik:RadAjaxManager>
<telerik:RadAjaxLoadingPanel runat="server" ID="RadAjaxLoadingPanel1" />
<telerik:RadGrid RenderMode="Lightweight" runat="server" ID="RadGrid1" AutoGenerateColumns="false" AllowPaging="true"
    OnNeedDataSource="RadGrid1_NeedDataSource" OnUpdateCommand="RadGrid1_UpdateCommand"
    OnItemCreated="RadGrid1_ItemCreated" OnDeleteCommand="RadGrid1_DeleteCommand"
    OnInsertCommand="RadGrid1_InsertCommand">
    <mastertableview datakeynames="ProductID" commanditemdisplay="Top" insertitempageindexaction="ShowItemOnCurrentPage">
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
</mastertableview>
    <pagerstyle mode="NextPrevAndNumeric" />
    <clientsettings>
  <ClientEvents OnRowDblClick="rowDblClick" />
</clientsettings>
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
    //retrive entity form the Db         
    var product = DbContext.Products.Where(n => n.ProductID == productId).FirstOrDefault();
    if (product != null)
    {
        //update entity's state             
        editableItem.UpdateValues(product);
        try
        {
            //submit chanages to Db     

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
        //submit chanages to Db     
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
    //retrive entity form the Db  
    var product = DbContext.Products.Where(n => n.ProductID == productId).FirstOrDefault();
    if (product != null)
    {
        //add the category for deletion        
        DbContext.Products.DeleteOnSubmit(product);
        try
        {
            //submit chanages to Db           
            DbContext.SubmitChanges();
        }
        catch (System.Exception)
        {
            ShowErrorMessage();
        }
    }
}
````
````VB
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
    'retrive entity form the Db
    Dim product = DbContext.Products.Where(Function(n) n.ProductID = productId).FirstOrDefault()
    If product IsNot Nothing Then
        'update entity's state
        editableItem.UpdateValues(product)
        Try
            'submit chanages to Db
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
        'submit chanages to Db
        DbContext.SubmitChanges()
    Catch generatedExceptionName As System.Exception
        ShowErrorMessage()
    End Try
End Sub

Protected Sub RadGrid1_DeleteCommand(ByVal source As Object, ByVal e As GridCommandEventArgs) Handles RadGrid1.DeleteCommand
    Dim productId = DirectCast((DirectCast(e.Item, GridDataItem)).GetDataKeyValue("ProductID"), Integer)
    'retrive entity form the Db
    Dim product = DbContext.Products.Where(Function(n) n.ProductID = productId).FirstOrDefault()
    If product IsNot Nothing Then
        'add the product for deletion
        DbContext.Products.DeleteOnSubmit(product)
        Try
            'submit chanages to Db
            DbContext.SubmitChanges()
        Catch generatedExceptionName As System.Exception
            ShowErrorMessage()
        End Try
    End If
End Sub
````

