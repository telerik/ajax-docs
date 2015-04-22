---
title: Operate with the FilterExpression Manually
page_title: Operate with the FilterExpression Manually | RadGrid for ASP.NET AJAX Documentation
description: Operate with the FilterExpression Manually
slug: grid/functionality/filtering/how-to/operate-with-the-filterexpression-manually
tags: operate,with,the,filterexpression,manually
published: True
position: 0
---

# Operate with the FilterExpression Manually



## 

There are two ways you can determine what filter function the grid is currently employing:

* Provide a handler for the **ItemCommand** event. In the **ItemCommand** event handler, check that **e.CommandName** is "Filter" (or, more robustly, **RadGrid.FilterCommandName**):

* The **e.CommandArgument** value is a **Pair** object that holds the filter function name and the column's unique name.

* The **e.Item** value is the **GridFilteringItem**. Using the column name, you can access the text box that holds the filter pattern.You can also customize the filter operation at this point by setting the table view's **FilterExpression**. For details on how to do this, see [Custom option for filtering (FilterListOptions -> VaryByDataTypeAllowCustom)]({%slug grid/functionality/filtering/how-to/custom-option-for-filtering%}).

* When binding a grid using the **NeedDataSource** event, check the **RadGrid.MasterTableView.FilterExpression** property in the **NeedDataSource** event handler. This string represents the current filter function in the same way as the **DataView.Filter** property (that is, it is the text of a WHERE clause for filtering items).

>note If you want to customize filtering using your own custom statements, clear the **FilterExpression** string (to prevent the default filtering) and bind the grid to a filtered data set.
>


The following example shows how to access the filter information in the **ItemCommand** event handler. It saves this information to a set of messages that can be displayed (by the grid's **DataBound** event handler) to provide feedback about the current filter function:



````C#
	    protected void RadGrid1_ItemCommand(object source, GridCommandEventArgs e)
	    {
	        if (e.CommandName == RadGrid.FilterCommandName)
	        {
	            Pair filterPair = (Pair)e.CommandArgument;
	            gridMessage1 = "Current Filter function: '" + filterPair.First + "' for column '" + filterPair.Second + "'";
	            TextBox filterBox = (e.Item as GridFilteringItem)[filterPair.Second.ToString()].Controls[0] as TextBox;
	            gridMessage2 = "<br> Entered pattern for search: " + filterBox.Text;
	        }
	    }
	    private string gridMessage1 = null, gridMessage2 = null;
	    protected void RadGrid1_DataBound(object sender, EventArgs e)
	    {
	        if (!string.IsNullOrEmpty(gridMessage1))
	        {
	            DisplayMessage(gridMessage1);
	            DisplayMessage(gridMessage2);
	        }
	    }
	    private void DisplayMessage(string text)
	    {
	        RadGrid1.Controls.Add(new LiteralControl(string.Format("<span style='color:red'>{0}</span>", text)));
	    }
````
````VB.NET
	
	
	    Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As GridCommandEventArgs) Handles RadGrid1.ItemCommand
	        If e.CommandName = RadGrid.FilterCommandName Then
	            Dim filterPair As Pair = DirectCast(e.CommandArgument, Pair)
	            gridMessage1 = "Current Filter function: '" + filterPair.First + "' for column '" + filterPair.Second + "'"
	            Dim filterBox As TextBox = CType((CType(e.Item, GridFilteringItem))(filterPair.Second.ToString()).Controls(0), TextBox)
	            gridMessage2 = "<br> Entered pattern for search: " + filterBox.Text
	        End If
	    End Sub
	    Private gridMessage1 As String = Nothing
	    Private gridMessage2 As String = Nothing
	    Protected Sub RadGrid1_DataBound(ByVal sender As Object, ByVal e As EventArgs) Handles RadGrid1.DataBound
	        If Not String.IsNullOrEmpty(gridMessage1) Then
	            DisplayMessage(gridMessage1)
	            DisplayMessage(gridMessage2)
	        End If
	    End Sub
	    Private Sub DisplayMessage(ByVal text As String)
	        RadGrid1.Controls.Add(New LiteralControl(String.Format("<span style='color:red'>{0}</span>", text)))
	    End Sub
	
````


>note With the .NET 3.5 build of RadGrid for ASP.NET AJAX and LINQ filter expressions enabled (EnableLinqExpressions = true), the filter expressions set for the grid either internally by its filtering mechanism or manually in code should conform to the LINQ expression syntax instead of the old T-SQL syntax. Only thus they will be evaluated properly by the control.
>


The value of the FilterExpression for the grid is a string, including vital information concerning the field (column) which needs to be filtered, along with the value entered by the end user in the filter text box, and the filter option chosen. Internally, the filter expression is created in accordance with the T-SQL syntax (in case we are using the .NET 2.0 built of the control), or follow the newer LINQ expression syntax (when using the .NET 3.5 version).

