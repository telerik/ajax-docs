---
title: Changes and Backwards Compatibility
page_title: Changes and Backwards Compatibility | UI for ASP.NET AJAX Documentation
description: Changes and Backwards Compatibility
slug: input/changes-and-backwards-compatibility
tags: changes,and,backwards,compatibility
published: True
position: 1
---

# Changes and Backwards Compatibility



## Telerik RadInput for ASP.NET AJAX Q2 2010

Since Q2 2010 all major changes for the controls are listed in the official Release Notes posted [here](http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx)

## Telerik RadInput for ASP.NET AJAX Q1 2010

RadInputManager textboxes will by default have no CSS class if the Skin is set to an empty string (no skin). This ensures interoperability with RadFormDecorator, which only decorates textboxes with no CSS class. When using RadInputManager with custom CSS classes and no Skin, it is recommended to set all state CSS classes for the InputSettings, instead of just one or two - EnabledCssClass, HoveredCssClass, FocusedCssClass, InvalidCssClass, EmptyMessageCssClass, ReadOnlyCssClass, DisabledCssClass (or at least all CSS classes for states that will be used).

In order to decorate RadInputManager textboxes with RadFormDecorator, set Skin="" and EnableEmbeddedBaseStylesheet="false" to the RadInputManager control.

## Telerik RadInput for ASP.NET AJAX Q3 2009

Removed obsolete client API methods from the code:


>caption  

| Old | New |
| ------ | ------ |
|GetValue|get_value|
|SetValue|set_value|
|GetDisplayValue|get_displayValue|
|GetEditValue|get_editValue|
|SetCaretPosition|set_caretPosition|
|GetWrapperElement|get_wrapperElement|
|GetTextBoxValue|get_textBoxValue|
|SetTextBoxValue|set_textBoxValue|
|SetDate|set_selectedDate|
|GetDate|get_selectedDate|
|SetMaxDate|set_maxDate|
|GetMaxDate|get_maxDate|
|SetMinDate|set_minDate|
|GetMinDate|get_minDate|
|GetValueWithLiterals|get_valueWithLiterals|
|GetValueWithPromptAndLiterals|get_valueWithPromptAndLiterals|
|GetPrompt|get_prompt|
|SetCursorPosition|set_cursorPosition|

## Telerik RadInput for ASP.NET AJAX Q2 2009

RadInput for ASP.NET AJAX which is part of the Q2 2009 release is fully backwards compatible with its previous version (Q1 2009).

## Telerik RadInput for ASP.NET AJAX Q1 2009

The RadInput skins has been improved and and the css classes/images used in them were unified with the rest of Telerik controls for ASP.NET AJAX. If you intend to use the old versions of the skins to avoid layout changes/skins updates, you can find the entire set of old skins (prior to the Q1 2009 release) attached to [this forum post](http://www.telerik.com/community/forums/aspnet-ajax/input/radinput-q3-2008-skins-available-for-download.aspx).They have been adapted to be fully compatible with the Q1 2009 release. In order to use them as non embedded skins, you should do the following:

1. copy the corresponding CSS file and images to your website, the exact location depends on your preference;

2. register the CSS file manually with a <link> tag or via an ASP.NET theme;

3. set EnableEmbeddedSkins="false" to the control, which will use the non-embedded skin;

For more information about Telerik controls skinning mechanism and using non-embedded skins, please refer to:

[How skins work]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-skins-work%})

[Skin registration]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skin-registration%})

[Using skins in ASP.NET themes]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/using-skins-in-asp.net-themes%})

[Disabling embedded resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%})

An online demo, which shows how to use various controls with non-embedded skins is available at: [Custom skins demo](http://demos.telerik.com/aspnet-ajax/grid/examples/styles/customskin/defaultcs.aspx)

## Telerik RadInput for ASP.NET AJAX Q3 2008

All CSS classes for RadInput and RadInputManager have been renamed to use Telerik's current CSS naming convention. As a result, all RadInput skins have decreased in size by up to 25%.

All custom skins will stop working, however, migrating is very easy, by following the CSS selector scheme provided below:


>caption  

| Current CSS class name | New CSS class name |
| ------ | ------ |
|radInput_Skin|RadInput_Skin|
|inputCell|riCell|
|imageCell|riBtn|
|gobutton|riBtn a(gobutton is removed)|
|spinImgCell|riSpin|
|spinbutton|riSpin a(spinbutton is removed)|
|up|riUp|
|down|riDown|
|radLabelCss_Skin|riLabel|
|radEmptyMessageCss_Skin|riEmpty|
|radEnabledCss_Skin|riEnabled|
|radHoverCss_Skin|riHover|
|radFocusedCss_Skin|riFocused|
|radReadOnlyCss_Skin|riRead|
|radDisabledCss_Skin|riDisabled|
|radNegativeCss_Skin|riNegative|
|radInvalidCss_Skin|riError|
|riTextBox(new common CSS class for the textbox)||

>caution Please note that the list above shows how the CSS classes have changed, but it is not a direct indication about how the CSS selectors should be constructed - this is a matter of preference and generally, you should follow your current scheme. However, since the new CSS classes do not have a skin suffix, you will need to add the CSS class of the control's wrapper (.RadInput_Skin) to each selector. For example:
>(old selector)
>.radHoverCss_Skin
>{...}
>(new selector)
>.RadInput_Skin .riHover
>{...}
>


**RadInputManager styles:**

RadInputMgr_Skin (common CSS class)

RadInput_Empty_Skin

RadInput_Enabled_Skin

RadInput_Hover_Skin

RadInput_Focused_Skin

RadInput_Disabled_Skin

RadInput_Negative_Skin

RadInput_Error_Skin
