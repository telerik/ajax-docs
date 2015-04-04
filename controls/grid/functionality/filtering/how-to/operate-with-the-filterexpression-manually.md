---
title: Operate with the FilterExpression Manually
page_title: Operate with the FilterExpression Manually | UI for ASP.NET AJAX Documentation
description: Operate with the FilterExpression Manually
slug: grid/functionality/filtering/how-to/operate-with-the-filterexpression-manually
tags: operate,with,the,filterexpression,manually
published: True
position: 0
---

# Operate with the FilterExpression Manually



## 

There are two ways you can determine what filter function the grid is currently employing:

* Provide a handler for the __ItemCommand__ event. In the __ItemCommand__ event handler, check that __e.CommandName__ is "Filter" (or, more robustly, __RadGrid.FilterCommandName__):

* The __e.CommandArgument__ value is a __Pair__ object that holds the filter function name and the column's unique name.

* The __e.Item__ value is the __GridFilteringItem__. Using the column name, you can access the text box that holds the filter pattern.You can also customize the filter operation at this point by setting the table view's __FilterExpression__. For details on how to do this, see [Custom option for filtering (FilterListOptions -> VaryByDataTypeAllowCustom)]({%slug grid/functionality/filtering/how-to/custom-option-for-filtering%}).

* When binding a grid using the __NeedDataSource__ event, check the __RadGrid.MasterTableView.FilterExpression__ property in the __NeedDataSource__ event handler. This string represents the current filter function in the same way as the __DataView.Filter__ property (that is, it is the text of a WHERE clause for filtering items).

>note If you want to customize filtering using your own custom statements, clear the __FilterExpression__ string (to prevent the default filtering) and bind the grid to a filtered data set.
>


