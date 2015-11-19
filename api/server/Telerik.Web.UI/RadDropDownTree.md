---
title: Telerik.Web.UI.RadDropDownTree
page_title: Telerik.Web.UI.RadDropDownTree
description: Telerik.Web.UI.RadDropDownTree
---

# Telerik.Web.UI.RadDropDownTree

This Class defines the RadDropDownList.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadDropDownTree : INamingContainer, IPostBackEventHandler

## Properties

###  Controls `ControlCollection`

Gets a  object that represents
            the child controls for a specified server control in the UI hierarchy.

###  SupportsDisabledAttribute `Boolean`

For internal use.

###  DataFieldID `String`

Gets or sets the data field holding the unique identifier for a DropDownTreeNode.

###  DataFieldParentID `String`

Gets or sets the data field holding the ID of the parent DropDownTreeNode.

###  DataTextField `String`

Gets or sets the data field holding the Text property for the currently bound DropDownTreeNode.

###  DataValueField `String`

Gets or sets the data field holding the Value property for the currently bound DropDownTreeNode.

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  DropDownNodeTemplate `ITemplate`

Gets or sets the template for displaying all DropDownTreeNode in the current tree.

###  Entries `DropDownTreeEntryCollection`

Gets the RadDropDownTree 
                entries collection.

###  UniqueID `String`

Gets the unique, hierarchically qualified identifier for the server
            control.

###  DefaultMessage `String`

Gets or sets a value indicating what message will be displayed then the control is empty (no entries selected).

###  EnableEntryTextHtmlEncoding `Boolean`

Gets or sets a value indicating whether RadDropDownTree should HTML encode the text of the entries.

###  DropDownSettings `DropDownSettings`

Gets the DropDown settings.

###  CheckBoxes `DropDownTreeCheckBoxes`

Get or sets the CheckBox state of the RadDropDownTree.

###  HeaderTemplate `ITemplate`

Gets or sets the  that defines the  header template.

###  FooterTemplate `ITemplate`

Gets or sets the  that defines the  footer template.

###  Header `WebControl`

Get a header of 
            RadDropDownTree.

###  Footer `WebControl`

Get a footer of 
            RadDropDownTree.

###  AutoPostBack `Boolean`

Gets or sets a value indicating whether a postback to the server automatically
            occurs when the user changes the RadDropDownTree selection.

###  TextMode `DropDownTreeTextMode`

Gets or sets a value indicating whether the entry should show the its full path in the entry area.

###  FullPathDelimiter `String`

Gets or sets a value indicating the delimiter in FullPath text mode.

###  EntriesDelimiter `DropDownTreeEntryCollection`

Gets or sets a value indicating the delimiter between entries.

###  DefaultValue `String`

Gets or sets the default value of the control used for validation.

###  SelectedText `String`

Gets the entries text with the appropriate delimiter.

###  SelectedValue `String`

Gets the entries values in comma separated list.

###  ExpandNodeOnSingleClick `Boolean`

Gets or sets a value indicating whether the DropDownNodes expands on single click.

###  CheckNodeOnClick `Boolean`

Gets or sets a value indicating whether the DropDownNodes expands on single click.

###  ButtonSettings `DropDownTreeButtonSettings`

Used to customize the appearance of the buttons displayed by RadDropDownTree.

###  FilterSettings `DropDownTreeFilterSettings`

Used to customize filtering of the RadDropDownTree.

###  LocalizationPath `String`

Gets or sets a value indicating where RadDropDownTree will look for its .resx localization files.

###  Culture `CultureInfo`

Gets or sets the selected culture. Localization strings will be loaded based on this value.

###  Localization `DropDownTreeButtons`

Gets the localization.

###  EnableFiltering `Boolean`

Gets or sets a value indicating whether the control filtering is enabled.

###  WebServiceSettings `WebServiceSettings`

Gets the settings for the web service used to populate nodes when ExpandMode set to WebService.

###  ExpandAnimation `AnimationSettings`

Gets the settings for the animation played when the dropdown opens.

#### Remarks
Use the ExpandAnimation property to customize the expand
                    animation of RadDropDownTree. You can specify the
                    Type and
                    Duration.
                    To disable expand animation effects you should set the
                    Type to
                    AnimationType.None.
                    To customize the collapse animation you can use the
                    CollapseAnimation property.

###  CollapseAnimation `AnimationSettings`

Gets the settings for the animation played when the dropdown closes.

#### Remarks
Use the CollapseAnimation property to customize the expand
                    animation of RadDropDownTree. You can specify the
                    Type and
                    Duration.
                    To disable collapse animation effects you should set the
                    Type to
                    AnimationType.None.
                    To customize the expand animation you can use the
                    ExpandAnimation property.

