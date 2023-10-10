---
title: Telerik.Web.UI.RadSchedulerRecurrenceEditor
page_title: Telerik.Web.UI.RadSchedulerRecurrenceEditor
description: Telerik.Web.UI.RadSchedulerRecurrenceEditor
---

# Telerik.Web.UI.RadSchedulerRecurrenceEditor

This Class defines RadSchedulerRecurrenceEditor control that inherits RecurrenceEditor and INamingContainer.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RecurrenceEditor : IPostBackEventHandler
* Telerik.Web.UI.RadSchedulerRecurrenceEditor : INamingContainer

## Properties

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin
            and will be modified in AddAttributesToRender()

###  Culture `CultureInfo`

Gets or sets the selected culture. Localization strings will be loaded based on this value.

###  DateFormat `String`

Gets or sets the date format string.

#### Remarks
The default value of this property is inferred from the
            Thread.CurrentThread.CurrentCulture.DateTimeFormat.ShortDatePattern
            property.

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

###  EndDate `DateTime`

The end date of the first occurrence.

#### Remarks
The StartDate and EndDate must be set
            in order to obtain the recurrence rule.

###  FirstDayOfWeek `DayOfWeek`

Gets or sets the first day of the week.

#### Remarks
This property is used when building Monthly and Yearly recurrence rules.

###  IsSkinSet `String`

For internal use.

###  Localization `IRecurrenceEditorStrings`

Gets the localization.

###  Localization `IRecurrenceEditorStrings`

Gets the localization.

###  LocalizationPath `IRecurrenceEditorStrings`

Gets or sets a value indicating where RadSchedulerRecurrenceEditor will look for its .resx localization files.

###  RecurrenceRule `RecurrenceRule`

The currently selected recurrence rule.

###  RecurrenceRuleText `RecurrenceRule`

The currently selected recurrence rule (as text).

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

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
                This property allows you to use an existing RadCalendar instance for the
                RecurrenceEditor date picker.

###  SharedCalendarID `RadCalendar`

Gets or sets the ID of the calendar that will be used for picking dates.
                This property allows you to use an existing RadCalendar instance for the
                RecurrenceEditor date picker.

#### Remarks
The RecurrenceEditor will look for the RadCalendar instance in a way similar to how
                ASP.NET validators work. It will not go beyond the current naming container which
                means that you will not be able to configure a calendar that is inside a control in
                another naming container. You can still share a calendar, but you will have to pass
                a direct object reference via the SharedCalendar
                property.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  StartDate `DateTime`

The start date of the first occurrence.

#### Remarks
The StartDate and EndDate must be set
            in order to obtain the recurrence rule.

###  ZIndex `Int32`

Gets or sets a value indicating the base z-index of the recurrence editor.

#### Remarks
The z-index value is used to position any detachable elements (like RadCalendar pop-ups)
            over other elements in the form.

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

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

###  RaisePostBackEvent

When implemented by a class, enables a server control to process an
            event raised when a form is posted to the server.

#### Parameters

#### eventArgument `System.String`

A  that represents an
            optional event argument to be passed to the event handler.

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

###  ResetLayout

Call when the RecurrenceEditor internal controls should be reinitialized.
            A good example is when placing the RecurrenceEditor in external edit/insert form.
            In order to clean the last selected values (from the previous display of the form)
            you can call the ResetLayout in the FormCreating event of RadScheduler
            and then on FormCreated event to populate the RecurrenceEditor with a RecurrenceRule (if edit).

#### Returns

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

