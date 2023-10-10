---
title: Telerik.Web.UI.RadDateRangePicker
page_title: Telerik.Web.UI.RadDateRangePicker
description: Telerik.Web.UI.RadDateRangePicker
---

# Telerik.Web.UI.RadDateRangePicker

RadDateRangePicker class
            You can find information on the server API of RadDateRangePicker at https://docs.telerik.com/devtools/aspnet-ajax/controls/datepicker/server-side-programming/RadDateRangePicker-object .

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadDateRangePicker : INamingContainer, IPostBackEventHandler

## Properties

###  Calendar `RadCalendar`

Gets the RadCalendar instance of the datepicker control.

###  ClientEvents `DateRangePickerClientEvents`

Gets or sets an instance of
            DatePickerClientEvents
            class which defines the JavaScript functions (client-side event handlers) that are
            invoked when specific client-side events are raised.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin
            and will be modified in AddAttributesToRender()

###  Culture `CultureInfo`

Gets or sets the culture used by RadDatePickers and RadCalendar inside the RadDateRangePicker to format the date.

###  DbRangeSelectionEndDate `Nullable`1`

Gets or sets the date content of RadDateRangePicker in a database friendly way.

#### Remarks
This property behaves exactly like the SelectedDate property. The only difference
            is that it will not throw an exception if the new value is null or DBNull. Setting a
            null value will internally revert the SelectedDate to the null value, i.e. the input value will be empty.

###  DbRangeSelectionStartDate `Nullable`1`

Gets or sets the date content of RadDateRangePicker in a database friendly way.

#### Remarks
This property behaves exactly like the SelectedDate property. The only difference
            is that it will not throw an exception if the new value is null or DBNull. Setting a
            null value will internally revert the SelectedDate to the null value, i.e. the input value will be empty.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  Enabled `Boolean`

Gets or sets a value indicating whether the Web server control is enabled.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableKeyboardNavigation `Boolean`

Gets or sets the enable client side navigation with keyboard.

###  EnableRippleEffect `Boolean`

Returns true if ripple effect should be added

###  EnableScreenBoundaryDetection `Boolean`

Gets or sets whether the screen boundaries should be taken into consideration
            when the Calendar or TimeView are displayed.

###  EnableShadows `Boolean`

Gets or sets whether popup shadows will appear.

###  EndDatePicker `RadDatePicker`

Gets the end RadDatePicker instance of the daterangepicker control.

###  HiddenInputTitleAttibute `String`

Gets or sets the title attribute for the hidden field.

###  IsEmpty `Boolean`

Used to determine if RadDateRangePicker is empty.

###  IsSkinSet `String`

For internal use.

###  LocalizationPath `String`

Gets or sets a value indicating where RadDateRangePicker will look for its .resx localization file.
            By default this file should be in the App_GlobalResources folder. However, if you cannot put
            the resource file in the default location or .resx files compilation is disabled for some reason
            (e.g. in a DotNetNuke environment), this property should be set to the location of the resource file.

#### Remarks
If specified, the LocalizationPath
            property will allow you to load the grid localization file from any location in the
            web application.

###  MaxDate `DateTime`

Gets or sets the latest valid date for selection.
            Selecting a date later than that will not be allowed.

#### Remarks
This property has a default value of 12/31/2099

###  MinDate `DateTime`

Gets or sets the minimal range date for selection.
            Selecting a date earlier than that will not be allowed.

#### Remarks
This property has a default value of 1/1/1980

###  Overlay `Boolean`

Gets or sets a value indicating whether the picker will create an overlay element to ensure popups are over a flash element or Java applet.

###  PopupDirection `DatePickerPopupDirection`

Gets or sets the direction in which the popup Calendar is displayed,
            with relation to the DatePicker control.

###  RangeSelectionEndDate `Nullable`1`

Gets or sets the date content of RadDateRangePicker.

###  RangeSelectionStartDate `Nullable`1`

Gets or sets the date content of RadDateRangePicker.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RenderMode `RenderMode`

Sets the render mode of the RadDateRangePicker and its child controls

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  SharedCalendar `RadCalendar`

Gets or sets the reference to the calendar that will be used for picking dates.
            This property allows you to configure several datepickers to use a single RadCalendar
            instance.

#### Remarks
This property is not accessible from the VS.NET designer and you will have to
                set it from the code-behind. It should be used when the shared calendar instance is
                in another naming container or is created dynamically at runtime.

###  SharedCalendarID `String`

Gets or sets the ID of the calendar that will be used for picking dates. This
            property allows you to configure several datepickers to use a single RadCalendar
            instance.

#### Remarks
RadDateRangePicker will look for the RadCalendar instance in a way similar to how
                ASP.NET validators work. It will not go beyond the current naming container which
                means that you will not be able to configure a calendar that is inside a control in
                another naming container. You can still share a calendar, but you will have to pass
                a direct object reference via the SharedCalendar
                property.

###  ShowPopupOnFocus `Boolean`

Gets or sets whether the popup Calendar control is displayed when the DateInput textbox is focused.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  SkipMinMaxDateValidationOnServer `Boolean`

Gets or sets if the server-side min/max date validation.

###  StartDatePicker `RadDatePicker`

Gets the start RadDatePicker instance of the daterangepicker control.

###  Width `Unit`

Gets or sets the width of the datepicker in pixels.

###  WrapperTableCaption `String`

Gets or sets the caption for the table which wraps the RadDateRangePicker controls.

#### Remarks
Setting this property to empty string will force Telerik RadDateRangePicker to not render caption tag.

###  WrapperTableSummary `String`

Gets or sets summary attribute for the table which wraps the RadDateRangePicker controls.

#### Remarks
Setting this property to empty string will force Telerik RadDateRangePicker to not render summary tag.

###  ZIndex `Int32`

Gets or sets the z-index style of the control's popups

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  Clear

Clears the selected date of the RadDateRangePicker control and displays a blank date.

#### Returns

`System.Void` 

###  ConfigureDateInput

Override this method to provide any last minute configuration changes.  Make sure you call the base implementation.

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  Focus

Sets input focus to a control.

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

###  System.Web.UI.IPostBackDataHandler.LoadPostData

#### Returns

`System.Boolean` 

