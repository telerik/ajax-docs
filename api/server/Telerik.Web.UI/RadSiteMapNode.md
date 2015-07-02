---
title: Telerik.Web.UI.RadSiteMapNode
page_title: Telerik.Web.UI.RadSiteMapNode
description: Telerik.Web.UI.RadSiteMapNode
---

# Telerik.Web.UI.RadSiteMapNode

Represents a node in the Telerik.Web.UI.RadSiteMap RadSiteMapcontrol.

#### Remarks
The Telerik.Web.UI.RadSiteMap RadSiteMapcontrol is made up of nodes. Nodes which are immediate children
            		of the control are root nodes. Nodes which are children of other nodes are child nodes.
            	A node usually stores data in two properties, the P:Telerik.Web.UI.RadSiteMapNode.Text Textproperty and 
            		the P:Telerik.Web.UI.RadSiteMapNode.NavigateUrl NavigateUrlproperty.
            	To create nodes, use one of the following methods:bullet Data bind the RadSiteMapcontrol to a data source,
            			for example System.Web.UI.WebControls.SiteMapDataSource SiteMapDataSource.
            		Use declarative syntax to define nodes inline in your page or user control.
            		Use one of the constructors to dynamically create new instances of the
            			Telerik.Web.UI.RadSiteMap RadSiteMapclass. These nodes can then be added to the
            			Nodescollection of another node or site map.
            		When the user clicks a node, the RadSiteMapcontrol navigates
                    to the linked Web page. By default, a linked page
                    is displayed in the same window or frame. To display the linked content in a different 
            		window or frame, use the P:Telerik.Web.UI.RadSiteMapNode.Target Targetproperty.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.ControlItem
* Telerik.Web.UI.NavigationItem
* Telerik.Web.UI.RadSiteMapNode

## Properties

###  Text `String`

Gets or sets the text displayed for the current node.

#### Remarks
Use the Text property to specify or determine the text that is displayed for the node
            	in the RadSiteMap control.

###  NavigateUrl `String`

Gets or sets the URL to navigate to when the current node is clicked.

###  Target `String`

Gets or sets the target window or frame in which to display the Web page content associated with the current node.

#### Remarks
Use the Target property to target window or frame in which to display the 
            		Web page content associated with the current node. The Web page is specified by
                    the NavigateUrl property.
                
            		If this property is not set, the Web page specified by the
            		NavigateUrl property is loaded in the current window.
            	
            		The Target property is taken into consideration only when the NavigateUrl 
            		property is set.

###  Value `String`

Gets or sets custom (user-defined) data associated with the current node.

#### Remarks
Use the Value property to associate custom data with a RadSiteMap object.

###  ToolTip `String`

Gets or sets the tooltip shown for the node when the user hovers it with the mouse

#### Remarks
The ToolTip property is also used as the alt attribute of the node image (in case  is set)

###  Enabled `Boolean`

Gets or sets a value indicating whether the node is enabled.

#### Remarks
Disabled nodes cannot be clicked, or expanded.

###  DataItem `Object`

Gets the data item that is bound to the node

#### Remarks
This property is applicable only during data binding. Use it along with the
                NodeDataBound event to perform additional
                mapping of fields from the data item to RadSiteMapNode properties.

###  CssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied by default to the node.

#### Remarks
By default the visual appearance of hovered nodes is defined in the skin CSS
            file. You can use the CssClass property to specify unique
            appearance for the node.

###  HoveredCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied to the node when the mouse hovers it.

#### Remarks
By default the visual appearance of hovered nodes is defined in the skin CSS
            file. You can use the HoveredCssClass property to specify unique
            appearance for a node when it is hoevered.

###  DisabledCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied to the node when it is disabled.

#### Remarks
By default the visual appearance of disabled nodes is defined in the skin CSS
            file. You can use the DisabledCssClass property to specify unique
            appearance for a node when it is disabled.

###  SelectedCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied when node is
            selected.

#### Remarks
By default the visual appearance of selected nodes is defined in the skin CSS
            file. You can use the SelectedCssClass property to specify unique
            appearance for a node when it is selected.

###  ImageUrl `String`

Gets or sets the URL to an image which is displayed next to the text of a node.

#### Remarks
Use the ImageUrl property to specify a custom image that will be
            	displayed before the text of the current node.

###  HoveredImageUrl `String`

Gets or sets a value specifying the URL of the image rendered when the node is hovered with the mouse.

#### Remarks
If the HoveredImageUrl property is not set the ImageUrl property will be 
            used when the node is hovered.

###  DisabledImageUrl `String`

Gets or sets a value specifying the URL of the image rendered when the node is disabled.

#### Remarks
If the DisabledImageUrl property is not set the ImageUrl property will be 
            used when the node is disabled.

###  SelectedImageUrl `String`

Gets or sets a value specifying the URL of the image rendered when the node is selected.

#### Remarks
If the SelectedImageUrl property is not set the ImageUrl property will be 
            used when the node is selected.

###  Level `Int32`

Gets the level of the node.

###  Nodes `RadSiteMapNodeCollection`

Gets a  object that contains the child nodes of the current RadSiteMapNode.

#### Remarks
Use the Nodes property to access the child nodes of the RadSiteMapNode. You can also use the Nodes property to
            	manage the child nodes - you can add, remove or modify nodes.

###  Owner `IRadSiteMapNodeContainer`

Gets the parent IRadSiteMapNodeContainer.

###  SiteMap `RadSiteMap`

Gets the  which this node belongs to.

###  Selected `Boolean`

Gets or sets a value indicating whether the node is selected.

#### Remarks
Only one node can be selected.

###  NodeTemplate `ITemplate`

Gets or sets the template for displaying the node.

###  SeparatorTemplate `ITemplate`

Gets or sets the separator template for the node.

###  ParentNode `RadSiteMapNode`

Gets the parent node of the current node.

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

###  Remove

Removes the node from the Nodes collection of its parent

#### Returns

`System.Void` 

###  RenderEndTag

Renders the HTML closing tag of the control into the specified writer.
            This method is used primarily by control developers.

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

A  that represents
            the output stream to render HTML content on the client.

#### Returns

`System.Void` 

###  IsChildControl

Returns true if the control is rendered by the ControlItem itself;
            false if it was added by the user to the Controls collection.

#### Returns

`System.Boolean` 

