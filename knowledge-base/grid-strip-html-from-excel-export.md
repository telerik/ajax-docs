---
title: Strip HTML tags from Excel Export
description: Using Regex to replace/strip HTML Tags from strings before they get exported into the Excel file.
type: how-to
page_title: Strip HTML tags from Excel Export - RadGrid
slug: grid-strip-html-from-excel-export
ticketid: 1557049
res_type: kb
---

## DESCRIPTION

RadGrid will export the content as is present in the DataSource, however, in some cases, one might want to exclude/remove the HTML tags from the content before they are exported to Excel.

## SOLUTION

Currently, there is no built-in functionality that will strip HTML tags from the Exported content, however, using the Grid's APIs and the Features provided by the .NET Framework, this can be implemented with little to no effort.

One of the most popular approaches is to use the [String.Replace Method](https://docs.microsoft.com/en-us/dotnet/api/system.string.replace) method in combination with [.NET regular expressions](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions) to find and replace HTML tags in strings.

Here is a popular StackOverflow solution for replacing HTML tags in strings: [How do I remove all HTML tags from a string without knowing which tags are in it? [duplicate]](https://stackoverflow.com/a/18154046/2289769)

To apply this in the Grid when exporting, you can use the **IsExporting** property as a condition in the [PreRender event]({%slug grid/server-side-programming/events/prerender%}) to detect when exporting. 

You can then loop through the Grid items, access the content in each cell and remove the HTML tags. By doing this, the HTML tags will not be included in the Exported File.

Attach the PreRender event to RadGrid

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" OnPreRender="RadGrid1_PreRender">
</telerik:RadGrid>
````

In the PreRender event, you can use the **IsExporting** property of the Grid to detect when Exporting, loop through the Grid's Items and by using the approach from the StackOverflow article (see link above), you can remove the HTML tags for each cell in each item.

````C#
protected void RadGrid1_PreRender(object sender, EventArgs e)
{
    var grid = (RadGrid)sender;

    if (grid.IsExporting)
    {
        // Disable paging to gain access to all items in the Grid
        grid.AllowPaging = false; 
        // Refresh the Grid
        grid.Rebind();

        foreach (GridDataItem dataItem in grid.Items)
        {
            dataItem["HTML"].Text = StripHTML(dataItem["HTML"].Text);
        }

        // Turn the Paging back on
        grid.AllowPaging = true; 
        // Refresh the Grid
        grid.Rebind();
    }
}

public static string StripHTML(string input)
{
    return Regex.Replace(input, "<.*?>", String.Empty);
}
````
````VB
Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    Dim grid = CType(sender, RadGrid)

    If grid.IsExporting Then
        'Disable paging to gain access to all items in the Grid
        grid.AllowPaging = False
        'Refresh the Grid
        grid.Rebind()

        For Each dataItem As GridDataItem In grid.Items
            dataItem("HTML").Text = StripHTML(dataItem("HTML").Text)
        Next

        'Turn the Paging back on
        grid.AllowPaging = True
        'Refresh the Grid
        grid.Rebind()
    End If
End Sub

Public Shared Function StripHTML(ByVal input As String) As String
    Return Regex.Replace(input, "<.*?>", String.Empty)
End Function
````
 
