---
title: get_filterExpressions()
page_title: get_filterExpressions() | RadGrid for ASP.NET AJAX Documentation
description: get_filterExpressions()
slug: grid/client-side-programming/gridtableview-object/collections/get_filterexpressions()
tags: get_filterexpressions()
published: True
position: 0
---

# get_filterExpressions()



## 

A collection of **Telerik.Web.UI.GridFilterExpression** objects. Represents the filter expressions applied for the grid instance.

The toString() javascript method executed over this collection will return SQL string representation of all filter expressions concatenated by 'AND' reserved words. While filter expressions toString() method will create SQL syntax representing current grid filtering, you can also take advantage of the **toDynamicLinq()** javascript method which will create LINQ expression that can be used directly with [Dynamic LINQ library](http://weblogs.asp.net/scottgu/archive/2008/01/07/dynamic-linq-part-1-using-the-linq-dynamic-query-library.aspx).

Furthermore, you can also utilize the **toList()** javascript method in order to pass an array of items (representing the filter expression elements) to the server and operate with them using GridFilterExpression server object.

When the toString() method is executed over a particular **Telerik.Web.UI.GridFilterExpression** object, it will return SQL string representation of the expression using the **Telerik.Web.UI.GridFilterFunctionsSqlFormat** enumeration values:

````JavaScript
	Telerik.Web.UI.GridFilterFunctionsSqlFormat = function()
	{
	    var _knownFilterFunctions = {};
	    _knownFilterFunctions[Telerik.Web.UI.GridFilterFunction.Contains] = "[{0}] LIKE '%{1}%'";
	    _knownFilterFunctions[Telerik.Web.UI.GridFilterFunction.DoesNotContain] = "[{0}] NOT LIKE '%{1}%'";
	    _knownFilterFunctions[Telerik.Web.UI.GridFilterFunction.StartsWith] = "[{0}] LIKE '{1}%'";
	    _knownFilterFunctions[Telerik.Web.UI.GridFilterFunction.EndsWith] = "[{0}] LIKE '%{1}'";
	    _knownFilterFunctions[Telerik.Web.UI.GridFilterFunction.EqualTo] = "[{0}] = {1}";
	    _knownFilterFunctions[Telerik.Web.UI.GridFilterFunction.NotEqualTo] = "[{0}] <> {1}";
	    _knownFilterFunctions[Telerik.Web.UI.GridFilterFunction.GreaterThan] = "[{0}] > {1}";
	    _knownFilterFunctions[Telerik.Web.UI.GridFilterFunction.LessThan] = "[{0}] < {1}";
	    _knownFilterFunctions[Telerik.Web.UI.GridFilterFunction.GreaterThanOrEqualTo] = "[{0}] >= {1}";
	    _knownFilterFunctions[Telerik.Web.UI.GridFilterFunction.LessThanOrEqualTo] = "[{0}] <= {1}";
	    _knownFilterFunctions[Telerik.Web.UI.GridFilterFunction.Between] = "([{0}] >= {1}) AND ([{0}] <= {2})";
	    _knownFilterFunctions[Telerik.Web.UI.GridFilterFunction.NotBetween] = "([{0}] < {1}) OR ([{0}] > {2})";
	    _knownFilterFunctions[Telerik.Web.UI.GridFilterFunction.IsEmpty] = "[{0}] = ''";
	    _knownFilterFunctions[Telerik.Web.UI.GridFilterFunction.NotIsEmpty] = "[{0}] <> ''";
	    _knownFilterFunctions[Telerik.Web.UI.GridFilterFunction.IsNull] = "[{0}] IS NULL";
	    _knownFilterFunctions[Telerik.Web.UI.GridFilterFunction.NotIsNull] = "NOT ([{0}] IS NULL)";
	    return _knownFilterFunctions;
	};			
````



The **toDynamicLinq()** javascript method can be executed over a single **Telerik.Web.UI.GridFilterExpression** object, which will generate LINQ expression that can be used directly with [Dynamic LINQ library](http://weblogs.asp.net/scottgu/archive/2008/01/07/dynamic-linq-part-1-using-the-linq-dynamic-query-library.aspx).

Additionally, there is another method - **toDataService()**, which again can be executed over a single **Telerik.Web.UI.GridFilterExpression** object and will generate an expression that can be recognized by ADO.NET Data Services.

There is one more method - **toOql()** for filter expressions which can be used if you want to bind the grid client-side directly to Telerik OpenAccess OQL query. Here are some code blocks which illustrates sample approach:

````JavaScript
	//attach the OnDataBinding client-side event of the gridfunction RadGrid1_DataBinding(sender, args)
	{
	            var tableView = sender.get_masterTableView();
	
	            var sortParameterName = sender.ClientSettings.DataBinding.SortParameterName;
	            var filterParameterName = sender.ClientSettings.DataBinding.FilterParameterName;
	
	            args.get_methodArguments()[sortParameterName] = tableView.get_sortExpressions().toString();
	            args.get_methodArguments()[filterParameterName] = tableView.get_filterExpressions().toOql();
	}			
````





````C#
	
	
	    public IList GetData(int startRowIndex, int maximumRows, string sortExpression, string filterExpression)
	    {
	        string oqlQuery = "SELECT * FROM CustomerExtent";
	
	        if (!String.IsNullOrEmpty(filterExpression))
	        {
	            oqlQuery = String.Format(" {0} WHERE {1} ", oqlQuery, filterExpression);
	        }
	
	        if (!String.IsNullOrEmpty(sortExpression))
	        {
	            oqlQuery = String.Format(" {0} ORDER BY {1} ", oqlQuery, sortExpression);
	        }
	
	        IList data = db.GetObjectScope().GetOqlQuery(oqlQuery).Execute();
	
	        List<object> list = new List<object>();
	
	        for (int i = 0; i < Math.Min(maximumRows, data.Count); i++)
	        {
	            list.Add(data[i + startRowIndex]);
	        }
	
	        Session["Count"] = data.Count;
	
	        return list;
	    }
	
````
````VB.NET
	
	
	    Public Function GetData(ByVal startRowIndex As Integer, ByVal maximumRows As Integer, ByVal sortExpression As String, ByVal filterExpression As String) As IList
	        Dim oqlQuery As String = "SELECT * FROM CustomerExtent"
	        If Not [String].IsNullOrEmpty(filterExpression) Then
	            oqlQuery = [String].Format(" {0} WHERE {1} ", oqlQuery, filterExpression)
	        End If
	        If Not [String].IsNullOrEmpty(sortExpression) Then
	            oqlQuery = [String].Format(" {0} ORDER BY {1} ", oqlQuery, sortExpression)
	        End If
	        Dim data As IList = db.GetObjectScope().GetOqlQuery(oqlQuery).Execute()
	        Dim list As New List(Of Object)()
	        Dim i As Integer = 0
	        While i < Math.Min(maximumRows, data.Count)
	            list.Add(data(i + startRowIndex))
	            System.Math.Max(System.Threading.Interlocked.Increment(i), i - 1)
	        End While
	        Session("Count") = data.Count
	        Return list
	    End Function
	
````


Each filter expression (of type **Telerik.Web.UI.GridFilterExpression**) has *fieldName, fieldValue, columnUniqueName, dataTypeName and filterFunction* properties which hold the field name, field value (filter pattern typed by the user), the unique name of the filtered column, the data type and the filter function applied to it (respectively). To retrieve the values from these properties use the **get_fieldName(), get_fieldValue(), get_columnUniqueName().get_dataTypeName()** and **get_filterFunction()** properties of the corresponding GridFilterExpression. Below is a sample code excerpt using OnCommand client-side event handler:

````ASP.NET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <clientEvents OnCommand="RaiseCommand" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function RaiseCommand(sender, args) {
	            args.set_cancel(true); //cancel the default command to prevent postback/ajax request
	
	            var filterExpressions = sender.get_masterTableView().get_filterExpressions();
	
	            //obtain the values from the GridFilterExpression properties
	
	            if (filterExpressions.length > 0) {
	                var expression = filterExpressions[0];
	                var fieldName = expression.get_fieldName();
	                var fieldValue = expression.get_fieldValue();
	                var columnUniqueName = expression.get_columnUniqueName();
	                var filterFunction = expression.get_filterFunction(); // enum Telerik.Web.UI.GridFilterFunction
	
	                alert(expression.toString() + "/n" + expression.toDynamicLinq());
	            }
	
	            alert(filterExpressions.toString());
	        }
	
````



Where the possible values for the **Telerik.Web.UI.GridFilterFunction** enumeration are listed below:

````JavaScript
	Telerik.Web.UI.GridFilterFunction.prototype = 
	{
	    NoFilter                : 0,
	    Contains                : 1,
	    DoesNotContain          : 2,
	    StartsWith              : 3,
	    EndsWith                : 4,
	    EqualTo                 : 5,
	    NotEqualTo              : 6,
	    GreaterThan             : 7,
	    LessThan                : 8,
	    GreaterThanOrEqualTo    : 9,
	    LessThanOrEqualTo       : 10,
	    Between                 : 11,
	    NotBetween              : 12,
	    IsEmpty                 : 13,
	    NotIsEmpty              : 14,
	    IsNull                  : 15,
	    NotIsNull               : 16,
	    Custom                  : 17
	};
````



>note The RadGrid get_filterExpressions() property is meaningful only in case the RadGrid control is bound client-side.
>

