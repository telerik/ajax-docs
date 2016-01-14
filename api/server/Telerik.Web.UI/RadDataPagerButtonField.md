---
title: Telerik.Web.UI.RadDataPagerButtonField
page_title: Telerik.Web.UI.RadDataPagerButtonField
description: Telerik.Web.UI.RadDataPagerButtonField
---

# Telerik.Web.UI.RadDataPagerButtonField

Telerik.Web.UI.RadDataPager Telerik.Web.UI.RadDataPagerField which contains a button depending on the FieldType

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.RadDataPagerField
* Telerik.Web.UI.RadDataPagerButtonFieldBase
* Telerik.Web.UI.RadDataPagerButtonField

## Properties

###  ButtonType `PagerFieldButtonType`

This property specifies the type of the buttons for current pager field. Default value LinkButton.

###  FieldType `PagerButtonFieldType`

This property specifies the type of the field. Default value is PrevNext field type.

###  FirstButtonImageUrl `String`

This property specifies the image url for the first button field.

###  FirstButtonText `String`

This property specifies First button text.

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

###  LastButtonImageUrl `String`

This property specifies the image url for the last button field.

###  LastButtonText `String`

This property specifies Last button text.

###  NextButtonImageUrl `String`

This property specifies the image url for the next button field.

###  NextButtonText `String`

This property specifies Next button text.

###  Owner `RadDataPager`

Returns RadDataPager control that owns current pager field. 
            This property is set by DataPagerFieldCollection and is read only.

###  PageButtonCount `Int32`

This property specifies the number of the buttons for Numeric field type.

###  PagerType `String`

Gets the string representation of the type-name of this instance. The value is
            used by RadDataPager to determine the type of the pager field persisted into the ViewState, when
            recreating the pager after postback. This property is read only.

###  PrevButtonImageUrl `String`

This property specifies the image url for the previous button field.

###  PrevButtonText `String`

This property specifies Prev button text.

###  TrimLg `Boolean`

Trim attribute - Large

###  TrimMd `Boolean`

Trim attribute - Medium

###  TrimSm `Boolean`

Trim attribute - Small

###  TrimXl `Boolean`

Trim attribute - Extra Large

###  TrimXs `Boolean`

Trim attribute - Extra Small

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

###  CreatenFirstButton

Method for creating "First" button.

#### Returns

`System.Web.UI.Control` 

###  CreatenLastButton

Method for creating "Last" button.

#### Returns

`System.Web.UI.Control` 

###  CreatenNextButton

Method for creating "Next" button.

#### Returns

`System.Web.UI.Control` 

###  CreateNumericButton

Method for creating all numeric pager buttons.

#### Returns

`System.Web.UI.Control` 

###  CreatePrevButton

Method for creating "Previous" button.

#### Returns

`System.Web.UI.Control` 

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

This method must be overriden in order to build controls for the current RadDataPagerField.

#### Parameters

#### inItem `Telerik.Web.UI.RadDataPagerFieldItem`

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

###  IsInRange

checks if a given number is in the given range
            example: value = 5, offset = 1
            possible values in range: 4, 5, 6

#### Parameters

#### value `System.Int32`

value to be checked

#### offset `System.Int32`

offset forward and backward

#### compareValue `System.Int32`

value to be compared to

#### Returns

`System.Boolean` 

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

