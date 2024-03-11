---
title: Toggle between different masks while editing
description: Using the GridMaskedColumn, you'll learn how to toggle between different mask values.
type: how-to
page_title: Toggle between different masks while editing. | RadGrid
slug: grid-toggle-different-masks-of-masked-column-while-editing
position:
tags: grid, masked text box, mask, edit, phone number, edit item template
ticketid: 1642442
res_type: kb
---

## Environment

<table>
    <tr>
        <td>Product</td>
        <td>Telerik WebForms Grid for ASP.NET AJAX</td>
    </tr>
</table>

## Description

In certain scenarios, you may wish to incorporate a method to toggle between different masks of a masked textbox. Such a scenariocouild be if you're working with national and international phone numbers.
When the Grid is not in edit mode, the **_GridMaskedColumn_** will look and behave as a **_GridBoundColumn_**, meaning the data will appear as it is in the database.

Usually, you can use the `DataFormatString` of the column to format a number, but this would not work on strings.

## Solution

Having this said, you will need to consider, using numbers only (even if they are stored as strings). Otherwise, you will have to strip the special characters from the string that you already have to make it parsable by a numeric type and that involves a lot of manual work/sanitization.

Here is one example that uses only digits which can be parsed by numeric types and formatted later. The following example will apply the formatting both when displaying the data and when editing.

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="400px"
    OnItemCreated="RadGrid1_ItemCreated" OnItemDataBound="RadGrid1_ItemDataBound" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView EditMode="InPlace" AutoGenerateColumns="False" DataKeyNames="PhoneContactId">
        <Columns>
            <telerik:GridEditCommandColumn></telerik:GridEditCommandColumn>
            <telerik:GridCheckBoxColumn UniqueName="InternationalNumber" HeaderText="International" DataField="InternationalNumber" />
            <telerik:GridMaskedColumn UniqueName="PhoneNumber" DataField="PhoneNumber" HeaderText="Number" Mask="(###) ###-####" DisplayMask="(###) ###-####">
                <ColumnValidationSettings EnableRequiredFieldValidation="true">
                    <RequiredFieldValidator ErrorMessage="Required" Display="Dynamic" />
                </ColumnValidationSettings>
            </telerik:GridMaskedColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

````C#
string phoneFormat = "(###) ###-####"; // Default format for numbers: USA

protected void rgPhoneNumber_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridDataItem && !e.Item.IsInEditMode)
    {
        GridDataItem dataItem = (GridDataItem) e.Item;         // When displaying the item
        CheckBox checkBox = dataItem["InternationalNumber"].Controls[0] as CheckBox;

        bool isInternational = checkBox.Checked;

        if (isInternational)
        {
            phoneFormat = "+### ### #### ####"; // Change the format if international
        }

        dataItem["PhoneNumber"].Text = Int64.Parse(dataItem["PhoneNumber"].Text).ToString(phoneFormat); // Apply the format

    }
    else if (e.Item.IsInEditMode)
    {
        GridEditableItem editableItem = (GridEditableItem) e.Item;  // When Editing the Item
        CheckBox checkBox = editableItem["InternationalNumber"].Controls[0] as CheckBox;
        RadMaskedTextBox mask = editableItem["PhoneNumber"].Controls[0] as RadMaskedTextBox;

        if (checkBox.Checked)
        {
            phoneFormat = "+### ### #### ####";
        }

        mask.Mask = phoneFormat;
        mask.DisplayMask = phoneFormat;
    }
}

protected void rgPhoneNumber_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item.IsInEditMode)
    {
        GridEditableItem dataItem = e.Item as GridEditableItem;
        CheckBox checkBox = dataItem["InternationalNumber"].Controls[0] as CheckBox;

        checkBox.AutoPostBack = true;
        checkBox.CheckedChanged += CheckBox_CheckedChanged;
    }
}

private void CheckBox_CheckedChanged(object sender, EventArgs e)
{
    CheckBox checkBox = (CheckBox) sender;
    GridEditableItem editableItem = checkBox.NamingContainer as GridEditableItem;
    RadMaskedTextBox mask = editableItem["PhoneNumber"].Controls[0] as RadMaskedTextBox;

    if (checkBox.Checked)
    {
        phoneFormat = "+### ### #### ####"; // change the mask when the checkbox checked changes
    }

    mask.Mask = phoneFormat;
    mask.DisplayMask = phoneFormat;
}

