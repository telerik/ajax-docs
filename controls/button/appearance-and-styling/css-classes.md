---
title: CSS Classes
page_title: CSS Classes - RadButton
description: Check our Web Forms article about CSS Classes.
slug: button/appearance-and-styling/css-classes
tags: css,classes
published: True
position: 3
---

# CSS Classes

## Common Styles

| CSS Class | Description |
| ------ | ------ |
|.RadButton|RadButton main wrapping element|
|.RadButton img|Styles img inserted into RadButton not to have visible borders|
|.rbSkinnedButton|Styles span element that wraps the button|
|.rbDecorated|Styles RadButton input element|
|.rbSkinnedButton:hover|Styles span element that wraps the button hover state|
|.rbSkinnedButton:hover .rbDecorated|Styles RadButton input element hover state|
|.rbSkinnedButton:focus|Styles span element that wraps the button focus state|
|.rbSkinnedButton:active|Styles span element that wraps the button active state|
|.rbSkinnedButton:focus .rbDecorated|Styles RadButton input element focus state|
|.rbSkinnedButton:active .rbDecorated|Styles RadButton input element active state|
|.RadButton input.rbDecorated:focus, .RadButton input.rbDecorated::-moz-focus-inner|Remove default focus style|
|.rbPrimary|Styles extra space to the left side of the input when Primary Icon is added|
|.rbPrimaryIconOnly|Styles button when only primary icon is added, without any text|
|.rbSecondary|Styles extra space to the right side of the input when Secondary Icon is added|
|.rbPrimarySecondaryIcon|Styles button when only primary and secondary icons are added, without any text|
|.rbPrimaryIcon|Styles the primary icon|
|.rbSecondaryIcon|Styles the secondary icon|
|.rbText|Styles the text in RadButton|
|.rbImageButton|Styles RadButton image button|
|.rbImageButton:hover|Styles RadButton image button hover state|
|.rbLinkButton|Styles RadButton link button|
|.rbVerticalSkinnedButton|Styles span element that wraps the vertical button|
|.rbVerticalDecorated|Styles Vertical RadButton input element|
|.rbVerticalSkinnedButton:hover|Styles span element that wraps the Vertical button hover state|
|.rbVerticalSkinnedButton:hover .rbVerticalDecorated|Styles Vertical RadButton input element hover state|
|.rbVerticalSkinnedButton:focus|Styles span element that wraps the Vertical button focus state|
|.rbVerticalSkinnedButton:active|Styles span element that wraps the Vertical button active state|
|.rbVerticalSkinnedButton:focus .rbVerticalDecorated|Styles Vertical RadButton input element focus state|
|.rbVerticalSkinnedButton:active .rbVerticalDecorated|Styles Vertical RadButton input element active state|
|.rbVerticalPrimary|Styles the vertical button primary icon|
|.rbVerticalSecondary|Styles the vertical button secondary icon|
|.rbVerticalText|Styles the text in Vertical RadButton|
|.rbToggleButton|Style toggle button|
|.rbToggleButtonIcon|Style toggle button icon|
|.rbToggleCheckbox|Style toggle button checkbox|
|.rbToggleCheckbox:hover,.rbToggleButton:hover .rbToggleCheckbox|Style toggle button checkbox hover state|
|.rbToggleCheckboxChecked|Style toggle button checkbox checked|
|.rbToggleCheckboxChecked:hover, .rbToggleButton:hover .rbToggleCheckboxChecked|Style toggle button checkbox checked hover state|
|.rbToggleRadio|Style toggle button radio button|
|.rbToggleRadio:hover, .rbToggleButton:hover .rbToggleRadio|Style toggle button radio button hover state|
|.rbToggleRadioChecked|Style toggle button radio button checked|
|.rbToggleRadioChecked:hover, .rbToggleButton:hover .rbToggleRadioChecked|Style toggle button radio button checked hover state|
|.rbDisabled|Styles disabled buttons|
|.rbSplitRight|Styles right split button|
|.rbSplitLeft|Styles left split button|
|.rbSplitRight:hover|Styles right split button hovered state|
|.rbSplitLeft:hover|Styles left split button hovered state|
|.rbSplitRight|Styles Right split button|
|.rbSplitLeft|Styles Left split button|
|.rbSkinnedButtonChecked|Styles checked button|
|.rbSkinnedButtonChecked:hover|Styles checked button hovered state|
|.rbToggleCheckboxFilled|Styles toggle button checkbox filled state|
|.rbToggleCheckbox:hover, .rbToggleButton:hover .rbToggleCheckboxFilled|Styles toggle button checkbox hovered filled state|
|span.rbDisabled:hover,span.rbDisabled:focus,span.rbDisabled:active|Styles the position for the disabled button in all states|
|span.rbDisabled:hover .rbDecorated,span.rbDisabled:focus .rbDecorated,span.rbDisabled:active .rbDecorated|Styles the position for the disabled button span in all states|
|.rbDisabled .rbToggleCheckbox:hover,.rbDisabled:hover .rbToggleCheckbox|Styles disabled toggle button checkbox normal state|
|.rbDisabled .rbToggleCheckboxChecked:hover,.rbDisabled:hover .rbToggleCheckboxChecked|Styles disabled toggle button checkbox hover state|
|.rbDisabled .rbToggleRadio:hover,.rbDisabled:hover .rbToggleRadio|Styles disabled toggle button radiobutton normal state|
|.rbDisabled .rbToggleRadioChecked:hover,.rbDisabled:hover .rbToggleRadioChecked|Styles disabled toggle button radiobutton hover state|
|.rbHideElement|Styles class that hide elements|
|.rbTextButton|Styles text button|
|.rbNativeButton|Sets the button default browser style|
|.RadButton .rbHiddenImages|Styles class to hide images|
|.rbAdd, .rbRemove, .rbOk, .rbCancel, .rbUpload, .rbDownload, .rbPrevious, .rbNext, .rbOpen, .rbAttach, .rbSave, .rbConfig, .rbPrint, .rbRefresh, .rbSearch, .rbHelp, .rbCart, .rbEdit, .rbRSS, .rbMail|Classes for predefined Primary and/or Secondary Icons|

