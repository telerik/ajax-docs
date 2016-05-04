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

###  AutoPostBack `Boolean`

Gets or sets a value indicating whether a postback to the server automatically
            occurs when the user changes the RadDropDownTree selection.

###  ButtonSettings `DropDownTreeButtonSettings`

Used to customize the appearance of the buttons displayed by RadDropDownTree.

###  CheckBoxes `DropDownTreeCheckBoxes`

Get or sets the CheckBox state of the RadDropDownTree.

###  CheckNodeOnClick `Boolean`

Gets or sets a value indicating whether the DropDownNodes expands on single click.

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ClientNodeTemplate `String`

Gets or sets the HTML template of a DropDownNode when added on the client.

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

###  Controls `ControlCollection`

Gets a  object that represents
            the child controls for a specified server control in the UI hierarchy.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  Culture `CultureInfo`

Gets or sets the selected culture. Localization strings will be loaded based on this value.

###  DataBindings `List`1`

Gets the settings the data binding setting for the RadDropDownTree.

#### Remarks
The following property is used in WebService scenarios.

###  DataFieldID `String`

Gets or sets the data field holding the unique identifier for a DropDownTreeNode.

###  DataFieldParentID `String`

Gets or sets the data field holding the ID of the parent DropDownTreeNode.

###  DataTextField `String`

Gets or sets the data field holding the Text property for the currently bound DropDownTreeNode.

###  DataValueField `String`

Gets or sets the data field holding the Value property for the currently bound DropDownTreeNode.

###  DefaultMessage `String`

Gets or sets a value indicating what message will be displayed then the control is empty (no entries selected).

###  DefaultValue `String`

Gets or sets the default value of the control used for validation.

###  DropDownNodeTemplate `ITemplate`

Gets or sets the template for displaying all DropDownTreeNode in the current tree.

###  DropDownSettings `DropDownSettings`

Gets the DropDown settings.

###  EmbeddedTree `RadTreeView`

Gets a reference to the embedded tree

#### Remarks
RadTreeView control is integrated in the RadDropDownTree.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableDirectionDetection `Boolean`

Determines whether the Direction Detection is enabled or not.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableEntryTextHtmlEncoding `Boolean`

Gets or sets a value indicating whether RadDropDownTree should HTML encode the text of the entries.

###  EnableFiltering `Boolean`

Gets or sets a value indicating whether the control filtering is enabled.

###  EnableRippleEffect `Boolean`

Returns true if ripple effect should be added

###  EnableScreenBoundaryDetection `Boolean`

Determines whether the Screen Boundaries Detection is enabled or not.

###  Entries `DropDownTreeEntryCollection`

Gets the RadDropDownTree 
                entries collection.

###  EntriesDelimiter `DropDownTreeEntryCollection`

Gets or sets a value indicating the delimiter between entries.

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

###  ExpandNodeOnSingleClick `Boolean`

Gets or sets a value indicating whether the DropDownNodes expands on single click.

###  FilterSettings `DropDownTreeFilterSettings`

Used to customize filtering of the RadDropDownTree.

###  Footer `WebControl`

Get a footer of 
            RadDropDownTree.

###  FooterTemplate `ITemplate`

Gets or sets the  that defines the  footer template.

###  FullPathDelimiter `String`

Gets or sets a value indicating the delimiter in FullPath text mode.

###  Header `WebControl`

Get a header of 
            RadDropDownTree.

###  HeaderTemplate `ITemplate`

Gets or sets the  that defines the  header template.

###  IsSkinSet `String`

For internal use.

###  Localization `DropDownTreeButtons`

Gets the localization.

###  LocalizationPath `String`

Gets or sets a value indicating where RadDropDownTree will look for its .resx localization files.

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  OnClientClearButtonClicked `String`

Gets or sets the name of the JavaScript function called on clear button clicked

###  OnClientClearButtonClicking `String`

Gets or sets the name of the JavaScript function called on clear button clicking

###  OnClientDropDownClosed `String`

The client-side event that is fired after the dropdown of the DropDownTree is
             closed.

#### Remarks
The event handler receives two parameter: the instance of the DropDownTree
             client-side object and event args. The event can not be cancelled

###  OnClientDropDownClosing `String`

The client-side event that is fired before the dropdown of the DropDownTree is
            closed.

#### Remarks
The event handler receives two parameter: the instance of the DropDownTree
            client-side object and event args. The event can be cancelled - simply set  args.set_cancel to true args.set_cancel(true); 
            from the event handler and the DropDownTree dropdown will not be closed.

###  OnClientDropDownOpened `String`

The client-side event that is fired after the dropdown of the DropDownTree is
            opened.

#### Remarks
The event handler receives two parameter: the instance of the DropDownTree
            client-side object and event args. The event cannot  be cancelled.

###  OnClientDropDownOpening `String`

The client-side event that is fired before the dropdown of the DropDownTree is
            opened.

#### Remarks
The event handler receives two parameter: the instance of the DropDownTree
            client-side object and event args. The event can be cancelled - simply set  args.set_cancel to true args.set_cancel(true); 
            from the event handler and the DropDownTree dropdown will not be opened.

###  OnClientEntryAdded `String`

Gets or sets the name of the JavaScript function called after an entry has been added

###  OnClientEntryAdding `String`

Gets or sets the name of the JavaScript function called when an entry is about to be added

###  OnClientEntryRemoved `String`

Gets or sets the name of the JavaScript function called after an entry has been removed

###  OnClientEntryRemoving `String`

Gets or sets the name of the JavaScript function called when an entry is about to be removed

###  OnClientLoad `String`

Gets or sets a value indicating the client-side event handler that is called
            after the RadDropDownTree client-side object is initialized.

#### Remarks
If specified, the OnClienLoad client-side event handler is
                called after the DropDownTree is fully initialized on the client.A single parameter - the dropdowntree client object - is passed to the
                handler.This event cannot be cancelled.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css. If the set value is Auto use ResolvedRenderMode to receive the actual RenderMode
            with respect to the user angent of the current request.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  SelectedText `String`

Gets the entries text with the appropriate delimiter.

###  SelectedValue `String`

Gets the entries values in comma separated list.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  SupportsDisabledAttribute `Boolean`

For internal use.

###  TextMode `DropDownTreeTextMode`

Gets or sets a value indicating whether the entry should show the its full path in the entry area.

###  UniqueID `String`

Gets the unique, hierarchically qualified identifier for the server
            control.

###  WebServiceSettings `WebServiceSettings`

Gets the settings for the web service used to populate nodes when ExpandMode set to WebService.

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  DataBind

Bind the RadDropDownTree control.

#### Returns

`System.Void` 

###  DescribeRenderingMode

Should be  used by inheritors

#### Returns

`System.Void` 

###  ExpandAllDropDownNodes

Expands all of the DropDownNodes.

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Void` 

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

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  SyncEmbeddedTree

Synchronize the nodes and the entries collection.

#### Remarks
The method is used in cases when some nodes are checked manually.

#### Returns

`System.Void` 

