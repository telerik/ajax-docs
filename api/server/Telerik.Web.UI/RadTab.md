---
title: Telerik.Web.UI.RadTab
page_title: Telerik.Web.UI.RadTab
description: Telerik.Web.UI.RadTab
---

# Telerik.Web.UI.RadTab

Represents a tab in the Telerik.Web.UI.RadTabStrip RadTabStripcontrol.

#### Remarks
The Telerik.Web.UI.RadTabStrip RadTabStripcontrol is made up of tabs. Tabs which are immediate children
            		of the tabstrip are root tabs. tabs which are children of root tabs are child tabs.
            	A tab usually stores data in two properties, the P:Telerik.Web.UI.RadTab.Text Textproperty and
            		the P:Telerik.Web.UI.RadTab.Value Valueproperty. The value of the P:Telerik.Web.UI.RadTab.Text Textproperty is displayed
            		in the Telerik.Web.UI.RadTabStrip RadTabStripcontrol, and the P:Telerik.Web.UI.RadTab.Value Valueproperty is used to store additional data.
            	To create tabs, use one of the following methods:bullet Use declarative syntax to define tabs inline in your page or user control.
            		Use one of the constructors to dynamically create new instances of the
            			Telerik.Web.UI.RadTab RadTabclass. These tabs can then be added to the
            			Tabscollection of another tab or tabstrip.
            		Data bind the Telerik.Web.UI.RadTabStrip RadTabStripcontrol to a data source.
            		When the user clicks a tab, the Telerik.Web.UI.RadTabStrip RadTabStripcontrol can navigate
                    to a linked Web page, post back to the server or select that tab. If the
                    P:Telerik.Web.UI.RadTab.NavigateUrl NavigateUrlproperty of a tab is set, the
                    RadTabStripcontrol navigates to the linked page. By default, a linked page
                    is displayed in the same window or frame. To display the linked content in a different
            		window or frame, use the P:Telerik.Web.UI.RadTab.Target Targetproperty.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.ControlItem : IMarkableStateManager, INamingContainer, IStateManager, IXmlSerializable
* Telerik.Web.UI.NavigationItem : IControlItemContainer
* Telerik.Web.UI.RadTab : IRadTabContainer

## Properties

###  AccessKey `String`

Gets or sets the access key that allows you to quickly navigate to the Web server control.

###  ChildGroupCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied to the HTML element
            	containing the child tabs.

#### Remarks
Tabs are rendered as LI (list item) HTML elements inside a
                UL (unordered list). The CSS class specified by the
                ChildGroupCssClass property is applied to the UL
                tag.

###  DataItem `Object`

Gets the data item that is bound to the tab

#### Remarks
This property is applicable only during data binding. Use it along with the
                TabDataBound event to perform additional
                mapping of fields from the data item to RadTab properties.

###  DisabledCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied when the tab is disabled.

#### Remarks
By default the visual appearance of disabled tabs is defined in the skin CSS
            	file. You can use the DisabledCssClass property to specify unique
            	appearance for the tab when it is disabled.

###  DisabledImageUrl `String`

Gets or sets the URL to an image which is displayed when the tab is disabled
            	(its Enabled property is set to false).

#### Remarks
Use the DisabledImageUrl property to specify a custom image that will be
            		displayed when the current tab is disabled. Setting the DisabledImageUrl
            		property required the ImageUrl property to be set beforehand.
            	
            		If the DisabledImageUrl property is not set the value of the ImageUrl
            		will be used instead.

###  HoveredCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied when the tab is hovered with the mouse.

#### Remarks
By default the visual appearance of hovered tabs is defined in the skin CSS
            	file. You can use the HoveredCssClass property to specify unique
            	appearance for the tab when it is hovered.

###  HoveredImageUrl `String`

Gets or sets the URL to an image which is displayed when the
            	user hovers the current tab with the mouse.

#### Remarks
Use the HoveredImageUrl property to specify a custom image that will be
            		displayed when the user hovers the tab with the mouse. Setting the HoveredImageUrl
            		property required the ImageUrl property to be set beforehand.
            	
            		If the HoveredImageUrl property is not set the value of the ImageUrl
            		will be used instead.

###  ID `String`

The ID property is reserved for internal use. Please use the Value property or
            use the Attributes collection if you need to assign
            custom data to the item.

###  ImageUrl `String`

Gets or sets the URL to an image which is displayed next to the text of a tab.

#### Remarks
Use the ImageUrl property to specify a custom image that will be
            	displayed before the text of the current tab.

###  Index `Int32`

Gets the zero based index of the item.

###  IsBreak `Boolean`

Gets or sets a value indicating whether next tab will be displayed on a new
            line.

#### Remarks
Use the IsBreak property to create multi-row tabstrip. All tabs after the "break"
            	tab will be displayed on a new line.

###  IsSeparator `Boolean`

Gets or sets a value indicating whether the tab will behave as separator.

#### Remarks
Use separators to visually separate the tabs. You also need to specify the width
            	of the separator tab through the Width property.

###  Level `Int32`

Gets the level of the current tab.

###  NavigateUrl `String`

Gets or sets the URL to navigate to when the current tab is clicked.

#### Remarks
By default clicking a tab will select it. If the tab has any child tabs they will be displayed. To make a tab
            		navigate to some designated URL you can use the NavigateUrl property. You can optionally set the
            		Target property to specify the window or frame in which to display the linked content.
            	
            		Setting the NavigateUrl property will disable tab selection and as a result the
            		TabClick event won't be raised for the current tab.

