---
title: Telerik.Web.UI.RadMultiSelect
page_title: Telerik.Web.UI.RadMultiSelect
description: Telerik.Web.UI.RadMultiSelect
---

# Telerik.Web.UI.RadMultiSelect

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadMultiSelect : INamingContainer

## Properties

###  Animation `Boolean`

Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly. is not a valid configuration.

###  AnimationSettings `Boolean`

Configures the opening and closing animations of the suggestion popup. Setting the animation option to false will disable the opening and closing animations. As a result the suggestion popup will open and close instantly. is not a valid configuration.

###  AutoBind `Boolean`

Controls whether to bind the widget to the data source on initialization

###  AutoClose `Boolean`

Controls whether to close the widget suggestion list on item selection.

###  AutoPostBack `Boolean`

Gets or sets a value indicating whether a postback to the server automatically
            occurs when the user changes the RadComboBox selection.

#### Remarks
Set this property to true if the server needs to capture the selection
                as soon as it is made. For example, other controls on the Web page can be
                automatically filled depending on the user's selection from a list control.This property can be used to allow automatic population of other controls on
                the Web page based on a user's selection from a list.The value of this property is stored in view state.
                    The server-side event that is fired is
                    SelectedIndexChanged.

###  AutoWidth `Boolean`

If set to true, the widget automatically adjusts the width of the popup element and does not wrap up the item label.

###  CascadeFrom `String`

Use it to set the Id of the parent MultiSelect widget.Help topic showing how cascading functionality works

###  CascadeFromField `String`

Defines the field to be used to filter the data source. If not defined the parent's dataValueField option will be used.Help topic showing how cascading functionality works

###  CascadeFromParentField `String`

Defines the parent field to be used to retain value from. This value will be used further to filter the dataSource. If not defined the value from the parent's dataValueField will be used.

###  CausesValidation `Boolean`

Gets or sets a value indicating whether validation is performed when an item within
            the control is selected.

#### Remarks
By default, page validation is performed when an item is selected. Page
                validation determines whether the input controls associated with a validation
                control on the page all pass the validation rules specified by the validation
                control. You can specify or determine whether validation is performed on both the
                client and the server when an item is clicked by using the CausesValidation
                property. To prevent validation from being performed, set the
                CausesValidation property to false.

###  ClearButton `Boolean`

Unless this options is set to false, a button will appear when hovering the widget. Clicking that button will reset the widget's value and will trigger the change event.

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

###  ClientEvents `MultiSelectClientEvents`

Defines the client events handlers.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DataKeyNames `String[]`

Gets or sets an array of data-field names that will be used to populate the MultiSelect's DataItem property which is used to populated the control's template. The field declared in the Columns are added by default.

#### Remarks
Note: The dataItem's properties declared in the template should be with lower case.

###  DataTextField `String`

The field of the data item that provides the text content of the list items. The widget will filter the data source based on this field.

###  DataValueField `String`

The field of the data item that provides the value of the widget.

###  Delay `Double`

Specifies the delay in milliseconds after which the MultiSelect will start filtering dataSource.

###  DropDownHeight `Unit`

The height of the suggestion popup in pixels. The default value is 200 pixels.

###  Enable `Boolean`

If set to false the widget will be disabled and will not allow user input. The widget is enabled by default and allows user input.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

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

###  EnableRippleEffect `Boolean`

Returns true if ripple effect should be added

###  EnforceMinLength `Boolean`

If set to true the widget will not show all items when the text of the search input cleared. By default the widget shows all items when the text of the search input is cleared. Works in conjunction with minLength.

###  Filter `RadMultiSelectFilter`

