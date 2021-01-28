---
title: Working with Templates
page_title: Working with Templates - RadGrid
description: Check our Web Forms article about Working with Templates.
slug: grid/data-editing/edit-mode/batch-editing/working-with-templates
tags: batch,editing,templates
published: True
position: 4
---

# Working With Templates

Before beginning to work with templates, check out the following articles:

* [RadGrid Batch Editing Templates and Specifics](https://www.telerik.com/support/kb/aspnet-ajax/grid/details/radgrid-batch-editing-templates-and-specifics)
* [Using Templates in RadGrid with Client-Side Binding](https://www.telerik.com/support/kb/aspnet-ajax/grid/details/using-templates-in-radgrid-with-client-side-binding)

>important `NestedViewTemplate` and `DetailItemTemplate` are server templates and are not supported with client-side binding.

When declaring **GridTemplateColumn** with custom **EditItemTemplate**, **RadGrid** will try to automatically get/set the values in the editor control. For example if you have a single nested input element in a table as shown below, the internal logic will find the input element and get/set its value.

>important When the `EditMode` is set to Batch data binding expressions are not allowed in the `EditItemTemplate`. RadGrid will set the editor's value with JavaScript.

>caption A sample template where the grid will automatically get/set the value of the textbox

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



In a more complicated scenario (like multiple editor/input controls) **RadGrid** cannot determine the correct input control. In such cases, you must use the batch editing client-side events to set the values of the cell and editor with our own code according to your logic. A list of all four events required for implementing this is shown below.

>note When handling particular event the **args.set_cancel(true)** should be called to cancel the default code execution.



* [OnBatchEditGetCellValue]({%slug grid/client-side-programming/events/onbatcheditgetcellvalue%})—allows you to get the content from the server that is initially rendered in the `ItemTemplate` of the cell. You can use it to parse complex structures (e.g., several Label instances) so you can pass that to the editor through the `args.set_value()` method. This object is passed to the `OnBatchEditSetEditorValue` handler.

* [OnBatchEditSetCellValue]({%slug grid/client-side-programming/events/onbatcheditsetcellvalue%})—allows you to populate the content in the `ItemTemplate` according to the data returned by the editor(s). You can get the editor data from the `args.get_value()` method. You provide that object in the `OnBatchEditGetEditorValue` handler.

* [OnBatchEditGetEditorValue]({%slug grid/client-side-programming/events/onbatcheditgeteditorvalue%})—allows you to get the editor(s) data from the `EditItemTemplate` and prepare it according to your logic so you can pass it to the `OnBatchEditSetCellValue` handler. Use the `args.set_value()` method to do that.

* [OnBatchEditSetEditorValue]({%slug grid/client-side-programming/events/onbatcheditseteditorvalue%})—allows you to populate the editor(s) in the `EditItemTemplate` according to the data you provided in the `OnBatchEditGetCellValue` handler. Use the `args.get_value()` method to get that object.

If you want to include a custom object as a value, you must implement two of its methods:

* **equals**—A function determining if two objects are equal. The grid uses that to check whether the data it gets from the cell is the same as the data provided by the editors.
* **toString**—A function returning the string value representation of the object. The grid uses that to send the data to the server when you hit Save Changes (see the [server-side API of the batch editing mode]({% slug grid/data-editing/edit-mode/batch-editing/server-side-api%})).

The example below demonstrates such a comlex scenario. It uses two different text box controls that display the **First name** and **Last Name** of a **Person**. The implementation is specific to the concrete scenario in terms of accessing controls and data, and using objects.

>caption The template column declaration

````ASP.NET
<telerik:GridTemplateColumn HeaderText="Name" UniqueName="FirstLastName">
    <HeaderStyle Width="250px" />
    <ItemTemplate>
        <asp:Label ID="LabelFirstName" runat="server" Text='<%# Eval("FirstName") %>'></asp:Label>
        <asp:Label ID="LabelLastName" runat="server" Text='<%# Eval("LastName") %>'></asp:Label>
    </ItemTemplate>
    <EditItemTemplate>
        <telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBoxFirstName" runat="server" Width="100px"></telerik:RadTextBox>
        <asp:TextBox ID="TextBoxLastName" runat="server" Width="100px"></asp:TextBox>
    </EditItemTemplate>
</telerik:GridTemplateColumn>
````



>caption The custom Person JavaScript object with equals and toString functions implemented

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



>caption The subscription of the events

````ASP.NET
<ClientSettings>
    <ClientEvents OnBatchEditGetCellValue="GetCellValue" OnBatchEditGetEditorValue="GetEditorValue"
        OnBatchEditSetCellValue="SetCellValue" OnBatchEditSetEditorValue="SetEditorValue" />
</ClientSettings>
````



>caption Sample events implementation

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

>tip You can find a more complex example in the following code library project: [Show one value but edit another](https://www.telerik.com/support/code-library/show-short-date-edit-full-date-with-batch-editing).


## See Also

* [Custom CommandItemTemplate for Batch Edit Mode]({%slug grid/data-editing/commanditem/command-item-template%}#custom-commanditemtemplate-for-batch-edit-mode)
