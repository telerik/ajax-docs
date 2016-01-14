---
title: Telerik.Web.UI.RadInputControl
page_title: Telerik.Web.UI.RadInputControl
description: Telerik.Web.UI.RadInputControl
---

# Telerik.Web.UI.RadInputControl

The RadInputControl control is the base for all Telrik RadInput controls.
            Telerik.Web.UI.RadNumericTextBox , Telerik.Web.UI.RadMaskedTextBox ,
            Telerik.Web.UI.RadDateInput , Telerik.Web.UI.RadTextBox ,
            Telerik.Web.UI.RadInputManager

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadInputControl : IEditableTextControl, INamingContainer, IPostBackEventHandler, ITextControl

## Properties

###  AccessKey `String`

Gets or sets the access key that allows you to quickly navigate to the
            Web server control.

###  AutoCompleteType `AutoCompleteType`

Gets or sets a value that indicates the AutoComplete behavior of the input control

#### Remarks
To assist with data entry, Microsoft Internet Explorer 5 and later and
                Netscape support a feature called AutoComplete. AutoComplete monitors a RadInput control
                and creates a list of values entered by the user. When the user returns to the
                input at a later time, the list is displayed. Instead of retyping a previously
                entered value, the user can simply select the value from this list. Use the
                AutoCompleteType property to control the behavior of the AutoComplete feature for a
                RadInput control. The System.Web.UI.WebControls.AutoCompleteType enumeration is
                used to represent the values that you can apply to the AutoCompleteType property.
                Not all browsers support the AutoComplete feature. Check with your browser to
                determine compatibility.By default, the AutoCompleteType property for a RadInput control is set to
                AutoCompleteType.None. With this setting, the RadInput control shares the list
                with other RadInput controls with the same ID property across different pages.
                You can also share a list between RadInput controls based on a category, instead
                of an ID property. When you set the AutoCompleteType property to one of the
                category values (such as AutoCompleteType.FirstName, AutoCompleteType.LastName, and
                so on), all RadInput controls with the same category share the same list. You can
                disable the AutoComplete feature for a RadInput control by setting the
                AutoCompleteType property to AutoCompleteType.Disabled.Refer to your browser documentation for details on configuring and enabling
                the AutoComplete feature. For example, to enable the AutoComplete feature in
                Internet Explorer version 5 or later, select Internet Options from the Tools menu,
                and then select the Content tab. Click the AutoComplete button to view and modify
                the various browser options for the AutoComplete feature.This property cannot be set by themes or style sheet themes.

###  AutoPostBack `Boolean`

Gets or sets a value indicating whether an automatic post back to the server
            occurs whenever the user presses the ENTER or the TAB key while in the RadInput
            control.

#### Remarks
Use the AutoPostBack property to specify whether an automatic post back to the
            server will occur whenever the user presses the ENTER or the TAB key while in the
            RadInput control.

###  BackColor `Color`

Gets or sets the background color of the Web server control.

###  BorderColor `Color`

Gets or sets the border color of the Web control.

###  BorderStyle `BorderStyle`

Gets or sets the border style of the Web server control.

###  BorderWidth `Unit`

Gets or sets the border width of the Web server control.

###  ButtonContainer `HtmlGenericControl`

Gets control that contains the buttons of RadInput control

#### Remarks
The ShowButton or ShowSpinButton properties must be set to true

###  ButtonCssClass `String`

Gets or sets the CSS class applied to the  button.

###  ButtonsLightContainer `HtmlGenericControl`

Gets the wrapper control that holds all the buttons of RadInput control

#### Remarks
The span container that holds the spin buttons and the default button

###  ButtonsPosition `InputButtonsPosition`

Gets or sets a value that indicates whether the button should be positioned left or right of the RadInput box.

###  CausesValidation `Boolean`

Gets or sets a value indicating whether validation is performed when the
            RadInput control is set to validate when a postback occurs.

#### Remarks
Use the CausesValidation property to determine whether validation is
                performed on both the client and the server when a RadInput control is set to
                validate when a postback occurs. Page validation determines whether the input
                controls associated with a validation control on the page all pass the validation
                rules specified by the validation control.By default, a RadInput control does not cause page validation when the
                control loses focus. To set the RadInput control to validate when a postback
                occurs, set the CausesValidation property to true and the AutoPostBack property to
                true.When the value of the CausesValidation property is set to true, you can also
                use the ValidationGroup property to specify the name of the validation group for
                which the RadInput control causes validation.This property cannot be set by themes or style sheet themes.

