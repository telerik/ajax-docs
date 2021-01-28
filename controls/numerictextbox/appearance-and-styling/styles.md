---
title: Styles
page_title: Styles - RadNumericTextBox
description: Check our Web Forms article about Styles.
slug: numerictextbox/appearance-and-styling/styles
tags: styles
published: True
position: 1
---

# Styles


All four types of **RadInput** controls come with a set of predefined styles, which are specified by the styles in the current [skin]({%slug numerictextbox/appearance-and-styling/skins%}). If you have assigned a value to the **Skin** property, you can use a variety of style properties to customize the way the input control changes its appearance depending on its state.

The following table lists the various style properties:


>caption  

| Property | Default CSS class | Description |
| ------ | ------ | ------ |
|EnabledStyle|riEnabled|The style for the enabled input control. **Note**: The definitions from the **EnabledStyle** property are inherited from one style property to another in a hierarchy. Therefore, the appearance settings specified by the **EnableStyle** property will be propagated for the rest of the styles. For example, if you specify a red font for the **EnabledStyle** property, all other style properties in **RadInput** (other than **DisabledStyle** ) will also have a red font.|
|DisabledStyle|riDisabled|The style that is applied for the disabled input control. **Note**: Internet Explorer does not allow changing the ForeColor of disabled elements.|
|EmptyMessageStyle|riEmpty|The style when the value is not set and the input control does not have focus.|
|FocusedStyle|riFocused|The style when the input control has focus.|
|HoveredStyle|riHover|The style when the mouse hovers over the input control.|
|InvalidStyle|riError|The style when the value of the input control is invalid.|
|NegativeStyle|riNegative|The style when the value of the input control is negative. **Note**: The **NegativeStyle** property is only available on **RadNumericTextBox** controls.|

The various Style properties are of type Telerik.Web.UI.InputStyle. This type has the following sub-properties:

* BackColor

* BorderColor

* BorderWidth

* CssClass

* Font

* ForeColor

* Height

* HorizontalAlign

* LetterSpacing

* PaddingBottom

* PaddingLeft

* PaddingRight

* PaddingTop

* Width

Each sub-property is an attribute of the HTML element for the rendered input control. Setting any of the sub-properties copies the value you set onto the style to the HTML element, overwriting any existing style elements defined by the used skin.

# See Also

 * [HTML Output and CSS Styling]({%slug numerictextbox/appearance-and-styling/html-output-and-css-styling%})
