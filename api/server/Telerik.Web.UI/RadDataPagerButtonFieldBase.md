---
title: Telerik.Web.UI.RadDataPagerButtonFieldBase
page_title: Telerik.Web.UI.RadDataPagerButtonFieldBase
description: Telerik.Web.UI.RadDataPagerButtonFieldBase
---

# Telerik.Web.UI.RadDataPagerButtonFieldBase

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.RadDataPagerField
* Telerik.Web.UI.RadDataPagerButtonFieldBase

## Properties

###  ButtonType `PagerFieldButtonType`

This property specifies the type of the buttons for current pager field. Default value LinkButton.

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

###  Owner `RadDataPager`

Returns RadDataPager control that owns current pager field. 
            This property is set by DataPagerFieldCollection and is read only.

###  PagerType `String`

Gets the string representation of the type-name of this instance. The value is
            used by RadDataPager to determine the type of the pager field persisted into the ViewState, when
            recreating the pager after postback. This property is read only.

###  Visible `Boolean`

Gets or sets value that indicates whether RadDataPagerField is rendered.

## Methods

###  CreateButtonField

Creates button control from one of the following type: LinkButton, PushButton, ImageButton
            or HyperLink if AllowSEOPaging is set to "true". Button Enabled state will be validated 
            depending on current page index.

#### Parameters

#### type `Telerik.Web.UI.PagerFieldButtonType`

PagerFieldButtonType enumerator

#### text `System.String`

Text shown as content the button control

#### toolTip `System.String`

Tooltip of the button

#### commandName `System.String`

Command that button triggers

#### commandArgument `System.String`

Command argument which will be passed along with CommandName

#### className `System.String`

CssClass that will be applied on the button

#### imageUrl `System.String`

The image url that will be applied on the button if it is of type Next, Prev, First, Last

#### hiddenSpanText `System.String`

Text of the hidden span

#### Returns

`System.Web.UI.WebControls.WebControl` Returns button control of type: LinkButton, PushButton, ImageButton
            or HyperLink if SEO paging.

###  CreateButtonFieldForCommand

Create button control for one of the following types: LinkButton, PushButton, ImageButton

#### Returns

`System.Web.UI.WebControls.WebControl` 

###  CreateButtonFieldForSEOPaging

Create button of type HyperLink whenever AllowSEOPaging is set to "true".

#### Returns

`System.Web.UI.WebControls.WebControl` 

###  EnsureEnableState

Ensures button Enabled property. If button command argumetn is same as current page, button
            will be disabled.

#### Parameters

#### button `System.Web.UI.WebControls.WebControl`

Button instance to be validated.

#### commandArgument `System.String`

Command argument for the button.

#### Returns

`System.Web.UI.WebControls.WebControl` Returns same button with Enabled property set.

###  GetResolvedImageUrl

Get reference to image from embeded resources. Internally used by PrepareSEOButtonContent method.

#### Returns

`System.String` 

###  InitializeFieldControls

After calling this method DataPagerField controls will be created and added to Controls colleciton
            of the passed DataPagerFieldItem

#### Parameters

#### inItem `Telerik.Web.UI.RadDataPagerFieldItem`

DataPagerFieldItem item where controls will be instanciated

#### Returns

`System.Void` 

###  PrepareLightweightSEOButtonContent

Sets content of HyperLink button in Lightweight and Mobile rendering if SEO paging is enabled, depending on commandArgument.

#### Returns

`System.Void` 

###  PrepareSEOButtonContent

Sets content of HyperLink button if SEO paging is enabled, depending on commandArgument.

#### Returns

`System.Void` 

###  PrepareTextFormat

Formats the text depending on PagerFieldButtonType. Text for LinkButton is wrapped with span tag.

#### Parameters

#### type `Telerik.Web.UI.PagerFieldButtonType`

Value from PagerFieldButtonType enum.

#### text `System.String`

Text to be formatted.

#### Returns

`System.String` Returns string representing content of button.

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

