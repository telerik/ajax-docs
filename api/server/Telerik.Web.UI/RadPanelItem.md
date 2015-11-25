---
title: Telerik.Web.UI.RadPanelItem
page_title: Telerik.Web.UI.RadPanelItem
description: Telerik.Web.UI.RadPanelItem
---

# Telerik.Web.UI.RadPanelItem

This partial Class defines RadPanelItem object that inherits NavigationItem, IRadPanelItemContainer
            and ICloneable.

#### Remarks
The Telerik.Web.UI.RadPanelBar RadPanelBarcontrol is made up of items. Items which are immediate children
            		of the panelbar are root items. Items which are children of root items are child items.
            	A item usually stores data in two properties, the P:Telerik.Web.UI.RadPanelItem.Text Textproperty and 
            		the P:Telerik.Web.UI.RadPanelItem.Value Valueproperty. The value of the P:Telerik.Web.UI.RadPanelItem.Text Textproperty is displayed 
            		in the RadPanelBarcontrol, and the P:Telerik.Web.UI.RadPanelItem.Value Valueproperty is used to store additional data.
            	To create panel items, use one of the following methods:bullet Use declarative syntax to define items inline in your page or user control.
            		Use one of the constructors to dynamically create new instances of the
            			Telerik.Web.UI.RadPanelItem RadPanelItemclass. These items can then be added to the
            			Itemscollection of another item or panelbar.
            		Data bind the RadPanelBarcontrol to a data source.
            		When the user clicks a panel item, the RadPanelBarcontrol can navigate
                    to a linked Web page, post back to the server or select that item. If the
                    P:Telerik.Web.UI.RadPanelItem.NavigateUrl NavigateUrlproperty of a item is set, the
                    RadPanelBarcontrol navigates to the linked page. By default, a linked page
                    is displayed in the same window or frame. To display the linked content in a different 
            		window or frame, use the P:Telerik.Web.UI.RadPanelItem.Target Targetproperty.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.ControlItem : IMarkableStateManager, INamingContainer, IStateManager, IXmlSerializable
* Telerik.Web.UI.NavigationItem : IControlItemContainer
* Telerik.Web.UI.RadPanelItem : ICloneable, IRadPanelItemContainer

## Properties

###  Items `RadPanelItemCollection`

Gets the collection of child items.

#### Remarks
Use this property to retrieve the child items. You can also use it to
            programmatically add or remove items.

###  ImagePosition `RadPanelItemImagePosition`

Gets or sets a value indicating the position of the image within the item.

###  PanelBar `RadPanelBar`

Gets the RadPanelBar instance which contains the item.

#### Remarks
Use this property to obtain an instance to the
                RadPanelBar object containing the item.

###  Owner `IRadPanelItemContainer`

Gets the IRadPanelItemContainer instance which contains the current item.

#### Remarks
The value is of the IRadPanelItemContainer type which is
                implemented by the RadPanelBar class and the
                RadPanelItem class. Use the Owner property when
                recursively traversing items in the RadPanelBar control.

###  IsSeparator `Boolean`

Sets or gets whether the item is separator. It also represents a logical state of
            the item. Might be used in some applications for keyboard navigation to omit processing
            items that are marked as separators.

###  Expanded `Boolean`

Gets or sets a value indicating whether the panel item is expanded.

###  Level `Int32`

Manages the item level of a particular Item instance. This property allows easy
            implementation/separation of the panel items in levels.

###  ChildGroupHeight `Unit`

Gets or sets the height of the child item group.

#### Remarks
If the total child group height exceeds the value specified with the
            ChildGroupHeight property scrolling will be applied.

###  ChildGroupCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied to the element enclosing the child items.

###  DisabledCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied when the panel item is
            disabled.

#### Remarks
By default the visual appearance of disabled panel items is defined in the skin CSS
            file. You can use the DisabledCssClass property to specify unique
            appearance for the panel item when it is disabled.

###  PostBack `Boolean`

Gets or sets a value indicating whether clicking on the item will
            postback.

#### Remarks
If you subscribe to the ItemClick all panel
                items will postback. To turn off that behavior you should set the
                PostBack property to false.

###  PreventCollapse `Boolean`

Gets or sets a value indicating whether clicking on the item will
            collapse it.

###  Selected `Boolean`

Gets or sets a value indicating whether the item is selected.

#### Remarks
Use the Selected property to determine whether the item is currently selected.

###  Text `String`

Gets or sets the text caption for the panel item.

#### Remarks
Use the Text property to specify the text to display for the
            item.