###  ClientEvents `InputClientEvents`

Gets or sets an instance of the Telerik.WebControls.InputClientEvents class which defines 
            the JavaScript functions (client-side event handlers) that are invoked when specific client-side events are raised.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  CssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class rendered by the Web
            server control on the client.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DisabledStyle `InputStyle`

Gets the style properties for disabled RadInput control.

#### Remarks
Use this property to provide a custom style for the disabled RadInput
                control. Common style attributes that can be adjusted include foreground color,
                background color, font, and alignment within the RadInput. Providing a different
                style enhances the appearance of the RadInput control.Disabled style properties in the RadInput control are inherited from one
                style property to another through a hierarchy. For example, if you specify a red
                font for the EnabledStyle property, all other style properties in the RadInput
                control will also have a red font. This allows you to provide a common appearance
                for the control by setting a single style property. You can override the inherited
                style settings for an item style property that is higher in the hierarchy by
                setting its style properties. For example, you can specify a blue font for the
                DisabledStyle property, overriding the red font specified in the EnabledStyle
                property.To specify a custom style, place the <DisabledStyle> tags between the
                opening and closing tags of the RadInput control. You can then list the style
                attributes within the opening <DisabledStyle> tag.

###  Display `Boolean`

Set to false in order to change "display" style of the wrapper span to "none"

###  DisplayText `String`

Gets or sets the display text which allows you to set the display value from the Server to a 
            different value the actual value. Similar to the empty message, but shown even if the input is not empty. 
            This text will be cleared once the user changes the input value.

###  EmptyMessage `String`

Gets or sets a value message shown when the control is empty.

#### Remarks
Shown when the control is empty and loses focus. You can set the empty message
            text through EmptyMessage property.

###  EmptyMessageStyle `String`

Gets the style properties for RadInput when when the control is
                empty.

#### Remarks
Use this property to provide a custom style for the empty message state of
                RadInput control. Common style attributes that can be adjusted include
                foreground color, background color, font, and alignment within the RadInput.
                Providing a different style enhances the appearance of the RadInput
                control.Empty message style properties in the RadInput control are inherited from
                one style property to another through a hierarchy. For example, if you specify a
                red font for the EnabledStyle property, all other style properties in the
                RadInput control will also have a red font. This allows you to provide a common
                appearance for the control by setting a single style property. You can override the
                inherited style settings for an item style property that is higher in the hierarchy
                by setting its style properties. For example, you can specify a blue font for the
                FocusedStyle property, overriding the red font specified in the EnabledStyle
                property.To specify a custom style, place the <EmptyMessageStyle> tags between
                the opening and closing tags of the RadInput control. You can then list the
                style attributes within the opening <EmptyMessageStyle> tag.

###  EnableAjaxSkinRendering `Boolean`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  Enabled `Boolean`

Gets or sets a value indicating whether the Web server control is enabled.

###  EnabledStyle `InputStyle`

Gets the style properties for enabled RadInput control.

#### Remarks
Use this property to provide a custom style for the enabled RadInput
                control. Common style attributes that can be adjusted include foreground color,
                background color, font, and alignment within the RadInput. Providing a different
                style enhances the appearance of the RadInput control.Enabled style properties in the RadInput control are inherited from one
                style property to another through a hierarchy. For example, if you specify a red
                font for the EnabledStyle property, all other style properties in the RadInput
                control will also have a red font. This allows you to provide a common appearance
                for the control by setting a single style property. You can override the inherited
                style settings for an item style property that is higher in the hierarchy by
                setting its style properties. For example, you can specify a blue font for the
                FocusedStyle property, overriding the red font specified in the EnabledStyle
                property.To specify a custom style, place the <EnabledStyle> tags between the
                opening and closing tags of the RadInput control. You can then list the style
                attributes within the opening <EnabledStyle> tag.

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

###  EnableEmbeddedSkins `Boolean`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableOldBoxModel `Boolean`

