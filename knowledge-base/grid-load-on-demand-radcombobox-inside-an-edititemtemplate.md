---
title: Load On Demand RadComboBox inside an EditItemTemplate
description: Load On Demand RadComboBox inside an EditItemTemplate. Check it now!
type: how-to
page_title: Load On Demand RadComboBox inside an EditItemTemplate. | RadGrid
slug: grid-load-on-demand-radcombobox-inside-an-edititemtemplate
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms Grid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

This sample demonstrates how to preselect an item in **RadComboBox** with Load-On-Demand enabled and nested within the ***EditItemTemplate*** of **RadGrid** (or other parent databound control).

**THE ISSUE**

RadComboBox with Load-On-Demand enabled is often nested in EditItemTemplate of **RadGrid** or another data-bound control, however preselecting a ***RadComboBoxItem*** at ***EditItemTemplate*** of the parent control in such scenario is a tricky task. 

Sometimes developers try to set the **SelectedValue** property of the RadComboBox via declarative databinding and receive this error: “Databinding methods such as `Eval()`, `XPath()`, and `Bind()` can only be used in the context of a databound control.” 

>note  Please note that when the **RadComboBox** with Load-On-Demand feature initially loads - it is empty and it has no items. Load-On-Demand fires and populates the control with data when user types in the input area or clicks on the drop-down toggle image (if there are no items in the **RadComboBox**). That is why when the parent control enters “Edit” mode – there are no items at the **RadComboBox** and trying to preselect an item raises an error.
>

## Solution

We can overcome this issue by handling the [`OnItemDatabound`]({%slug grid/server-side-programming/events/itemdatabound%}) event and creating an initial RadComboBoxItem to be displayed at the control input. 

````C#
protected void OnItemDataBoundHandler(object sender, GridItemEventArgs e)
{
    if (e.Item.IsInEditMode)
    {
        GridEditableItem item = (GridEditableItem)e.Item;

        if (!(e.Item is IGridInsertItem))
        {
            RadComboBox combo = (RadComboBox)item.FindControl("RadComboBox1");

            RadComboBoxItem preselectedItem = new RadComboBoxItem();

            preselectedItem.Text = item["CategoryName"].Text;
            preselectedItem.Value = item["CategoryID"].Text;

            combo.Items.Insert(0, preselectedItem);
            combo.SelectedIndex = 0;
        }
    }
}
````
````VB
Protected Sub OnItemDataBoundHandler(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If e.Item.IsInEditMode Then
        Dim item As GridEditableItem = DirectCast(e.Item, GridEditableItem)

        If Not (TypeOf e.Item Is IGridInsertItem) Then
            Dim combo As RadComboBox = DirectCast(item.FindControl("RadComboBox1"), RadComboBox)

            Dim preselectedItem As New RadComboBoxItem()

            preselectedItem.Text = item("CategoryName").Text
            preselectedItem.Value = item("CategoryID").Text

            combo.Items.Insert(0, preselectedItem)
            combo.SelectedIndex = 0
        End If
    End If
End Sub
````

When we delete the text initially displayed at RadComboBox input - Load-On-Demand will fire and will populate the control dropdown with items.

In order to perform Add, Edit and Delete operation handle RadGrid.OnInsertCommand,  RadGrid.OnUpdateCommand and RadGrid.OnDeleteCommand events and obtain the RadComboBox selected value:

````C#
protected void RadGrid1_UpdateCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
{
    GridEditableItem editedItem = e.Item as GridEditableItem;
    RadComboBox comboBox = (RadComboBox)editedItem.FindControl("RadComboBox1");

    SqlDataSource1.UpdateParameters.Add(new Parameter("CategoryID", DbType.Int32, comboBox.SelectedValue));
    SqlDataSource1.UpdateParameters.Add(new Parameter("UnitPrice", DbType.Double, (e.Item.FindControl("UnitPriceTextBox") as TextBox).Text));
    SqlDataSource1.UpdateParameters.Add(new Parameter("ProductName", DbType.String, (e.Item.FindControl("ProductNameBox") as TextBox).Text));
    SqlDataSource1.UpdateParameters.Add(new Parameter("ProductID", DbType.Int32, (e.Item.FindControl("ProductIDBox") as TextBox).Text));

    SqlDataSource1.Update();
}

protected void RadGrid1_InsertCommand(object sender, GridCommandEventArgs e)
{
    GridEditableItem editedItem = e.Item as GridEditableItem;
    RadComboBox comboBox = (RadComboBox)editedItem.FindControl("RadComboBox1");

    SqlDataSource1.InsertParameters.Add(new Parameter("CategoryID", DbType.Int32, comboBox.SelectedValue));

    SqlDataSource1.Insert();
}

protected void RadGrid1_DeleteCommand(object source, GridCommandEventArgs e)
{
    GridDataItem item = (GridDataItem)e.Item;
    string ProductID = item.OwnerTableView.DataKeyValues[item.ItemIndex]["ProductID"].ToString();

    SqlDataSource1.DeleteParameters.Add(new Parameter("ProductID", DbType.Int32, ProductID));
    SqlDataSource1.Delete();
}
````
````VB
Protected Sub RadGrid1_UpdateCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs)
    Dim editedItem As GridEditableItem = TryCast(e.Item, GridEditableItem)
    Dim comboBox As RadComboBox = DirectCast(editedItem.FindControl("RadComboBox1"), RadComboBox)

    SqlDataSource1.UpdateParameters.Add(New Parameter("CategoryID", DbType.Int32, comboBox.SelectedValue))
    SqlDataSource1.UpdateParameters.Add(New Parameter("UnitPrice", DbType.[Double], TryCast(e.Item.FindControl("UnitPriceTextBox"), TextBox).Text))
    SqlDataSource1.UpdateParameters.Add(New Parameter("ProductName", DbType.[String], TryCast(e.Item.FindControl("ProductNameBox"), TextBox).Text))
    SqlDataSource1.UpdateParameters.Add(New Parameter("ProductID", DbType.Int32, TryCast(e.Item.FindControl("ProductIDBox"), TextBox).Text))

    SqlDataSource1.Update()
End Sub

Protected Sub RadGrid1_InsertCommand(ByVal sender As Object, ByVal e As GridCommandEventArgs)
    Dim editedItem As GridEditableItem = TryCast(e.Item, GridEditableItem)
    Dim comboBox As RadComboBox = DirectCast(editedItem.FindControl("RadComboBox1"), RadComboBox)

    SqlDataSource1.InsertParameters.Add(New Parameter("CategoryID", DbType.Int32, comboBox.SelectedValue))

    SqlDataSource1.Insert()
End Sub

Protected Sub RadGrid1_DeleteCommand(ByVal source As Object, ByVal e As GridCommandEventArgs)
    Dim item As GridDataItem = DirectCast(e.Item, GridDataItem)

    Dim ProductID As String = item.OwnerTableView.DataKeyValues(item.ItemIndex)("ProductID").ToString()

    SqlDataSource1.DeleteParameters.Add(New Parameter("ProductID", DbType.Int32, ProductID))
    SqlDataSource1.Delete()
End Sub
````

The same approach can be used to nest Load-On-Demand RadComboBox in EditItemTemplate of FormView or GridView – please find more details at the sample project attached. Passing the update parameters is implemented using ControlParameters (at the FormView example) and SessionParameter(GridView example).

[Download the sample project](files/grid-load-on-demand-radcombobox-inside-an-edititemtemplate.zip)
   
    
    