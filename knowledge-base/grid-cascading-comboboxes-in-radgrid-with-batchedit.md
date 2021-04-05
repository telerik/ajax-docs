---
title: Cascading ComboBoxes in Grid with BatchEdit
description: Cascade ComboBox Controls in Grid with BatchEdit.
type: how-to
page_title: Cascading ComboBoxes in Grid with BatchEdit
slug: grid-cascading-comboboxes-in-radgrid-with-batchedit
tags: combobox, radgrid, grid, gridtemplatecolumn, editing, batchediting, Batch Edit, Client-Side
ticketid: 1513496
res_type: kb
---

## Environment
<table>
    <thead>
        <tr>
            <th>Product</th>
        </tr>
    </thead>
	<tbody>
		<tr>
			<td>RadGrid</td>
		</tr>
        <tr>
			<td>RadComboBox</td>
		</tr>
	</tbody>
</table>

## Description

In general cascading ComboBoxes handled across PostBacks is easy. However, BatchEdit is a Client-Side (JavaScript-based) functionality of the Grid, therefore, interaction with the Grid must be done on the Client-Side. Having that in mind, PostBacks must not happen, otherwise, the editing will be interrupted and all changes lost. 

The following article describes the main aspects of Batch Editing: [RadGrid Batch Editing Templates and Specifics](https://www.telerik.com/support/kb/aspnet-ajax/grid/details/radgrid-batch-editing-templates-and-specifics).

If no, PostBacks can be done, what would be the solution? Using the Client-Side APIs of both the [Grid](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/client-side-programming/overview) and the [ComboBoxes](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/client-side-programming/overview) to interact with them.


## Solution


### Default.aspx

Create the Grid structure with two GridTemplateColumns, each of which containing one RadComboBox.

````XML
<h3>Colours available /model</h3>
<ul>
    <li>Sedan: 1, 5, 7, 11, 13</li>
    <li>Coupe: 2, 4, 8, 10, 14</li>
    <li>Hatchback: 3, 6, 9, 12, 15</li>
</ul>

<telerik:RadGrid ID="RadGrid1" runat="server" Width="600px"
    OnNeedDataSource="RadGrid1_NeedDataSource"
    OnPreRender="RadGrid1_PreRender">
    <ClientSettings>
        <ClientEvents OnBatchEditOpened="OnBatchEditOpened" />
    </ClientSettings>
    <MasterTableView AutoGenerateColumns="False" EditMode="Batch" CommandItemDisplay="Top">
        <BatchEditingSettings EditType="Row" />
        <Columns>

            <telerik:GridTemplateColumn UniqueName="CarModel" HeaderText="Car Model">
                <ItemTemplate>
                    <%# Eval("CarModel") %>
                </ItemTemplate>
                <EditItemTemplate>
                    <telerik:RadComboBox ID="Combo_CarModel"
                        OnClientDropDownClosed="ComboCarModel_DropDownClosed"
                        runat="server"
                        DataTextField="CarModel"
                        DataValueField="CarModel"
                        DropDownAutoWidth="Enabled"
                        HighlightTemplatedItems="true">
                    </telerik:RadComboBox>
                </EditItemTemplate>
            </telerik:GridTemplateColumn>

            <telerik:GridTemplateColumn UniqueName="ModelColor" HeaderText="Model Color">
                <ItemTemplate>
                    <%# Eval("ModelColor") %>
                </ItemTemplate>
                <EditItemTemplate>
                    <telerik:RadComboBox ID="Combo_ModelColor"
                        OnClientItemsRequesting="ModelColorRequesting"
                        runat="server"
                        DataTextField="ModelColor"
                        DataValueField="ModelColor"
                        NoWrap="true"
                        DropDownAutoWidth="Enabled"
                        EnableLoadOnDemand="true"
                        OnItemsRequested="Combo_ModelColor_ItemsRequested"
                        AppendDataBoundItems="false"
                        HighlightTemplatedItems="true">
                    </telerik:RadComboBox>
                </EditItemTemplate>
            </telerik:GridTemplateColumn>

        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

JavaScript logic that will interact with the [Client-Side APIs of the BatchEditing](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/edit-mode/batch-editing/client-side-api) and the [Client-Side APIs of the ComboBox](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/client-side-programming/overview)

````JavaScript
<script type="text/javascript">
    // When the Cell has opened for editing
    function OnBatchEditOpened(sender, args) {
        if (args.get_columnUniqueName() != "ModelColor") return;

        // Container is the cell
        ResetComboModelColor(args.get_cell());
    }
    // If the DropDown element Closes even if the Grid cell does not open again
    function ComboCarModel_DropDownClosed(sender, args) {

        // Container is the entire row that is being edited currently
        var currentRow = $(sender.get_element()).closest('tr')[0];

        ResetComboModelColor(currentRow);
    }

            
    function ResetComboModelColor(container) {
        // Get reference to the second Combo in the container
        var ComboModelColor = $telerik.findControl(container, "Combo_ModelColor");
        // Clear the Existing Text
        ComboModelColor.set_text("");
        // Make the Combo Request new Items
        ComboModelColor.requestItems();
    }

    // Event that fires upon requesting new items
    function ModelColorRequesting(sender, args) {
        var context = args.get_context();
        var currentRow = $(sender.get_element()).closest('tr')[0];
        var ComboCarModel = $telerik.findControl(currentRow, "Combo_CarModel");
        // Send the Context to the server. Contains the Parent Combo's relational value
        context["CarModel"] = ComboCarModel.get_value();
    }
</script>
````

### Default.aspx.cs

Bind data to RadGrid and the main ComboBox. The second ComboBox will use the [ItemsRequested](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/server-side-programming/itemsrequested) event to bind to data in relation to the Main ComboBox using the current Context.

````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = Cars();
}

private DataTable Cars()
{
    DataTable dt = new DataTable();

    dt.Columns.Add("ID", typeof(int));
    dt.Columns.Add("CarModel", typeof(string));
    dt.Columns.Add("ModelColor", typeof(string));

    for (int i = 0; i < 15; i++)
    {
        int index = i + 1;

        DataRow dr = dt.NewRow();

        dr["ID"] = index;

        if (index % 3 == 0) { dr["CarModel"] = "Hatchback"; }
        else if (index % 2 == 0) { dr["CarModel"] = "Coupe"; }
        else { dr["CarModel"] = "Sedan"; }

        dr["ModelColor"] = "Color " + index;

        dt.Rows.Add(dr);
    }

    return dt;
}

protected void Combo_ModelColor_ItemsRequested(object sender, RadComboBoxItemsRequestedEventArgs e)
{
    var combo = (RadComboBox)sender;

    object carModel;

    e.Context.TryGetValue("CarModel", out carModel);
        
    combo.DataSource = Cars().Select(string.Format("CarModel = '{0}'", carModel.ToString())).CopyToDataTable();
    combo.DataBind();
}

protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    var combo = ((sender as RadGrid).MasterTableView.GetBatchEditorContainer("CarModel").FindControl("Combo_CarModel") as RadComboBox);
    combo.DataSource = Cars().DefaultView.ToTable(true, "CarModel");
    combo.DataBind();
}
````

## See Also

- [Batch Editing Client-side API](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/edit-mode/batch-editing/client-side-api)
- [RadGrid Client-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/client-side-programming/overview)
- [Accessing Values and Controls](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/accessing-values-and-controls/overview)
- [Cascading MultiColumnComboBox in Grid with BatchEdit](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/grid-cascading-multicolumncombobox-in-radgrid-with-batchedit)

