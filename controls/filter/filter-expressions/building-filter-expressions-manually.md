---
title: Building Filter Expressions Manually
page_title: Building Filter Expressions Manually | UI for ASP.NET AJAX Documentation
description: Building Filter Expressions Manually
slug: filter/filter-expressions/building-filter-expressions-manually
tags: building,filter,expressions,manually
published: True
position: 1
---

# Building Filter Expressions Manually



The RadFilter control allows you to process its expression tree manually. This can be done by translating all filter expressions to a suitable query with the help of the RadFilter query providers. Then, you can modify them or apply them directly to the filtered control.

## RadFilter query providers

The following table describes all RadFilter query providers:


|  **Query provider**  |  **Description**  |
| ------ | ------ |
| **RadFilterDynamicLinqQueryProvider** |Provides the built expression for all dynamic LINQ data sources|
| **RadFilterEntitySqlQueryProvider** |Provides the built expression for entity SQL data source|
| **RadFilterGridQueryProvider** |Provides the built filter expression of the RadGrid|
| **RadFilterOqlQueryProvider** |Provides the built expression for OQL data source|
| **RadFilterExpressionPreviewProvider** |Provides the HTML of the built expression preview|
| **RadFilterListViewQueryProvider** |Provides the built filter expression of the RadListView|
| **RadFilterSqlQueryProvider** |Provides the built expression for SQL data source|

## Processing the expression tree

In order to get the expression tree built by the RadFilter control, you can use the *ApplyFilterExpressions* event. The following example demonstrates how to get the built expression for a RadListBox bound to LinqDataSource and display it in a label:

````ASPNET
<telerik:RadFilter runat="server" ID="RadFilter1" DataSourceControlID="LinqDataSourceCategories"
    OnApplyExpressions="RadFilter1_ApplyExpressions">
</telerik:RadFilter>
<br />
<asp:LinqDataSource ID="LinqDataSourceCategories" runat="server" ContextTypeName="LinqToSql.NorthwindDataContext"
    TableName="Categories">
</asp:LinqDataSource>
<telerik:RadListBox runat="server" ID="RadListBox1" DataSourceID="LinqDataSourceCategories"
    Height="200px" Width="250px">
    <EmptyMessageTemplate>
        No records to display.
    </EmptyMessageTemplate>
    <ItemTemplate>
        <em>Category name </em><span><%# Eval("CategoryName") %></span><br/>
        <em>Description </em><span><%# Eval("Description")%></span><br />
        <telerik:RadBinaryImage ID="RadBinaryImage2" runat="server" AlternateText="Category Photo"
            Style="margin-left: 10px" ToolTip="Category Photo" Width="90px" Height="62px"
            BorderColor="White" BorderWidth="2px" ResizeMode="Fit" ImageUrl='<%# string.Format("IMG/{0}.jpg", Eval("CategoryID")) %>' />
    </ItemTemplate>
</telerik:RadListBox>
<asp:Label runat="server" ID="Log" Text=""></asp:Label>
````
````C#
protected void RadFilter1_ApplyExpressions(object sender, RadFilterApplyExpressionsEventArgs e)
{
    RadFilterDynamicLinqQueryProvider provider = new RadFilterDynamicLinqQueryProvider();
    provider.ProcessGroup(e.ExpressionRoot);
    Log.Text = provider.Result;
}
````
````VB.NET
Protected Sub RadFilter1_ApplyExpressions(ByVal sender As Object, ByVal e As RadFilterApplyExpressionsEventArgs)
    Dim provider As New RadFilterDynamicLinqQueryProvider()
    provider.ProcessGroup(e.ExpressionRoot)
    Log.Text = provider.Result
End Sub
````



## Manipulating expressions

**RadFilterQueryProvider** exposes delegate which is fired every time an expressionhave been evaluated. The delegate could be used for scenarios like custom data formating.

Below is demonstrated how you could replace any **EqualTo** and **NotEqualTo** respectevely with **Between** and **NotBetween** functions when filtering by date. The approach allows you to include all hours for the selected date as by default if you filter by a date only dates which time is set to 12:00 PM will be included in the result.

