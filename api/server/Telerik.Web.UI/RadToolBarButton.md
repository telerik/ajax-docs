---
title: Telerik.Web.UI.RadToolBarButton
page_title: Telerik.Web.UI.RadToolBarButton
description: Telerik.Web.UI.RadToolBarButton
---

# Telerik.Web.UI.RadToolBarButton

This partial class specifies the rendering of RadToolBarButton.

#### Remarks
When the user clicks a toolbar button, the Telerik.Web.UI.RadToolBar RadToolBarcontrol can
            		either navigate to a linked Web page or simply post back to the server. If the
                    P:Telerik.Web.UI.RadToolBarButton.NavigateUrl NavigateUrlproperty of a toolbar button is set, the
                    Telerik.Web.UI.RadToolBar RadToolBarcontrol navigates to the linked page. By default,
            		a linked page is displayed in the same window or frame as the Telerik.Web.UI.RadToolBar RadToolBarcontrol. To display the linked content in a different window or frame, use the
                    P:Telerik.Web.UI.RadToolBarButton.Target Targetproperty.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.ControlItem : IMarkableStateManager, INamingContainer, IStateManager, IXmlSerializable
* Telerik.Web.UI.RadToolBarItem
* Telerik.Web.UI.RadToolBarButton : ICloneable, IRadToolBarButton

## Properties

###  AccessKey `String`

Gets or sets the access key that allows you to quickly navigate to the Web server control.

###  AllowSelfUnCheck `Boolean`

Gets or sets a value indicating if a checked button will get unchecked when clicked.

###  CausesValidation `Boolean`

Gets or sets a value indicating whether validation is performed when
            the RadToolBarButton is clicked

#### Remarks
By default, page validation is performed when the button is clicked. Page
                validation determines whether the input controls associated with a validation
                control on the page all pass the validation rules specified by the validation
                control. You can specify or determine whether validation is performed when the button is clicked
            	on both the client and the server by using the CausesValidation
                property. To prevent validation from being performed, set the
                CausesValidation property to false.

###  Checked `Boolean`

Gets or sets if the button is checked.

#### Remarks
The Checked property of the button depends on the
            	CheckOnClick property. If the
            	CheckOnClick property is set to
            	false, the Checked property will be ignored.
            	When a button's Checked state is set to true, all the buttons that belong
            	to the same group in the RadToolBar get their Checked
            	state set to false.

###  CheckedCssClass `Boolean`

Gets or sets the Cascading Style Sheet (CSS) class applied when the toolbar button is
            checked.

###  CheckedImageUrl `Boolean`

Gets or sets the path to an image to display for the button when its Checked state is "true".

#### Remarks
Use the CheckedImageUrl property to specify the image that will be
            used when the button is checked. If the CheckedImageUrl
            property is set to empty string the image specified by the ImageUrl
            property will be used. Use "~" (tilde) when referring to images within the current
            ASP.NET application.

###  CheckOnClick `Boolean`

Gets or sets whether the button has a check state.

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

###  CommandArgument `String`

Gets or sets an optional parameter passed to the Command event of the
            	RadToolBar instance along with the associated
            	CommandName

###  CommandName `String`

Gets or sets the command name associated with the toolbar button that is passed to the
            	ItemCommand event of the RadToolBar instance.

###  DataItem `Object`

Gets the data item that is bound to the button

#### Remarks
This property is applicable only during data binding. Use it along with the
                ButtonDataBound event to perform additional
                mapping of fields from the data item to RadToolBarButton properties.

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

###  Group `String`

Gets or sets the group to which the button belongs.

#### Remarks
The Group property of the button depends on the
            	CheckOnClick property. When several buttons
            	in the RadToolBar are assigned to the same group, checking one
            	of them will uncheck the one that is currently checked. If the
            	CheckOnClick property is set to
            	false, the Group property will be ignored.

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

###  IsSeparator `Boolean`

Gets or sets whether the button is separator.

###  ItemTemplate `ITemplate`

Gets or sets the template for displaying the button.

###  NavigateUrl `String`

Gets or sets the URL to link to when the button is clicked.

#### Remarks
Use the NavigateUrl property to specify the URL to link to when
            the button is clicked. Use "~" (tilde) in front of an URL within the same ASP.NET
            application. When specifying external URL do not forget the protocol (e.g.
            "http://").

###  OuterCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied on the outmost element (<LI>).

#### Remarks
You can use the OuterCssClass property to specify unique
            	appearance for the item, or to insert elements that are before/after the link element.

###  OverFlow `ToolBarOverflow`

Gets or Sets OverFlow state

###  Owner `IRadToolBarItemContainer`

Gets a reference to the owner of the RadToolBarButton.

###  PostBack `Boolean`

Gets or sets a value indicating whether clicking on the button will
            postback.

#### Remarks
If you subscribe to the ButtonClick all toolbar
                buttons will postback. To turn off that behavior you should set the
                PostBack property to false.

###  PostBackUrl `Boolean`

Gets or sets the URL of the page to post to from the current page when the
                RadToolBarButton is clicked.

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

###  Target `String`

Gets or sets the target window or frame to display the Web page content linked to
            when the toolbar button is clicked.

#### Remarks
Use the Target property to specify the frame or window that displays the
                    Web page linked to when the toolbar button is clicked. The Web page is specified by
                    setting the NavigateUrl property.
                If this property is not set, the Web page specified by the
                NavigateUrl property is loaded in the current window.

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

###  ValidationGroup `String`

Gets or sets the name of the validation group to which the
            	RadToolBarButton belongs.

#### Remarks
This property works only when CausesValidation
                is set to true.

###  Value `String`

Gets or sets the value associated with the toolbar button.

#### Remarks
Use the Value property to specify or determine the value associated
                with the button.

## Methods

###  Clone

Creates a copy of the current RadToolBarButton object.

#### Remarks
Use the Clone method to create a copy of the current button. All
            properties of the clone are set to the same values as the current ones.

#### Returns

`Telerik.Web.UI.RadToolBarButton` A RadToolBarButton which is a copy of the current one.

###  IsChildControl

Returns true if the control is rendered by the ControlItem itself;
            false if it was added by the user to the Controls collection.

#### Returns

`System.Boolean` 

