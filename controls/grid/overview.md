---
title: WebForms Grid Overview
page_title: RadGrid Overview
description: Learn how Telerik UI for ASP.NET AJAX RadGrid handles data binding, paging, sorting, filtering, editing, grouping, and exporting.
slug: grid/overview
components: ["grid"]
tags: overview, grid, RadGrid, data binding, WebForms
published: True
position: 0
---

# WebForms Grid Overview

This article introduces Telerik UI for ASP.NET AJAX RadGrid and shows how to enable data binding, paging, sorting, filtering, editing, grouping, exporting, and accessibility support.

Telerik **RadGrid** provides rich functionality for ASP.NET applications while generating minimal output. For supported browsers, see [Browser Support for Telerik UI for ASP.NET AJAX](https://www.telerik.com/aspnet-ajax/tech-sheets/browser-support).


>caption To create a basic `RadGrid`:

1. Ensure that the page contains a script manager by declaring an `<asp:ScriptManager>` tag.
2. Declare the grid with the `<telerik:RadGrid>` tag and set its global properties.
3. Set the `DataSource` or `DataSourceID` property to reference the collection or data source component. See [Telerik RadGrid data binding basics]({%slug grid/data-binding/overview%}).
4. Declare the main table with `<telerik:MasterTableView>` and set its properties.
5. Declare columns with tags that match the content type. Set each `DataField` property to the model field name. See [RadGrid column types]({%slug grid/columns/column-types%}).

>caption Get started with the grid declaration and enabling some of its features

````ASP.NET
<asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>

<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" AllowSorting="true" AllowFilteringByColumn="true" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="ID">
        <Columns>
            <telerik:GridBoundColumn DataField="ID" DataType="System.Int32" HeaderText="OrderID" ReadOnly="True" UniqueName="ID">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="Name" FilterControlAltText="Filter Name column" SortExpression="Name" HeaderText="Employee Name" UniqueName="Name">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="Team" FilterControlAltText="Filter Team column" SortExpression="Team" HeaderText="Team" UniqueName="Team">
            </telerik:GridBoundColumn>
            <telerik:GridDateTimeColumn DataField="HireDate" DataType="System.DateTime" FilterControlAltText="Filter HireDate column" SortExpression="HireDate" HeaderText="Hire Date" UniqueName="HireDate">
            </telerik:GridDateTimeColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

>caption Provide the RadGrid with a data collection in the code-behind

````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = MyData; 
}

public IEnumerable<SampleData> MyData = Enumerable.Range(1, 30).Select(x => new SampleData
{
    Id = x,
    Name = "Name " + x,
    Team = "Team " + x % 5,
    HireDate = DateTime.Now.AddDays(-x*3).Date
});

public class SampleData
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Team { get; set; }
    public DateTime HireDate { get; set; }
}
````
````VB
Protected Sub RadGrid1_NeedDataSource(ByVal sender As Object, ByVal e As GridNeedDataSourceEventArgs)
    TryCast(sender, RadGrid).DataSource = MyData
End Sub

Public MyData As IEnumerable(Of SampleData) = Enumerable.Range(1, 30).[Select](Function(x) New SampleData With {
    .Id = x,
    .Name = "Name " & x,
    .Team = "Team " & x Mod 5,
    .HireDate = DateTime.Now.AddDays(-x * 3).Date
})

Public Class SampleData
    Public Property Id As Integer
    Public Property Name As String
    Public Property Team As String
    Public Property HireDate As DateTime
End Class
````

The result from the code example is shown in the following image:
![Basic RadGrid Example](images/grid-overview-basic-create.png "Basic Grid Example")



Review the most commonly used key features below, or go directly to [Getting Started with RadGrid]({%slug grid/getting-started%}).


## Basic Grid

![WebForms Basic Grid](images/grid-overview-basic.png "Basic Grid")



## Advanced Grid

![WebForms Advanced Grid](images/grid-overview-advanced.png "Advanced Grid")

Explore these key RadGrid functionalities:

- [Paging]({%slug grid/functionality/paging/overview%})
- [Filtering]({%slug grid/functionality/filtering/overview%})
- [Grouping]({%slug grid/functionality/grouping/overview%})
- [Data Binding]({%slug grid/data-binding/overview%})
- [Hierarchy]({%slug grid/hierarchical-grid-types-and-load-modes/what-you-should-know%})
- [CommandItem]({%slug grid/data-editing/commanditem/overview%})
- [Export To Excel]({%slug grid/functionality/exporting/excel-export/excel-xlsx%})
- [Export To CSV]({%slug grid/functionality/exporting/csv-export%})
- [Export To PDF]({%slug grid/functionality/exporting/pdf-export%})
- [Export To DOC]({%slug grid/functionality/exporting/word-export/word-docx%})
- [Print]({%slug grid/functionality/printing/printing%})
- [Accessibility Compliance]({%slug grid/accessibility-and-internationalization/wcag-2.0-and-section-508-accessibility-compliance%})




## Colorful Grid with built-in Skins

See the [RadGrid skinning options]({%slug grid/appearance-and-styling/skins%}).

![WebForms Grid Overview Skins](images/grid-overview-skins.gif "Grid built-in Skins")

## Paging

See the [RadGrid paging options]({%slug grid/functionality/paging/overview%}).

![WebForms Grid Overview Paging](images/grid-overview-paging.png "Grid Paging")

## Filtering

See the [RadGrid filtering options]({%slug grid/functionality/filtering/overview%}).

![WebForms Grid Overview Filtering](images/grid-overview-filtering.png "Grid Filtering")

## Sorting

See the [RadGrid sorting options]({%slug grid/functionality/sorting/overview%}).

![WebForms Grid Overview Sorting](images/grid-overview-sorting.png "Grid Sorting")

## Grouping

See the [RadGrid grouping options]({%slug grid/functionality/grouping/overview%}).

![WebForms Grid Overview Grouping](images/grid-overview-grouping.png "Grid Grouping")

## Hierarchy

See the [RadGrid hierarchical structure and load modes]({%slug grid/hierarchical-grid-types-and-load-modes/what-you-should-know%}).

![WebForms hierarchy grid overview](images/grid-overview-hierarchy.png "Hierarchy Grid")

## Create, Read, Update, and Delete (CRUD) Operations

RadGrid supports server-side and client-side editing through several edit-form options.


### Server-Side Editing

Choose one of these server-side editing options:

### Edit Form

See the [RadGrid edit forms]({%slug grid/data-editing/edit-mode/edit-forms%}).

![Grid Edit Form](images/grid-overview-editforms.png "Grid Edit Form")

### Popup Edit Form

See the [RadGrid popup edit forms]({%slug grid/data-editing/edit-mode/popup-edit-form%}).

![Grid PopUp Edit Form](images/grid-overview-popup.png "Grid PopUp Edit Form")

### In-place Editing

See [RadGrid in-place editing]({%slug grid/data-editing/edit-mode/in-place%}).

![Grid InPlace Edit Form](images/grid-overview-inplace.png "Grid InPlace Edit Form")

### Client-Side Editing

Use batch editing to update multiple records on the client before sending the changes to the server.

### Batch Editing

See [RadGrid batch editing]({%slug grid/data-editing/edit-mode/batch-editing/overview%}).

![Grid Batch Edit Form](images/grid-overview-batchedit.png "Batch Editing")


## API Reference

Use these API references for the RadGrid and its table views:

- [Telerik.Web.UI.RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadGrid) (RadGrid)

- [Telerik.Web.UI.GridTableView](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/GridTableView) (MasterTable and/or DetailTables)

## See Also

Continue with these related RadGrid resources:

- [Getting Started]({%slug grid/getting-started%})

- [RadGrid overview demos](https://demos.telerik.com/aspnet-ajax/grid/examples/overview/defaultcs.aspx)
- [Telerik UI for ASP.NET AJAX Grid](https://www.telerik.com/products/aspnet-ajax/grid.aspx)


