---
title: Telerik.Web.UI.RadTimeView
page_title: Telerik.Web.UI.RadTimeView
description: Telerik.Web.UI.RadTimeView
---

# Telerik.Web.UI.RadTimeView

The RadTimeView control works only as a popup embedded in a Telerik.Web.UI.RadTimePicker or Telerik.Web.UI.RadDateTimePicker control. 
            The main reason to add a RadTimeView control from the toolbox to the Web page is when using it as a shared popup control.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl
* Telerik.Web.UI.RadTimeView

## Properties

###  DataList `DataList`

Gets a data bound list control that displays items using templates.

###  RenderDirection `RepeatDirection`

Gets or sets DataList ReapeatDirection

###  CustomTimeValues `Object`

Gets or sets the custom time values to be displayed in the time picker
            
            Allowed objects are: array of strings, array of DateTime objects, array of TimeSpan values;
            Allowed values should fall between 00:00:00 and 23:59:59 to specify the time of the day

###  UseClientTimeOffset `Boolean`

Gets or sets a value indicating whether the TimeView should use client time zone offset for the values bound to a custom collection.

#### Remarks
Setting this property to true will make the timeview to convert its values from UTC to the current user time zone.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  AlternatingTimeTemplate `ITemplate`

Gets or sets the template for alternating time cells in the RadTimeView.

#### Remarks
Use the AlternatingTimeTemplate property to control the
                contents of alternating items in the RadTimeView control. The
                appearance of alternating time cells is controlled by the
                AlternatingTimeStyle property.To specify a template for the alternating time cells, place the
                <AlternatingTimeTemplate> tags between the opening and closing tags of the
                RadTimeView control. You can then list the contents of the
                template between the opening and closing <AlternatingTimeTemplate>
                tags.

###  FooterTemplate `ITemplate`

Gets or sets the template for the footer section of the
            RadTimeView control.

#### Remarks
To specify a template for the footer section, place the
                <FooterTemplate> tags between the opening and closing tags of the
                RadTimeView control. You can then list the contents of the
                template between the opening and closing <FooterTemplate> tags.The ShowFooter property must be set to true for this property to be
                visible.

###  HeaderTemplate `ITemplate`

Gets or sets the template for the heading section of the RadTimeView
            control.

#### Remarks
Use the HeaderTemplate property to control the contents of
                the heading section. The appearance of the header section is controlled by the
                HeaderStyle property.To specify a template for the heading section, place the
                <HeadingTemplate> tags between the opening and closing tags of the
                RadTimeView control. You can then list the contents of the
                template between the opening and closing <HeadingTemplate> tags.The ShowHeader property must be set to true for this property to be
                visible.

###  TimeTemplate `ITemplate`

Gets or sets the template for the heading section of the RadTimeView
            control.

#### Remarks
Use the HeaderTemplate property to control the contents of
                the heading section. The appearance of the header section is controlled by the
                HeaderStyle property.To specify a template for the heading section, place the
                <HeadingTemplate> tags between the opening and closing tags of the
                RadTimeView control. You can then list the contents of the
                template between the opening and closing <HeadingTemplate> tags.The ShowHeader property must be set to true for this property to be
                visible.

###  ForeColor `Color`

Gets or sets the foreground color (typically the color of the text) of the
            RadTimeView control.

#### Remarks
Use the ForeColor property to specify the foreground color
                of the RadTimeView control. The foreground color is usually the
                color of the text. This property will render on browsers earlier than Microsoft
                Internet Explorer version 4.Note: On browsers that do not support styles, this property is rendered as a
                FONT element.

###  BackColor `Color`

Gets or sets the background color of the RadTimeView
            control.

#### Remarks
Use the BackColor property to specify the background color
                of the RadTimeView control. This property is set using a
                System.Drawing.Color object.In general, only controls that render as a <table> tag can display a
                background color in HTML 3.2, whereas almost any control can in HTML 4.0.For controls that render as a <span> tag (including Label, all
                validation controls, and list controls with their RepeatLayout property set to
                RepeatLayout.Flow), this property will work in Microsoft Internet Explorer version
                5 or later, but not for Microsoft Internet Explorer version 4.

###  BorderColor `Color`

Gets or sets the border color of the RadTimeView control.

