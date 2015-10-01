---
title: Telerik.Web.UI.RadComboBox
page_title: Telerik.Web.UI.RadComboBox
description: Telerik.Web.UI.RadComboBox
---

# Telerik.Web.UI.RadComboBox

#### Remarks
The RadComboBoxcontrol supports the following features:
                bullet Databinding that allows the control to be populated from various
                    datasourcesProgrammatic access to the RadComboBoxobject model
                    which allows to dynamic creation of comboboxes, populate items, set
                    properties.Customizable appearance through built-in or user-defined skins.ItemsEach item has a P:Telerik.Web.UI.RadComboBoxItem.Text Textand a P:Telerik.Web.UI.RadComboBoxItem.Value Valueproperty. 
            		The value of the P:Telerik.Web.UI.RadComboBoxItem.Text Textproperty is displayed in the RadComboBoxcontrol, 
            		while the P:Telerik.Web.UI.RadComboBoxItem.Value Valueproperty is used to store any additional data about the item, 
            		such as data passed to the postback event associated with the item.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl
* Telerik.Web.UI.ControlItemContainer
* Telerik.Web.UI.RadComboBox

## Properties

###  Controls `ControlCollection`

Gets a  object that represents
            the child controls for a specified server control in the UI hierarchy.

###  ClientChanges `IList`1`

