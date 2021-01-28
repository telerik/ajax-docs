---
title: Understanding the Skin CSS File
page_title: Understanding the Skin CSS File - RadToolBar
description: Check our Web Forms article about Understanding the Skin CSS File.
slug: toolbar/appearance-and-styling/understanding-the-skin-css-file
tags: understanding,the,skin,css,file
published: True
position: 6
---

# Understanding the Skin CSS File



Styles for RadControls are defined using Cascading Style Sheet (CSS) syntax. Each style consists of a selector that identifies an HTML element to be styled, and property/value pairs that describe each of the style specifics, e.g. color, padding, margins, etc. For example, the ".RadToolBar_Green_Horizontal" style shown below sets the background color of the toolbar:

````ASPNET
.RadToolBar_Green_Horizontal{ background: #90cc90;}
````


See the [CSS Skin FileSelectors]({%slug toolbar/appearance-and-styling/css-skin-file-selectors%}) topic for more information on the specific CSS selectors used for **RadToolBar** skins.

Each style maps to a "class" attribute in an HTML tag. For example, consider the excerpt from the HTML rendering of a toolbar shown below:

````HTML
<div id="RadToolBar1" class="RadToolBar RadToolBar_Horizontal RadToolBar_Green RadToolBar_Green_Horizontal "
    style="z-index: 90000;">
    <!-- content of toolbar -->
</div>
````


The control is rendered as a DIV element with the classes "**RadToolBar RadToolBar_Horizontal RadToolBar_Green RadToolBar_Green_Horizontal**". The **RadToolBar** and **RadToolBar_Horizontal** classes are always applied. They define the basic presentation of the toolbar which is common for all skins. The **RadToolBar_Green** and **RadToolBar_Green_Horizontal** classes are applied because the **Skin** property of the toolbar is set to "Green".

>note If you set the **Style** or **CssClass** property of the toolbar, those settings are applied to this outer DIV element as well.
>


## Tool Bar element

Immediately inside the outer DIV tag for the toolbar (shown above), the rendered toolbar has three more nested DIV elements:

````HTML
<div class="rtbOuter">
    <div class="rtbMiddle">
        <div class="rtbInner">
            <!-- Tool bar content goes here -->
        </div>
    </div>
</div>
````

These classes are available for skins to achieve intricate effects in the shape of the toolbar. Most skin CSS files use these classes to apply background images to create the rounded edges of the toolbar.

Inside the three nested DIV tags, the toolbar uses an unordered list (LI) tag to manage the layout of the buttons in the toolbar:

````HTML
<ul class="rtbUL">
    <!-- buttons go here -->
</ul>
````

This UL tag always has the **.rtbUL** class applied.

## Tool Bar Items

Each item in the toolbar is an LI element inside the UL tag:

````HTML
<li class="rtbItem rtbBtn rtbChecked">
    <!-- Content of RadToolBarButton goes here -->
</li>
<li class="rtbItem rtbDropDown">
    <!-- Content of RadToolBarDropDown goes here -->
</li>
<li class="rtbItem rtbSplBtn">
    <!-- Content of RadToolBarSplitButton goes here -->
</li>
````

The LI element always has the **.rtbItem** class applied.In addition, the **.rtbBtn**, **.rtbDropDown**, or **.rtbSplBtn** class identifies the type of toolbar item. The LI element also gets classes applied based on the state of the item. These include **.rtbChecked**, **.rtbDisabled**, **.rtbItemFocused**, **.rtbItemHovered**, **.rtbDropDownExpanded**, and **.rtbSplBtnExpanded**.

Inside the LI element for an item in the toolbar is the A element for the button:

````HTML
<a class="rtbWrap" href="#">
    <span class="rtbOut">
        <span class="rtbMid">
            <span class="rtbIn">
            <!-- button content goes here -->
            </span>
        </span>
    </span>
</a>
````

The A element has the **.rtbWrap** class applied. If you assign a value to the CssClass or style properties of a button, these are applied at this level as well. Inside the <A> element are three nested SPAN elements, which the skin can use to achieve intricate effects on the shape of buttons. These have the **.rtbOut**, **.rtbMid**, and **.rtbIn** classes applied, as shown above.

## RadToolBarButton

The content of **RadToolBarButton** can include both an image and a text label:

````HTML
<img alt="" src="Images/Cut.gif" class="rtbIcon" />
<span class="rtbText">Cut</span>
````


The image is rendered as an IMG element with the **.rtbIcon** class applied. The text label is rendered as another SPAN element with the **.rtbText** class applied.

## RadToolBarDropDown

The content of **RadToolBarDropDown** can include an image and a label, as well as the drop-down arrow:

````HTML
<img alt="" src="Images/Palette.gif" class="rtbIcon" />
<span class="rtbText">Colors</span>
<span class="rtbChoiceArrow"></span>
````

As with **RadToolBarButton**, the image gets the **.rtbIcon** class applied and the text gets the **.rtbText** class applied. The drop-down arrow is a SPAN tag with the **.rtbChoiceArrow** class applied.

## RadToolBarSplitButton

The content of **RadToolBarSplitButton** contains two SPAN elements: one for the button portion, and another for the drop-down arrow. The image and text label go inside the first SPAN:

````HTML
<span class="rtbSplBtnActivator">
    <img alt="" src="Images/LeftJustify.gif" class="rtbIcon" />
    <span class="rtbText">Left Justify</span>
</span>
<span class="rtbChoiceArrow"></span>
````


The SPAN for the button portion gets the **.rtbSplBtnActivator** class applied. As with **RadToolBarDropDown**, the drop-down arrow gets the **.rtbChoiceArrow** class applied. Inside the SPAN for the button portion, the label and image are rendered just like with other toolbar items.

## Drop-down lists

Drop-down lists are rendered as a DIV element immediately after the A element for the drop-down or split button:

````HTML
<div class="rtbSlide" style="display: none;">
    <div class="RadToolBarDropDown RadToolBarDropDown_Green">
        <ul class="rtbActive rtbGroup">
            <li class="rtbItem">
                <a href="#" class="rtbWrap">
                    <img alt="" src="Images/First.gif" class="rtbIcon" />
                    <span class="rtbText">First</span> 
                 </a>
            </li>
            <li class="rtbItem">
                 <a href="#" class="rtbWrap">
                    <img alt="" src="Images/Last.gif" class="rtbIcon" />
                    <span class="rtbText">Last</span> 
                 </a>
            </li>
        </ul>
    </div>
</div>
````

The first DIV for the drop-down has the **.rtbSlide** class applied. This is used for animation effects and can be ignored. Inside that is the main DIV for the drop-down list. It has the **RadToolBarDropDown** and **RadToolBarDropDown_Green** classes applied. The RadToolBarDropDown class is applied regardless of the skin, and defines the basic presentation for toolbar drop down lists common to all skins. The **RadToolBarDropDown_Green** class is applied because the **Skin** property is set to "Green".

Inside the DIV for the drop-down is a UL element with the **.rtbGroup** and **.rtbActive** classes applied. The items in this list are rendered like the buttons in the toolbar, but without the three nested SPAN elements that are used to style the "button" appearance. (the **.rtbBtn** class is also omitted).

## Separators

Separators in drop-down lists are rendered as LI elements:

````HTML
<li class="rtbSeparator"><span class="rtbText">_</span></li>
````


The LI element for a separator has the **.rtbSeparator** class applied. Note that the text of the separator is rendered as a SPAN element. The reason that the text does not appear is that most skins map the **.rtbSeparator .rtbText** selector to "display: none" to hide the text.

# See Also

 * [Skins]({%slug toolbar/appearance-and-styling/skins%})

 * [Setting  the CSS Class of Buttons]({%slug toolbar/appearance-and-styling/setting-the-css-class-of-buttons%})
