---
title: Use RadButton for FormTemplate Inserts/Updates in RadGrid CommandItemTemplate
description: Learn how to use a RadButton within the CommandItemTemplate of a RadGrid to initiate FormTemplate inserts or updates when the grid is in PopUp EditMode.
type: how-to
page_title: Use RadButton for FormTemplate Inserts/Updates in RadGrid CommandItemTemplate
slug: grid-use-button-for-formtemplate-insert-update
tags: radgrid, asp.net ajax, commanditemtemplate, editmode, popup, formtemplate, radbutton
res_type: kb
ticketid: 1666940
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadGrid for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I am using a `CommandItemTemplate` tag in my RadGrid. My `MasterTableView` is set to `EditMode="PopUp"`. How can I use a RadButton to fire the FormTemplate that I have created for Inserts/Updates? This KB article also answers the following questions:

- How to initiate pop-up editing in RadGrid with a button click?
- How to configure RadButton to open FormTemplate for new records in RadGrid?
- How to use CommandItemTemplate for initiating inserts or updates in RadGrid?

## Solution

To use a RadButton within the `CommandItemTemplate` to trigger the FormTemplate for Inserts/Updates in a RadGrid set to `EditMode="PopUp"`, follow these steps:

1. Add a RadButton inside the `CommandItemTemplate` and set the `CommandName` property of the RadButton to specify the command, such as `InitInsert` for inserting a new record.

Here is a sample code snippet demonstrating this:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AutoGenerateColumns="true" AllowPaging="True" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView EditMode="PopUp" DataKeyNames="OrderID" CommandItemDisplay="Top">
        <CommandItemTemplate>
            <telerik:RadButton ID="RadButton1" runat="server" Text="Add New Record" CommandName="InitInsert" />
        </CommandItemTemplate>
        <Columns>
        </Columns>
        <EditFormSettings EditFormType="Template" PopUpSettings-Width="600px" PopUpSettings-Height="400px">
            <FormTemplate>
                <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
                <telerik:RadButton ID="btnUpdate" runat="server" Text="Update" CommandName="Update" />
                <telerik:RadButton ID="btnCancel" runat="server" Text="Cancel" CommandName="Cancel" />
            </FormTemplate>
        </EditFormSettings>
    </MasterTableView>
</telerik:RadGrid>
````

And the `NeedDataSource` event handler:

````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = OrdersTable();
}

private DataTable OrdersTable()
{
    DataTable dt = new DataTable();
    // DataTable initialization and population logic...
    return dt;
}
````

### Key Components:
- **CommandItemTemplate**: Contains the RadButton with `CommandName="InitInsert"`, which triggers the insert form.
- **EditFormSettings**: Specifies the form template for inserts/updates in a pop-up.
- **FormTemplate**: Contains controls for the pop-up editing or inserting records.

Clicking the RadButton triggers the `InitInsert` command, opening the pop-up with the form template defined in the `EditFormSettings`.

## See Also

- [RadGrid CommandItemTemplate Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/commanditem/command-item-template)
- [RadGrid Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