protected void rgPhoneNumber_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    var grid = (RadGrid) sender;

    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("PhoneContactId", typeof(int)));
    dt.Columns.Add(new DataColumn("PersonId", typeof(int)));
    dt.Columns.Add(new DataColumn("InternationalNumber", typeof(bool)));
    dt.Columns.Add(new DataColumn("PhoneNumber", typeof(string)));

    dt.PrimaryKey = new DataColumn[] { dt.Columns["PersonId"] };

    for (int i = 0; i < 2; i++)
    {
        int index = i + 1;

        DataRow row = dt.NewRow();

        row["PersonId"] = index;
        row["PhoneContactId"] = index;
        row["PhoneNumber"] = index % 2 == 0 ? "11111111111111" : "2222222222";
        row["InternationalNumber"] = index % 2 == 0;

        dt.Rows.Add(row);
    }

    grid.DataSource = dt;
}
````
````VB
Private phoneFormat As String = "(###) ###-####"
Protected Sub RadGrid1_ItemCreated(sender As Object, e As GridItemEventArgs)
    If TypeOf e.Item Is GridDataItem AndAlso Not e.Item.IsInEditMode Then
        Dim dataItem As GridDataItem = CType(e.Item, GridDataItem)
        Dim checkBox As CheckBox = TryCast(dataItem("InternationalNumber").Controls(0), CheckBox)
        Dim isInternational As Boolean = checkBox.Checked

        If isInternational Then
            phoneFormat = "+### ### #### ####"
        End If

        dataItem("PhoneNumber").Text = Int64.Parse(dataItem("PhoneNumber").Text).ToString(phoneFormat)
    ElseIf e.Item.IsInEditMode Then
        Dim editableItem As GridEditableItem = CType(e.Item, GridEditableItem)
        Dim checkBox As CheckBox = TryCast(editableItem("InternationalNumber").Controls(0), CheckBox)
        Dim mask As RadMaskedTextBox = TryCast(editableItem("PhoneNumber").Controls(0), RadMaskedTextBox)

        If checkBox.Checked Then
            phoneFormat = "+### ### #### ####"
        End If

        mask.Mask = phoneFormat
        mask.DisplayMask = phoneFormat
    End If
End Sub

Protected Sub RadGrid1_ItemDataBound(sender As Object, e As GridItemEventArgs)
    If TypeOf e.Item Is GridDataItem AndAlso Not e.Item.IsInEditMode Then
        Dim dataItem As GridDataItem = CType(e.Item, GridDataItem)
        Dim checkBox As CheckBox = TryCast(dataItem("InternationalNumber").Controls(0), CheckBox)
        Dim isInternational As Boolean = checkBox.Checked

        If isInternational Then
            phoneFormat = "+### ### #### ####"
        End If

        dataItem("PhoneNumber").Text = Int64.Parse(dataItem("PhoneNumber").Text).ToString(phoneFormat)
    ElseIf e.Item.IsInEditMode Then
        Dim editableItem As GridEditableItem = CType(e.Item, GridEditableItem)
        Dim checkBox As CheckBox = TryCast(editableItem("InternationalNumber").Controls(0), CheckBox)
        Dim mask As RadMaskedTextBox = TryCast(editableItem("PhoneNumber").Controls(0), RadMaskedTextBox)

        If checkBox.Checked Then
            phoneFormat = "+### ### #### ####"
        End If

        mask.Mask = phoneFormat
        mask.DisplayMask = phoneFormat
    End If
End Sub

Protected Sub RadGrid1_NeedDataSource(sender As Object, e As GridNeedDataSourceEventArgs)
    Dim grid = CType(sender, RadGrid)
    Dim dt As DataTable = New DataTable()

    dt.Columns.Add(New DataColumn("PhoneContactId", GetType(Integer)))
    dt.Columns.Add(New DataColumn("PersonId", GetType(Integer)))
    dt.Columns.Add(New DataColumn("InternationalNumber", GetType(Boolean)))
    dt.Columns.Add(New DataColumn("PhoneNumber", GetType(String)))

    dt.PrimaryKey = New DataColumn() {dt.Columns("PersonId")}
    For i As Integer = 0 To 2 - 1
        Dim index As Integer = i + 1
        Dim row As DataRow = dt.NewRow()

        row("PersonId") = index
        row("PhoneContactId") = index
        row("PhoneNumber") = If(index Mod 2 = 0, "11111111111111", "2222222222")
        row("InternationalNumber") = index Mod 2 = 0

        dt.Rows.Add(row)
    Next

    grid.DataSource = dt
End Sub
````

 
  
  