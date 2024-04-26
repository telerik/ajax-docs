---
title: Filter with dynamically created filter expressions
description: This article provides instructions on how to filter with dynamically created filter expressions
type: how-to
page_title: Filter with dynamically created filter expressions. | RadGrid
slug: grid-filter-with-dynamically-created-filter-expressions
tags: radgrid, filtering, buttons, rows
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

I want to implement buttons to filter rows in a step-by-step process. The process involves listing and filtering rows in a Grid based on specific intervals. 

# Solution

To achieve the desired behavior, you can follow these steps:

1. Add a Filter control with the `Visible` property set to **false** to your page.
2. Create buttons in the header (or wherever you want) of a GridTemplateColumn in your RadGrid to trigger the filtering.
3. Handle the button click events and programmatically create filter expressions based on the given conditions.
4. Apply the filter expressions to the Grid and remove them after filtering is done.

Here's a sample implementation for the first scenario using buttons in the header of a GridTemplateColumn:

````ASP.NET
<telerik:RadFilter RenderMode="Lightweight" runat="server" ID="RadFilter1" FilterContainerID="RadGrid1" Visible="false" />
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView AutoGenerateColumns="true" DataKeyNames="OrderID">
        <Columns>
            <telerik:GridTemplateColumn DataField="OrderID" DataType="System.Int32" FilterControlAltText="Filter OrderID column" HeaderText="OrderID" ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
                <HeaderTemplate>
                    <telerik:RadButton runat="server" ID="Step1Button" Text="Step1-button" OnClick="Step1Button_Click" />
                    <telerik:RadButton runat="server" ID="Step2Button" Text="Step2-button" OnClick="Step2Button_Click" />
                </HeaderTemplate>
                <ItemTemplate>
                    <telerik:RadLabel runat="server" ID="label1" Text='<%# Bind("OrderID") %>' />
                </ItemTemplate>
            </telerik:GridTemplateColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

In the code-behind file, handle the button click events and create the filter expressions:

````C#
protected void Step1Button_Click(object sender, EventArgs e)
{
    RadFilterGreaterThanOrEqualToFilterExpression<int> expr1 = new RadFilterGreaterThanOrEqualToFilterExpression<int>("OrderID");
    expr1.Value = 1;
    RadFilter1.RootGroup.AddExpression(expr1);

    RadFilterGroupExpression group1 = new RadFilterGroupExpression();
    group1.GroupOperation = RadFilterGroupOperation.And;

    RadFilterLessThanOrEqualToFilterExpression<int> expr2 = new RadFilterLessThanOrEqualToFilterExpression<int>("OrderID");
    expr2.Value = 61;
    RadFilter1.RootGroup.AddExpression(expr2);

    RadFilter1.FireApplyCommand();

    RadFilter1.RootGroup.Expressions.Remove(expr1);
    RadFilter1.RootGroup.Expressions.Remove(expr2);
}

protected void Step2Button_Click(object sender, EventArgs e)
{
    RadFilterGreaterThanOrEqualToFilterExpression<int> expr1 = new RadFilterGreaterThanOrEqualToFilterExpression<int>("OrderID");
    expr1.Value = 61;
    RadFilter1.RootGroup.AddExpression(expr1);

    RadFilterGroupExpression group1 = new RadFilterGroupExpression();
    group1.GroupOperation = RadFilterGroupOperation.And;

    RadFilterLessThanOrEqualToFilterExpression<int> expr2 = new RadFilterLessThanOrEqualToFilterExpression<int>("OrderID");
    expr2.Value = 150;
    RadFilter1.RootGroup.AddExpression(expr2);

    RadFilter1.FireApplyCommand();

    RadFilter1.RootGroup.Expressions.Remove(expr1);
    RadFilter1.RootGroup.Expressions.Remove(expr2);
}
````

This implementation allows you to filter the Grid based on the given conditions by clicking the corresponding buttons in the header.

Remember to adjust the column and filter expressions based on your specific requirements.

## See Also

- [Working with Expressions](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/filtering/working-with-expressions)

 
