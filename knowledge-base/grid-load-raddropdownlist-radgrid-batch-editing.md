---
title: Loading RadDropDownList in RadGrid Batch Editing Mode
description: Learn how to populate a RadDropDownList within a RadGrid in batch editing mode using server-side code in ASP.NET AJAX.
type: how-to
page_title: How to Load RadDropDownList in RadGrid Batch Editing - ASP.NET AJAX
slug: grid-load-raddropdownlist-radgrid-batch-editing
tags: radgrid, asp.net ajax, batch editing, raddropdownlist, data binding, server-side
res_type: kb
ticketid: 1663632
---

## Environment

| Product | Version |
| --- | --- |
| RadGrid for ASP.NET AJAX / RadDropDownList | Current |

## Description

In a RadGrid configured for batch editing mode, I need to populate a RadDropDownList using server-side code (.cs file) instead of an asp:SqlDataSource. This scenario is similar to the [batch editing demo](https://demos.telerik.com/aspnet-ajax/grid/examples/data-editing/batch-editing/defaultcs.aspx) provided by Telerik.

This KB article also answers the following questions:
- How can I bind a RadDropDownList in a batch-editable RadGrid using C#?
- What are the steps to load a RadDropDownList in a RadGrid's batch edit mode?
- How to use server-side code to populate a dropdown in RadGrid batch editing?

## Solution

To bind a RadDropDownList within a RadGrid in batch editing mode from the server-side (.cs file), follow these steps:

1. **Define the RadGrid and the RadDropDownList in your ASPX markup.** Ensure the RadGrid is configured for batch editing and contains a `GridTemplateColumn` that hosts the RadDropDownList.

    ```asp
    <telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowAutomaticDeletes="True" AllowAutomaticInserts="True" PageSize="10" OnPreRender="RadGrid1_PreRender" AllowAutomaticUpdates="True" AllowPaging="True" EditMode="Batch" DataSourceID="SqlDataSource1">
        <MasterTableView DataKeyNames="ProductID" DataSourceID="SqlDataSource1" EditMode="Batch">
            <Columns>
                <telerik:GridTemplateColumn HeaderText="Category" UniqueName="CategoryID" DataField="CategoryID">
                    <ItemTemplate>
                        <%# Eval("CategoryName") %>
                    </ItemTemplate>
                    <EditItemTemplate>
                        <telerik:RadDropDownList RenderMode="Lightweight" ID="CategoryIDDropDown" runat="server" DataTextField="CategoryName" DataValueField="CategoryID">
                        </telerik:RadDropDownList>
                    </EditItemTemplate>
                </telerik:GridTemplateColumn>
            </Columns>
        </MasterTableView>
    </telerik:RadGrid>
    ```

2. **Implement the `RadGrid1_PreRender` event in your code-behind file.** Use this event to bind the RadDropDownList with the desired data source.

    ```csharp
    protected void RadGrid1_PreRender(object sender, EventArgs e)
    {
        GridTableView masterTable = (sender as RadGrid).MasterTableView;
        GridTemplateColumnEditor categoryEditor = masterTable.GetBatchColumnEditor("CategoryID") as GridTemplateColumnEditor;

        if (categoryEditor != null)
        {
            RadDropDownList ddlCategory = categoryEditor.ContainerControl.FindControl("CategoryIDDropDown") as RadDropDownList;

            if (ddlCategory != null)
            {
                ddlCategory.DataSource = GetCategories();
                ddlCategory.DataTextField = "CategoryName";
                ddlCategory.DataValueField = "CategoryID";
                ddlCategory.DataBind();
            }
        }
    }

    private DataTable GetCategories()
    {
        DataTable categoriesTable = new DataTable();
        categoriesTable.Columns.Add("CategoryID", typeof(int));
        categoriesTable.Columns.Add("CategoryName", typeof(string));
        categoriesTable.Rows.Add(1, "Beverages");
        categoriesTable.Rows.Add(2, "Condiments");
        categoriesTable.Rows.Add(3, "Confections");
        categoriesTable.Rows.Add(4, "Dairy Products");
        categoriesTable.Rows.Add(5, "Grains/Cereals");

        return categoriesTable;
    }
    ```

By following the above steps, you can successfully load data into a RadDropDownList within a RadGrid using server-side code during batch editing mode.

## See Also

- [Telerik Documentation on Batch Editing and Column Editors](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-editing/edit-mode/batch-editing/server-side-api#column-editors)
- [Telerik Forum Post on Batch Editing with DropDownList](https://www.telerik.com/forums/radgrid---batch-edit---drop-down-list#3830452)
