---
title: Load On Demand ComboBox with Filter Contains
description: Use Contains filter for RadComboBox when using Load On Demand to fetch data from the server.
type: how-to
page_title: Load On Demand ComboBox with Filter Contains 
slug: combobox-load-on-demand-combobox-with-filter-contains
tags: radcombobox, asp.net ajax, filter, contains, load on demand, itemsrequested
res_type: kb
ticketid: 1668360
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadComboBox for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

When attempting to use the `Filter="Contains"` setting in a [RadComboBox](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/overview) configured for Load On Demand, the filtering still behaves as if it's set to "StartsWith". This issue arises from misunderstanding the Filter property's role in Load On Demand scenarios. This KB article also answers the following questions:

- How to implement server-side Contains filter with RadComboBox?
- How to configure RadComboBox for Load On Demand with Contains filtering?
- How to customize the ItemsRequested event for Contains filtering in RadComboBox?

## Solution

The `Filter` property of RadComboBox controls client-side filtering, which is not what dictates behavior in Load On Demand scenarios. For Load On Demand, server-side logic determines how filtering is performed, and by default, this uses a "starts with" criterion.

To enable "contains" filtering with Load On Demand, you must customize the server-side data fetching logic, specifically the SQL query used to select items based on the user's input. Here's how to achieve this:

Ensure the RadComboBox is configured for Load On Demand and specify event handling for `ItemsRequested`.

````ASP.NET
<telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox2" runat="server" Width="400"
    EnableLoadOnDemand="True" ShowMoreResultsBox="true" Filter="Contains" Label="Filter working properly"
    EnableVirtualScrolling="true" OnItemsRequested="RadComboBox2_ItemsRequested">
</telerik:RadComboBox>
````

In the `ItemsRequested` event handler, fetch data using an SQL query that includes a "contains" filter pattern.

````C#
private const int ItemsPerRequest = 20;
protected void RadComboBox2_ItemsRequested(object sender, RadComboBoxItemsRequestedEventArgs e)
{
    DataTable data = GetData(e.Text);

    int itemOffset = e.NumberOfItems;
    int endOffset = Math.Min(itemOffset + ItemsPerRequest, data.Rows.Count);
    e.EndOfItems = endOffset == data.Rows.Count;

    for (int i = itemOffset; i < endOffset; i++)
    {
        RadComboBox2.Items.Add(new RadComboBoxItem
        {
            Text = data.Rows[i]["CompanyName"].ToString(),
            Value = data.Rows[i]["CompanyName"].ToString()
        });
    }
}

private static DataTable GetData(string text)
{
    SqlDataAdapter adapter = new SqlDataAdapter("SELECT * from Customers WHERE CompanyName LIKE '%' + @text + '%'",
        ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString);

    adapter.SelectCommand.Parameters.AddWithValue("@text", text.Replace("%", "[%]"));

    DataTable data = new DataTable();
    adapter.Fill(data);

    return data;
}
````

Update the SQL query within the `GetData` method to use the '%' wildcard both before and after the `@text` parameter in the `LIKE` clause. This change ensures that the query searches for entries where the company name contains the specified text, not just entries where the company name starts with the text.

By following these steps, you enable server-side "contains" filtering for the RadComboBox in a Load On Demand scenario, allowing for more flexible data fetching based on user input.

## See Also

- [RadComboBox Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/combobox/overview)
- [Load On Demand](https://www.telerik.com/products/aspnet-ajax/documentation/controls/combobox/load-on-demand/overview)
- [SQL LIKE Operator](https://www.w3schools.com/sql/sql_like.asp)
- [Difference between "LIKE" and "=" in SQL](https://stackoverflow.com/questions/1504990/whats-the-difference-between-like-and-in-sql)
