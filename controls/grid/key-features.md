---
title: RadGrid Key Features
page_title: Key Features - RadGrid
description: Explore RadGrid features for data binding, sorting, filtering, editing, accessibility, exporting, and responsive data presentation.
slug: grid/key-features
components: ["grid"]
previous_url: controls/grid/getting-started/key-features
tags: key,features
published: True
position: 2
---

# RadGrid Key Features

RadGrid provides data management, navigation, editing, accessibility, styling, and export features for ASP.NET AJAX applications.


## RadGrid Feature Overview

![RadGrid feature overview](images/grd_radgrid_default_thumb.png)

The following features describe the main capabilities available in RadGrid:

* [Cross-browser support](https://www.telerik.com/aspnet-ajax/tech-sheets/browser-support) covers Internet Explorer, Gecko-based browsers, Opera, Safari, and Chrome.

* [Accessibility support]({%slug grid/accessibility-and-internationalization/wcag-2.0-and-section-508-accessibility-compliance%}) includes the documented W3C and Section 508 compliance information. Review the [RadGrid accessibility demo](https://demos.telerik.com/aspnet-ajax/grid/examples/generalfeatures/accessibility/defaultcs.aspx) and the [official Section 508 site](http://www.section508.gov/).

* [Hierarchical table structures and mixed load modes]({%slug grid/hierarchical-grid-types-and-load-modes/what-you-should-know%}) support related `DataSet` objects and detail-table templates. See the image below and the [three-level hierarchy demo](https://demos.telerik.com/aspnet-ajax/Grid/Examples/Hierarchy/ThreeLevel/DefaultCS.aspx).

	![RadGrid hierarchical table structure](images/grd_rg_features_1_01.gif "Hierarchical Table Structure")

* [Global item templates](https://demos.telerik.com/aspnet-ajax/grid/examples/data-binding/client-side/client-item-template/defaultcs.aspx) let you define a custom layout for each grid record.

* [RadAjax integration and loading indicators]({%slug ajaxmanager/overview%}) improve responsiveness and minimize traffic to the server.

* [Codeless data binding]({%slug grid/data-editing/automatic-datasource-operations%}) uses the data source controls introduced in ASP.NET 2.x and 3.x.

* [Client-side binding]({%slug grid/data-binding/client-side-binding/client-side-binding%}) supports client-side sorting, paging, and filtering. [Various data sources](https://demos.telerik.com/aspnet-ajax/grid/examples/data-binding/client-side/declarative/defaultcs.aspx) are supported when they implement `IList`, `IEnumerable`, or `ICustomTypeDescriptor`.

* [Filtering]({%slug grid/functionality/filtering/overview%}) applies a filter pattern on a per-column basis. See the image below.

	![RadGrid filtering interface](images/grd_Filtering.png "Filtering")

* [Header context menus]({%slug grid/columns/header-context-menu%}) support sorting, grouping, and showing or hiding columns based on user preferences.

* [Grouping with group footers and footer aggregates]({%slug grid/functionality/grouping/overview%}) supports multilevel grouping, group-by expressions, and grouping by multiple columns. See the image below and the [Outlook-style grouping demo](https://demos.telerik.com/aspnet-ajax/Grid/Examples/GroupBy/OutlookStyle/DefaultCS.aspx).

	![RadGrid grouping interface](images/grd_Grouping.png "Grouping")

* [Multi-column sorting]({%slug grid/functionality/sorting/multi-column-sorting%}) supports sorting by several columns and defining a color for sorted columns. See the image below and the [sorting demo](https://demos.telerik.com/aspnet-ajax/Grid/Examples/GeneralFeatures/Sorting/DefaultCS.aspx).

	![RadGrid multi-column sorting interface](images/grd_MultiColumnSort.png "Multi-Column Sorting")

* [View state optimization]({%slug grid/hierarchical-grid-types-and-load-modes/hierarchy-load-modes%}) provides `ServerBind`, `ServerOnDemand`, and `Client` modes for loading detail tables.

* [Control state support]({%slug grid/performance/optimizing-viewstate-usage%}) lets RadGrid track common features when view state is disabled.

* Grid state preservation after postback preserves the appearance, group-by state, sorting, current page, edit state, selected state, and resizing state after a postback.

* [AJAX-based virtual scrolling]({%slug grid/functionality/scrolling/virtual-scrolling%}) supports navigation through large data structures. See the image below.

	![RadGrid virtual scrolling interface](images/GoogleStyleScroll.PNG "Virtual Scrolling")

* [Migration from Microsoft GridView to Telerik RadGrid](https://demos.telerik.com/aspnet-ajax/Grid/Examples/GeneralFeatures/Migration/DefaultCS.aspx) uses similar declarative syntax to simplify migration from the DataGrid control.

* [Rich column types]({%slug grid/columns/column-types%}) include bound, checkbox, drop-down, button, hyperlink, client-select, date-time, numeric, masked, HTML editor, and template columns. See the image below and the [column types demo](https://demos.telerik.com/aspnet-ajax/Grid/Examples/GeneralFeatures/ColumnTypes/DefaultCS.aspx).

	![RadGrid column types](images/grd_ColumnTypes.gif "Column Types")

* [Paging]({%slug grid/functionality/paging/overview%}) displays grid data in smaller pages for easier navigation.

* [Column and row resizing]({%slug grid/columns/resizing%}) supports real-time resizing, resizing the grid when a column changes size, and clipping cell content.

* [Drag and drop of grid items]({%slug grid/rows/drag-and-drop-of-grid-items%}) supports reordering records within a grid, moving them to another grid, or dropping them on another page element.

* [Column reordering with drag and drop]({%slug grid/columns/reordering%}) lets users reorder columns by dragging their headers. See the image below and the [column resizing demo](https://demos.telerik.com/aspnet-ajax/grid/examples/client/resizing/defaultcs.aspx).

	![RadGrid column reordering interface](images/grd_ReorderColumns.png "Column Reordering With Drag-and-Drop")

* [Scrolling with static headers and frozen columns]({%slug grid/functionality/scrolling/overview%}) keeps headers visible and can keep selected columns fixed. See the image below and the [scrolling demo](https://demos.telerik.com/aspnet-ajax/Grid/Examples/Client/Scrolling/DefaultCS.aspx).

	![RadGrid static headers and frozen columns](images/grd_StaticHeaders.gif "Static Headers")

* [Multi-row and area selection]({%slug grid/functionality/selecting/selecting-rows/client-side-selecting-multiple-rows%}) supports selecting multiple rows with **Ctrl** + **Click** or by dragging across rows. See the image below and the [row selection demo](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/selecting/row-selection/defaultcs.aspx).

	![RadGrid multi-row and area selection](images/grd_rg_features_1_08.gif "Multi-Row Selection and Area Selection")

* [Design-time support]({%slug grid/design-time/overview%}) lets you build, customize, and populate a grid in the Visual Studio design environment.

* [Client-side API support]({%slug grid/client-side-programming/overview%}) provides methods for resizing, moving, reordering, selecting, and scrolling columns.

* [Exporting]({%slug grid/functionality/exporting/overview%}) supports Microsoft Excel, Microsoft Word, CSV, and PDF formats.

* Flexible editing supports [in-place editing]({%slug grid/data-editing/edit-mode/in-place%}), [edit forms]({%slug grid/data-editing/edit-mode/edit-forms%}), [custom edit forms]({%slug grid/data-editing/edit-mode/custom-edit-forms%}), and [popup edit forms]({%slug grid/data-editing/edit-mode/popup-edit-form%}).

* [Custom editors]({%slug grid/data-editing/grid-editors/custom-editors-extending-auto-generated-editors%}) let you replace default editors with validation, rich-text editing, or other functionality. See the image below and the [custom editor demo](https://demos.telerik.com/aspnet-ajax/Grid/Examples/DataEditing/UserControlEditForm/DefaultCS.aspx).

	![RadGrid custom column editor](images/grd_customEditors.png "Custom Column Editor")

* [Appearance customization]({%slug grid/appearance-and-styling/skins%}) uses skins to customize grid elements, including individual `DetailTable` instances in a hierarchical grid.

* [ListView and DataList-like layouts](https://demos.telerik.com/aspnet-ajax/listview/examples/migration/defaultcs.aspx) display data in a custom layout while retaining sorting, paging, and filtering.

* [Keyboard support]({%slug grid/accessibility-and-internationalization/keyboard-support%}) enables navigation, editing, and selection with the keyboard. See the [keyboard navigation demo](https://demos.telerik.com/aspnet-ajax/Grid/Examples/Hierarchy/ThreeLevel/DefaultCS.aspx).

## See Also

Continue with these related RadGrid resources:

- [Review the RadGrid overview]({%slug grid/overview%})
- [Get started with RadGrid]({%slug grid/getting-started%})

