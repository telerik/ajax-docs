---
title: Telerik.Web.UI.RadMenuItem
page_title: Telerik.Web.UI.RadMenuItem
description: Telerik.Web.UI.RadMenuItem
---

# Telerik.Web.UI.RadMenuItem

Represents an item in the Telerik.Web.UI.RadMenu control.

#### Remarks
The Telerik.Web.UI.RadMenu control is made up of items. Items which are immediate children
            		of the menu are root items. Items which are children of root items are child items.
            	An item usually stores data in two properties, the P:Telerik.Web.UI.RadMenuItem.Text property and 
            		the P:Telerik.Web.UI.RadMenuItem.Value property. The value of the P:Telerik.Web.UI.RadMenuItem.Text property is displayed 
            		in the Telerik.Web.UI.RadMenu control, and the P:Telerik.Web.UI.RadMenuItem.Value property is used to store additional data.
            	To create items, use one of the following methods:bullet Use declarative syntax to define items inline in your page or user control.
            		Use one of the constructors to dynamically create new instances of the
            			Telerik.Web.UI.RadMenuItem class. These items can then be added to the
            			Itemscollection of another item or menu.
            		Data bind the Telerik.Web.UI.RadMenu control to a data source.
            		When the user clicks an item, the Telerik.Web.UI.RadMenu control can navigate
                    to a linked Web page, post back to the server or select that item. If the
                    P:Telerik.Web.UI.RadMenuItem.NavigateUrl property of an item is set, the
                    RadMenucontrol navigates to the linked page. By default, a linked page
                    is displayed in the same window or frame. To display the linked content in a different 
            		window or frame, use the P:Telerik.Web.UI.RadMenuItem.Target property.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.ControlItem : IMarkableStateManager, INamingContainer, IStateManager, IXmlSerializable
* Telerik.Web.UI.NavigationItem : IControlItemContainer
* Telerik.Web.UI.RadMenuItem : ICloneable, IRadMenuItemContainer

## Properties

###  Items `RadMenuItemCollection`

Gets a  object that contains the child items of the current RadMenuItem.

#### Remarks
Use the Items property to access the child items of the RadMenuItem. You can also use the Items property to
            	manage the child items - you can add, remove or modify items.

###  Owner `IRadMenuItemContainer`

Gets the  object which contains the current menu item.

#### Remarks
The value is of the  type which is
                implemented by the  and the
                 classes. Use the Owner property when
                recursively traversing items in the RadMenu control.

###  DataItem `Object`

Gets or sets the data item represented by the item.

#### Remarks
This property is applicable only during data binding. Use it along with the
                MenuItemDataBound event to perform
                additional mapping of fields from the data item to
                RadMenuItem properties.

###  Text `String`

Gets or sets the text caption for the menu item.

#### Remarks
Use the Text property to specify the text to display for the
            item.

###  Value `String`

Gets or sets the value associated with the menu item.

#### Remarks
Use the Value property to specify or determine the value associated
                with the item.

###  ItemTemplate `ITemplate`

Gets or sets the template for displaying the item.

###  ContentTemplate `ITemplate`

Gets or sets the content template.

###  ContentTemplateContainer `ITemplate`

Get the Content Template container of the RadMenuItem.

###  GroupSettings `RadMenuItemGroupSettings`

Specifies the settings for child item behavior.

#### Remarks
You can customize the following settingsitem flowexpand directionhorizontal offset from the parent itemvertical offset from the parent itemwidthheight
                    For more information check
                    MenuItemGroupSettings.

###  ExpandMode `MenuItemExpandMode`

Gets or sets the expand behavior of the menu item.
            
            When set to ExpandMode.WebService the RadMenuItem will populate its children from the web service specified by the RadMenu.WebService and RadMenu.WebServiceMethod properties.

###  EnableImageSprite `Boolean`

Gets or sets a value indicating whether the item image should have sprite support.

###  NavigateUrl `String`

Gets or sets the URL to link to when the item is clicked.

#### Remarks
Use the NavigateUrl property to specify the URL to link to when
            the item is clicked. Use "~" (tilde) in front of an URL within the same ASP.NET
            application. When specifying external URL do not forget the protocol (e.g.
            "http://").

###  PostBack `Boolean`

Gets or sets a value indicating whether clicking on the item will
            postback.

#### Remarks
If you subscribe to the ItemClick all menu
                items will postback. To turn off that behavior you should set the
                PostBack property to false. This property cannot
                be set in design time.

###  Menu `RadMenu`

Gets the RadMenu instance which contains the item.

#### Remarks
Use this property to obtain an instance to the
                RadMenu object containing the item.

###  IsSeparator `Boolean`

Sets or gets whether the item is separator. It also represents a logical state of
            the item. Might be used in some applications for keyboard navigation to omit processing
            items that are marked as separators.

###  Selected `Boolean`