#### Remarks
Use the BorderColor property to specify the border color of the
            RadTimeView control. This property is set using a System.Drawing.Color
            object.

###  BorderStyle `BorderStyle`

Gets or sets the border style of the RadTimeView control.

#### Remarks
Use the BorderStyle property to specify the border style for
                the RadTimeView control. This property is set using one of the
                BorderStyle enumeration values. The following table lists the
                possible values.Border StyleDescriptionNotSetThe border style is not set.NoneNo borderDottedA dotted line border.DashedA dashed line border.SolidA solid line border.DoubleA solid double line border.GrooveA grooved border for a sunken border
                            appearance.RidgeA ridged border for a raised border
                            appearance.InsetAn inset border for a sunken control
                            appearance.Note: This property will not render on some browsers.

###  BorderWidth `Unit`

Gets or sets the border width of the RadTimeView control.

#### Remarks
Use the BorderWidth property to specify a border width for a
                control.This property is set with a Unit object. If the Value property of the Unit
                contains a negative number, an exception is thrown.

###  CssClass `String`

Gets or sets the cascading style sheet (CSS) class rendered by the
            RadTimeView on the client.

#### Remarks
Use the CssClass property to specify the CSS class to render on the client
                for the RadTimeView control. This property will render on browsers
                for all controls. It will always be rendered as the class attribute, regardless of
                the browser.For example, suppose you have the following RadTimeVeiw
                control declaration:<asp:TextBox id="TextBox1" ForeColor="Red" CssClass="class1" />The following HTML is rendered on the client for the previous
                RadTimeView control declaration:

###  Height `Unit`

Gets or sets the height of the RadTimeView control.

#### Remarks
Use the Height property to specify the height of the
                RadTimeView control.

###  Width `Unit`

Gets or sets the width of the RadTimeView control.

#### Remarks
Use the Width property to specify the width of the
            RadTimeView control.

###  Font `FontInfo`

Gets the font properties associated with the RadTimeView
            control.

#### Remarks
Use the Font property to specify the font properties of the
            RadTimeView control. This property includes subproperties that can be
            accessed declaratively in the form of Property-Subproperty (for example Font-Bold) or
            programmatically in the form of Property.Subproperty (for example Font.Bold).

###  AccessKey `String`

Gets or sets the access key.

###  Enabled `Boolean`

Gets or sets a value indicating whether the Web server control is enabled.

###  EnableTheming `Boolean`

Gets or sets a value indicating whether themes apply to this control.

###  SkinID `String`

Gets or sets the skin to apply to the control.

###  EnableViewState `Boolean`

Gets or sets a value indicating whether the server control persists
            its view state, and the view state of any child controls it contains, to the
            requesting client.

###  TabIndex `Int16`

Gets or sets the tab index of the Web server control.

###  ToolTip `String`

Gets or sets the text displayed when the mouse pointer hovers over the
            Web server control.

###  Visible `Boolean`

Gets or sets a value that indicates whether a server control is rendered
            as UI on the page.

###  ImagesPath `String`

Gets or sets default path for the grid images when EnableEmbeddedSkins is set to false.

###  GridLines `GridLines`

Gets or sets a value that specifies whether the border between the cells of the
            RadTimeView control is displayed.

###  HeaderText `String`

Gets or sets the header associated with the RadTimeView
            control.

###  CaptionAlign `TableCaptionAlign`

Gets or sets the alignment of the associated caption.

###  UseAccessibleHeader `Boolean`

Indicates that the control should use accessible header cells in its containing
            table control.

###  Summary `String`

Gets or sets the summary attribute for the RadTimeView.

#### Remarks
Setting this property to empty string will force Telerik RadTimeView to not render summary attribute.

###  Caption `String`

Gets or sets the caption for the table RadTimeView.

#### Remarks
Setting this property to empty string will force Telerik RadTimeView to not render caption tag.

###  OnClientTimeSelected `String`

Occurs on the client when an time sell in the RadTimeView
            control is selected.

###  OnClientTimeSelecting `String`

Occurs on the client when a time cell in RadTimeView is about to be selected

###  HorizontalAlign `HorizontalAlign`

Gets or sets the horizontal alignment of the RadTimeView
            control.

#### Remarks
Use the HorizontalAlign property to specify the horizontal
            alignment of the data list control within its container. This property is set with one
            of the HorizontalAlign enumeration values.