Gets or sets whether the textbox width should include the textbox paddings and borders. 
            The default value is FALSE, i.e. the textbox will actually be wider than expected.

###  EnableSingleInputRendering `Boolean`

Gets or sets the single input rendering mode which renderes only two main HTML elements 
            on the page, instead of two or three (depending on the specific RadInput) which are 
            rendered in the non-single mode of the  controls.

###  EnableTheming `Boolean`

Gets or sets a value indicating whether themes apply to this control.

###  EnableViewState `Boolean`

Gets or sets a value indicating whether the server control persists
            its view state, and the view state of any child controls it contains, to the
            requesting client.

###  FocusedStyle `InputStyle`

Gets the style properties for focused RadInput control.

#### Remarks
Use this property to provide a custom style for the focused RadInput
                control. Common style attributes that can be adjusted include foreground color,
                background color, font, and alignment within the RadInput. Providing a different
                style enhances the appearance of the RadInput control.Focused style properties in the RadInput control are inherited from one
                style property to another through a hierarchy. For example, if you specify a red
                font for the EnabledStyle property, all other style properties in the RadInput
                control will also have a red font. This allows you to provide a common appearance
                for the control by setting a single style property. You can override the inherited
                style settings for an item style property that is higher in the hierarchy by
                setting its style properties. For example, you can specify a blue font for the
                FocusedStyle property, overriding the red font specified in the EnabledStyle
                property.To specify a custom style, place the <FocusedStyle> tags between the
                opening and closing tags of the RadInput control. You can then list the style
                attributes within the opening <FocusedStyle> tag.

###  Height `Unit`

Gets or sets the height of the Web server control.

###  HoveredStyle `InputStyle`

Gets the style properties for hovered RadInput control.

#### Remarks
Use this property to provide a custom style for the hovered RadInput
                control. Common style attributes that can be adjusted include foreground color,
                background color, font, and alignment within the RadInput. Providing a different
                style enhances the appearance of the RadInput control.Hovered style properties in the RadInput control are inherited from one
                style property to another through a hierarchy. For example, if you specify a red
                font for the EnabledStyle property, all other style properties in the RadInput
                control will also have a red font. This allows you to provide a common appearance
                for the control by setting a single style property. You can override the inherited
                style settings for an item style property that is higher in the hierarchy by
                setting its style properties. For example, you can specify a blue font for the
                HoveredStyle property, overriding the red font specified in the EnabledStyle
                property.To specify a custom style, place the <HoveredStyle> tags between the
                opening and closing tags of the RadInput control. You can then list the style
                attributes within the opening <HoveredStyle> tag.

###  Invalid `Boolean`

Set to true if you like the input to be rendered in invalid state.

###  InvalidStyle `InputStyle`

Gets the style properties for invalid state of RadInput control.

#### Remarks
Use this property to provide a custom style for the invalid state RadInput
                control. Common style attributes that can be adjusted include foreground color,
                background color, font, and alignment within the RadInput. Providing a different
                style enhances the appearance of the RadInput control.Enabled style properties in the RadInput control are inherited from one
                style property to another through a hierarchy. For example, if you specify a red
                font for the EnabledStyle property, all other style properties in the RadInput
                control will also have a red font. This allows you to provide a common appearance
                for the control by setting a single style property. You can override the inherited
                style settings for an item style property that is higher in the hierarchy by
                setting its style properties. For example, you can specify a blue font for the
                InvalidStyle property, overriding the red font specified in the EnabledStyle
                property.To specify a custom style, place the <InvalidStyle> tags between the
                opening and closing tags of the RadInput control. You can then list the style
                attributes within the opening <InvalidStyle> tag.

###  InvalidStyleDuration `Int32`

The InvalidStyleDuration property is used to determine how long (in milliseconds)
            the control will display its invalid style when incorrect data is entered.

###  IsSkinSet `String`

For internal use.

###  Label `String`

Gets or sets the text of the tag rendered along with RadInput
            control.

#### Remarks
If the value of this property has not been set, a tag will not be rendered. Keep
            in mind that accessibility standards require labels for all input controls.

###  LabelCssClass `String`

Gets or sets the CSS class applied to the tag rendered along with RadInput
            control.

#### Remarks
This property is applicable only if the Label property has been set.

###  LabelWidth `String`

