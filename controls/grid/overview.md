---
title: Overview
page_title: RadGrid Overview
description: Check our Web Forms article about Overview.
slug: grid/overview
tags: overview
published: True
position: 0
---

# WebForms Grid Overview

This article provides a quick introduction so you can get your AJAX data grid up and running in a few seconds. You can find 
how to enable key features like paging, sorting, filtering, editing, grouping, exporting and accessibility support, as well as how to bind data.

Telerik **RadGrid** is designed to eliminate the typical trade-off associated with ASP.NET grid controls — rich functionality at the expense of weight and performance. Thanks to its innovative architecture, **RadGrid** is extremely fast and generates very little output. Added to this is true cross-browser support — all major/modern browsers, see [Browser Support - Telerik UI for ASP.NET AJAX](https://www.telerik.com/aspnet-ajax/tech-sheets/browser-support)


>caption To create a basic `RadGrid`:

1. ensure you have a script manager on the page (use \<asp:ScriptManager> tag to declare one)
1. use the \<telerik:RadGrid> tag to declare the grid and to set its global properties
1. use its `DataSource` (or `DataSourceID`) property to reference the variable (or the DataSource component) that will hold your collection of data, see [Telerik RadGrid Data Binding Basics]({%slug grid/data-binding/overview%})
1. use the \<telerik:MasterTableView> to declare your main table and set its properties
1. use the appropriate grid column tags to declare columns depending on the data type of their content. Set the `DataField` property to point at the name of the model field, see [Column Types]({%slug grid/columns/column-types%}) 

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

The result from the code snippet above
![Basic RadGrid Example](images/grid-overview-basic-create.png "Basic Grid Example")



Check out the most commonly used key features below, or head directly to the [Getting Started]({%slug grid/getting-started%}) section.


## Basic Grid

![WebForms Basic Grid](images/grid-overview-basic.png "Basic Grid")



## Advanced Grid

![WebForms Advance Grid](images/grid-overview-advanced.png "Advance Grid")

List of key functionalites you can find below:

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

See [Skins]({%slug grid/appearance-and-styling/skins%}) documentation.

![WebForms Grid Overview Skins](images/grid-overview-skins.gif "Grid built-in Skins")

## Paging

See [Paging]({%slug grid/functionality/paging/overview%}) documentation.

![WebForms Grid Overview Paging](images/grid-overview-paging.png "Grid Paging")

## Filtering

See [Filtering]({%slug grid/functionality/filtering/overview%}) documentation.

![WebForms Grid Overview Filtering](images/grid-overview-filtering.png "Grid Filtering")

## Sorting

See [Sorting]({%slug grid/functionality/sorting/overview%}) documentation.

![WebForms Grid Overview Sorting](images/grid-overview-sorting.png "Grid Sorting")

## Grouping

See [Grouping]({%slug grid/functionality/grouping/overview%}) documentation.

![WebForms Grid Overview Grouping](images/grid-overview-grouping.png "Grid Grouping")

## Hierarchy

See [Hierarchical Grid Types]({%slug grid/hierarchical-grid-types-and-load-modes/what-you-should-know%}) documentation.

![WebForms Hierarchy Grid Overview ](images/grid-overview-hierarchy.png "Hierarchy Grid")

## Create/Read/Update/Delete (CRUD) operations


### Server-Side Editing

**Edit Form**

See [Edit Forms]({%slug grid/data-editing/edit-mode/edit-forms%}) documentation.

![Grid Edit Form](images/grid-overview-editforms.png "Grid Edit Form")

**PopUp**

See [PopUp Edit Forms]({%slug grid/data-editing/edit-mode/popup-edit-form%}) documentation.

![Grid PopUp Edit Form](images/grid-overview-popup.png "Grid PopUp Edit Form")

**InPlace (Inline)**

See [InPlace]({%slug grid/data-editing/edit-mode/in-place%}) documentation.

![Grid InPlace Edit Form](images/grid-overview-inplace.png "Grid InPlace Edit Form")

### Client-Side Editing

**Batch Edit**

See [Batch Editing]({%slug grid/data-editing/edit-mode/batch-editing/overview%}) documentation.

![Grid Batch Edit Form](images/grid-overview-batchedit.png "Grid Batch Edit Form")


## Properties & Methods - API Reference

- [Telerik.Web.UI.RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadGrid) (RadGrid)

- [Telerik.Web.UI.GridTableView](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/GridTableView) (MasterTable and/or DetailTables)

## Get Started

[Get Started with RadGrid]({%slug grid/getting-started%})

## See Also

- [Getting Started]({%slug grid/getting-started%})

* [Online Demos](https://demos.telerik.com/aspnet-ajax/grid/examples/overview/defaultcs.aspx)
 
* [ASP.NET AJAX Grid](https://www.telerik.com/products/aspnet-ajax/grid.aspx)


