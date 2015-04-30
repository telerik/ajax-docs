---
title: Batch Editing
page_title: Batch Editing | RadGrid for ASP.NET AJAX Documentation
description: Batch Editing
slug: grid/data-editing/edit-mode/batch-editing
tags: batch,editing
published: True
position: 4
---

# Batch Editing



RadGrid's Batch editing functionality enables inline client-side editing andperforming multiple changes before the user decides to either applythe changes or cancel them. The new feature is well integratedwith existing RadGrid functionalities like automatic data sourceoperations, hierarchy, selection, validation, template columns andevent handling. The feature could be easily enabled by setting the **GridTableView.EditMode** to **Batch**. Additional properties for configuring the behaviorof the functionality could be found in the **GridTableView.BatchEditingSettings** collection.

## Configuration

Below are listed some of the exposed properties which allow the user to configure the batch editing.

* **GridTableView.BatchEditingSettings.EditType** – determines if the editing will be performed for the whole row or individually for each cell (the default value)

* **GridTableView.BatchEditingSettings.SaveAllHierarchyLevels** – determines if the **SaveChanges** button will save the changes from the current GridTableView or for all the GridTableView's in the grid. When set to true the **saveAllChanges** method will be called instead of **saveChanges**"

* **GridtableView.BatchEditingSettings.OpenEditingEvent** – string value determining the event which will cause the cell\row to open for edit. The default value is “click”. Examples for event values – “dblclick”, “click”, “mousedown”, “mouseup”, “mouseover”.

* **GridTableView.CommandItemSettings.ShowSaveChangesButton** – determines if a **SaveChanges** button will be created in the **GridCommandItem**

* **GridTableView.CommandItemSettings.ShowCancelChangesButton** –determines if a **CancelChanges** button will be created in the **GridCommandItem**

* **GridTableView.CommandItemSettings.SaveChangesText** – gets or sets the **SaveChanges** button's text value

* **GridTableView.CommandItemSettings.CancelChangesText** – gets or sets the **CancelChanges** button's text value

>caution When setting the **EditMode** to **Batch** multi-row editing is not supported as only one editor is initialized for a given column(for performance purposes).
>


## Server-side API

When RadGrid performs CRUD operations **ItemCommand, InsertCommand, DeleteCommand, UpdateCommand** events are fired. To continue	this trend when batch editing is enabled the events will be called multiple times for each operation made on the client.The event argument passed to the event handler will be of type **GridBatchEditingEventArgument** which contains **OldValues**and **NewValues** Hashtables. They hold the original values and the newly entered ones.

>note When automatic operations are enabled you could cancel the command bysetting the **e.Canceled** to **true** (May be used in validation scenarios).
>




````C#
	    protected void RadGrid1_ItemCommand(object sender, Telerik.Web.UI.GridCommandEventArgs e)
	    {
	        GridBatchEditingEventArgument argument = e.CommandArgument as GridBatchEditingEventArgument;
	        Hashtable oldValues = argument.OldValues;
	        Hashtable newValues = argument.NewValues;
	        string newFirstName = newValues["FirstName"].ToString();
	    }
````
````VB
	    Protected Sub RadGrid1_ItemCommand(sender As Object, e As Telerik.Web.UI.GridCommandEventArgs)
	        Dim argument As GridBatchEditingEventArgument = TryCast(e.CommandArgument, GridBatchEditingEventArgument)
	        Dim oldValues As Hashtable = argument.OldValues
	        Dim newValues As Hashtable = argument.NewValues
	        Dim newFirstName As String = newValues("FirstName").ToString()
	    End Sub
````


Additionally, if you want more control over all commands that are executed you could subscribe to the **RadGrid.BatchEdit**event where you have the **e.Commands** which is a List of **GridBatchEditingCommand** objects. The collection could bemodified by adding, removing or modifying commands. Every command holds the old and modified values thus providing the user the capability to review all the changes at once.



````C#
	    protected void RadGrid1_BatchEditCommand(object sender, GridBatchEditingEventArgs e)
	    {
	        foreach (GridBatchEditingCommand command in e.Commands)
	        {
	            Hashtable newValues = command.NewValues;
	            Hashtable oldValues = command.OldValues;
	            string newFirstName = newValues["FirstName"].ToString();
	        }
	    }
````
````VB
	    Protected Sub RadGrid1_BatchEditCommand(sender As Object, e As GridBatchEditingEventArgs)
	        For Each command As GridBatchEditingCommand In e.Commands
	            Dim newValues As Hashtable = command.NewValues
	            Dim oldValues As Hashtable = command.OldValues
	            Dim newFirstName As String = newValues("FirstName").ToString()
	        Next
	    End Sub
````


>note When batch editing functionality is enabled some of the RadGrid commands assigned to the autogeneratedIButtonControl controls are changed to perform client-side batch editing functions.
>


