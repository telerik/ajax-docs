---
title: Telerik.Web.UI.RadToolBarItem
page_title: Telerik.Web.UI.RadToolBarItem
description: Telerik.Web.UI.RadToolBarItem
---

# Telerik.Web.UI.RadToolBarItem

This partial class defines the rendering RadToolBarItem.

#### Remarks
The Telerik.Web.UI.RadToolBar RadToolBarcontrol is made up of a list of toolbar items
                    represented by RadToolBarItemobjects (Telerik.Web.UI.RadToolBarButton RadToolBarButton,
            		Telerik.Web.UI.RadToolBarDropDown RadToolBarDropDown,
            		Telerik.Web.UI.RadToolBarSplitButton RadToolBarSplitButton). All toolbar  items are stored
            		in the P:Telerik.Web.UI.RadToolBar.Items Itemscollection of the toolbar.
            		You can access the toolbar to which the item belongs
                    by using the P:Telerik.Web.UI.RadToolBarItem.ToolBar ToolBarproperty.
                To create the toolbar items for a RadToolBarcontrol, use one of the
                following methods:bullet Use declarative syntax to create static toolbar items.Use a constructor to dynamically create new instances of either toolbar item classes
            			(Telerik.Web.UI.RadToolBarButton RadToolBarButton,
            			Telerik.Web.UI.RadToolBarDropDown RadToolBarDropDown,
            			Telerik.Web.UI.RadToolBarSplitButton RadToolBarSplitButton). These RadToolBarItemobjects can then be added to the P:Telerik.Web.UI.RadToolBar.Items Itemscollection of the
            			Telerik.Web.UI.RadToolBar RadToolBar.Bind the Telerik.Web.UI.RadToolBar RadToolBarcontrol to a data source.Each toolbar item has a P:Telerik.Web.UI.RadToolBarItem.Text Textproperty. The Button items
            		(Telerik.Web.UI.RadToolBarButton RadToolBarButtonand
            		Telerik.Web.UI.RadToolBarSplitButton RadToolBarSplitButton) have a
                    P:Telerik.Web.UI.RadToolBarButton.Value Valueproperty. The value of the
            		P:Telerik.Web.UI.RadToolBarItem.Text Textproperty is displayed in the Telerik.Web.UI.RadToolBar RadToolBarcontrol, while the P:Telerik.Web.UI.RadToolBarButton.Value Valueproperty is used to store any
            		additional data about the toolbar item.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.ControlItem : IMarkableStateManager, INamingContainer, IStateManager, IXmlSerializable
* Telerik.Web.UI.RadToolBarItem

## Properties

###  AccessKey `String`

Gets or sets the access key that allows you to quickly navigate to the Web server control.

###  ClickedCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied when the toolbar item is
            clicked.

###  ClickedImageUrl `String`

Gets or sets the path to an image to display for the item when the user clicks it.

#### Remarks
Use the ClickedImageUrl property to specify the image that will be
            used when the user clicks the item. If the ClickedImageUrl
            property is set to empty string the image specified by the ImageUrl
            property will be used. Use "~" (tilde) when referring to images within the current
            ASP.NET application.

###  DisabledCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied when the toolbar item is
            disabled.

#### Remarks
By default the visual appearance of disabled toolbar items is defined in the skin CSS
            file. You can use the DisabledCssClass property to specify unique
            appearance for the toolbar item when it is disabled.

###  DisabledImageUrl `String`

Gets or sets the path to an image to display when the item is disabled.

#### Remarks
Use the DisabledImageUrl property to specify the image that will be
            used when the item is disabled. If the DisabledImageUrl
            property is set to empty string the image specified by the ImageUrl
            property will be used. Use "~" (tilde) when referring to images within the current
            ASP.NET application.

###  EnableImageSprite `Boolean`

Gets or sets a value indicating whether the item image should have sprite support.

###  FocusedCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied when the toolBar item is
            focused after tabbing to it, or by using its AccessKey

#### Remarks
By default the visual appearance of focused toolBar items is defined in the skin CSS
            file. You can use the FocusedCssClass property to specify unique
            appearance for the toolBar item when it is focused.

###  FocusedImageUrl `String`

Gets or sets the path to an image to display when the user focuses the
            item either by tabbing to it or by using the AccessKey

#### Remarks
Use the FocusedImageUrl property to specify the image that will be
            used when the item gets the focus after tabbing or using its AccessKey.
            If the FocusedImageUrl property is set to empty string the image specified
            by the ImageUrl property will be used. Use "~" (tilde) when referring to
            images within the current ASP.NET application.

###  HoveredCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied when the user moves the mouse
            over the toolbar item.

#### Remarks
By default the visual appearance of a hovered toolbar items is defined in the skin CSS
            file. You can use the HoveredCssClass property to specify unique
            appearance for the toolbar item when it is hovered.

###  HoveredImageUrl `String`

Gets or sets the path to an image to display when the user moves the
            mouse over the item.

#### Remarks
Use the HoveredImageUrl property to specify the image that will be
            used when the user moves the mouse over the item. If the HoveredImageUrl
            property is set to empty string the image specified by the ImageUrl
            property will be used. Use "~" (tilde) when referring to images within the current
            ASP.NET application.

###  ID `String`

Gets or sets the ID.

###  ID `String`

The ID property is reserved for internal use. Please use the Value property or
            use the Attributes collection if you need to assign
            custom data to the item.

###  ImagePosition `ToolBarImagePosition`

Gets or sets the position of the item image according to the item text.

###  ImageUrl `String`

Gets or sets the path to an image to display for the item.

#### Remarks
Use the ImageUrl property to specify the image for the item. If
            the ImageUrl property is set to empty string no image will be
            rendered. Use "~" (tilde) when referring to images within the current ASP.NET
            application.

###  Index `Int32`

Gets the zero based index of the item.

###  OuterCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied on the outmost element (<LI>).

#### Remarks
You can use the OuterCssClass property to specify unique
            	appearance for the item, or to insert elements that are before/after the link element.

###  OverFlow `ToolBarOverflow`

Gets or Sets OverFlow state

###  ShowImage `ToolBarShowPosition`

Gets or Sets ShowImage state

###  ShowText `String`

Gets or Sets ShowText state

###  SpriteCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class
            that contains the sprite image for this item and the positioning for it.

#### Remarks
By default, the image in an item is defined by the ImageUrl property.
            You can use SpriteCssClass to specify a class that will position a sprite
            instead of using image.

###  Text `String`

Gets or sets the text displayed for the current item.

#### Remarks
Use the Text property to specify or determine the text an item displays displays
            	in the RadToolBar control.

###  ToolBar `RadToolBar`

Gets the RadToolBar instance which contains the item.

#### Remarks
Use this property to obtain an instance to the
                RadToolBar object containing the item.

## Methods

###  IsChildControl

Returns true if the control is rendered by the ControlItem itself;
            false if it was added by the user to the Controls collection.

#### Returns

`System.Boolean` 

