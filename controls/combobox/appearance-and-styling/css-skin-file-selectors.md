---
title: CSS Skin File Selectors
page_title: CSS Skin File Selectors - RadComboBox
description: Check our Web Forms article about CSS Skin File Selectors.
slug: combobox/appearance-and-styling/css-skin-file-selectors
tags: css,skin,file,selectors
published: True
position: 7
---

# CSS Skin File Selectors



## 

The following table lists significant CSS selectors and descriptions for RadComboBox style sheets.




|  **CSS Selector**  |  **Description**  |
| ------ | ------ |
|.RadComboBox_MySkin|Styles the HTML <div> tag that contains the RadComboBox input & arrow.|
|.RadComboBoxDropDown_MySkin|Styles the HTML <div> tag that contains the RadComboBox drop-down.|
|input|Default style for text throughout the control.|
|table, td|Default table and cell style that make up the RadComboBox text input and drop down arrow areas.|
|.rcbInputCell|Styles the text input area of RadComboBox, located just to the left of the drop down arrow.|
|.rcbArrowCell|Styles the area containing the downward pointing arrow for the RadComboBox. This contains a background property where you can specify a new image URL to represent the drop down button.|
|.rcbFocused|Styles the RadComboBox when focused (awaiting input).|
|.rcbScroll|Controls the presence and behavior of scroll bars in the drop down list portion of the control.|
|.rcbList|Styles the drop down portion of the list that isn't disabled or hovered. This style is applied to the <ul> HTML tag class representing an unordered list.|
|.rcbItem|Styles each <li> HTML tag item within the unordered list that is not disabled or hovered.|
|.rcbHovered|Styles a list item (or input area) under the mouse.|
|.rcbDisabled|Styles the disabled items in the drop down list. Define a moderate **color** property (typically a gray) to communicate that the text represents a disabled item.|
|.rcbNoWrap|Styles the list when the RadComboBox **NoWrap** property is set to **true** .|
|.rcbLoading|Controls the look of the area that displays the **LoadingMessage** property.|
|.rcbMoreResults|Controls the look of the "Show More results" area. See[Load On Demand]({%slug combobox/load-on-demand/overview%})topics for more information.|
|.rcbImage|Styles the image when **ImageUrl** property is set for an item.|
|.rcbEmptyMessage|Controls the appearance of the **EmptyMessage** text.|
|.rcbSeparator|Controls the appearance of the **RadComboBox** separators.|
|.rcbLabel|Controls the appearance of the associated Label.|

>note There are several styles that end in "_rtl" that are used to style specific portions of the control when right-to-left support is turned on. These "_rtl" styles are variants of their left-to-right default counterparts.
>


# See Also

 * [Understanding the Skin CSS File]({%slug combobox/appearance-and-styling/understanding-the-skin-css-file%})

 * [Skins]({%slug combobox/appearance-and-styling/skins%})

 * [Tutorial: Creating a Custom Skin]({%slug combobox/appearance-and-styling/tutorial-creating-a-custom-skin%})