For example a button with **CommandName=”Edit”** will not perform a postback and instead will open it'sparent row for editing. This is done by calling **RadGrid.get_batchEditingManager().openRowForEdit**and passing the appropriate arguments. All commands that will be changed and the client-side function that will	be called instead are listed below.


|  **Server-side commands**  |  **Client-side command**  |
| ------ | ------ |
| **RadGrid.InitInsertCommandName** | **RadGrid.get_batchEditingManager().addNewRecord** |
| **RadGrid.EditCommandName** | **RadGrid.get_batchEditingManager().openRowForEdit** |
| **RadGrid.DeleteCommandName** | **RadGrid.get_batchEditingManager().deleteRecord** |
| **RadGrid.UpdateCommandName, RadGrid.PerformInsertCommandName, RadGrid.UpdateEditedCommandName** | **RadGrid.get_batchEditingManager().saveChanges** |
| **RadGrid.CancelAllCommandName, RadGrid.CancelCommandName** | **RadGrid.get_batchEditingManager().cancelChanges** |

Another key element of the batch editing mode is the use of only one editor for a single column. All editors are rendered in a hidden panel and are only visible when a cell/row is opened for edit. Accessing these editors and the panel which holds them is achievable by calling the **GetBatchColumnEditor** or **GetBatchEditorContainer** methods of the **GridTableView** which take as an argument the column or it's **UniqueName**. A sample demonstration on how to call the mentioned methods is provided below.



````ASP.NET
	        <telerik:RadGrid ID="RadGrid2" runat="server" OnPreRender="RadGrid1_PreRender" DataSourceID="SqlDataSource1">
	            <MasterTableView EditMode="Batch">
	                <Columns>
	                    <telerik:GridBoundColumn DataField="ProductName" UniqueName="ProductName" HeaderText="Product Name"></telerik:GridBoundColumn>
	                    <telerik:GridTemplateColumn HeaderText="Category" UniqueName="CategoryID" DataField="CategoryID">
	                        <ItemTemplate>
	                            <%# Eval("CategoryName") %>
	                        </ItemTemplate>
	                        <EditItemTemplate>
	                            <telerik:RadDropDownList runat="server" ID="CategoryIDDropDown" DataValueField="CategoryID"
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


## Client-side GridBatchEditing API

The client-side API exposes a number of methods which provide more control over the editing process. Here is a list of the methods and the parameters which they require.

* **addNewRecord(tableView)** – adds a new record at the top of the grid

* **deleteRecord(tableView,row)** – removes the specified record from the table

* **saveChanges(tableView)** – sends a request to the server in order to save the changes made in the related **GridTableView**

* **saveAllChanges** – sends a request to the server in order to save all changes made from the user so far

* **saveTableChanges(tableViews)** – sends a request to the server in order to save the changes only for the **GridTableViews** passed in the arguments. It expects an array of **GridTableView** objects.

* **cancelChanges(tableView)** – sends a request to the server to cancel all changes that have been made so far

* **openCellForEdit(cell)** – opens the specified cell for editing

* **openRowForEdit(row)** – opens the specified row for edit (opens all editable cells in the row for edit)

* **get_currentlyEditedCell** – returns the element of the currently edited cell

* **get_currentlyEditedRow** – returns the element of the currently edited row

* **getCellValue(cell)** – returns the value of the respective cell

* **changeCellValue(cell, newCellValue)** – assigns a value to the respective cell

When firing grid commands by using the **fireCommand** method some commands are detected, canceled and insteadtheir corresponding batch editing client-side functions are called. Below a list of the handled commands:

* **Cancel, CancelAll – cancelChanges**

* **Delete – deleteRecord**

* **Edit – openRowForEdit**

* **InitInsert – addNewRecord**

* **PerformInsert, Update, UpdateEdited – saveChanges**

Additionally, you could subscribe to the **OnBatchEditCellValueChanging** event to access thenew value before it is applied and optionally cancel the action. The **OnBatchEditCellValueChanged**event on the other hand can be used to access the already changed value.

## Handling advanced templates

When declaring **GridTemplateColumn** with custom **EditItemTemplate**, **RadGrid** will try to automatically	get\set the values in the editor control. For example if you have a nested input	element in a table as shown below, RadGrid's logic will find the input element and get\set it's	value.

>caution When the EditMode is set to Batch data binding expressions are not allowed in the EditItemTemplate. RadGrid will automatically set the editor's value.
>


````ASP.NET
	    <div class="container">
	        <span>Header text</span>
	        <table>
	            <tbody>
	                <tr>
	                    <td>
	                        <asp:TextBox ID="TextBox" runat="server"></asp:TextBox>
	                    </td>
	                </tr>
	            </tbody>
	        </table>
	        <div>
	            Footer container</div>
	    </div>
````



However, in a more complicated scenario (like multiple editor controls) where RadGrid	could not determine the right edit control. You could use the batch	editing client-side events where the values of the cell and editor could be set manually. A list	of all four events required for implementing this is shown below.

