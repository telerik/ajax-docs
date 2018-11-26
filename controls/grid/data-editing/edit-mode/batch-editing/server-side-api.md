---
title: Server-side API
page_title: Batch Editing Server-side API | RadGrid for ASP.NET AJAX Documentation
description: Batch Editing Server-side API
slug: grid/data-editing/edit-mode/batch-editing/server-side-api
tags: batch,editing,server-side,api
published: True
position: 2
---

# Batch Editing Server-side API


When **RadGrid** performs CRUD operations **ItemCommand, InsertCommand, DeleteCommand, UpdateCommand** events are fired. To continue this trend when **Batch Editing** is enabled the events will be called multiple times for each operation made on the client. The event argument passed to the event handler will be of type **GridBatchEditingEventArgument** that contains **OldValues** and **NewValues** **Hashtables**. They hold the original values and the newly entered ones respectively.


>note When automatic operations are enabled you can cancel the command by setting the **e.Canceled** to **true** (Can be useful when performing validation).
>
>Once a postback to the server has been initiated, the user input cannot be restored in the browser. This can result in loss of data. To minimize this, use [client-side validation]({%slug grid/data-editing/edit-mode/batch-editing/validation%}) and cancel the [OnUserAction]({%slug grid/client-side-programming/events/onuseraction%}) or [OnCommand]({%slug grid/client-side-programming/events/oncommand%}) event in case [the batch editing manager `hasChanges()` on the client]({%slug grid/data-editing/edit-mode/batch-editing/client-side-api%}).




````C#
protected void RadGrid1_ItemCommand(object sender, Telerik.Web.UI.GridCommandEventArgs e)
{
    if (e.CommandName == RadGrid.BatchEditCommandName)
    {
        GridBatchEditingEventArgument argument = e.CommandArgument as GridBatchEditingEventArgument;
        Hashtable oldValues = argument.OldValues;
        Hashtable newValues = argument.NewValues;
        string newFirstName = newValues["FirstName"].ToString();
    }
}
````
````VB
Protected Sub RadGrid1_ItemCommand(sender As Object, e As Telerik.Web.UI.GridCommandEventArgs)
    If e.CommandName = RadGrid.BatchEditCommandName Then
        Dim argument As GridBatchEditingEventArgument = TryCast(e.CommandArgument, GridBatchEditingEventArgument)
        Dim oldValues As Hashtable = argument.OldValues
        Dim newValues As Hashtable = argument.NewValues
        Dim newFirstName As String = newValues("FirstName").ToString()
    End If
End Sub
````


Additionally, if you want more control over all commands that are executed you could subscribe to the **RadGrid.BatchEdit** event where you have the **e.Commands** which is a List of **GridBatchEditingCommand** objects. The collection could be modified by adding, removing or modifying commands. Every command holds the old and modified values thus providing the user the capability to review all the changes at once.



````C#
protected void RadGrid1_BatchEditCommand(object sender, GridBatchEditingEventArgs e)
{
    foreach (GridBatchEditingCommand command in e.Commands)
    {
        Response.Write(String.Format("<strong>command name: {0}</strong><br/>", command.Type.ToString()));
        Hashtable newValues = command.NewValues;
        Hashtable oldValues = command.OldValues;
        foreach (string key in command.NewValues.Keys)
        {
            if(newValues[key] != oldValues[key]) //You may want to implement stronger difference checks here, or a check for the command name (e.g., when inserting there is little point in looking up old values
            {
                string output = String.Format("column: {0} with new value {1}<br />", key, command.NewValues[key]);
                Response.Write(output);
            }
        }
        //a simple way of getting the value of a column whose name you know
        string newFirstName = newValues["FirstName"].ToString();
    }
}
````
````VB
Protected Sub RadGrid1_BatchEditCommand(sender As Object, e As GridBatchEditingEventArgs)
    For Each command As GridBatchEditingCommand In e.Commands
        Response.Write(String.Format("<strong>command name: {0}</strong><br/>", command.Type.ToString()))
        Dim newValues As Hashtable = command.NewValues
        Dim oldValues As Hashtable = command.OldValues
        For Each key As String In command.NewValues.Keys
            If newValues(key) <> oldValues(key) Then 'You may want to implement stronger difference checks here, or a check for the command name (e.g., when inserting there is little point in looking up old values
                Dim output As String = String.Format("column: {0} with new value {1}<br />", key, command.NewValues(key))
                Response.Write(output)
            End If
        Next
        'a simple way of getting the value of a column whose name you know
        Dim newFirstName As String = newValues("FirstName").ToString()
    Next
End Sub
````

