---
title: Telerik.Web.UI.GridPagingManager
page_title: Telerik.Web.UI.GridPagingManager
description: Telerik.Web.UI.GridPagingManager
---

# Telerik.Web.UI.GridPagingManager

Can be used in your class implementation to access the information from the PagerItem.Paging object.
            See https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/functionality/paging/changing-the-default-pager/programmatic-pager-customization Programmatic Pager Customizationfor an example.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridPagingManager

## Properties

###  AllowCustomPaging `Boolean`

Gets the a value indicating if the custom pagging functionality have been enabled.

###  AllowPaging `Boolean`

Gets or sets a value indicating whether the automatic paging feature is
            enabled.

###  Count `Int32`

Number of items in the current page

###  CurrentPageIndex `Int32`

Gets or sets an integer value representing the current page index.

#### Remarks
Note that the Paging must be enabled ( must
                be true) in order to use this property.

###  DataSourceCount `Int32`

Number of items in the data-source

###  FirstIndexInPage `Int32`

Gets the first index in the current page.

###  IsCustomPagingEnabled `Boolean`

Gets the a value indicating if the custom pagging functionality have been enabled.

###  IsFirstPage `Boolean`

Gets a value indicating if the control is on the first page.

###  IsLastPage `Boolean`

Gets a value indicating if the control is on the last page.

###  IsPagingEnabled `Boolean`

Gets or sets a value indicating whether the automatic paging feature is
            enabled and supported.

###  LastIndexInPage `Int32`

Gets the last index in the current page.

###  PageCount `Int32`

Gets the number of pages required to display the records of the data source
                in a Telerik RadGrid control.

#### Remarks
When the paging feature is enabled (by setting the AllowPaging property to true),
            use the PageCount property to determine the total number of pages required to display
            the records in the data source. This value is calculated by dividing the total number
            of records in the data source by the number of records displayed in a page (as
            specified by the PageSize property) and rounding up.

###  PageSize `Int32`

Gets or sets an integer value indicating the number of Items that a single page
            in Telerik RadGrid will contain.

#### Remarks
Note that the Paging must be enabled ( must
                be true) in order to use this property.

###  VirtualCount `Int32`

Gets or sets a value, indicating the total number of items in the data source
            when custom paging is used. Thus the grid "understands" that the data source contains
            the specified number of records and it should fetch merely part of them at a time to
            execute requested operation.

