---
title: CSS Classes
page_title: CSS Classes - RadFormDecorator
description: Check our Web Forms article about CSS Classes.
slug: formdecorator/appearance-and-styling/css-classes
tags: css,classes
published: True
position: 2
---

# CSS Classes

## CSS Classes Description

The table below shows the classes used by the embedded Telerik RadFormDecorator skin (the non-embedded skins css classes signature conforms to the same concepts):

## Skin Specific CSS

| CSS Class | Description |
| ------ | ------ |
|.RadForm_SkinName.rfdZone|CSS class for styling the decoration zone or the html tag of the page|
|.RadForm_SkinName.rfdScrollBars|Decorates the scrollbars|
|.RadForm_SkinName.rfdButton a.rfdSkinnedButton, .RadForm_SkinName.rfdButton input[type="button"].rfdDecorated, .RadForm_SkinName.rfdButton input[type="reset"].rfdDecorated, .RadForm_SkinName.rfdButton input[type="submit"].rfdDecorated, .RadForm_SkinName.rfdButton .rfdSkinnedButton button|Decorates Input elements of the followyng type: input type="button / submit / reset" and button type="button / submit / reset" - look if there is a secondary .rfdButton class applied to the root element|
|.RadForm_SkinName.rfdHeading h4, .RadForm_SkinName.rfdHeading h5, .RadForm_SkinName.rfdHeading h6|Decorates Headings Elements - h4 (Heading 4), h5 (Heading 5), h6 (Heading 6)|
|.RadForm_SkinName.rfdLabel label|Decorates Labels: label Tag|
|.RadForm_SkinName .rfdCheckboxUnchecked, .RadForm_SkinName .rfdInputDisabled.rfdCheckboxUnchecked:hover|Decorates Input elements of Checkbox type for normal and hover states: input type="checkbox"|
|.RadForm_SkinName .rfdRadioUnchecked, .RadForm_SkinName .rfdInputDisabled.rfdRadioUnchecked:hover|Decorate Input elements of Radio type for normal and hover states: input type="radio"|
|.rfdRoundedInner, .rfdRoundedOuter, table.rfdRoundedWrapper, table.rfdRoundedWrapper_fieldset, table.rfdRoundedWrapper td, table.rfdRoundedWrapper_fieldset>tbody>tr>td, table.rfdRoundedWrapper td, table.rfdRoundedWrapper_fieldset td, .RadForm_SkinName.rfdFieldset table.rfdRoundedWrapper_fieldset legend, .RadForm_SkinName fieldset.rfdFieldset legend, .RadForm_SkinName table.rfdRoundedWrapper:hover div.rfdRoundedInner|Decorates Fieldset and Legend Elements general layout styles. Decorate normal and hover states: fieldset and legend tags|
|.RadForm_SkinName table.rfdRoundedWrapper:hover .rfdRoundedOuter|This selector decorates the hover of the side bars of the rounded elements|
|.RadForm_SkinName.rfdTextbox input[type="text"], .RadForm_SkinName.rfdTextbox input[type="password"], .RadForm_SkinName.rfdTextarea textarea, .RadForm_SkinName.rfdTextarea textarea[disabled]:hover, .RadForm_SkinName.rfdTextbox input[disabled][type="text"]:hover, .RadForm_SkinName.rfdTextbox input[disabled][type="password"]:hover, .RadForm_SkinName.rfdTextbox .rfdDecorated:hover, .RadForm_SkinName.rfdTextbox .rfdDecorated:hover, .RadForm_SkinName.rfdTextarea textarea:hover|Decorates normal and hover states of the following input element: input type="text / password" and textarea.For all browsers except IE6 we are using attribute selectors - single or double.|
|.RadForm_SkinName.rfdFieldset table.rfdRoundedWrapper_fieldset legend, .RadForm_SkinName.rfdFieldset fieldset.rfdFieldset legend, .RadForm_SkinName.rfdFieldset table.rfdRoundedWrapper_fieldset fieldset, .RadForm_SkinName.rfdFieldset fieldset.rfdFieldset **Nb: having a background image on a fieldset is not okay with IE** |Decorates Fieldset and Legend Elements styles.|
|.RadForm_SkinName table.rfdRoundedWrapper input, .RadForm_SkinName table.rfdRoundedWrapper textarea, .RadForm_SkinName input.rfdInput, .RadForm_SkinName textarea.rfdTextarea,{ border: solid 1px #yourColor;background: #yourColor;color: #yourColor;}.RadForm_SkinName textarea.rfdTextarea, .RadForm_SkinName table.rfdRoundedWrapper textarea{overflow: auto;}|Decorates the same as the above:Because of a glitch in IE the following 2 CSS classes must be declared separately for correct parsing of the textarea class in IE6|
|.rfdSelect_SkinName, .rfdSelect_SkinName:hover, .rfdSelect_SkinName .rfdSelectOuter, .rfdSelect_SkinName:hover .rfdSelectOuter, .rfdSelect_SkinName .rfdSelectArrow span, .rfdSelectBox_SkinName .rfdSelect_selected, .rfdSelectBox_SkinName li:hover, .rfdSelect_SkinName.rfdSelectDisabled:hover, .rfdRtl .rfdSelect_SkinName, .rfdRtl .rfdSelect_SkinName:hover, .rfdRtl .rfdSelect_SkinName .rfdSelectOuter, .rfdRtl .rfdSelect_SkinName .rfdSelectOuter:hover{}.rfdSelect_SkinName .rfdSelectOuter, .rfdSelect_SkinName.rfdSelectDisabled:hover .rfdSelectOuter{ }|Decorate Select element states.|
|.rfdSelectBox_SkinName{}.rfdSelectBox_SkinName li{}.rfdSelectBox_SkinName .rfdSelect_selected, .rfdSelectBox_SkinName li:hover{}.rfdSelectBox_SkinName.rfdSelectBox_optgroup_label:hover{ }|Decorate dropdown settings which replace the HTML Select element during the RadFormDecorator skinning.|
|* html .rfdSkinnedButton.rfdInputDisabled{ }* html .RadForm_SkinName.rfdButtona.rfdInputDisabled:hover{ }* html .RadForm_SkinName.rfdButton a.rfdInputDisabled:hover*{ }.RadForm_SkinName.rfdTextbox input.rfdIE6TextBox, .RadForm_SkinName.rfdTextbox textarea.rfdIE6TextBox{ }|IE6 disabled state fix - this should not be added to the base stylesheet, but at the bottom of the skin file|
|@media screen and (-webkit-min-device-pixel-ratio: 0){ /* all between brackets marked in red will be renders onlyfrom Safari and Chrome *//* checkboxes */.rfdCheckbox input[type="checkbox"], .rfdCheckboxinput[type="checkbox"][disabled]:hover{background-image: url(''); }/* radio buttons */.rfdRadio input[type="radio"], .rfdRadio input[type="radio"][disabled="disabled"]:hover{ background-image: url(''); } }|The styling of radiobuttons and checkboxes in Safari and Chrome is already fully achieved with CSS.|

## Skin-specific Scrollbar Settings for WebKit Browsers (Safari, Chrome,Midori, Shiira, Epiphany)

| CSS Class | Description |
| ------ | ------ |
|.RadForm.rfdScrollBars.RadForm_SkinName textarea::-webkit-scrollbar-thumb:vertical, .RadForm.rfdScrollBars.RadForm_SkinName textarea::-webkit-scrollbar-thumb:horizontal, .RadForm.rfdScrollBars.RadForm_SkinName div::-webkit-scrollbar-thumb:vertical, .RadForm.rfdScrollBars.RadForm_SkinName div::-webkit-scrollbar-thumb:horizontal|Decorates scrollbar face color.|
|.RadForm.rfdScrollBars.RadForm_SkinName textarea::-webkit-scrollbar-track-piece, .RadForm.rfdScrollBars.RadForm_SkinName div::-webkit-scrollbar-track-piece|Decorates scrollbar track background color.|
|.RadForm.rfdScrollBars.RadForm_SkinName textarea::-webkit-scrollbar-button:vertical:decrement, .RadForm.rfdScrollBars.RadForm_SkinName textarea::-webkit-scrollbar-button:vertical:increment, .RadForm.rfdScrollBars.RadForm_SkinName textarea::-webkit-scrollbar-button:horizontal:decrement, .RadForm.rfdScrollBars.RadForm_SkinName textarea::-webkit-scrollbar-button:horizontal:increment, .RadForm.rfdScrollBars.RadForm_SkinName textarea::-webkit-scrollbar-thumb:vertical, .RadForm.rfdScrollBars.RadForm_SkinName textarea::-webkit-scrollbar-thumb:horizontal, .RadForm.rfdScrollBars.RadForm_SkinName div::-webkit-scrollbar-button:vertical:decrement, .RadForm.rfdScrollBars.RadForm_SkinName div::-webkit-scrollbar-button:vertical:increment, .RadForm.rfdScrollBars.RadForm_SkinName div::-webkit-scrollbar-button:horizontal:decrement, .RadForm.rfdScrollBars.RadForm_SkinName div::-webkit-scrollbar-button:horizontal:increment, .RadForm.rfdScrollBars.RadForm_SkinName div::-webkit-scrollbar-thumb:vertical, .RadForm.rfdScrollBars.RadForm_SkinName div::-webkit-scrollbar-thumb:horizontal|Decorates scrollbar track border color.|
|.RadForm.rfdScrollBars.RadForm_SkinName textarea::-webkit-scrollbar-button:vertical:decrement, .RadForm.rfdScrollBars.RadForm_SkinName textarea::-webkit-scrollbar-button:vertical:increment, .RadForm.rfdScrollBars.RadForm_SkinName textarea::-webkit-scrollbar-button:horizontal:decrement, .RadForm.rfdScrollBars.RadForm_SkinName textarea::-webkit-scrollbar-button:horizontal:increment, .RadForm.rfdScrollBars.RadForm_SkinName div::-webkit-scrollbar-button:vertical:decrement, .RadForm.rfdScrollBars.RadForm_SkinName div::-webkit-scrollbar-button:vertical:increment, .RadForm.rfdScrollBars.RadForm_SkinName div::-webkit-scrollbar-button:horizontal:decrement, .RadForm.rfdScrollBars.RadForm_SkinName div::-webkit-scrollbar-button:horizontal:increment|Decorates increment / decrement button settings.|

## GridView, FormView, DetailsView

| CSS Class | Description |
| ------ | ------ |
|.RadForm_SkinName.rfdGrids .rfdTable|Decorates Grid Table: table tag|
|.RadForm_SkinName.rfdGrids .rfdTable th|Decorates Grid Table heading cell: th tag|
|.RadForm_SkinName.rfdGrids .rfdTable td|Decorates Grid Table data cell: td tag|
|.RadForm_SkinName.rfdGrids .rfdTable a|Decorates Grid Table anchor: a tag|

## Common CSS

| CSS Class | Description |
| ------ | ------ |
|.rfdRealInput|Input position|
|.rfdButton a.rfdSkinnedButton|Decorates the skinned button|
|.rfdButton a.rfdSkinnedButton:focus|Decorates the focused button|
|.rfdButton a.rfdInputDisabled.rfdSkinnedButton:hover|Decorates the hovered button|
|.RadForm.rfdTextbox .rfdSkinnedButton input, .RadForm.rfdTextbox .rfdSkinnedButton button, .RadForm.rfdTextbox .RadComboBox input, .RadForm.rfdTextbox .RadComboBox input[type="text"]|Decorates Buttons|
|.RadForm.rfdTextbox input[type="button"].rfdDecorated, .RadForm.rfdTextbox input[type="reset"].rfdDecorated, .RadForm.rfdTextbox input[type="submit"].rfdDecorated|Decorates decorated Buttons|
|.rfdCheckboxChecked, .rfdCheckboxUnchecked, .rfdRadioUnchecked, .rfdRadioChecked|Decorates radio buttons and check boxes|
|.rfdSkinnedButton.rfdInputDisabled, .rfdTextarea textarea[disabled], .rfdTextbox input[type="text"][disabled], .rfdTextbox input[type="password"][disabled]|Decorates disabled FormDeocrator elements|
|.rfdSelectBox, .rfdSelectBox.rfdSelectDisabled:hover, .rfdSelectBox ul, .rfdSelectBox li, .rfdSelectBox li .rfdSelectBox_optgroup li, .rfdSelectBox_optgroup, .rfdSelectBox_optgroup_label, .rfdSelectBox.rfdSelectDisabled li:hover, .rfdSelectBox .rfdSelectBox_optgroup li, .rfdSelectBox li.rfdSelectBox_optgroup_label|Dropdown settings select box|
|.rfdValidationSummaryControl, .rfdLoginControl|Validation Summary control and Login control decorated by RadFormDecorator|
|.rfdValidationSummaryControl ul|Styles unordered list nested in Validation summary field|
|.RadForm_SkinName .rfdValidationSummaryControl, .RadForm_SkinName.rfdLoginControl |Validation Summary control and Login control skin specific|
|.RadForm_SkinName a.rfdLoginControl, .RadForm_SkinName a.rfdLoginControl:active, .RadForm_SkinName a.rfdLoginControl:visited, .RadForm_SkinName a.rfdLoginControl:hover |Login control skin specific anchor styles|