>note The keys for the hash tables are the `DataField` names of the columns.
>
>For template columns, make sure to set their `DataField` property, otherwise the new values will be available under the `UniqueName` of the column. The old values for a TemplateColumn are available in the `OldValues` hashtable only if the `DataField` is added to the `DataKeyNames` collection.

>tip **When working with custom data acccess logic** and not with declarative data sources, you will usually need a unique record ID in order to perform the CRUD operations in your server code. Often, you will not want to put the ID column in the grid because the user will not need it. In such cases, **add the `ID` field to the `DataKeyNames` collection of the `MasterTableView` so it becomes available in the NewValues hash table**. 


## RadGrid commands in Batch Editing mode


>note When batch editing functionality is enabled some of the **RadGrid** commands assigned to the autogenerated **IButtonControl** controls are changed to perform client-side batch editing functions.
>


For example a button with **CommandName=”Edit”** will not perform a postback but will open it's parent row for editing instead. This is done by calling **RadGrid.get_batchEditingManager().openRowForEdit** and passing the appropriate arguments. All commands that will be changed and the client-side function that will be called instead are listed below.


|  **Server-side commands**  |  **Client-side command**  |
| ------ | ------ |
| **RadGrid.InitInsertCommandName** | **RadGrid.get_batchEditingManager().addNewRecord** |
| **RadGrid.EditCommandName** | **RadGrid.get_batchEditingManager().openRowForEdit** |
| **RadGrid.DeleteCommandName** | **RadGrid.get_batchEditingManager().deleteRecord** |
| **RadGrid.UpdateCommandName, RadGrid.PerformInsertCommandName, RadGrid.UpdateEditedCommandName** | **RadGrid.get_batchEditingManager().saveChanges** |
| **RadGrid.CancelAllCommandName, RadGrid.CancelCommandName** | **RadGrid.get_batchEditingManager().cancelChanges** |



## Column editors


Another key element of the **Batch Editing** mode is the use of only one editor for a single column. All editors are rendered in a hidden panel and are only visible when a cell/row is opened for edit. Accessing these editors and the panel which holds them is achievable by calling the **GetBatchColumnEditor** or **GetBatchEditorContainer** methods of the **GridTableView** which take as an argument the column or it's **UniqueName**. A sample demonstration on how to call the mentioned methods is provided below.



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid2" runat="server" OnPreRender="RadGrid1_PreRender" DataSourceID="SqlDataSource1">
    <MasterTableView EditMode="Batch">
        <Columns>
            <telerik:GridBoundColumn DataField="ProductName" UniqueName="ProductName" HeaderText="Product Name"></telerik:GridBoundColumn>
            <telerik:GridTemplateColumn HeaderText="Category" UniqueName="CategoryID" DataField="CategoryID">
                <ItemTemplate>
                    <%# Eval("CategoryName") %>
                </ItemTemplate>
                <EditItemTemplate>
                    <telerik:RadDropDownList RenderMode="Lightweight" runat="server" ID="CategoryIDDropDown" DataValueField="CategoryID"
                        DataTextField="CategoryName" DataSourceID="SqlDataSource2"></telerik:RadDropDownList>
                </EditItemTemplate>
            </telerik:GridTemplateColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````
````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    GridTableView masterTable = (sender as RadGrid).MasterTableView;
    GridColumn productNameColumn = masterTable.GetColumnSafe("ProductName") as GridColumn;
    TextBox productNameEditor = (masterTable.GetBatchColumnEditor(productNameColumn) as GridTextBoxColumnEditor).TextBoxControl;
    RadDropDownList categoryEditor = masterTable.GetBatchColumnEditor("CategoryID") as RadDropDownList;
    Panel batchEditingContainer = masterTable.GetBatchEditorContainer("CategoryID") as Panel;
}
````
````VB
Protected Sub RadGrid1_PreRender(sender As Object, e As EventArgs)
    Dim masterTable As GridTableView = TryCast(sender, RadGrid).MasterTableView
    Dim productNameColumn As GridColumn = TryCast(masterTable.GetColumnSafe("ProductName"), GridColumn)
    Dim productNameEditor As TextBox = TryCast(masterTable.GetBatchColumnEditor(productNameColumn), GridTextBoxColumnEditor).TextBoxControl
    Dim categoryEditor As RadDropDownList = TryCast(masterTable.GetBatchColumnEditor("CategoryID"), RadDropDownList)
    Dim batchEditingContainer As Panel = TryCast(masterTable.GetBatchEditorContainer("CategoryID"), Panel)
End Sub
````




# See Also

 * [Client-Side API]({%slug grid/data-editing/edit-mode/batch-editing/client-side-api%})