Gets a list of all client-side changes (adding an item, removing an item, changing an item's property) which have occurred.

#### Remarks
You can use the ClientChanges property to respond to client-side modifications such as
            		adding a new itemremoving existing itemclearing the children of an item or the control itselfchanging a property of the item
            		The ClientChanges property is available in the first postback (ajax) request after the client-side modifications
            		have taken place. After this moment the property will return empty list.

###  Items `RadComboBoxItemCollection`

Gets a RadComboBoxItemCollection object that contains the items of the current RadComboBox control.

#### Remarks
Use the Items property to access the child items of RadComboBox
            You can add, remove or modify items from the Items collection.

###  EnableItemBindingExpressions `Boolean`

Gets or sets a value indicating whether any databinding expressions specified in the ItemTemplate should be evaluated for
            unbound items (items added inline or programmatically).

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

###  ItemsPerRequest `RadComboBoxItemCollection`

Gets or sets the number of Items the RadComboBox will load per Item request.

#### Remarks
Set this property to -1 to load all Items when EnableAutomaticLoadOnDemand is set to true 
            and disable Virtual Scrolling/Show More Results. The default is -1.

###  MinFilterLength `Int32`

Gets or sets the minimum length of the typed text before the control initiates a request for new Items when EnableLoadOnDemand is True.

###  IsEmpty `Boolean`

Gets a value indicating whether the current instance of the combobox has child
            items.

###  RadComboBoxImagePosition `RadComboBoxImagePosition`

Sets or gets the position (left or right) of the arrow image dropdown.

#### Remarks
By default the image is shown on the right. Left can be used in RTL
            (right-to-left) language scenarios.

###  Text `String`

Gets or sets the text content of the RadComboBox
                control.

#### Remarks
In standard mode, the currently selected text can be accessed using both the
            Text property or RadCombobox.SelectedItem.Text. In
            AJAX callback modes, only the Text property can be used because
            end-users can type or paste text that does not match the text of any item and
            SelectedItem can be null.

###  LoadingMessage `String`

The value of the message that is shown in RadComboBox while AJAX
            callback call is in effect.

#### Remarks
This property can be used for customizing and localizing the text of the loading
            message.

###  WebServiceSettings `NavigationControlWebServiceSettings`

Gets the settings for the web service used to populate items.

#### Remarks
Use the WebServiceSettings property to configure the web
            		service used to populate items on demand.
            		You must specify both
                    Path and
                    Method
            		to fully describe the service.
                
            		In order to use the integrated support, the web service should have the following signature:
            		
            		
            		[ScriptService]
            		public class WebServiceName : WebService
            		{
            			[WebMethod]
            			public RadComboBoxItemData[] WebServiceMethodName(object context)
            			{
            				// We cannot use a dictionary as a parameter, because it is only supported by script services.
            				// The context object should be cast to a dictionary at runtime.
            				IDictionary<string, object> contextDictionary = (IDictionary<string, object>) context;
            				
            				//...
            			}
            		}

###  ItemRequestTimeout `Int32`

Specifies the timeout after each keypress before RadComboBox
            fires an AJAX callback to the ItemsRequested server-side event.

#### Remarks
In miliseconds. ItemRequestTimeout = 500 is equal to half a
            second delay.

###  ZIndex `Int32`

The HTML Z-index of the items dropdown of RadComboBox.Its default value is 6000.

#### Remarks
Can be used when the dropdown is to be shown over content with a specified
            Z-index. If the combobox items dropdown is displayed below the content, set the
            ZIndex property to a value higher than the value of the HTML content
            below.

###  OpenDropDownOnLoad `Boolean`

Gets or sets a value that indicates whether the dropdown of the combobox should
            be opened by default on loadnig the page.

###  EmptyMessage `String`

Gets or sets the empty message.

###  IsCaseSensitive `Boolean`

Gets or sets a value that indicates whether the combobox autocompletion logic is
            case-sensitive or not.

###  ShowMoreResultsBox `Boolean`

Gets or sets a value indicating whether the combobox should display the box for
            requesting additional items

###  MarkFirstMatch `Boolean`

Gets or sets a value indicating whether the combobox should automatically
            autocomplete and highlight the currently typed text to the closest item text
            match.

###  Filter `RadComboBoxFilter`

Gets or sets a value indicating whether the combobox should automatically
            autocomplete and highlight the currently typed text to the all items text
            match.

###  EnableLoadOnDemand `Boolean`

Gets or sets a value indicating whether the combobox should issue a callback to
            the server whenever end-users change the text of the combo (keypress, paste,
            etc).

#### Remarks
In Load On Demand mode, the combobox starts a callback after a specified amount of
                time (see ItemRequestTimeout) and calls the
                server-side ItemsRequested event. Depending on the
                value of the event arguments, you can add new items to the combobox object and the
                items will be propagated to the browser after the request.

###  EnableAutomaticLoadOnDemand `Boolean`

Gets or sets a value indicating whether the combobox should handle the
            items request automatically on the server.

###  EnableItemCaching `Boolean`

Gets or sets a value indicating whether the combobox should cache items loaded on demand or via webservice

###  EnableVirtualScrolling `Boolean`

Gets or sets a value indicating whether the combobox should load items on demand (via callback) 
            during scrolling-down the drop-down area.

###  EnableTextSelection `String`

Gets or sets a value indicating whether the text of combobox should be selected

###  ShowToggleImage `Boolean`

Gets or sets a value indicating whether the dropdown image next to the combobox
            text area should be displayed.

#### Remarks
The dropdown image is located in the Skins folder of the combo - by
            default ~/RadControls/ComboBox/Skins/{SkinName}/DropArrow.gif. You can
            custmoize or modify the image and place it in the respective folder of the skin you are
            using.

###  NoWrap `Boolean`

Gets or sets a value indicating whether the text in a combobox item
                automatically continues on the next line when it reaches the end of the
                dropdown.

###  CloseDropDownOnBlur `Boolean`

Determines whether drop down should be closed on blur

###  AllowCustomText `String`

Determines whether custom text can be entered into the input field of RadComboBox.

###  ChangeTextOnKeyBoardNavigation `String`

Determines whether the text can be entered into the input field of RadComboBox during keyboard navigation

###  ErrorMessage `String`

Determines the custom error message to be shown after the Load On Demand Callback error appears.

###  ShowDropDownOnTextboxClick `String`

Determines whether the dropdown shows when the user clicks in the input field.

###  EnableScreenBoundaryDetection `Boolean`

Determines whether the Screen Boundaries Detection is enabled or not.

###  ExpandDirection `RadComboBoxExpandDirection`

Gets or sets a value indicating the opening direction of RadComboBox dropdown.
                If this property is not set - by default dropdown opens downwards.

###  HighlightTemplatedItems `RadComboBoxItemCollection`

Gets or sets a value indicating whether items defined in the
                ItemTemplate template should be automatically
                highlighted on mouse hover or keyboard navigation.

###  AutoCompleteSeparator `String`

Gets or sets a list of separators: autocomplete logic is reset afer a separator
            is entered and users can autocomplete multiple items.

#### Remarks
You can use several separators at once.

###  AccessibilityMode `Boolean`

Determines whether the noscript tag containing select element to be rendered.

###  SelectedItem `RadComboBoxItem`

Gets the currently selected item in the combobox.

#### Remarks
SelectedItem can be null in load-on-demand or
                AllowCustomText modes. End-users can type any
                text.

###  SelectedIndex `Int32`

Gets the index of the currently selected item in the combobox.

###  OffsetX `Int32`

Gets or sets a value indicating the horizontal offset of the combobox dropdown

#### Remarks
Use the OffsetX property to change the position of the combobox dropdown
                    To customize the vertical offset use the OffsetY
                    property.

###  OffsetY `Int32`

Gets or sets a value indicating the vertical offset of the combobox dropdown.

#### Remarks
Use the OffsetY property to change the position where the combobox dropdown
                will appear.
                    To customize the horizontal offset use the OffsetX
                    property.

###  DropDownWidth `Unit`

Gets or sets the width of the dropdown in pixels.

###  DropDownAutoWidth `RadComboBoxDropDownAutoWidth`

Gets or sets whether to enable/disable the RadComboBox drop down auto width.

###  DropDownCssClass `String`

Gets or sets an additional Cascading Style Sheet (CSS) class applied to the Drop Down.

#### Remarks
By default the visual appearance of the Drop Down is defined in the skin CSS
            file. You can use the DropDownCssClass property to specify a CSS class
            to be applied in addition to the default CSS class.

###  InputCssClass `String`

Gets or sets an additional Cascading Style Sheet (CSS) class applied to the Input.

#### Remarks
By default the visual appearance of the Input is defined in the skin CSS
            file. You can use the InputCssClass property to specify a CSS class
            to be applied in addition to the default CSS class.

###  MaxHeight `Unit`

Gets or sets the max height of the dropdown in pixels.

###  SelectedValue `String`

Gets the value of the currently selected item in the combobox.

###  HeaderTemplate `ITemplate`

Gets or sets the template for displaying header in
            RadcomboBox.

###  FooterTemplate `ITemplate`

Gets or sets the template for displaying footer in
            RadcomboBox.

###  Header `WebControl`

Get a header of 
            RadcomboBox.

###  Footer `WebControl`

Get a footer of 
            RadcomboBox.

###  ItemTemplate `ITemplate`

Gets or sets the template for displaying the items in
            RadcomboBox.

###  ClientItemTemplate `ITemplate`

Gets or sets the template for displaying the items in
            RadcomboBox.

###  MaxLength `Int32`

Gets or sets the maximum number of characters allowed in the combobox.

###  ShowWhileLoading `Boolean`

Indicates whether the combobox will be visible while loading.

###  ExpandAnimation `AnimationSettings`

Gets the settings for the animation played when the dropdown opens.

#### Remarks
Use the ExpandAnimation property to customize the expand
                    animation of RadComboBox. You can specify the
                    Type,
                    Duration and the
                    To disable expand animation effects you should set the
                    Type to
                    AnimationType.None.
                    To customize the collapse animation you can use the
                    CollapseAnimation property.

###  ExpandDelay `Int32`

Gets or sets a value indicating the timeout after which a dropdown starts to
            open.

#### Remarks
Use the ExpandDelay property to delay dropdown opening.
                    To customize the timeout prior to item closing use the
                    CollapseDelay property.

###  CollapseAnimation `AnimationSettings`

Gets the settings for the animation played when an item closes.

#### Remarks
Use the CollapseAnimation property to customize the collapse
                    animation of RadComboBox. You can specify the
                    Type,
                    Duration and the
                    items are collapsed.
                    To disable collapse animation effects you should set the
                    Type to
                    AnimationType.None. To customize the expand animation you can
                    use the CollapseAnimation property.

###  CollapseDelay `Int32`

Gets or sets a value indicating the timeout after which a dropdown starts to
            close.

#### Remarks
Use the CollapseDelay property to delay dropdown closing. To
                cause immediate item closing set this property to 0 (zero).
                    To customize the timeout prior to item closing use the
                    ExpandDelay property.

###  EnableOverlay `Boolean`

Gets or sets a value indicating whether the Overlay element is rendered when supported. True by default.

###  Sort `RadComboBoxSort`

Automatically sorts items alphabetically (based on the Text
            property) in ascending or descending order.

###  SortCaseSensitive `RadComboBoxSort`

Gets/sets whether the sorting will be case-sensitive or not.
            By default is set to true.

###  Label `String`

Gets or sets the label of the control.

###  LabelCssClass `String`

Gets or sets the css class of the label.

###  Culture `CultureInfo`

Gets or sets the the selected culture. Localization strings will be loaded based on this value.

###  Localization `ComboBoxStrings`

Gets the localization.

###  LocalizationPath `ComboBoxStrings`

Gets or sets a value indicating where RadComboBox will look for its .resx localization files.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA.

###  CheckBoxes `Boolean`

Gets or sets a value indicating whether the combobox should display the checkboxes for its items.

###  DataCheckedField `String`

Gets or sets which datasource field will represent the "Checked" state of an item checkbox.

###  EnableCheckAllItemsCheckBox `RadComboBoxItemCollection`

Gets or sets a value indicating whether the combobox should display the checkboxes for its items.

###  CheckedItemsTexts `RadComboBoxItemCollection`

Gets or sets a value indicating whether the combobox should display the checked items texts in case they do not fit in the control input.

###  CheckedItems `RadComboBoxItemCollection`

Gets the currently checked items in the RadComboBox.

###  RenderingMode `RadComboBoxRenderingMode`

Gets or sets a value indicating whether the ComboBox should render as a <select> element.
            When enabled the ComboBox will have its functionality reduced to that of the <select> element.

###  DefaultItem `RadComboBoxDefaultItem`

Gets or set the default item in the RadComboBox.

###  OnClientSelectedIndexChanging `Int32`

The client-side event that is fired when the selected index of the
            	RadComboBox is about to be changed.

#### Remarks
The event handler receives two parameters: the instance of of the RadComboBox
            		client-side object and event argument of the newly selected item.
            	
            		The event can be cancelled - simply call
            		 args.set_cancel(true); 
            		from the event handler and the item will not be changed.

###  OnClientSelectedIndexChanged `Int32`

The client-side event that is fired after the selected index of the RadComboBox has
            been changed.

#### Remarks
The event handler receives two parameters: the instance of of the combobox
            client-side object and event argument with the newly selected item.

###  OnClientItemsRequesting `RadComboBoxItemCollection`

Gets or sets a value indicating the client-side event handler that is called when
            the RadComboBox is about to be populated (for example from web service).

#### Remarks
If specified, the OnClientItemsRequesting client-side event
                handler is called when the RadComboBox is about to be populated.
            	Two parameters are passed to the handler:sender, the menu client object;eventArgs with three properties:
            			get_context(), an user object that will be passed to the web service.set_cancel(), used to cancel the event.This event can be cancelled.

###  OnClientItemsRequested `RadComboBoxItemCollection`

Gets or sets a value indicating the client-side event handler that is called when
            the RadComboBox items were just populated (for example from web service).

#### Remarks
If specified, the OnClientItemsRequested client-side event
                handler is called when the RadComboBox items were just populated.
            	Two parameters are passed to the handler:sender, the menu client object;eventArgs, null for this event.This event cannot be cancelled.

###  OnClientItemsRequestFailed `RadComboBoxItemCollection`

Gets or sets a value indicating the client-side event handler that is called when
            the operation for populating the RadComboBox has failed.

#### Remarks
If specified, the OnClientItemsRequestFailed client-side event
                handler is called when the operation for populating the RadComboBox has failed.
            	Two parameters are passed to the handler:sender, the menu client object;eventArgs with one property:
            			set_cancel(), set to true to suppress the default action (alert message).This event can be cancelled.

###  OnClientItemDataBound `String`

Gets or sets the name of the JavaScript function called when an Item is created during Web Service Load on Demand.

###  OnClientKeyPressing `String`

The client-side event that is fired when the user presses a key inside the
            combobox.

#### Remarks
The event handler receives two parameters:the instance of the combobox client-side object;browser event arguments.You can use the browser event arguments (and the keyCode
                property in particular) to detect which key was pressed and to write your own
                custom logic.

###  OnClientTextChange `String`

The client-side event that is fired when the selected index of RadCombobox has changed.

###  OnClientDropDownOpening `String`

The client-side event that is fired before the dropdown of the combobox is
            opened.

#### Remarks
The event handler receives two parameter: the instance of the combobox
            client-side object and event args. The event can be cancelled - simply set  args.set_cancel to true args.set_cancel(true); 
            from the event handler and the combobox dropdown will not be opened.

###  OnClientDropDownOpened `String`

The client-side event that is fired after the dropdown of the combobox is
            opened.

#### Remarks
The event handler receives two parameter: the instance of the combobox
            client-side object and event args. The event cannot  be cancelled.

###  OnClientFocus `String`

The client-side event that is fired when when the combo gains focus

#### Remarks
The event handler receives two parameter: the instance of the combobox
            client-side object and event args.

###  OnClientBlur `String`

The client-side event that is fired when when the combo loses focus

#### Remarks
The event handler receives two parameter: the instance of the combobox
            client-side object and event args.

###  OnClientDropDownClosing `String`

The client-side event that is fired before the dropdown of the combobox is
            closed.

#### Remarks
The event handler receives two parameter: the instance of the combobox
            client-side object and event args. The event can be cancelled - simply set  args.set_cancel to true args.set_cancel(true); 
            from the event handler and the combobox dropdown will not be closed.

###  OnClientDropDownClosed `String`

The client-side event that is fired after the dropdown of the combobox is
             closed.

#### Remarks
The event handler receives two parameter: the instance of the combobox
             client-side object and event args. The event can not be cancelled

###  OnClientLoad `String`

Gets or sets a value indicating the client-side event handler that is called
            after the RadComboBox client-side object is initialized.

#### Remarks
If specified, the OnClienLoad client-side event handler is
                called after the combobox is fully initialized on the client.A single parameter - the combobox client object - is passed to the
                handler.This event cannot be cancelled.

###  UniqueID `String`

Gets the unique, hierarchically qualified identifier for the server
            control.

###  OnClientItemChecking `String`

The client-side event that is fired when a
            	RadComboBox item is about to be checked.

#### Remarks
The event handler receives two parameters: the instance of of the RadComboBox
            		client-side object and event argument of the newly checked item.
            	
            		The event can be cancelled - simply call
            		 args.set_cancel(true); 
            		from the event handler and the item will not be changed.

###  OnClientItemChecked `String`

The client-side event that is fired after a RadComboBox item has  
            been checked.

#### Remarks
The event handler receives two parameters: the instance of of the combobox
            client-side object and event argument with the newly checked item.

###  OnClientCheckAllChecked `String`

Gets or sets the name of the JavaScript function which handles the checkAllItemChecked client-side event.

#### Remarks
The JavaScript function executed when CheckAll checkbox is checked.

###  OnClientCheckAllChecking `String`

Gets or sets the name of the JavaScript function which handles the checkAllItemChecked client-side event.

#### Remarks
The JavaScript function executed before CheckAll checkbox is checked.

###  OnClientTemplateDataBound `String`

Gets or sets the name of the JavaScript function called when the client template for an item is evaluated

###  ValidationGroup `String`

Gets or sets the name of the validation group to which this validation
                control belongs.

#### Remarks
This property works only when CausesValidation
                is set to true.

###  PostBackUrl `String`

Gets or sets the URL of the page to post to from the current page when a tab
                from the tabstrip is clicked.

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

###  RequiresControlState

Override in an inheritor and return false in order to skip Loading/Saving ControlState.

#### Returns

`System.Boolean` True

###  OnItemCreated

Raises the ItematCreated event.

#### Parameters

#### e `Telerik.Web.UI.RadComboBoxItemEventArgs`

#### Returns

`System.Void` 

###  OnItemDataBound

Raises the ItemDataBound event.

#### Parameters

#### e `Telerik.Web.UI.RadComboBoxItemEventArgs`

#### Returns

`System.Void` 

###  OnItemChecked

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadComboBoxItemEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnSelectedIndexChanged

Raises the SelectedIndexChanged event. This allows you to handle the event directly.

#### Returns

`System.Void` 

###  RaiseTextChandedEvent

Raises the TextChange event. This allows you to handle the event directly.

#### Returns

`System.Void` 

###  OnTextChanged

Raises the TextChanged event. This allows you to handle the event directly.

#### Returns

`System.Void` 

###  OnItemsRequested

Raises the ItemRequestEvent event. This allows you to handle the event directly.

#### Returns

`System.Void` 

###  OnCheckAllCheck

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadComboBoxCheckAllCheckEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  RenderControl

#### Returns

`System.Void` 

###  RenderEndTag

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

#### Returns

`System.Void` 

###  RenderBeginTag

Renders the HTML opening tag of the control to the specified writer.
            This method is used primarily by control developers.

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

A  that represents
            the output stream to render HTML content on the client.

#### Returns

`System.Void` 

###  ClearSelection

Clears out the list selection and sets the Selected property
                of all items to false.

#### Remarks
Use this method to reset the control so that no items are selected.

#### Returns

`System.Void` 

###  InternalClearSelection

Legacy. Do not modify.
            Use only *in* RadComboBox and RadComboBoxItem classes.
            Unselects all items (item.Selected = false) and sets SelectedValue = null.
            It just works as expected in the places where it is used.

#### Returns

`System.Void` 

###  RaisePostDataChangedEvent

Signals the RadComboBox control to notify the ASP.NET application that the state of the control has changed.

#### Returns

`System.Void` 

###  CreateDataSourceSelectArguments

Creates a  object
            that is configured for paging if the underlying data source supports it.

#### Returns

`System.Web.UI.DataSourceSelectArguments` A  initialized for paging if the underlying data source supports it.

###  DataBind

Binds a data source to the invoked RadComboBox and all its child controls.
            Does not bind the control if EnableAutomaticLoadOnDemand is true and the page request is not a callback.

#### Returns

`System.Void` 

###  DescribeClientProperties

#### Returns

`System.Void` 

###  DescribeClientEvents

#### Returns

`System.Void` 

###  FindItemByText

Finds the first RadComboBoxItem with Text that
            matches the given text value.

#### Parameters

#### text `System.String`

The string to search for.

#### Returns

`Telerik.Web.UI.RadComboBoxItem` The first RadComboBoxItem that matches the
            specified text value.

###  FindItemByText

Finds the first RadComboBoxItem with Text that
            matches the given text value.

#### Parameters

#### text `System.String`

The string to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadComboBoxItem` The first RadComboBoxItem that matches the
            specified text value.

###  FindItemByValue

Finds the first RadComboBoxItem with Value that
            matches the given value.

#### Parameters

#### value `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadComboBoxItem` The first RadComboBoxItem that matches the
            specified value.

###  FindItemByValue

Finds the first RadComboBoxItem with Value that
            matches the given value.

#### Parameters

#### value `System.String`

The value to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadComboBoxItem` The first RadComboBoxItem that matches the
            specified value.

###  FindItemIndexByText

Returns the index of the first RadComboBoxItem with
            Text that matches the given text value.

#### Parameters

#### text `System.String`

The string to search for.

#### Returns

`System.Int32` 

###  FindItemIndexByText

Returns the index of the first RadComboBoxItem with
            Text that matches the given text value.

#### Parameters

#### text `System.String`

The string to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`System.Int32` 

###  FindItemIndexByValue

Returns the index of the first RadComboBoxItem with
            Value that matches the given value.

#### Parameters

#### value `System.String`

The value to search for.

#### Returns

`System.Int32` 

###  FindItemIndexByValue

Returns the index of the first RadComboBoxItem with
            Value that matches the given value.

#### Parameters

#### value `System.String`

The value to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`System.Int32` 

###  FindItem

Returns  the first RadComboBoxItem 
            that matches the conditions defined by the specified predicate.
            The predicate should returns a boolean value.

#### Parameters

#### match `System.Predicate{Telerik.Web.UI.RadComboBoxItem}`

The Predicate <> that defines the conditions of the element to search for.

#### Returns

`Telerik.Web.UI.RadComboBoxItem` 

###  LoadContentFile

Loads combobox items from an XML content file.

#### Parameters

#### fileName `System.String`

The name of the XML file.

#### Returns

`System.Void` 

###  SortItems

Sorts the items in the RadComboBox.

#### Returns

`System.Void` 

###  SortItems

Sorts the items in the RadComboBox.

#### Parameters

#### comparer `System.Collections.IComparer`

An object from IComparer interface.

#### Returns

`System.Void` 

###  GetCheckedIndices

Gets an array containing the indices of the currently checked items in the RadComboBox control.

#### Returns

`System.Int32[]` 

###  ClearCheckedItems

Clears the checked items. The  property of all items is set to false.

#### Returns

`System.Void` 

###  AddProperty

Adds the property to the IScriptDescriptor, if it's value is different from the given default.

#### Parameters

#### descriptor `Telerik.Web.UI.IScriptDescriptor`

The descriptor to add the property to.

#### name `System.String`

The property name.

#### value `System.Object`

The current value of the property.

#### defaultValue `System.Object`

The default value.

#### Returns

`System.Void` 

###  GetXml

Gets an XML string representing the state of the control. All child items and their properties are serialized in this
            	string.

#### Remarks
Use the GetXml method to get the XML state of the control. You can cache it and then restore it using
            	the LoadXml method.

#### Returns

`System.String` A String representing the state of the control - child items, properties etc.

###  LoadXml

Loads the control from an XML string.

#### Remarks
Use the LoadXml method to populate the control from an XML string. You can use it along the GetXml
            	method to implement caching.

#### Parameters

#### xml `System.String`

The string representing the XML from which the control will be populated.

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