###  NavigateUrl `String`

Gets or sets the URL to link to when the item is clicked.

#### Remarks
Use the NavigateUrl property to specify the URL to link to when
            the item is clicked. Use "~" (tilde) in front of an URL within the same ASP.NET
            application. When specifying external URL do not forget the protocol (e.g.
            "http://").

###  Target `String`

Gets or sets the target window or frame to display the Web page content linked to
            when the panel item is clicked.

#### Remarks
Use the Target property to specify the frame or window that displays the
                    Web page linked to when the panel item is clicked. The Web page is specified by
                    setting the NavigateUrl property.
                If this property is not set, the Web page specified by the
                NavigateUrl property is loaded in the current window.

###  Value `String`

Gets or sets the value associated with the panel item.

#### Remarks
Use the Value property to specify or determine the value associated
                with the item.

###  DataItem `Object`

Gets or sets the data item represented by the item.

#### Remarks
This property is applicable only during data binding. Use it along with the
                ItemDataBound event to perform
                additional mapping of fields from the data item to
                RadPanelItem properties.

###  ItemTemplate `ITemplate`

Gets or sets the template for displaying the item.

###  ContentTemplate `ITemplate`

Gets or sets the content template.

###  HeaderTemplate `ITemplate`

Gets or sets the template for displaying footer in
            RadcomboBox.

###  Header `RadPanelItemHeaderTemplateContainer`

Get the Header Template container of the RadPanelItem.

###  ImageUrl `String`

Gets or sets the path to an image to display for the item.

#### Remarks
Use the ImageUrl property to specify the image for the item. If
            the ImageUrl property is set to empty string no image will be
            rendered. Use "~" (tilde) when referring to images within the current ASP.NET
            application.

###  HoveredImageUrl `String`

Gets or sets a value specifying the URL of the image rendered when the node is hovered with the mouse.

#### Remarks
If the HoveredImageUrl property is not set the ImageUrl property will be 
            used when the node is hovered.

###  DisabledImageUrl `String`

Gets or sets the path to an image to display for the item when it is disabled.

#### Remarks
Use the DisabledImageUrl property to specify the image for the item when it is disabled. If
            the DisabledImageUrl property is set to empty string no image will be
            rendered. Use "~" (tilde) when referring to images within the current ASP.NET
            application.

###  SelectedImageUrl `Boolean`

Gets or sets the path to an image to display for the item when it is selected.

#### Remarks
Use the SelectedImageUrl property to specify the image for the item when it is disabled. If
            the SelectedImageUrl property is set to empty string no image will be
            rendered. Use "~" (tilde) when referring to images within the current ASP.NET
            application.

###  ExpandedImageUrl `Boolean`

Gets or sets the path to an image to display for the item when it is expanded.

#### Remarks
Use the ExpandedImageUrl property to specify the image for the item when it is expanded. If
            the ExpandedImageUrl property is set to empty string no image will be
            rendered. Use "~" (tilde) when referring to images within the current ASP.NET
            application.

###  CssClass `String`

###  ClickedCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied when the panel item is
            clicked.

###  SelectedCssClass `Boolean`

Gets or sets the Cascading Style Sheet (CSS) class applied when the panel item is
            selected.

#### Remarks
By default the visual appearance of selected panel items is defined in the skin CSS
            file. You can use the SelectedCssClass property to specify unique
            appearance for the panel item when it is selected.

###  ExpandedCssClass `Boolean`

Gets or sets the Cascading Style Sheet (CSS) class applied when the panel item is
            opened (its child items are visible).

#### Remarks
By default the visual appearance of opened panel items is defined in the skin CSS
            file. You can use the ExpandedCssClass property to specify unique
            appearance for the panel item when it is opened.

###  FocusedCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied when the panel item is
            focused.

#### Remarks
By default the visual appearance of focused panel items is defined in the skin CSS
            file. You can use the FocusedCssClass property to specify unique
            appearance for the panel item when it is focused.

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

###  Clone

Clones this instance.

#### Returns

`Telerik.Web.UI.RadPanelItem` 

###  ExpandParentItems

Expands all parent items so the item is visible.

#### Returns

`System.Void` 

###  ApplyHeaderTemplate

Instantiates the HeaderTemplate inside the Header. 
            Clears all existing controls in the Header before that.

#### Returns

`System.Void` 

###  IsChildControl

Returns true if the control is rendered by the ControlItem itself;
            false if it was added by the user to the Controls collection.

#### Returns

`System.Boolean` 

