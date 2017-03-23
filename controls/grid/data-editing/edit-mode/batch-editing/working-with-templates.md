---
title: Working with Templates
page_title: Working with Templates | RadGrid for ASP.NET AJAX Documentation
description: Working with Templates
slug: grid/data-editing/edit-mode/batch-editing/working-with-templates
tags: batch,editing,templates
published: True
position: 4
---

# Working With Templates


When declaring **GridTemplateColumn** with custom **EditItemTemplate**, **RadGrid** will try to automatically get/set the values in the editor control. For example if you have a nested input element in a table as shown below, the internal logic will find the input element and get/set its value.

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



However, in a more complicated scenario (like multiple editor controls) where **RadGrid**	could not determine the right edit control. You could use the batch	editing client-side events where the values of the cell and editor could be set manually. A list	of all four events required for implementing this is shown below.

>note When handling particular event the **args.set_cancel(true)** should be called to cancel the default code execution.
>


* [OnBatchEditGetCellValue]({%slug grid/client-side-programming/events/onbatcheditgetcellvalue%}) – gets the cell's control value and sets the value by using the **args.set_value** function

* [OnBatchEditSetCellValue]({%slug grid/client-side-programming/events/onbatcheditsetcellvalue%}) – sets the cell's control corresponding value by using the value returned from the **args.get_value** function

* [OnBatchEditGetEditorValue]({%slug grid/client-side-programming/events/onbatcheditgeteditorvalue%}) – gets the editor's control value and sets the value by using the **args.set_cancel** function

* [OnBatchEditSetEditorValue]({%slug grid/client-side-programming/events/onbatcheditseteditorvalue%}) – sets the editor's control corresponding value by using the value returned from the **args.get_value** function

If you want to include a custom object as a value both **equals** (A function determining if two objects are equal) and **toString** (A function returning the string value representation of the object) methods should be implemented.	The example below demonstrates such a scenario. It uses two different text box controls that display the **First name** and **Last Name** of a **Person**. The implementation uses custom JavaScript logic.

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
        <telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBoxFirstName" runat="server" Width="100px"></telerik:RadTextBox>
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



## See Also

* [Custom CommandItemTemplate for Batch Edit Mode]({%slug grid/data-editing/commanditem/command-item-template%}#custom-commanditemtemplate-for-batch-edit-mode)