>note When handling particularevent the **args.set_cancel(true)** should be called to cancel the default code execution.
>


* **OnBatchEditGetCellValue** – gets the cell's control value and sets the value by using the **args.set_cancel** function

* **OnBatchEditSetCellValue** – sets the cell's control corresponding value by using the value returned from the **args.get_value** function

* **OnBatchEditGetEditorValue** – gets the editor's control value and sets the value by using the **args.set_cancel** function

* **OnBatchEditSetEditorValue** – sets the editor's control corresponding value by using the value returned from the **args.get_value** function

If you want to include a custom object as a value both **equals** (A function determining if two objects are equal) and**toString**(A function returning the string value representation of the object) methods should be implemented.	The example below demonstrates such a scenario. It uses two different text box controls that display the **First name** and **Last Name**of a **Person**. The implementation uses custom JavaScript logic.

The template column declaration

````ASP.NET
	        <ClientSettings>
	            <ClientEvents OnBatchEditGetCellValue="GetCellValue" OnBatchEditGetEditorValue="GetEditorValue"
	                OnBatchEditSetCellValue="SetCellValue" OnBatchEditSetEditorValue="SetEditorValue" />
	        </ClientSettings>
````



The custom Person JavaScript object with equals and toString functions implemented

````JavaScript
	        var Person = function (firstName, lastName)
	        {
	            this.firstName = firstName;
	            this.lastName = lastName;
	        }
	        Person.prototype.equals = function (person)
	        {
	            if (this.firstName === person.firstName &&
	        this.lastName === person.lastName)
	            {
	                return true;
	            }
	            return false;
	        }
	        Person.prototype.toString = function ()
	        {
	            return this.firstName + " " + this.lastName;
	        }
````



The subscription of the events

````ASP.NET
	                <telerik:GridTemplateColumn HeaderText="Name" UniqueName="FirstLastName">
	                    <HeaderStyle Width="250px" />
	                    <ItemTemplate>
	                        <asp:Label ID="LabelFirstName" runat="server" Text='<%# Eval("FirstName") %>'></asp:Label>
	                        <asp:Label ID="LabelLastName" runat="server" Text='<%# Eval("LastName") %>'></asp:Label>
	                    </ItemTemplate>
	                    <EditItemTemplate>
	                        <telerik:RadTextBox ID="RadTextBoxFirstName" runat="server" Width="100px"></telerik:RadTextBox>
	                        <asp:TextBox ID="TextBoxLastName" runat="server" Width="100px"></asp:TextBox>
	                    </EditItemTemplate>
	                </telerik:GridTemplateColumn>
````



The events implementation

````JavaScript
	        function GetCellValue(sender, args)
	        {
	            if (args.get_columnUniqueName() === "FirstLastName")
	            {
	                args.set_cancel(true);
	                var container = args.get_container();
	                var firstName = $telerik.findElement(container, "LabelFirstName").innerHTML;
	                var lastName = $telerik.findElement(container, "LabelLastName").innerHTML;
	                args.set_value(new Person(firstName, lastName));
	            }
	        }
	
	        function SetCellValue(sender, args)
	        {
	            if (args.get_columnUniqueName() === "FirstLastName")
	            {
	                args.set_cancel(true);
	                var container = args.get_container(),
	            value = args.get_value(),
	            firstName = value.firstName,
	            lastName = value.lastName;
	                $telerik.findElement(container, "LabelFirstName").innerHTML = firstName;
	                $telerik.findElement(container, "LabelLastName").innerHTML = lastName;
	            }
	        }
	
	        function GetEditorValue(sender, args)
	        {
	            if (args.get_columnUniqueName() === "FirstLastName")
	            {
	                args.set_cancel(true);
	                var container = args.get_container(),
	            firstName = $telerik.findControl(container, "RadTextBoxFirstName").get_value(),
	            lastName = $telerik.findElement(container, "TextBoxLastName").value;
	                args.set_value(new Person(firstName, lastName));
	            }
	        }
	
	        function SetEditorValue(sender, args)
	        {
	            if (args.get_columnUniqueName() === "FirstLastName")
	            {
	                args.set_cancel(true);
	                var container = args.get_container(),
	            value = args.get_value(),
	            firstName = value.firstName,
	            lastName = value.lastName;
	                $telerik.findControl(container, "RadTextBoxFirstName").set_value(firstName);
	                $telerik.findElement(container, "TextBoxLastName").value = lastName;
	            }
	        }
````



## Validation

Batch editing functionality supports validation by either using the **ColumnValidationSettings** ordeclaring a **GridTemplateColumn** and placing a validator in the template. Note that saving the changes or	opening other cells\rows for edit will be prevented when there is a validator that is not valid.

## See Also

 * [RadGrid Batch editing demo](http://demos.telerik.com/aspnet-ajax/grid/examples/data-editing/batch-editing/defaultcs.aspx)
