---
title: Displaying and Selecting Items in RadMultiSelect on Page Load  
description: Learn how to display and select items in a RadMultiSelect control on page load and retrieve unique identifiers for each selected item.
type: how-to  
page_title: Setting Initial Selection and Display for RadMultiSelect   
meta_title: Setting Initial Display and Selection in RadMultiSelect  
slug: multiselect-preselecting-items-on-page-load  
tags: radmultiselect, page_load, initial_selection, datasource, datavaluefield, datatextfield  
res_type: kb  
ticketid: 1707501
---

## Environment  

<table>  
<tbody>  
<tr>  
<td>Product</td>  
<td>UI for ASP.NET AJAX RadMultiSelect</td>  
</tr>  
<tr>  
<td>Version</td>  
<td>All</td>  
</tr>  
</tbody>  
</table>  

## Description  

I want to bind a [RadMultiSelect](https://docs.telerik.com/devtools/aspnet-ajax/controls/multiselect/overview) control to a data source, display all items initially, and select them on page load. Additionally, I want to retrieve a unique identifier (e.g., ID) for each selected item when an item is removed from the list.  

This knowledge base article also answers the following questions:  
- How to select and display items on initial load in RadMultiSelect?  
- How to bind RadMultiSelect to a data source and set initial selection?  
- How to retrieve unique identifiers for selected items in RadMultiSelect?  

## Solution  

To display and select items on page load, bind the RadMultiSelect to the data source and set the `Value` property to the desired values. To retrieve unique identifiers, set the `DataValueField` to the identifier property and `DataTextField` to the display property.  

### Example Code  

````ASP.NET
<telerik:RadMultiSelect ID="RadMultiSelect1" runat="server" Width="500px" DataTextField="DisplayName" DataValueField="UserID" />  
````` 

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        IEnumerable<MyClass> items = Enumerable.Range(0, 10).Select(x => new MyClass()
        {
            ID = x,
            Name = "Name " + x,
            Title = "Title " + x
        });

        string[] selectedValues = items.Select(i => i.ID.ToString()).ToArray();

        RadMultiSelect1.DataSource = items;
        RadMultiSelect1.DataBind();

        RadMultiSelect1.Value = selectedValues;
    }
}

public class MyClass
{
    public int ID { get; set; }
    public string Name { get; set; }
    public string Title { get; set; }
}
````

1. Set `DataTextField` to the property used for display (`DisplayName`).  
2. Set `DataValueField` to the property used for unique identification (`UserID`).  
3. Populate the `Value` property with the identifiers of the items to be selected initially.  

