---
title: Telerik.Web.UI.RadToolBarSplitButton
page_title: Telerik.Web.UI.RadToolBarSplitButton
description: Telerik.Web.UI.RadToolBarSplitButton
---

# Telerik.Web.UI.RadToolBarSplitButton

This Class specifies the rendering of RadToolBarSplitButton.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.ControlItem
* Telerik.Web.UI.RadToolBarItem
* Telerik.Web.UI.RadToolBarSplitButton

## Properties

###  Buttons `RadToolBarButtonCollection`

Gets a RadToolBarButtonCollection object that
            	contains the child buttons of the split button.

#### Remarks
Use the Buttons property to access the child buttons of the split button.
            	You can also use the Buttons property to manage the children of the
            	current tab. You can add, remove or modify buttons from the Buttons collection.

###  ExpandDirection `ToolBarDropDownExpandDirection`

Gets or sets the expand direction of the drop down.

###  DropDownWidth `Unit`

Gets or sets the width of the dropdown in pixels.

###  DropDownHeight `Unit`

Gets or sets the height of the dropdown in pixels.

###  EnableDefaultButton `Boolean`

Gets or sets a value, indicating if the RadToolBarSplitButton will
            	use the DefaultButton behavior.

#### Remarks
Use the EnableDefaultButton property to set if
            	RadToolBarSplitButton will use the DefaultButton
            	behavior or not. When the DefaultButton behavior is used, the
            	RadToolBarSplitButton properties are ignored and the
            	properties of the last selected button are used instead. Use the EnableDefaultButton
            	property in conjunction with the DefaultButtonIndex property to
            	specify which of the RadToolBarSplitButton child buttons will
            	be used when the RadToolBar is initially displayed.

###  DefaultButtonIndex `Int32`

Gets or sets the index of the button which properties will be used by default when the
            	EnableDefaultButton property set to true.

#### Remarks
Use the DefaultButtonIndex property to specify the button
            which properties RadToolBarSplitButton will use
            when the RadToolBar is initially displayed.

###  ItemTemplate `ITemplate`

Gets or sets the template for displaying the button.

###  PostBack `Boolean`

Gets or sets a value indicating whether clicking on the button will
            postback.

#### Remarks
If you subscribe to the ButtonClick all toolbar
                buttons will postback. To turn off that behavior you should set the
                PostBack property to false.

###  Value `String`

Gets or sets the value associated with the toolbar split button.

#### Remarks
Use the Value property to specify or determine the value associated
                with the button.

###  NavigateUrl `String`

Gets or sets the URL to link to when the button is clicked.

#### Remarks
Use the NavigateUrl property to specify the URL to link to when
            the button is clicked. Use "~" (tilde) in front of an URL within the same ASP.NET
            application. When specifying external URL do not forget the protocol (e.g.
            "http://").

###  Target `String`

Gets or sets the target window or frame to display the Web page content linked to
            when the toolbar button is clicked.

#### Remarks
Use the Target property to specify the frame or window that displays the
                    Web page linked to when the toolbar button is clicked. The Web page is specified by
                    setting the NavigateUrl property.
                If this property is not set, the Web page specified by the
                NavigateUrl property is loaded in the current window.

###  CommandName `String`

Gets or sets the command name associated with the toolbar button that is passed to the
            	ItemCommand event of the RadToolBar instance.

###  CommandArgument `String`

Gets or sets an optional parameter passed to the Command event of the
            	RadToolBar instance along with the associated
            	CommandName

###  CausesValidation `Boolean`

Gets or sets a value indicating whether validation is performed when
            the RadToolBarSplitButton is clicked

#### Remarks
By default, page validation is performed when the button is clicked. Page
                validation determines whether the input controls associated with a validation
                control on the page all pass the validation rules specified by the validation
                control. You can specify or determine whether validation is performed when the button is clicked
            	on both the client and the server by using the CausesValidation
                property. To prevent validation from being performed, set the
                CausesValidation property to false.

###  ValidationGroup `String`

Gets or sets the name of the validation group to which the
            	RadToolBarSplitButton belongs.

#### Remarks
This property works only when CausesValidation
                is set to true.

###  PostBackUrl `Boolean`

Gets or sets the URL of the page to post to from the current page when the
                RadToolBarSplitButton is clicked.

###  ToolBar `RadToolBar`

Gets the RadToolBar instance which contains the item.

#### Remarks
Use this property to obtain an instance to the
                RadToolBar object containing the item.

###  Text `String`

Gets or sets the text displayed for the current item.

#### Remarks
Use the Text property to specify or determine the text an item displays displays
            	in the RadToolBar control.

###  ImageUrl `String`

Gets or sets the path to an image to display for the item.

#### Remarks
Use the ImageUrl property to specify the image for the item. If
            the ImageUrl property is set to empty string no image will be
            rendered. Use "~" (tilde) when referring to images within the current ASP.NET
            application.

###  HoveredImageUrl `String`

Gets or sets the path to an image to display when the user moves the
            mouse over the item.

#### Remarks
Use the HoveredImageUrl property to specify the image that will be
            used when the user moves the mouse over the item. If the HoveredImageUrl
            property is set to empty string the image specified by the ImageUrl
            property will be used. Use "~" (tilde) when referring to images within the current
            ASP.NET application.

###  SpriteCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class
            that contains the sprite image for this item and the positioning for it.

#### Remarks
By default, the image in an item is defined by the ImageUrl property.
            You can use SpriteCssClass to specify a class that will position a sprite
            instead of using image.

###  HoveredCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied when the user moves the mouse
            over the toolbar item.

#### Remarks
By default the visual appearance of a hovered toolbar items is defined in the skin CSS
            file. You can use the HoveredCssClass property to specify unique
            appearance for the toolbar item when it is hovered.

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

###  DisabledImageUrl `String`

Gets or sets the path to an image to display when the item is disabled.

#### Remarks
Use the DisabledImageUrl property to specify the image that will be
            used when the item is disabled. If the DisabledImageUrl
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

###  OuterCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied on the outmost element (<LI>).

#### Remarks
You can use the OuterCssClass property to specify unique
            	appearance for the item, or to insert elements that are before/after the link element.

###  ImagePosition `ToolBarImagePosition`

Gets or sets the position of the item image according to the item text.

###  EnableImageSprite `Boolean`

Gets or sets a value indicating whether the item image should have sprite support.

###  Enabled `Boolean`

###  Visible `Boolean`

###  ID `String`

The ID property is reserved for internal use. Please use the Value property or
            use the Attributes collection if you need to assign
            custom data to the item.

###  Index `Int32`

Gets the zero based index of the item.

###  AccessKey `String`

Gets or sets the access key that allows you to quickly navigate to the Web server control.

###  BackColor `Color`

###  ForeColor `Color`

###  BorderColor `Color`

## Methods

###  IsChildControl

Returns true if the control is rendered by the ControlItem itself;
            false if it was added by the user to the Controls collection.

#### Returns

`System.Boolean` 