###  OuterCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied on the outmost tab element (<LI>).

#### Remarks
You can use the OuterCssClass property to specify unique
            	appearance for the tab, or to insert elements that are before/after the link element.

###  Owner `IRadTabContainer`

Gets the IRadTabContainer instance which contains the current tab.

#### Remarks
The value is of the IRadTabContainer type which is
                implemented by the RadTabStrip class and the
                RadTab class. Use the Owner property when
                recursively traversing tabs in the RadTabStrip control.

###  PageView `RadPageView`

Gets the RadPageView activated when the tab is selected.

###  PageViewID `String`

Gets or sets the ID of the RadPageView in
                a RadMultiPage that will be switched when the tab is
                selected.

#### Remarks
This property overrides the default relation between the page views within a
                RadMultiPage and the tabs in a
                RadTabStrip. By default a tab activates the page view
                with the same index.

###  PerTabScrolling `Boolean`

Gets or sets a value indicating whether the tabstrip should scroll directly to
            	the next tab.

#### Remarks
By default tabs are scrolled smoothly. If you want the tabstrip to scroll directly
                to the next (or previous) tab set this property to true. This
                property is applicable when the ScrollChildren
                property is set to true; otherwise it is ignored.

###  PostBack `Boolean`

Gets or sets a value indicating whether clicking on the tab will postback.

#### Remarks
If you subscribe to the TabClick event all tabs
                will postback. To prevent the current tab from initiating postback you can set the PostBack
            	property to false.

###  ScrollButtonsPosition `TabStripScrollButtonsPosition`

The position of the scroll buttons with regards to the tab band.

#### Remarks
This property is applicable when the
                ScrollChildren property is set to
                true; otherwise it is ignored.

###  ScrollChildren `Boolean`

Gets or sets a value indicating whether the children of the tab will be
            	scrollable.

#### Remarks
To enable scrolling of the child tabs the ScrollChildren property
            	must also be set to true.

###  ScrollPosition `Int32`

Gets or sets the position of the scrollable band of tabs relative to the
            	beginning of the scrolling area.

#### Remarks
This property is applicable when the
                ScrollChildren property is set to
                true; otherwise it is ignored.

###  Selected `Boolean`

Gets or sets a value indicating whether the tab is selected.

#### Remarks
Use the Selected property to determine whether the tab is currently selected
                within its parent RadTabCollection. Setting the Selected
                property to true will deselect the previously selected tab.

###  SelectedCssClass `Boolean`

Gets or sets the Cascading Style Sheet (CSS) class applied when the tab is selected.

#### Remarks
By default the visual appearance of selected tabs is defined in the skin CSS
            	file. You can use the SelectedCssClass property to specify unique
            	appearance for the current tab when it is selected.

###  SelectedImageUrl `Boolean`

Gets or sets the URL to an image which is displayed when the tab is selected.

#### Remarks
Use the SelectedImageUrl property to specify a custom image that will be
            		displayed when the current tab is selected. Setting the SelectedImageUrl
            		property required the ImageUrl property to be set beforehand.
            	
            		If the SelectedImageUrl property is not set the value of the ImageUrl
            		will be used instead.

###  SelectedIndex `Boolean`

Gets or sets the index of the selected child tab.

#### Remarks
Use the SelectedIndex property to programmatically specify the selected
            		child tab in a IRadTabContainer (RadTabStrip or RadTab).
            		To clear the selection set the SelectedIndex property to -1.

###  SelectedTab `Boolean`

Gets the selected child tab.

###  Tabs `RadTabCollection`

Gets a RadTabCollection object that contains the child tabs of the current tab.

#### Remarks
Use the Tabs property to access the child tabs of the current tab. You can also use the Tabs property to
            	manage the children of the current tab. You can add, remove or modify tabs from the Tabs collection.

###  TabStrip `RadTabStrip`

Gets the RadTabStrip instance which contains the current tab.

###  TabTemplate `ITemplate`

Gets or sets the template for displaying the tab.

###  Target `String`

Gets or sets the target window or frame in which to display the Web page content associated with the current tab.

#### Remarks
Use the Target property to target window or frame in which to display the
            		Web page content associated with the current tab. The Web page is specified by
                    the NavigateUrl property.
                
            		If this property is not set, the Web page specified by the
            		NavigateUrl property is loaded in the current window.
            	
            		The Target property is taken into consideration only when the NavigateUrl
            		property is set.

###  Text `String`

Gets or sets the text displayed for the current tab.

#### Remarks
Use the Text property to specify or determine the text that is displayed for the tab
            	in the RadTabStrip control.

###  Value `String`

Gets or sets custom (user-defined) data associated with the current tab.

#### Remarks
Use the Value property to associate custom data with a RadTab object.

## Methods

###  IsChildControl

Returns true if the control is rendered by the ControlItem itself;
            false if it was added by the user to the Controls collection.

#### Returns

`System.Boolean` 

###  RenderEndTag

Renders the HTML closing tag of the control into the specified writer.
            This method is used primarily by control developers.

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

A  that represents
            the output stream to render HTML content on the client.

#### Returns

`System.Void` 

###  SelectParents

Selects recursively all parent tabs in the hierarchy.

#### Remarks
Use this method to programmatically select all parents of the tab. Selected tabs
            		will be visible in the browser.

#### Returns

`System.Void` 

