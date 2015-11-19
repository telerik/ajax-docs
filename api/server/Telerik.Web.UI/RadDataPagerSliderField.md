---
title: Telerik.Web.UI.RadDataPagerSliderField
page_title: Telerik.Web.UI.RadDataPagerSliderField
description: Telerik.Web.UI.RadDataPagerSliderField
---

# Telerik.Web.UI.RadDataPagerSliderField

Slider field which provides interface for
            changing the page size with a Telerik.Web.UI.RadSlider control.
            Telerik.Web.UI.RadSlider

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.RadDataPagerField
* Telerik.Web.UI.RadDataPagerSliderField

## Properties

###  SliderDragText `String`

Get or set RadSlider DragText property.

###  SliderDecreaseText `String`

Get or set RadSlider DecreaseText property.

###  SliderIncreaseText `String`

Get or set RadSlider IncreaseText property.

###  SliderOrientation `Orientation`

Get or set RadSlider orientation.

###  LabelTextFormat `String`

Get or set the format of the label text. Default value is "Page {0} of {1}"

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