###  CellPadding `Int32`

Gets or sets the amount of space between the contents of the cell and the cell's
            border.

#### Remarks
Use the CellPadding property to control the spacing between
                the contents of a cell and the cell's border. The padding amount specified is added
                to all four sides of a cell.All cells in the same column of a data listing control share the same cell
                width. Therefore, if the content of one cell is longer than the content of other
                cells in the same column, the padding amount is applied to the widest cell. All
                other cells in the column are also set with this cell width.Similarly, all cells in the same row share the same height. The padding
                amount is applied to the height of the tallest cell in the row. All other cells in
                the same row are set with this cell height. Individual cell sizes cannot be
                specified.The value of this property is stored in view state.

###  CellSpacing `Int32`

Gets or sets the distance between time cells of the
            RadTimeView.

#### Remarks
Use the CellSpacing property to control the spacing between
                adjacent cells in a data listing control. This spacing is applied both vertically
                and horizontally. The cell spacing is uniform for the entire data list control.
                Individual cell spacing between each row or column cannot be specified.The value of this property is stored in view state.

###  Columns `Int32`

Gets or sets the number of columns to display in the RadTimeView
            control.

#### Remarks
Use this property to specify the number of columns that display items in the
            RadTimeView control. For example, if you set this property to 5, the
            RadTimeView control displays its items in five columns.

###  ShowFooter `Boolean`

Gets or sets a value indicating whether the footer section is displayed in
                the RadTimeView control.

#### Remarks
Use the ShowFooter property to specify whether the footer
                section is displayed in the RadTimeView control.You can control the appearance of the footer section by setting the
                FooterStyle property. The contents of the footer section are
                controlled by the FooterTemplate property.

###  ShowHeader `Boolean`

Gets or sets a value indicating whether the header section is displayed in the
            RadTimeView control.

#### Remarks
Use the ShowHeader property to specify whether the header
                section is displayed in the RadTimeView control.You can control appearance of the header section by setting the
                HeaderStyle property. The contents of the header section are
                controlled by the HeaderTemplate property.

###  StartTime `TimeSpan`

Gets or sets the start time of the control.

###  Culture `CultureInfo`

Provides information about a specific culture. The information includes the names
            for the culture, the writing system, the calendar used, and formatting for the
            times.

#### Remarks
The CultureInfo class renders culture-specific information,
                such as the associated language, sublanguage, country/region, calendar, and
                cultural conventions. This class also provides access to culture-specific instances
                of DateTimeFormatInfo, NumberFormatInfo, CompareInfo, and TextInfo. These objects
                contain the information required for culture-specific operations, such as casing,
                formatting dates and numbers, and comparing strings.

###  EndTime `TimeSpan`

ite

###  Interval `TimeSpan`

Gets or sets the interval between StartTime and
            EndTime

###  TimeFormat `String`

Gets or sets the format of the time.