## Skin - Specific styles

| CSS Class | Description |
| ------ | ------ |
|.RadButton_SkinName.rbSkinnedButton, .RadButton_SkinName.rbDecorated, .RadButton_SkinName.rbVerticalSkinnedButton, .RadButton_SkinName .rbVerticalDecorated, .RadButton_SkinName.rbSplitRight, .RadButton_SkinName.rbSplitLeft|These are the selectors for the background image sprite (ButtonSprites.gif).	This image sprite sets the background for buttons, arrows, split border, vertical button|
|.RadButton_SkinName.rbToggleCheckbox, .RadButton_SkinName.rbToggleCheckboxChecked, .RadButton_SkinName .rbToggleRadio, .RadButton_SkinName .rbToggleRadioChecked, .RadButton_SkinName .rbToggleCheckboxFilled|These are the selectors for the background image sprite (ToggleSprite.gif). This image	sprite sets background color for radio buttons and checkboxes.|
|.RadButton_SkinName.rbLinkButton|Styles link button – color, border, background color|
|.RadButton_SkinName.rbLinkButton:hover|Styles link button hover state|
|.RadButton_SkinName.rbToggleButton|Styles toggle button color|
|.RadButton_SkinName.rbToggleButton:hover|Styles toggle button hover color|
|.RadButton_SkinName.rbToggleButton.rbDisabled|Styles toggle button disabled state|
|.RadButton_SkinName.rbCustomToggle|Styles Custom Toggle button|
|.RadButton_SkinName.rbLinkButton.rbDisabled, .RadButton_SkinName.rbCustomToggle.rbDisabled, .RadButton_SkinName.rbLinkButton.rbDisabled:hover, .RadButton_SkinName.rbCustomToggle.rbDisabled:hover|Styles Link button and Custom toggle buttons disabled normal and hover states|
|.RadButton_SkinName.rbSkinnedButtonChecked .rbDecorated|Styles checked button|
|.RadButton_SkinName.rbSkinnedButtonChecked:hover .rbDecorated|Styles checked button hovered state|
|.RadButton_SkinName.rbLinkButtonChecked|Styles checked link button|
|.RadButton_SkinName.rbLinkButtonChecked:hover|Styles checked link button hovered state|