In most cases the programmer does not need to worry about these details, since the filtering is automatically handled by RadGrid. In some scenarios, however, it is useful to have a better knowledge on how these expressions are constructed. This is the case, for example, when the grid needs to be filtered initially, or when a more complex, custom filter expression should be constructed.

The following table shows the representation of the grid FilterExpression for each filter function when the filter value type is **string** or **numeric**. To make it practical, it assumes that we are filtering a string column named **CustomerID** by a value of '**ALFKI**' and a column of a numeric type, called **OrderID** by a value of **'10248'** accordingly.

*Note*: In some of the expressions additional parameters are used. For example in this filter function: **@"<DataType>(it[""<DataField>""])= {numeric value}";**the particular DataType is **Int32**:


>caption  

|  | SqlDataSource 3.5 EnableLinqExpression="true" |  | SqlDataSource 3.5/2.0EnableLinqExpression="false" |  |
| ------ | ------ | ------ | ------ | ------ |
| **Filter Function** | **string** | **int** | **string** | **int** |
|Contains|@"it["" **CustomerID** ""].ToString().Contains("" **ALFKI** "")";|N/A|"([ **CustomerID** ] LIKE '% **ALFKI** %')";|N/A|
|DoesNotContain|@"!it["" **CustomerID** ""].ToString().Contains("" **ALFKI** "")";|N/A|"([ **CustomerID** ] NOT LIKE '% **ALFKI** %') ";|N/A|
|StartsWith|@"it[""{0}""].ToString().StartsWith("" **ALFKI** "")";|N/A|"([ **CustomerID** ] LIKE ' **ALFKI** %') ";|N/A|
|EndsWith|@"it["" **CustomerID** ""].ToString().EndsWith("" **ALFKI** "")";|N/A|"([ **CustomerID** ] LIKE '% **ALFKI** ')";|N/A|
|EqualTo|"(Convert.ToString(it[\" **CustomerID** \"]) = \" **ALFKI** \")";|@"Int32(it["" **OrderID** ""]) = **10248** ";|"([ **CustomerID** ] = ' **ALFKI** ')";|"([ **OrderID** ] = **10248** ) ";|
|NotEqualTo|"(Convert.ToString(it[\" **CustomerID** \"]) <> \" **ALFKI** \")";|@"Int32(it["" **OrderID** ""]) <> **10248** ";|"([ **CustomerID** ] <> ' **ALFKI** ')";|"([ **OrderID** ] <> **10248** ) ";|
|GreaterThan|"(Convert.ToString(it[\" **CustomerID** \"]) > \" **ALFKI** \")";|@"Int32(it["" **OrderID** ""]) > **10248** ";|"([ **CustomerID** ] > ' **ALFKI** ') ";|"([ **OrderID** ] > **10248** ) ";|
|LessThan|"(Convert.ToString(it[\" **CustomerID** \"]) < \" **ALFKI** \")";|@"Int32(it["" **OrderID** ""]) < **10248** ";|"([ **CustomerID** ] < ' **ALFKI** ') ";|"([ **OrderID** ] < **10248** ) ";|
|GreaterThanOrEqualTo|"(Convert.ToString(it[\" **CustomerID** \"]) >= \" **ALFKI** \")";|@"Int32(it["" **OrderID** ""]) >= **10248** ";|"([ **CustomerID** ] >= ' **ALFKI** ')";|"([ **OrderID** ] >= **10248** ";|
|LessThanOrEqualTo|"(Convert.ToString(it[\" **CustomerID** \"]) <= \" **ALFKI** \")";|@"Int32(it["" **OrderID** ""]) <= **10248** ";|"([ **CustomerID** ] <= ' **ALFKI** ')";|"([ **OrderID** ] <= **10248** ) ";|
|Between|"((Convert.ToString(it[\" **CustomerID** \"]) >= \" **ALFKI** \") AND ( Convert.ToString(it[\" **CustomerID** \"]) <= \" **ANTON** \")) ";|@"(Int32(it["" **OrderID** ""]) >= **10248** ) AND ( **Int32** (it["" **OrderID** ""]) <= **10252** )";|"(([ **CustomerID** ] >= ' **ALFKI** ') AND ([ **CustomerID** ] <= ' **ANTON** ')) ";|"(([ **OrderID** ] >= **10248** ) AND ([ **OrderID** ] <= **10252** ))";|
|NotBetween|"((Convert.ToString(it[\" **CustomerID** \"]) < \" **ALFKI** \") AND ( Convert.ToString(it[\" **CustomerID** \"]) > \" **ANTON** \")) ";|@"(Int32(it["" **OrderID** ""]) < **10248** ) OR ( **Int32** (it["" **OrderID** ""]) > **10252** )";|"(([ **CustomerID** ] < ' **ALFKI** ') OR ([ **CustomerID** ] > ' **ANTON** ')) ";|"(([ **OrderID** ] < **10248** ) OR ([ **OrderID** ] > **10252** )) ";|
|IsEmpty|@"it["" **CustomerID** ""] = """"";|N/A|"([ **CustomerID** ] = '') ";|N/A|
|NotIsEmpty|@"it["" **CustomerID** ""] <> """"";|N/A|"([ **CustomerID** ] <> '') ";|N/A|
|IsNull|@"it["" **CustomerID** ""] ==Convert.DBNull";|@"it["" **OrderID** ""] ==Convert.DBNull";|"([ **CustomerID** ] IS NULL) ";|"([ **OrderID** ] IS NULL) ";|
|NotIsNull|@"(it["" **CustomerID** ""] !=Convert.DBNull)";|@"(it["" **OrderID** ""] !=Convert.DBNull)";|"(NOT ([ **CustomerID** ] IS NULL)) ";|"(NOT ([ **OrderID** ] IS NULL)) ";|