#### Remarks
A custom Time format string consists of one or more custom Time format
                specifiers, and that format string defines the text representation of a DateTime
                object that is produced by a formatting operation.Custom Time format specifiers.hRepresents the hour as a number from 1 through 12, that
                            is, the hour as represented by a 12-hour clock that counts the whole
                            hours since midnight or noon. Consequently, a particular hour after
                            midnight is indistinguishable from the same hour after noon. The hour
                            is not rounded, and a single-digit hour is formatted without a leading
                            zero. For example, given a time of 5:43, this format specifier displays
                            "5". For more information about using a single format specifier, see
                            Using Single Custom Format Specifiers.hh, hh (plus any number of additional "h" specifiers)Represents the hour as a number from 01 through 12, that
                            is, the hour as represented by a 12-hour clock that counts the whole
                            hours since midnight or noon. Consequently, a particular hour after
                            midnight is indistinguishable from the same hour after noon. The hour
                            is not rounded, and a single-digit hour is formatted with a leading
                            zero.HRepresents the hour as a number from 0 through 23, that
                            is, the hour as represented by a zero-based 24-hour clock that counts
                            the hours since midnight. A single-digit hour is formatted without a
                            leading zero.HH, HH (plus any number of additional "H" specifiers)Represents the hour as a number from 00 through 23, that
                            is, the hour as represented by a zero-based 24-hour clock that counts
                            the hours since midnight. A single-digit hour is formatted with a
                            leading zero.mRepresents the minute as a number from 0 through 59. The
                            minute represents whole minutes passed since the last hour. A
                            single-digit minute is formatted without a leading zero.mm, mm (plus any number of additional "m" specifiers)Represents the minute as a number from 00 through 59. The
                            minute represents whole minutes passed since the last hour. A
                            single-digit minute is formatted with a leading zero.sRepresents the seconds as a number from 0 through 59. The
                            second represents whole seconds passed since the last minute. A
                            single-digit second is formatted without a leading zero.ss, ss (plus any number of additional "s" specifiers)Represents the seconds as a number from 00 through 59. The
                            second represents whole seconds passed since the last minute. A
                            single-digit second is formatted with a leading zero.tRepresents the first character of the A.M./P.M. designator
                            defined in the current
                            System.Globalization.DateTimeFormatInfo.AMDesignator or
                            System.Globalization.DateTimeFormatInfo.PMDesignator property. The A.M.
                            designator is used if the hour in the time being formatted is less than
                            12; otherwise, the P.M. designator is used.tt, tt (plus any number of additional "t" specifiers)Represents the A.M./P.M. designator as defined in the
                            current System.Globalization.DateTimeFormatInfo.AMDesignator or
                            System.Globalization.DateTimeFormatInfo.PMDesignator property. The A.M.
                            designator is used if the hour in the time being formatted is less than
                            12; otherwise, the P.M. designator is used.Standard Time Format SpecifierstShortTimePattern - For example, the custom format string
                            for the invariant culture is "HH:mm".TLongTimePattern - For example, the custom format string
                            for the invariant culture is "HH:mm:ss".

###  TimeStyle `TableItemStyle`

Gets the style properties for the time cells in the RadTimeView
            control.

#### Remarks
Use this property to provide a custom style for the items of the
                RadTimeView control. Common style attributes that can be adjusted
                include foreground color, background color, font, and content alignment within the
                cell. Providing a different style enhances the appearance of the
                RadTimeView control.If you specify a red font for the TimeStyle property, all
                other item style properties in the RadTimeView control will also
                have a red font. This allows you to provide a common appearance for the control by
                setting a single item style property. You can override the inherited style settings
                for an item style property that is higher in the hierarchy by setting its style
                properties. For example, you can specify a blue font for the
                AlternatingTimeStyle property, overriding the red font specified
                in the TimeStyle property.To specify a custom style for the items of the RadTimeView
                control, place the <TimeStyle> tags between the opening and closing tags of
                the RadTimeView control. You can then list the style attributes
                within the opening <TimeStyle> tag.You can also use the AlternatingTimeStyle property to provide a different
                appearance for the alternating items in the RadTimeView
                control.

###  TimeOverStyle `TableItemStyle`

Gets the style applied to items

###  AlternatingTimeStyle `TableItemStyle`

Gets the style properties for alternating time sells in the
            RadTimeView control.

#### Remarks
Use the AlternatingTimeStyle property to provide a custom
                style for the alternating time cells in the RadTimeView control.
                Common style attributes that can be adjusted include foreground color, background
                color, font, and content alignment within the cell. Providing a different style
                enhances the appearance of the RadTimeView control.If you specify a red font for the TimeStyle property, all
                other item style properties in the RadTimeView control will also
                have a red font. This allows you to provide a common appearance for the control by
                setting a single item style property. You can override the inherited style settings
                for an item style property that is higher in the hierarchy by setting its style
                properties. For example, you can specify a blue font for the
                AlternatingTimeStyle property, overriding the red font specified
                in the TimeStyle property.To specify a custom style for the alternating items, place the
                <AlternatingTimeStyle> tags between the opening and closing tags of the
                RadTimeView control. You can then list the style attributes within
                the opening <AlternatingTimeStyle> tag.

###  HeaderStyle `TableItemStyle`

Gets the style properties for the heading section of the
            RadTimeView control.

#### Remarks
Use this property to provide a custom style for the heading of the
                RadTimeView control. Common style attributes that can be adjusted
                include foreground color, background color, font, and content alignment within the
                cell. Providing a different style enhances the appearance of the
                RadTimeView control.To specify a custom style for the heading section, place the
                <HeaderStyle> tags between the opening and closing tags of the
                RadTimeView control. You can then list the style attributes within
                the opening <HeaderStyle> tag.Note: The ShowHeader property must be set
                to true for this property to be visible.

