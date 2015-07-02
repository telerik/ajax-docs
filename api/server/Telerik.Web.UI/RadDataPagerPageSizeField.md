---
title: Telerik.Web.UI.RadDataPagerPageSizeField
page_title: Telerik.Web.UI.RadDataPagerPageSizeField
description: Telerik.Web.UI.RadDataPagerPageSizeField
---

# Telerik.Web.UI.RadDataPagerPageSizeField

Telerik.Web.UI.RadDataPager Telerik.Web.UI.RadDataPagerField which contains Telerik.Web.UI.RadComboBox control in order to 
            change the PageSize property of Telerik.Web.UI.RadDataPager Telerik.Web.UI.RadComboBox

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager
* Telerik.Web.UI.RadDataPagerField
* Telerik.Web.UI.RadDataPagerPageSizeField

## Properties

###  PageSizeControlType `PagerDropDownControlType`

Gets or sets the type of the page size drop down control.

###  PageSizeText `String`

Get/Set the text of the label before RadComboBox

###  PageSizeComboWidth `Int32`

Get/Set RadComboBox Width property in pixels. Default value is 50px.

###  PageSizes `Int32[]`

Gets or sets comma or semicolon delimited list of page sizes values.

###  Owner `RadDataPager`

Returns RadDataPager control that owns current pager field. 
            This property is set by DataPagerFieldCollection and is read only.

###  PagerType `String`

Gets the string representation of the type-name of this instance. The value is
            used by RadDataPager to determine the type of the pager field persisted into the ViewState, when
            recreating the pager after postback. This property is read only.

###  HorizontalPosition `PagerFieldHorizontalPosition`

Gets or sets the positioning of the pager field with regard to its CSS float style.

###  Visible `Boolean`

Gets or sets value that indicates whether RadDataPagerField is rendered.

###  HiddenXs `Boolean`

Hidden attribute - Extra Small

###  HiddenSm `Boolean`

Hidden attribute - Small

###  HiddenMd `Boolean`

Hidden attribute - Medium

###  HiddenLg `Boolean`

Hidden attribute - Large

###  HiddenXl `Boolean`

Hidden attribute - Extra Large

###  HorizontalPositionXs `PagerFieldHorizontalPosition`

Horizontal Position attribute - Extra Small

###  HorizontalPositionSm `PagerFieldHorizontalPosition`

Horizontal Position attribute - Small

###  HorizontalPositionMd `PagerFieldHorizontalPosition`

Horizontal Position attribute - Medium

###  HorizontalPositionLg `PagerFieldHorizontalPosition`

Horizontal Position attribute - Large

###  HorizontalPositionXl `PagerFieldHorizontalPosition`

Horizontal Position attribute - Extra Large

## Methods

###  InitializeFieldControls

#### Returns

`System.Void` 

###  Dispose

#### Returns

`System.Void` 

###  InitializeFieldControls

After calling this method DataPagerField controls will be created and added to Controls colleciton
            of the passed DataPagerFieldItem

#### Parameters

#### inItem `Telerik.Web.UI.RadDataPagerFieldItem`

DataPagerFieldItem item where controls will be instanciated

#### Returns

`System.Void` 

###  ToString

Returns a  that represents the 
            current .

#### Returns

`System.String` A  that represents the current .

###  SEOPagingLinkBuilder

Builds navigation url if SEO paging is enabled.

#### Parameters

#### argument `System.String`

Argument that the link must be build for.

#### Returns

`System.String` Returns string representation of navigation url.