The filtering method used to determine the suggestions for the current value. Filtration is turned of by default, and can be performed over string values only (either the widget's data has to be an array of strings, or over the field, configured in the dataTextField option). The supported filter values are startswith, endswith and contains.

###  FixedGroupTemplate `String`

The template used to render the fixed header group. By default the widget displays only the value of the current group.

###  FooterTemplate `String`

The template used to render the footer template. The footer template receives the widget itself as a part of the data argument. Use the widget fields directly in the template.

###  GroupTemplate `String`

The template used to render the groups. By default the widget displays only the value of the group.

###  HeaderTemplate `String`

Specifies a static HTML content, which will be rendered as a header of the popup element.

###  HighlightFirst `Boolean`

If set to true the first suggestion will be automatically highlighted.

###  IgnoreCase `Boolean`

If set to false case-sensitive search will be performed to find suggestions. The widget performs case-insensitive searching by default.

###  IsSkinSet `String`

For internal use.

###  ItemTemplate `String`

The template used to render the items in the popup list.

###  MaxSelectedItems `Double`

Defines the limit of the selected items. If set to null widget will not limit number of the selected items.

###  MessagesSettings `Messages`

The text messages displayed in the widget. Use this option to customize or localize the messages.

###  MinLength `Double`

The minimum number of characters the user must type before a search is performed. Set to a higher value if the search could match a lot of items. A zero value means that a request will be made as soon as the user focuses the widget.

###  NoDataTemplate `String`

The template used to render the "no data" template, which will be displayed if no results are found or the underlying data source is empty. The noData template receives the widget itself as a part of the data argument. The template will be evaluated on every widget data bound.

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  Placeholder `String`

The hint displayed by the widget when it is empty. Not set by default.

###  PopupSettings `Popup`

The options that will be used for the popup initialization. For more details about the available options refer to Popup documentation.

###  PostBackUrl `String`

Gets or sets the URL of the page to post to from the current page when a tab
                from the tabstrip is clicked.

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

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  TagMode `RadMultiSelectTagMode`

The mode used to render the selected tags. The available modes are: - multiple - renders a tag for every selected value - single - renders only one tag that shows the number of the selected values

###  TagTemplate `String`

The template used to render the tags.

###  UniqueID `String`

Gets the unique, hierarchically qualified identifier for the server
            control.

###  ValidationGroup `String`

Gets or sets the name of the validation group to which this validation
                control belongs.

#### Remarks
This property works only when CausesValidation
                is set to true.

###  Value `IEnumerable`1`

The value of the widget.

###  ValuePrimitive `Boolean`

Specifies the value binding behavior for the widget. If set to true, the View-Model field will be updated with the selected item value field. If set to false, the View-Model field will be updated with the selected item.

###  Virtual `Boolean`

Enables the virtualization feature of the widget. The configuration can be set on an object, which contains two properties - itemHeight and valueMapper.For detailed information, refer to the article on virtualization.

###  VirtualSettings `Boolean`

Enables the virtualization feature of the widget. The configuration can be set on an object, which contains two properties - itemHeight and valueMapper.For detailed information, refer to the article on virtualization.

###  WebServiceClientDataSource `WebServiceClientDataSource`

Gets the RadClientDataSource instance of the MultiSelect control.

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  DescribeRenderingMode

Should be  used by inheritors

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

Loads the posted content of the list control, if it is different from the last posting.

#### Parameters

#### postDataKey `System.String`

The key identifier for the control, used to index the postCollection.

#### postCollection `System.Collections.Specialized.NameValueCollection`

A  that contains value information indexed by control identifiers.

#### Returns

`System.Boolean` true if the posted content is different from the last posting; otherwise, false.

###  LoadPostData

Executed when post data is loaded from the request

#### Parameters

#### postDataKey `System.String`

#### postCollection `System.Collections.Specialized.NameValueCollection`

#### Returns

`System.Boolean` 

###  OnItemDeselected

Raises the OnItemDeselected event. This allows you to handle the event directly.

#### Returns

`System.Void` 

###  OnItemSelected

Raises the OnItemSelected event. This allows you to handle the event directly.

#### Returns

`System.Void` 

###  OnSelectionChanged

Raises the OnItemSelected event. This allows you to handle the event directly.

#### Returns

`System.Void` 

###  RaisePostDataChangedEvent

Signals the RadMultiSelect control to notify the ASP.NET application that the state of the control has changed.

#### Returns

`System.Void` 

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