## Lightweight Rendering - Specific Styles

| CSS Class | Description |
| ------ | ------ |
|RadButton|Main control wrapper element|
|rbButton|Primitive class for all buttons like elements|
|rbHovered|Styles hovered Button element|
|RadButton:focus|Styles focused Button element|
|rbSelected|Styles selected/active Button element|
|rbRounded|Applies rounded corners to the Button element|
|rbIcon|Primitive class for icon elements inserted inside Button|
|rbPrimary|Primitive used to apply specific styles when Primary Custom Icon is used|
|rbSecondary|Primitive used to apply specific styles when Secondary Custom Icon is used|
|rbPrimaryIcon|Primitive class for Primary icon element inserted inside Button|
|rbSecondaryIcon|Primitive class for Secondary icon element inserted inside Button|
|rbIcon:before|Primitive class for font icon wrapper|
|.rbAdd:before, .rbRemove:before, .rbOk:before, .rbCancel:before, .rbUpload:before, .rbDownload:before, .rbPrevious:before, .rbNext:before, .rbOpen:before, .rbAttach:before, .rbSave:before, .rbConfig:before, .rbPrint:before, .rbRefresh:before, .rbSearch:before, .rbHelp:before, .rbCart:before, .rbEdit:before, .rbRSS:before, .rbMail:before, .rbFB:before, .rbTwitter:before, .rbLinkedIn:before, .rbPinterest, .rbYouTube:before, .rbVimeo:before, .rbBehance:before, .rbDribble:before, .rbGooglePlus:before|Applies specific font character to the Button predefined icons|
|rbCustomIcon|Applies styles for custom icon element wrapper|
|rbText|Applies styles for Button text element|
|rbCheckBox|Applies styles for the checkbox wrapper element|
|rbRadioButton|Applies styles for the radio button wrapper element|
|rbToggleCheckbox|Applies styles for checkbox icon wrapper element|
|rbToggleCheckboxChecked|Applies styles for checkbox selected icon wrapper element|
|rbToggleCheckboxFilled|Applies styles for checkbox tri-state icon wrapper element|
|rbToggleRadio|Applies styles for radio button icon wrapper element|
|rbToggleRadioChecked|Applies styles for radio button selected icon wrapper element|
|rbToggleCheckbox:before|Applies specific font character to the checkbox|
|rbToggleCheckboxChecked:before|Applies specific font character to the selected checkbox|
|rbToggleCheckboxFilled:before|Applies specific font character to the tri-state checkbox|
|rbToggleRadio:before|Applies specific font character to the radio button|
|rbToggleRadioChecked:before|Applies specific font character to the selected radio button|
|rbSplitPart|Primitive class for SplitButton wrapper arrow element|
|rbSplitPartRight|Applies styles for SplitButton right positioned arrow|
|rbSplitPartLeft|Applies styles for SplitButton left positioned arrow|
|rbSplitIcon|Primitive class for SplitButton arrow element|
|rbSplitIcon:before|Applies specific font character to SplitButton arrow element|
|rbImageButton|Applies specific styles when custom image button is used|
|rbDisabled|Applies specific styles when Button is disabled|
|rbRtl|Applies styles to render Button properly in Right to Left mode|
|span.RadButton.rbButton|Applies specific styles for SplitButton wrapper, which is SPAN and not BUTTON element.|

## See Also

 * [Skins]({%slug button/appearance-and-styling/skins%})

 * [Creating a Custom Skin]({%slug button/appearance-and-styling/creating-a-custom-skin%})

 * [Custom Height Tutorial]({%slug button/appearance-and-styling/custom-height-tutorial%})

 * [Primary and Secondary Action Buttons]({%slug button/appearance-and-styling/primary-and-secondary-action-buttons%})
