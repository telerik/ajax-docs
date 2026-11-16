---
title: Skin Selectors
page_title: Skin Selectors - RadWizard
description: Check our Web Forms article about Skin Selectors.
slug: wizard/appearance-and-styling/skin-selectors
components: ["wizard"]
tags: skin,selectors
published: True
position: 1
---

# Skin Selectors





## 

The following table lists the CSS selectors and descriptions for **RadWizard** style sheets.


| Class Name | Element | Description |
| ------ | ------ | ------ |
|RadWizard|DIV|Applied to the root element of the Wizard.|
|RadWizard_[Skin] e.g **RadWizard_Silk** |DIV|Applied to the root element of the Wizard with applied skin name.|
|RadWizard_rtl||Applied to the root element of the Wizard with right to left direction.|
|rwzHorizontal|DIV|Applied to the root element of the Wizard with top or bottom navigation bar position.|
|rwzVertical|DIV|Applied to the root element of the Wizard with left or right navigation bar position.|
|rwzBottomBreadCrumb|DIV|Applied to the root element of the Wizard with bottom navigation bar position .|
|rwzRightBreadCrumb|DIV|Applied to the root element of the Wizard with right navigation bar position|
|rwzTopProgressBar|DIV|Applied to the root element of the Wizard with top progress bar position.|
|rwzBottomProgressBar|DIV|Applied to the root element of the Wizard with bottom progress bar position.|
|rwzLeftProgressBar|DIV|Applied to the root element of the Wizard with left progress bar position.|
|rwzRightProgressBar|DIV|Applied to the root element of the Wizard with right progress bar position.|
|rwzBreadCrumb|UL|Applied to the navigation bar container.|
|rwzHidden|UL|Applied to the hidden navigation bar container.|
|rwzLeftImages|UL|Applied to the navigation bar container with images with left position.|
|.rmExpanded|A|Applied to the item's anchor tag when the item is opened.|
|rwzRightImages|UL|Applied to the navigation bar container with images with right position.|
|rwzLI|LI|Applied to the li elements enclosing navigation bar step buttons.|
|rwzHovered|LI|Applied to the hovered li elements enclosing navigation bar step buttons.|
|rwzSelected|LI|Applied to the selected li elements enclosing navigation bar step buttons.|
|rwzDisabled|LI|Applied to the disabled li elements enclosing navigation bar step buttons.|
|rwzFirst|LI|Applied to the first li element enclosing navigation bar step buttons.|
|rwzLast|Li|Applied to the last li element enclosing navigation bar step buttons.|
|rwzLink|A|Applied to anchors representing each navigation bar step button.|
|rwzText|SPAN|Applied to the SPAN elements enclosing text of each navigation bar step button.|
|rwzImage|IMG|Applied to images of navigation bar step buttons when ImgUrl property is set.|
|rwzImage|SPAN|Applied to the SPAN elements which is a container for using sprite image for navigation bar step buttons (when SpriteCssClass is set)|
|rwzCallout|SPAN|Applied to the SPAN elements for displaying callouts of navigation bar step buttons.|
|rwzCallout:before|PSEUDO ELEMENT|Applied to pseudo elements for displaying shadows of callouts of navigation bar step buttons.|
|rwzProgressBar|DIV|Applied to the progress bar element.|
|rwzHidden|DIV|Applied to the hidden progress bar element.|
|rwzProgress|SPAN|Applied to the SPAN elements to visualize progress of passed steps up to the active step.|
|rwzContentWrapper|DIV|Applied to the DIV elements enclosing content container.|
|rwzContent|DIV|Applied to the content scrollable container element.|
|rwzStep|DIV|Applied to the DIV elements representing content of each step.|
|rwzActive|DIV|Applied to the DIV elements representing content of the active step.|
|rwzNav|UL|Applied to the navigation buttons container.|
|rwzHidden|UL|Applied to the hidden navigation buttons container.|
|rwzLI|LI|Applied to the li elements enclosing navigation buttons.|
|rwzRight|LI|Applied to the li elements enclosing navigation buttons with right position.|
|rwzButton|BUTTON|Applied to the navigation buttons.|
|rwzHovered|BUTTON|Applied to the hovered navigation buttons.|
|rwzClicked|BUTTON|Applied to the clicked navigation buttons.|
|rwzDisabled|LI/BUTTON|Applied to the disabled navigation buttons.|
|rwzNext|BUTTON|Applied to the navigation "Next" button.|
|rwzFinish|BUTTON|Applied to the navigation "Finish" button.|
|rwzText|BUTTON|Applied to the SPAN elements enclosing text of navigation buttons.|

## Customize navigation button colors

To give RadWizard navigation buttons one color without naming a skin, target **.rwzButton** inside the **.RadWizard** root element. The following example applies to all RadWizard instances on the page. It does not target RadButton controls or the **.rwzLink** step links.

Add the CSS to your page or application stylesheet. The rules use the same colors for normal, hovered, and pressed buttons. They remove background images that can cover the background color, retain a visible keyboard focus outline, and reduce opacity for disabled buttons.

>caption Apply a shared color to RadWizard navigation buttons

````CSS
html .RadWizard .rwzButton,
html .RadWizard .rwzButton:hover,
html .RadWizard .rwzButton.rwzHovered,
html .RadWizard .rwzButton:active,
html .RadWizard .rwzButton.rwzClicked {
	background-image: none;
	background-color: #1976d2;
	border-color: #1976d2;
	color: #ffffff;
}

html .RadWizard .rwzButton:focus {
	outline: 2px solid #111111;
	outline-offset: 2px;
}

html .RadWizard .rwzButton:disabled,
html .RadWizard .rwzButton.rwzDisabled,
html .RadWizard .rwzDisabled .rwzButton {
	opacity: 0.5;
	cursor: default;
}
````

Replace the color values with your application colors and check text and focus contrast. The example changes appearance only; it does not enable, disable, or change the behavior of a button.

>note The selectors do not depend on a skin name, but this is not a guarantee for every skin, render mode, or product version. Check the rendered markup and computed styles in browser developer tools. If a skin rule still wins, adjust the selector specificity as described in [Modifying Built-in Skins]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/modifying-built-in-skins%}).

Test normal, hover, pressed, keyboard-focus, and disabled states after changing the **Skin** or **RenderMode** property. Confirm that non-Wizard controls keep their original colors.