The following example shows how to access the filter information in the __ItemCommand__ event handler. It saves this information to a set of messages that can be displayed (by the grid's __DataBound__ event handler) to provide feedback about the current filter function:

>tabbedCode

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
>end

>note With the .NET 3.5 build of RadGrid for ASP.NET AJAX and LINQ filter expressions enabled (EnableLinqExpressions = true), the filter expressions set for the grid either internally by its filtering mechanism or manually in code should conform to the LINQ expression syntax instead of the old T-SQL syntax. Only thus they will be evaluated properly by the control.
>


The value of the FilterExpression for the grid is a string, including vital information concerning the field (column) which needs to be filtered, along with the value entered by the end user in the filter text box, and the filter option chosen. Internally, the filter expression is created in accordance with the T-SQL syntax (in case we are using the .NET 2.0 built of the control), or follow the newer LINQ expression syntax (when using the .NET 3.5 version).

In most cases the programmer does not need to worry about these details, since the filtering is automatically handled by RadGrid. In some scenarios, however, it is useful to have a better knowledge on how these expressions are constructed. This is the case, for example, when the grid needs to be filtered initially, or when a more complex, custom filter expression should be constructed.

The following table shows the representation of the grid FilterExpression for each filter function when the filter value type is __string__ or __numeric__. To make it practical, it assumes that we are filtering a string column named __CustomerID__ by a value of '__ALFKI__' and a column of a numeric type, called __OrderID__ by a value of __'10248'__ accordingly.

*Note*: In some of the expressions additional parameters are used. For example in this filter function: __@"<DataType>(it[""<DataField>""])= {numeric value}";__the particular DataType is __Int32__:


>caption  

|  | SqlDataSource 3.5 EnableLinqExpression="true" |  | SqlDataSource 3.5/2.0EnableLinqExpression="false" |  |
| ------ | ------ | ------ | ------ | ------ |
| __Filter Function__ | __string__ | __int__ | __string__ | __int__ |
|Contains|@"it["" __CustomerID__ ""].ToString().Contains("" __ALFKI__ "")";|N/A|"([ __CustomerID__ ] LIKE '% __ALFKI__ %')";|N/A|
|DoesNotContain|@"!it["" __CustomerID__ ""].ToString().Contains("" __ALFKI__ "")";|N/A|"([ __CustomerID__ ] NOT LIKE '% __ALFKI__ %') ";|N/A|
|StartsWith|@"it[""{0}""].ToString().StartsWith("" __ALFKI__ "")";|N/A|"([ __CustomerID__ ] LIKE ' __ALFKI__ %') ";|N/A|
|EndsWith|@"it["" __CustomerID__ ""].ToString().EndsWith("" __ALFKI__ "")";|N/A|"([ __CustomerID__ ] LIKE '% __ALFKI__ ')";|N/A|
|EqualTo|"(Convert.ToString(it[\" __CustomerID__ \"]) = \" __ALFKI__ \")";|@"Int32(it["" __OrderID__ ""]) = __10248__ ";|"([ __CustomerID__ ] = ' __ALFKI__ ')";|"([ __OrderID__ ] = __10248__ ) ";|
|NotEqualTo|"(Convert.ToString(it[\" __CustomerID__ \"]) <> \" __ALFKI__ \")";|@"Int32(it["" __OrderID__ ""]) <> __10248__ ";|"([ __CustomerID__ ] <> ' __ALFKI__ ')";|"([ __OrderID__ ] <> __10248__ ) ";|
|GreaterThan|"(Convert.ToString(it[\" __CustomerID__ \"]) > \" __ALFKI__ \")";|@"Int32(it["" __OrderID__ ""]) > __10248__ ";|"([ __CustomerID__ ] > ' __ALFKI__ ') ";|"([ __OrderID__ ] > __10248__ ) ";|
|LessThan|"(Convert.ToString(it[\" __CustomerID__ \"]) < \" __ALFKI__ \")";|@"Int32(it["" __OrderID__ ""]) < __10248__ ";|"([ __CustomerID__ ] < ' __ALFKI__ ') ";|"([ __OrderID__ ] < __10248__ ) ";|
|GreaterThanOrEqualTo|"(Convert.ToString(it[\" __CustomerID__ \"]) >= \" __ALFKI__ \")";|@"Int32(it["" __OrderID__ ""]) >= __10248__ ";|"([ __CustomerID__ ] >= ' __ALFKI__ ')";|"([ __OrderID__ ] >= __10248__ ";|
|LessThanOrEqualTo|"(Convert.ToString(it[\" __CustomerID__ \"]) <= \" __ALFKI__ \")";|@"Int32(it["" __OrderID__ ""]) <= __10248__ ";|"([ __CustomerID__ ] <= ' __ALFKI__ ')";|"([ __OrderID__ ] <= __10248__ ) ";|
|Between|"((Convert.ToString(it[\" __CustomerID__ \"]) >= \" __ALFKI__ \") AND ( Convert.ToString(it[\" __CustomerID__ \"]) <= \" __ANTON__ \")) ";|@"(Int32(it["" __OrderID__ ""]) >= __10248__ ) AND ( __Int32__ (it["" __OrderID__ ""]) <= __10252__ )";|"(([ __CustomerID__ ] >= ' __ALFKI__ ') AND ([ __CustomerID__ ] <= ' __ANTON__ ')) ";|"(([ __OrderID__ ] >= __10248__ ) AND ([ __OrderID__ ] <= __10252__ ))";|
|NotBetween|"((Convert.ToString(it[\" __CustomerID__ \"]) < \" __ALFKI__ \") AND ( Convert.ToString(it[\" __CustomerID__ \"]) > \" __ANTON__ \")) ";|@"(Int32(it["" __OrderID__ ""]) < __10248__ ) OR ( __Int32__ (it["" __OrderID__ ""]) > __10252__ )";|"(([ __CustomerID__ ] < ' __ALFKI__ ') OR ([ __CustomerID__ ] > ' __ANTON__ ')) ";|"(([ __OrderID__ ] < __10248__ ) OR ([ __OrderID__ ] > __10252__ )) ";|
|IsEmpty|@"it["" __CustomerID__ ""] = """"";|N/A|"([ __CustomerID__ ] = '') ";|N/A|
|NotIsEmpty|@"it["" __CustomerID__ ""] <> """"";|N/A|"([ __CustomerID__ ] <> '') ";|N/A|
|IsNull|@"it["" __CustomerID__ ""] ==Convert.DBNull";|@"it["" __OrderID__ ""] ==Convert.DBNull";|"([ __CustomerID__ ] IS NULL) ";|"([ __OrderID__ ] IS NULL) ";|
|NotIsNull|@"(it["" __CustomerID__ ""] !=Convert.DBNull)";|@"(it["" __OrderID__ ""] !=Convert.DBNull)";|"(NOT ([ __CustomerID__ ] IS NULL)) ";|"(NOT ([ __OrderID__ ] IS NULL)) ";|


>caption  

|  | LinqDataSource |  | EntityDataSource |  |
| ------ | ------ | ------ | ------ | ------ |
| __Filter Function__ | __string__ | __int__ | __string__ | __int__ |
|Contains|"( __CustomerID__ .Contains(\" __ALFKI__ \"))"|N/A|@"it. __CustomerID__ LIKE ""% __ALFKI__ %""";|N/A|
|DoesNotContain|"(! __CustomerID__ .Contains(\" __ALFKI__ \"))"|N/A|@"it. __CustomerID__ NOT LIKE ""% __ALFKI__ %""";|N/A|
|StartsWith|"( __CustomerID__ .StartsWith(\" __ALFKI__ \"))"|N/A|@"it. __CustomerID__ LIKE "" __ALFKI__ %""";|N/A|
|EndsWith|"( __CustomerID__ .EndsWith(\" __ALFKI__ \"))"|N/A|@"it. __CustomerID__ LIKE ""% __ALFKI__ """;|N/A|
|EqualTo|"( __CustomerID__ .Equals(\" __ALFKI__ \"))";|"( __OrderID__ .Equals( __10248__ ))";|"it. __CustomerID__ = __ALFKI__ ";|"(it. __OrderID__ = __10248__ ) ";|
|NotEqualTo|"(! __CustomerID__ .Equals(\" __ALFKI__ \"))";|"(! __OrderID__ .Equals( __10248__ ))";|"it. __CustomerID__ <> __ALFKI__ ";|"(it. __OrderID__ <> __10248__ ) ";|
|GreaterThan|"( __CustomerID__ > \" __ALFKI__ \" )"|"( __OrderID__ > __10248__ )";|"it. __CustomerID__ > __ALFKI__ ";|"(it. __OrderID__ > __10248__ ) ";|
|LessThan|"( __CustomerID__ < \" __ALFKI\__ " )"|"( __OrderID__ < __10248__ )";|"it. __CustomerID__ < __ALFKI__ ";|"(it. __OrderID__ < __10248__ ) ";|
|GreaterThanOrEqualTo|"( __CustomerID__ >= \" __ALFKI__ \" )"|"( __OrderID__ >= __10248__ )";|"it. __CustomerID__ >= __ALFKI__ ";|"(it. __OrderID__ >= __10248__ ) ";|
|LessThanOrEqualTo|"( __CustomerID__ <= \" __ALFKI__ \" )"|"( __OrderID__ <= __10248__ )";|"it. __CustomerID__ <= __ALFKI__ ";|"(it. __OrderID__ <= __10248__ ) ";|
|Between|"(( __CustomerID__ >= \" __ALFKI__ \") AND ( __CustomerID__ <= \" __ANTON__ \"))"|"(( __OrderID__ >= __10248__ ) AND ( __OrderID__ <= __10252__ )) ";|"(it. __CustomerID__ >= __ALFKI__ ) AND (it.{0} <= __ANTON__ )";|"((it. __OrderID__ >= __10248__ ) AND (it. __OrderID__ <= __10252__ ))";|
|NotBetween|"(( __CustomerID__ < \" __ALFKI__ \") OR ( __CustomerID__ > \" __ANTON__ \"))"|"(( __OrderID__ < __10248__ ) OR ( __OrderID__ > __10252__ )) ";|"(it. __CustomerID__ < __ALFKI__ ) OR (it. __CustomerID__ > __ANTON__ )";|"((it. __OrderID__ < __10248__ ) OR (it. __OrderID__ > __10252__ )) ";|
|IsEmpty|"( __CustomerID__ == \"\") ";|N/A|@"it. __CustomerID__ = """"";|N/A|
|NotIsEmpty|"( __CustomerID__ != \"\") ";|N/A|@"it. __CustomerID__ <> """"";|N/A|
|IsNull|"( __CustomerID__ == null)";|"( __OrderID__ == null) ";|"it. __CustomerID__ == null",|"(it. __OrderID__ == null)";|
|NotIsNull|"( __CustomerID__ != null) ";|"( __OrderID__ != null) ";|"(it. __CustomerID__ != null)";|"((it. __OrderID__ != null))";|