###  EnableScreenBoundaryDetection `Boolean`

Determines whether the Screen Boundaries Detection is enabled or not.

###  DataBindings `List`1`

Gets the settings the data binding setting for the RadDropDownTree.

#### Remarks
The following property is used in WebService scenarios.

###  ClientNodeTemplate `String`

Gets or sets the HTML template of a DropDownNode when added on the client.

###  EmbeddedTree `RadTreeView`

Gets a reference to the embedded tree

#### Remarks
RadTreeView control is integrated in the RadDropDownTree.

###  OnClientLoad `String`

Gets or sets a value indicating the client-side event handler that is called
            after the RadDropDownTree client-side object is initialized.

#### Remarks
If specified, the OnClienLoad client-side event handler is
                called after the DropDownTree is fully initialized on the client.A single parameter - the dropdowntree client object - is passed to the
                handler.This event cannot be cancelled.

###  OnClientDropDownOpening `String`

The client-side event that is fired before the dropdown of the DropDownTree is
            opened.

#### Remarks
The event handler receives two parameter: the instance of the DropDownTree
            client-side object and event args. The event can be cancelled - simply set  args.set_cancel to true args.set_cancel(true); 
            from the event handler and the DropDownTree dropdown will not be opened.

###  OnClientDropDownOpened `String`

The client-side event that is fired after the dropdown of the DropDownTree is
            opened.

#### Remarks
The event handler receives two parameter: the instance of the DropDownTree
            client-side object and event args. The event cannot  be cancelled.

###  OnClientDropDownClosing `String`

The client-side event that is fired before the dropdown of the DropDownTree is
            closed.

#### Remarks
The event handler receives two parameter: the instance of the DropDownTree
            client-side object and event args. The event can be cancelled - simply set  args.set_cancel to true args.set_cancel(true); 
            from the event handler and the DropDownTree dropdown will not be closed.

###  OnClientDropDownClosed `String`

The client-side event that is fired after the dropdown of the DropDownTree is
             closed.

#### Remarks
The event handler receives two parameter: the instance of the DropDownTree
             client-side object and event args. The event can not be cancelled

###  OnClientEntryAdding `String`

Gets or sets the name of the JavaScript function called when an entry is about to be added

###  OnClientEntryAdded `String`

Gets or sets the name of the JavaScript function called after an entry has been added

###  OnClientEntryRemoving `String`

Gets or sets the name of the JavaScript function called when an entry is about to be removed

###  OnClientEntryRemoved `String`

Gets or sets the name of the JavaScript function called after an entry has been removed

###  OnClientClearButtonClicking `String`

Gets or sets the name of the JavaScript function called on clear button clicking

###  OnClientClearButtonClicked `String`

Gets or sets the name of the JavaScript function called on clear button clicked

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  IsSkinSet `String`

For internal use.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  ClientStateFieldID `String`

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css. If the set value is Auto use ResolvedRenderMode to receive the actual RenderMode
            with respect to the user angent of the current request.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DefaultCssClass `String`

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ScriptManager `ScriptManager`

###  RadScriptManager `ScriptManager`

## Methods

###  DescribeClientProperties

#### Returns

`System.Void` 

###  DescribeClientEvents

#### Returns

`System.Void` 

###  DataBind

Bind the RadDropDownTree control.

#### Returns

`System.Void` 

###  ExpandAllDropDownNodes

Expands all of the DropDownNodes.

#### Returns

`System.Void` 

###  SyncEmbeddedTree

Synchronize the nodes and the entries collection.

#### Remarks
The method is used in cases when some nodes are checked manually.

#### Returns

`System.Void` 

###  AddAttributesToRender

#### Returns

`System.Void` 

###  OnPreRender

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  RenderClientStateField

#### Returns

`System.Void` 

###  RenderBeginTag

#### Returns

`System.Void` 

###  RenderEndTag

#### Returns

`System.Void` 

###  Render

#### Returns

`System.Void` 

###  RenderScriptsNoScriptManager

#### Returns

`System.Void` 

###  RenderDescriptorsNoScriptManager

#### Returns

`System.Void` 

###  RenderContents

#### Returns

`System.Void` 

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  DescribeComponent

#### Returns

`System.Void` 

###  DescribeRenderingMode

Should be  used by inheritors

#### Returns

`System.Void` 

###  DescribeProperty

#### Returns

`System.Void` 

###  DescribeEvent

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  LoadPostData

Executed when post data is loaded from the request

#### Parameters

#### postDataKey `System.String`

#### postCollection `System.Collections.Specialized.NameValueCollection`

#### Returns

`System.Boolean` 

###  RaisePostDataChangedEvent

Executed when post data changes should invoke a changed event

#### Returns

`System.Void` 

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

