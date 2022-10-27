---
title: Rebind Controls in Insert/Edit Forms without rebinding the Grid
description: Rebind controls or bind new data to them in Insert/Edit mode without rebinding the RadGrid.
type: how-to
page_title: Rebind Controls in Insert/Edit Forms without rebinding the Grid - RadGrid
slug: grid-rebind-controls-in-insert-edit-forms-without-rebinding-the-grid
res_type: kb
---

## DESCRIPTION

Rebind controls or bind new data to them in Insert/Edit mode without rebinding the RadGrid.

Generally speaking, when calling the **Rebind()** method of the `RadGrid` instance, the Grid and all of its child Controls will bind again. However, rebinding the entire Grid could cause all the form Controls lose the changes.

In some instances, one would only like to rebind the Control in the Insert/Edit Form without affecting the Grid. This way all changes made to other form Controls in the Insert/Edit Form will persist their values.


## SOLUTION


Assuming the following Grid markup having a RadComboBox in once of its Template Column

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView AutoGenerateColumns="False">
        <Columns>
            <telerik:GridTemplateColumn UniqueName="MyTemplateColumn" HeaderText="Country" DataType="System.String">
                <ItemTemplate>
                    <asp:Label ID="Label1" runat="server" Text='<%# Eval("Country") %>'></asp:Label>
                </ItemTemplate>
                <EditItemTemplate>
                    <telerik:RadComboBox ID="RadComboBox1" runat="server" RenderMode="Lightweight"
                        DataTextField="CountryName"
                        DataValueField="CountryName"
                        OnDataBinding="RadComboBox1_DataBinding"
                        SelectedValue='<%# Bind("Country") %>'>
                    </telerik:RadComboBox>
                </EditItemTemplate>
            </telerik:GridTemplateColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

The ComboBox is binding to data in its DataBinding event

````C#
protected void RadComboBox1_DataBinding(object sender, EventArgs e)
{
    (sender as RadComboBox).DataSource = CombosDataSource();
}
````
````VB
Protected Sub RadComboBox1_DataBinding(ByVal sender As Object, ByVal e As EventArgs)
    TryCast(sender, RadComboBox).DataSource = CombosDataSource()
End Sub
````

While the EditForm is open, new records are added to Combobox upon clicking on a button which should reflect the items in the combos in the Grid Edit Form.

In the Button Click event, you can update the Combo's data source then loop through all of Grid's Edit Forms (Insert / Edit) and bind the new data to the Combo's inside them.

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    // Update the Combo's Datasource with the new records    

    // Loop through all EditItems (Insert or Edit)
    GridItem[] editItems = RadGrdVehMaintActivity.MasterTableView.GetItems(GridItemType.EditItem, GridItemType.EditFormItem);

    foreach (GridEditableItem editItem in editItems)
    {
        // Access the RadComboBox in the Insert/Edit item
        RadComboBox combo = editItem.FindControl("RadComboBox1") as RadComboBox;
           
        if (combo != null)
        {
            // Call the DataBind() method on the Combo. This will trigger the Combo's DataBinding event binding it to the new Source.
            combo.DataBind();
        }
    }
}
````
````VB
Protected Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
    'Update the Combo's Datasource with the new records

    'Loop through all EditItems (Insert or Edit)
    Dim editItems As GridItem() = RadGrdVehMaintActivity.MasterTableView.GetItems(GridItemType.EditItem, GridItemType.EditFormItem)

    For Each editItem As GridEditableItem In editItems
        'Access the RadComboBox in the Insert/Edit item
        Dim combo As RadComboBox = TryCast(editItem.FindControl("RadComboBox1"), RadComboBox)

        If combo IsNot Nothing Then
            'Call the DataBind() method on the Combo. This will trigger the Combo's DataBinding event binding it to the new Source.
            combo.DataBind()
        End If
    Next
End Sub
````
 