>caption  

|  | LinqDataSource |  | EntityDataSource |  |
| ------ | ------ | ------ | ------ | ------ |
| **Filter Function** | **string** | **int** | **string** | **int** |
|Contains|"( **CustomerID** .Contains(\" **ALFKI** \"))"|N/A|@"it. **CustomerID** LIKE ""% **ALFKI** %""";|N/A|
|DoesNotContain|"(! **CustomerID** .Contains(\" **ALFKI** \"))"|N/A|@"it. **CustomerID** NOT LIKE ""% **ALFKI** %""";|N/A|
|StartsWith|"( **CustomerID** .StartsWith(\" **ALFKI** \"))"|N/A|@"it. **CustomerID** LIKE "" **ALFKI** %""";|N/A|
|EndsWith|"( **CustomerID** .EndsWith(\" **ALFKI** \"))"|N/A|@"it. **CustomerID** LIKE ""% **ALFKI** """;|N/A|
|EqualTo|"( **CustomerID** .Equals(\" **ALFKI** \"))";|"( **OrderID** .Equals( **10248** ))";|"it. **CustomerID** = **ALFKI** ";|"(it. **OrderID** = **10248** ) ";|
|NotEqualTo|"(! **CustomerID** .Equals(\" **ALFKI** \"))";|"(! **OrderID** .Equals( **10248** ))";|"it. **CustomerID** <> **ALFKI** ";|"(it. **OrderID** <> **10248** ) ";|
|GreaterThan|"( **CustomerID** > \" **ALFKI** \" )"|"( **OrderID** > **10248** )";|"it. **CustomerID** > **ALFKI** ";|"(it. **OrderID** > **10248** ) ";|
|LessThan|"( **CustomerID** < \" **ALFKI\** " )"|"( **OrderID** < **10248** )";|"it. **CustomerID** < **ALFKI** ";|"(it. **OrderID** < **10248** ) ";|
|GreaterThanOrEqualTo|"( **CustomerID** >= \" **ALFKI** \" )"|"( **OrderID** >= **10248** )";|"it. **CustomerID** >= **ALFKI** ";|"(it. **OrderID** >= **10248** ) ";|
|LessThanOrEqualTo|"( **CustomerID** <= \" **ALFKI** \" )"|"( **OrderID** <= **10248** )";|"it. **CustomerID** <= **ALFKI** ";|"(it. **OrderID** <= **10248** ) ";|
|Between|"(( **CustomerID** >= \" **ALFKI** \") AND ( **CustomerID** <= \" **ANTON** \"))"|"(( **OrderID** >= **10248** ) AND ( **OrderID** <= **10252** )) ";|"(it. **CustomerID** >= **ALFKI** ) AND (it.{0} <= **ANTON** )";|"((it. **OrderID** >= **10248** ) AND (it. **OrderID** <= **10252** ))";|
|NotBetween|"(( **CustomerID** < \" **ALFKI** \") OR ( **CustomerID** > \" **ANTON** \"))"|"(( **OrderID** < **10248** ) OR ( **OrderID** > **10252** )) ";|"(it. **CustomerID** < **ALFKI** ) OR (it. **CustomerID** > **ANTON** )";|"((it. **OrderID** < **10248** ) OR (it. **OrderID** > **10252** )) ";|
|IsEmpty|"( **CustomerID** == \"\") ";|N/A|@"it. **CustomerID** = """"";|N/A|
|NotIsEmpty|"( **CustomerID** != \"\") ";|N/A|@"it. **CustomerID** <> """"";|N/A|
|IsNull|"( **CustomerID** == null)";|"( **OrderID** == null) ";|"it. **CustomerID** == null",|"(it. **OrderID** == null)";|
|NotIsNull|"( **CustomerID** != null) ";|"( **OrderID** != null) ";|"(it. **CustomerID** != null)";|"((it. **OrderID** != null))";|
