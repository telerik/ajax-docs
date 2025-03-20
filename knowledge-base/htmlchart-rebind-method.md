---
title: How to Rebind RadHtmlChart
description: Does RadHtmlChart offer a Rebind method similar to RadGrid one? How to rebind the chart component?
type: how-to
page_title: How to Rebind RadHtmlChart
slug: htmlchart-rebind-method
position: 
tags: 
ticketid: 1571082
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadHtmlChart for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
When I change the SqlDataSource1.SelectCommand I want to rebind it to the RadHtmlChart. In RadGrid we use RadGrid1.Rebind(). How can I do this with the RadHtmlChart?

Does RadHtmlChart offer a Rebind method similar to RadGrid's one? How to rebind the component?

## Solution
RadGrid is a much more complex component than the asp:GridView is. That is why the RadGrid1.DataSource + RadGrid1.DataBind() combination would not be enough for most of the operations. We call this combination of binding data as [Simple Data Binding]({%slug grid/data-binding/server-side-binding/simple-data-binding%}).

Simple data binding is only good for displaying relatively simple data. As soon as you start enabling functionalities such as filtering, sorting, paging, and more, this way of binding data won't work. You will then need to bind data using the NeedDataSource event, see [Programmatic Data Binding Using the NeedDataSource Event]({%slug grid/data-binding/server-side-binding/programmatic-databinding-using-needdatasource-event%}). Because the Grid goes through all sorts of Binding procedures when binding to data, to make it easier to bind again, we exposed a method called Rebind(). By calling this method, the Grid will trigger the NeedDataSource and handles the data binding part.

RadHtmlChart does not require such a complex data binding procedure. You can simply change the DataSource by assigning the new Data and calling the DataBind() method.

````C#
RadHtmlChart1.DataSource = newSource; // Assign the new source
RadHtmlChart1.DataBind(); // Bind the new source to it
````

If RadHtmlChart is using the SqlDataSource control to bind to data, you must not call the RadHtmlChart1.DataBind() method. What you can do is to make the SqlDataSource fetch new data or other data and call the DataBind() on it.

Change the SelectCommand and call the DataBind on the SqlDataSource. The RadHtmlChart is linked to the SqlDataSource through the DataSourceID property and it will get the new data.

````C#
SqlDataSource1.SelectCommand = "SELECT  [SomethingElse] FROM [AnotherTable] WHERE [NewCondition] = newValue";
SqlDataSource1.DataBind();
````

If you'd rather go with the DataSource + DataBind combo to bind data, then remove the DataSourceID property and always handle the data binding programmatically in the code behind.

 
  