---
title: Telerik.Web.UI.RadDataPagerNumericPageSizeField
page_title: Telerik.Web.UI.RadDataPagerNumericPageSizeField
description: Telerik.Web.UI.RadDataPagerNumericPageSizeField
---

# Telerik.Web.UI.RadDataPagerNumericPageSizeField

Telerik.Web.UI.RadDataPager Telerik.Web.UI.RadDataPagerField which contains page numbers which change the PageIndex property of
            Telerik.Web.UI.RadDataPager .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.RadDataPagerField
* Telerik.Web.UI.RadDataPagerNumericPageSizeField

## Properties

###  HiddenLg `Boolean`

Hidden attribute - Large

###  HiddenMd `Boolean`

Hidden attribute - Medium

###  HiddenSm `Boolean`

Hidden attribute - Small

###  HiddenXl `Boolean`

Hidden attribute - Extra Large

###  HiddenXs `Boolean`

Hidden attribute - Extra Small

###  HorizontalPosition `PagerFieldHorizontalPosition`

Gets or sets the positioning of the pager field with regard to its CSS float style.

###  HorizontalPositionLg `PagerFieldHorizontalPosition`

Horizontal Position attribute - Large

###  HorizontalPositionMd `PagerFieldHorizontalPosition`

Horizontal Position attribute - Medium

###  HorizontalPositionSm `PagerFieldHorizontalPosition`

Horizontal Position attribute - Small

###  HorizontalPositionXl `PagerFieldHorizontalPosition`

Horizontal Position attribute - Extra Large

###  HorizontalPositionXs `PagerFieldHorizontalPosition`

Horizontal Position attribute - Extra Small

###  LabelText `String`

Get or set text of the label.

###  Owner `RadDataPager`

Returns RadDataPager control that owns current pager field. 
            This property is set by DataPagerFieldCollection and is read only.

###  PagerType `String`

Gets the string representation of the type-name of this instance. The value is
            used by RadDataPager to determine the type of the pager field persisted into the ViewState, when
            recreating the pager after postback. This property is read only.

###  SubmitButtonText `String`

Get or set submit button text.

###  TextBoxWidth `Int32`

Get or set RadNumericTextBox Width in pixels. Default value is 30px.

###  Visible `Boolean`

Gets or sets value that indicates whether RadDataPagerField is rendered.

## Methods

###  InitializeFieldControls

After calling this method DataPagerField controls will be created and added to Controls colleciton
            of the passed DataPagerFieldItem

#### Parameters

#### inItem `Telerik.Web.UI.RadDataPagerFieldItem`

DataPagerFieldItem item where controls will be instanciated

#### Returns

`System.Void` 

###  SEOPagingLinkBuilder

Builds navigation url if SEO paging is enabled.

#### Parameters

#### argument `System.String`

Argument that the link must be build for.

#### Returns

`System.String` Returns string representation of navigation url.

###  ToString

Returns a  that represents the 
            current .

#### Returns

`System.String` A  that represents the current .