###  FooterStyle `TableItemStyle`

Gets the style properties for the footer section of the
            RadTimeView control.

#### Remarks
Use this property to provide a custom style for the footer section of the
                radTimeView control. Common style attributes that can be adjusted
                include foreground color, background color, font, and content alignment within the
                cell. Providing a different style enhances the appearance of the
                RadTimeView control.The FooterStyle property of the RadTimeView
                control inherits the style settings of the ControlStyle property. For example, if
                you specify a red font for the ControlStyle property, the
                FooterStyle property will also have a red font. This allows you to
                provide a common appearance for the control by setting a single style property. You
                can override the inherited style settings by setting the
                FooterStyle property. For example, you can specify a blue font for
                the FooterStyle property, overriding the red font specified in the
                ControlStyle property.To specify a custom style for the footer section, place the
                <FooterStyle> tags between the opening and closing tags of the
                RadTimeView control. You can then list the style attributes within
                the opening <FooterStyle> tag.Note: The ShowFooter property must be set
                to true for this property to be visible.

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
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ScriptManager `ScriptManager`

###  RadScriptManager `ScriptManager`

## Methods

###  DataBind

Binds a data source to the invoked server control and all its child
            controls.

#### Returns

`System.Void` 

###  LoadViewState

Restores view-state information from a previous page request that was saved by the SaveViewState method.

#### Parameters

#### savedState `System.Object`

The saved view state.

#### Returns

`System.Void` 

###  SaveViewState

Saves any server control view-state changes that have occurred since the time the page was posted back to the server.

#### Returns

`System.Object` The saved view state.

###  GetAttributes

Returns a collection of custom attributes for this instance of a component.

#### Returns

`System.ComponentModel.AttributeCollection` An  containing
            the attributes for this object.

###  GetClassName

Returns the class name of this instance of a component.

#### Returns

`System.String` The class name of the object, or null if the class does not have a name.

###  GetComponentName

Returns the name of this instance of a component.

#### Returns

`System.String` The name of the object, or null if the object does not have a name.

###  GetConverter

Returns a type converter for this instance of a component.

#### Returns

`System.ComponentModel.TypeConverter` A  that is the converter
            for this object, or null if there is no 
            for this object.

###  GetDefaultEvent

Returns the default event for this instance of a component.

#### Returns

`System.ComponentModel.EventDescriptor` An  that represents
            the default event for this object, or null if this object does not have events.

###  GetDefaultProperty

Returns the default property for this instance of a component.

#### Returns

`System.ComponentModel.PropertyDescriptor` A  that represents
            the default property for this object, or null if this object does not have properties.

###  GetEditor

Returns an editor of the specified type for this instance of a component.

#### Parameters

#### editorBaseType `System.Type`

A  that represents the
            editor for this object.

#### Returns

`System.Object` An  of the specified type that is the editor
            for this object, or null if the editor cannot be found.

###  GetEvents

Returns the events for this instance of a component.

#### Returns

`System.ComponentModel.EventDescriptorCollection` An  that
            represents the events for this component instance.

###  GetEvents

Returns the events for this instance of a component using the specified
            attribute array as a filter.

#### Parameters

#### attributes `System.Attribute`

An array of type  that
            is used as a filter.

#### Returns

`System.ComponentModel.EventDescriptorCollection` An  that
            represents the filtered events for this component instance.

###  GetProperties

Returns the properties for this instance of a component.

#### Returns

`System.ComponentModel.PropertyDescriptorCollection` A 
            that represents the properties for this component instance.

###  GetProperties

Returns the properties for this instance of a component using the attribute
            array as a filter.

#### Parameters

#### attributes `System.Attribute`

An array of type  that
            is used as a filter.

#### Returns

`System.ComponentModel.PropertyDescriptorCollection` A 
            that represents the filtered properties for this component instance.

###  GetPropertyOwner

Returns an object that contains the property described by the specified
            property descriptor.

#### Parameters

#### pd `System.ComponentModel.PropertyDescriptor`

A  that
            represents the property whose owner is to be found.

#### Returns

`System.Object` An  that represents the owner of the specified
            property.

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

###  DescribeProperty

#### Returns

`System.Void` 

###  DescribeIDReferenceProperty

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