Gets or sets width of the Label

###  MaxLength `Int32`

Gets or sets the maximum number of characters allowed in the text box.

#### Remarks
Use the MaxLength property to limit the number of characters that can be entered
            in the RadInput control. This property cannot be set by themes or style sheet
            themes. For more information, see ThemeableAttribute and Introduction to ASP.NET
            Themes.

###  ReadOnly `Boolean`

Gets or sets a value indicating whether the contents of the RadInput control
            can be changed.

#### Remarks
Use the ReadOnly property to specify whether the contents of the RadInput
            control can be changed. Setting this property to true will prevent users from entering
            a value or changing the existing value. Note that the user of the RadInput control
            cannot change this property; only the developer can. The Text value of a RadInput
            control with the ReadOnly property set to true is sent to the server when a postback
            occurs, but the server does no processing for a read-only RadInput. This prevents a
            malicious user from changing a Text value that is read-only. The value of the Text
            property is preserved in the view state between postbacks unless modified by
            server-side code. This property cannot be set by themes or style sheet themes.

###  ReadOnlyStyle `Boolean`

Gets the style applied to control when is read only."),

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

###  SelectionOnFocus `SelectionOnFocus`

Gets or sets the selection on focus options for the RadInput control

#### Remarks
Use this property to provide selection on focus of RadInput control. You
                can set one of the following values:

###  ShouldResetWidthInPixels `Unit`

Gets or sets whether the textbox width should be recalculated and reset in pixels on the client. 
            This prevents textbox expansion in Internet Explorer if the textbox content is too long, but can 
            cause unexpected side effects, depending on the particular scenario. The default value is TRUE.

###  ShowButton `Boolean`

Gets or sets a value indicating whether the button is displayed in the
            RadInput control.

#### Remarks
Use the ShowButton property to specify whether the button is displayed in the
                RadInput control.The contents of the button are controlled by the ButtonTemplate
                property.

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

###  SkinID `String`

Gets or sets the skin to apply to the control.

###  TabIndex `Int16`

Gets or sets the tab index of the Web server control.

###  Text `String`

Gets or sets the text content of the RadInput control.

#### Remarks
Use the Text property to specify or determine the text displayed in the
                RadInput control. To limit the number of characters accepted by the control, set
                the MaxLength property. If you want to prevent the text from being modified, set
                the ReadOnly property.The value of this property, when set, can be saved automatically to a
                resource file by using a designer tool.

###  ToolTip `String`

Gets or sets the text displayed when the mouse pointer hovers over the
            Web server control.

###  ValidationGroup `String`

Gets or sets the group of controls for which the ra.a.d.input control causes
            validation when it posts back to the server.

#### Remarks
Validation groups allow you to assign validation controls on a page to a
                specific category. Each validation group can be validated independently from other
                validation groups on the page. Use the ValidationGroup property to specify the name
                of the validation group for which the RadInput control causes validation when it
                posts back to the server.This property has an effect only when the CausesValidation property is set to
                true. When you specify a value for the ValidationGroup property, only the
                validation controls that are part of the specified group are validated when the
                RadInput control posts back to the server. If you do not specify a value for
                this property and the CausesValidation property is set to true, all validation
                controls on the page that are not assigned to a validation group are validated when
                the control posts back to the server.This property cannot be set by themes or style sheet themes.

###  ValidationText `String`

Gets the validation text which is used when validation of the  fails.

###  Visible `Boolean`

Gets or sets a value that indicates whether a server control is rendered
            as UI on the page.

###  Width `Unit`

Gets or sets the width of the Web server control.

###  WrapperCssClass `String`

Gets or sets the wrapper CSS class which holds the HTML input element.

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  Focus

Sets input focus to a RadInput.

#### Remarks
Use the Focus method to set the initial focus of the Web page to the
                RadInput. The page will be opened in the browser with the control
                selected.The Focus method causes a call to the page focus script to be emitted on the
                rendered page. If the page does not contain a control with an HTML ID attribute
                that matches the control that the Focus method was invoked on, then page focus will
                not be set. An example where this can occur is when you set the focus on a user
                control instead of setting the focus on a child control of the user control. In
                this scenario, you can use the FindControl method to find the child control of the
                user control and invoke its Focus method.

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