Gets or sets a value indicating whether the item is selected.

#### Remarks
Only one item can be selected.

###  DisabledCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied when the menu item is
            disabled.

#### Remarks
By default the visual appearance of disabled menu items is defined in the skin CSS
            file. You can use the DisabledCssClass property to specify unique
            appearance for the menu item when it is disabled.

###  ExpandedCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied when the menu item is
            opened (its child items are visible).

#### Remarks
By default the visual appearance of opened menu items is defined in the skin CSS
            file. You can use the ExpandedCssClass property to specify unique
            appearance for the menu item when it is opened.

###  FocusedCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied when the menu item is
            focused.

#### Remarks
By default the visual appearance of focused menu items is defined in the skin CSS
            file. You can use the FocusedCssClass property to specify unique
            appearance for the menu item when it is focused.

###  SelectedCssClass `Boolean`

Gets or sets the Cascading Style Sheet (CSS) class applied when the item is
            selected.

#### Remarks
By default the visual appearance of selected items is defined in the skin CSS
            file. You can use the SelectedCssClass property to specify unique
            appearance for a item when it is selected.

###  ClickedCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied when the menu item is
            clicked.

###  OuterCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied on the outmost item element (<LI>).

#### Remarks
You can use the OuterCssClass property to specify unique
            	appearance for the item.

###  Target `String`

Gets or sets the target window or frame to display the Web page content linked to
            when the menu item is clicked.

#### Remarks
Use the Target property to specify the frame or window that displays the
                    Web page linked to when the menu item is clicked. The Web page is specified by
                    setting the NavigateUrl property.
                If this property is not set, the Web page specified by the
                NavigateUrl property is loaded in the current window.

###  Level `Int32`

Manages the item level of a particular Item instance. This property allows easy
            implementation/separation of the menu items in levels.

###  ImageUrl `String`

Gets or sets the path to an image to display for the item.

#### Remarks
Use the ImageUrl property to specify the image for the item. If
            the ImageUrl property is set to empty string no image will be
            rendered. Use "~" (tilde) when referring to images within the current ASP.NET
            application.

###  HoveredImageUrl `String`

Gets or sets the path to an image to display for the item when the user moves the
            mouse over the item.

#### Remarks
Use the HoveredImageUrl property to specify the image that will be
            used when the user moves the mouse over the item. If the HoveredImageUrl
            property is set to empty string the image specified by the ImageUrl
            property will be used. Use "~" (tilde) when referring to images within the current
            ASP.NET application.

###  ClickedImageUrl `String`

Gets or sets the path to an image to display for the item when the user clicks the
            item.

#### Remarks
Use the ClickedImageUrl property to specify the image that will be
            used when the user clicks the item. If the ClickedImageUrl
            property is set to empty string the image specified by the ImageUrl
            property will be used. Use "~" (tilde) when referring to images within the current
            ASP.NET application.

###  DisabledImageUrl `String`

Gets or sets the path to an image to display when the items is disabled.

#### Remarks
Use the DisabledImageUrl property to specify the image that will
            be used when the item is disabled. If the DisabledImageUrl property is
            set to empty string the image specified by the ImageUrl property will
            be used. Use "~" (tilde) when referring to images within the current ASP.NET
            application.

###  ExpandedImageUrl `String`

Gets or sets the path to an image to display when the items is expanded.

#### Remarks
Use the ExpandedImageUrl property to specify the image that will
            be used when the item is expanded. If the ExpandedImageUrl property is
            set to empty string the image specified by the ImageUrl property will
            be used. Use "~" (tilde) when referring to images within the current ASP.NET
            application.

###  SelectedImageUrl `Boolean`

Gets or sets a value specifying the URL of the image rendered when the item is selected.

#### Remarks
If the SelectedImageUrl property is not set the ImageUrl
            property will be used when the node is selected.

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

###  ApplyContentTemplate

Instantiates the ContentTemplate inside the Content. 
            Clears all existing controls in the Content before that.

#### Returns

`System.Void` 

###  HighlightPath

Highlights the path from the item to the top of the menu.

#### Remarks
The HighlightPath method applies the "rmFocused" CSS class to the item and
            his ancestor items. As a results the "path" from the top level to that specific item
            is highlighted.

#### Returns

`System.Void` 

###  Remove

Removes the item from its container

#### Returns

`System.Void` 

###  Clone

Creates a copy of the current RadMenuItem object.

#### Remarks
Use the Clone method to create a copy of the current item. All
            properties of the clone are set to the same values as the current ones. Child items are
            not cloned.

#### Returns

`Telerik.Web.UI.RadMenuItem` A RadMenuItem which is a copy of the current one.

###  IsChildControl

Returns true if the control is rendered by the ControlItem itself;
            false if it was added by the user to the Controls collection.

#### Returns

`System.Boolean` 