````ASPNET
<telerik:RadFilter runat="server" ID="RadFilter1"
    ExpressionPreviewPosition="Bottom"
    OnExpressionItemCreated="RadFilter1_ExpressionItemCreated"
    OnApplyExpressions="RadFilter1_ApplyExpressions">
    <FieldEditors>
        <telerik:RadFilterDropDownEditor FieldName="ShipCountry" DataTextField="ShipCountry"
            DataValueField="ShipCountry" />
        <telerik:RadFilterDateFieldEditor FieldName="OrderDate" PickerType="DatePicker" />
    </FieldEditors>
</telerik:RadFilter>

<telerik:RadGrid ID="RadGrid1" AllowPaging="true" AllowSorting="true" PageSize="5"
    runat="server" EnableLinqExpressions="false" OnNeedDataSource="RadGrid1_NeedDataSource">
</telerik:RadGrid>
````
````C#
protected void RadFilter1_ApplyExpressions(object sender, RadFilterApplyExpressionsEventArgs e)
{
    RadFilterSqlQueryProvider queryProvider = new RadFilterSqlQueryProvider();
    queryProvider.OnExpressionEvaluated = this.ExpressionEvaluated;
    queryProvider.ProcessGroup(e.ExpressionRoot);
    this.RadGrid1.MasterTableView.FilterExpression = queryProvider.Result;
    this.RadGrid1.MasterTableView.Rebind();
}

private void ExpressionEvaluated(RadFilterEvaluationData evaluationData)
{
    RadFilterFunction filterFunction = evaluationData.Expression.FilterFunction;
    if (evaluationData.Expression.FieldName == "OrderDate" &&
        filterFunction == RadFilterFunction.EqualTo ||
        filterFunction == RadFilterFunction.NotEqualTo)
    {
        DateTime value = (DateTime)((IRadFilterValueExpression)evaluationData.Expression).Values[0];
        RadFilterSqlExpressionEvaluator evaluator = RadFilterSqlExpressionEvaluator.GetEvaluator(RadFilterFunction.Between);
        RadFilterNonGroupExpression betweenExpression = null;

        if (filterFunction == RadFilterFunction.EqualTo)
        {
            betweenExpression = new RadFilterBetweenFilterExpression<DateTime>("OrderDate")
            {
                LeftValue = value.Date,
                RightValue = value.Date.AddDays(1).AddTicks(-1)
            };
        }
        else
        {
            betweenExpression = new RadFilterNotBetweenFilterExpression<DateTime>("OrderDate")
            {
                LeftValue = value.Date,
                RightValue = value.Date.AddDays(1).AddTicks(-1)
            };
        }
        evaluator.GetEvaluationData(betweenExpression).CopyTo(evaluationData);
    }
}
````
````VB.NET
Protected Sub RadFilter1_ApplyExpressions(sender As Object, e As RadFilterApplyExpressionsEventArgs)
    Dim queryProvider As New RadFilterSqlQueryProvider()
    queryProvider.OnExpressionEvaluated = AddressOf Me.ExpressionEvaluated
    queryProvider.ProcessGroup(e.ExpressionRoot)
    Me.RadGrid1.MasterTableView.FilterExpression = queryProvider.Result
    Me.RadGrid1.MasterTableView.Rebind()
End Sub

Private Sub ExpressionEvaluated(evaluationData As RadFilterEvaluationData)
    Dim filterFunction As RadFilterFunction = evaluationData.Expression.FilterFunction
    If evaluationData.Expression.FieldName = "OrderDate" AndAlso filterFunction = RadFilterFunction.EqualTo OrElse filterFunction = RadFilterFunction.NotEqualTo Then
        Dim value As DateTime = DirectCast(DirectCast(evaluationData.Expression, IRadFilterValueExpression).Values(0), DateTime)
        Dim evaluator As RadFilterSqlExpressionEvaluator = RadFilterSqlExpressionEvaluator.GetEvaluator(RadFilterFunction.Between)
        Dim betweenExpression As RadFilterNonGroupExpression = Nothing

        If filterFunction = RadFilterFunction.EqualTo Then
            betweenExpression = New RadFilterBetweenFilterExpression(Of DateTime)("OrderDate") With {
             .LeftValue = value.[Date],
             .RightValue = value.[Date].AddDays(1).AddTicks(-1)
            }
        Else
            betweenExpression = New RadFilterNotBetweenFilterExpression(Of DateTime)("OrderDate") With {
             .LeftValue = value.[Date],
             .RightValue = value.[Date].AddDays(1).AddTicks(-1)
            }
        End If
        evaluator.GetEvaluationData(betweenExpression).CopyTo(evaluationData)
    End If
End Sub
````


