---
title: Important Changes Regarding Decorating Headings with Lightweight RadFormDecorator
page_title: Important Changes Regarding Decorating Headings with Lightweight RadFormDecorator | RadFormDecorator for ASP.NET AJAX Documentation
description: Important Changes Regarding Decorating Headings with Lightweight RadFormDecorator
slug: formdecorator/important-changes-decorating-headings-lightweight-radformdecorator
tags: changes,and,backward,compatibility
published: True
position: 1
---

# Important Changes Regarding Decorating Headings with Lightweight RadFormDecorator

This help article describes the important changes of **RadFormDecorator** in **Lightweight** mode that come with the **Q3 2015** release.

1. [Heading Stylization Cascades Through Individual Classes](#heading-stylization-cascades-through-individual-classes)

1. [Heading Default Font-size Metric is Changed from PX to EM](#heading-default-font-size-metric-is-changed-from-px-to-em)

1. [Heading Tags with Custom Classes will not be Decorated](#heading-tags-with-custom-classes-will-not-be-decorated)

## Heading Stylization Cascades Through Individual Classes

**RadFormDecorator** in **Lightweight** will not add a global **rfdHeading** class to the HTML tag anymore. From this time onwards, the CSS class **rfdHeading** will be added to each heading tag. You can find the rendered markup of decorated H4, H5 and H6 tags prior and after the change in **Example 1** and **Example 2**.

>caption **Example 1**: Heading tags are styled by RadFormDecorator through a  global class, added to the HTML tag prior to the Q3 2015 release.

````HTML
<html class="RadForm RadForm_Default rfdHeading rfdRoundedCorners" xmlns="http://www.w3.org/1999/xhtml">
...
	<h4>Heading 4</h4>
	<h5>Heading 5</h5>
	<h6>Heading 6</h6>
...
</html>
````

>caption **Example 2**: Heading tags have been styled by RadFormDecorator through an individual class, added to each heading tag since the Q3 2015 release.

````HTML
<html class="RadForm RadForm_Default rfdRoundedCorners" xmlns="http://www.w3.org/1999/xhtml">
...
	<h4 class="rfdHeading">Heading 4</h4>
	<h5 class="rfdHeading">Heading 5</h5>
	<h6 class="rfdHeading">Heading 6</h6>
..
</html>
````

This change will affect any custom styles or skin customizations related to heading tags decoration. You should change the old selectors from **Example 3** to match the new ones from **Example 4**.

>caption **Example 3**: RadFormDecorator old selectors for decorating heading tags with the **Default** skin.

````CSS
.RadForm.rfdHeading h4 {
    font-size: 14px;
}
.RadForm.rfdHeading h5 {
    font-size: 13px;
}
.RadForm.rfdHeading h6 {
    font-size: 12px;
}

.RadForm_Default.RadForm.rfdHeading h4, 
.RadForm_Default.RadForm.rfdHeading h5, 
.RadForm_Default.RadForm.rfdHeading h6 {
    color: #333;
}
.RadForm_Default.rfdHeading h4, 
.RadForm_Default.rfdHeading h5, 
.RadForm_Default.rfdHeading h6 {
    border-bottom-color: #8a8a8a;
}

.RadForm.rfdHeading h4, 
.RadForm.rfdHeading h5, 
.RadForm.rfdHeading h6 {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    font-weight: normal;
    line-height: normal;
    margin: 0.83333em 0;
    padding: 0.16667em 0;
}
````

>caption **Example 4**: RadFormDecorator new selectors for decorating heading tags with the **Default** skin.

````CSS
.RadForm h4.rfdHeading {
    font-size: 1.16667em;
}
.RadForm h5.rfdHeading {
    font-size: 1.08333em;
}
.RadForm h6.rfdHeading {
    font-size: 1em;
}

RadForm_Default .rfdHeading {
    color: #333333;
}

.RadForm_Default .rfdHeading {
    border-bottom-color: #8a8a8a;
}
.RadForm .rfdHeading {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    font-weight: normal;
    line-height: normal;
    margin: 0.83333em 0;
    padding: 0.16667em 0;
}
````

## Heading Default Font-size Metric is Changed from PX to EM

The default font-size metrics of decorated heading tags are changed from px to em (**Example 3** and **Example 4**). This change is required to create an [elastic design for the control]({%slug formdecorator/mobile-support/responsive,-adaptive-and-elastic-capabilities%}). 

## Heading Tags with Custom Classes will not be Decorated

When a custom class is applied to a heading tag it will be perceived as a customly styled element and hence **RadFormDecorator** will skip it from decoration. This behavior also resolves styles overriding issues when **RadFormDecorator** is integrated with other controls from the Telerik UI for ASP.NET AJAX suite. 

## See Also

 * [Changes And Backward Compatibility]({%slug formdecorator/changes-and-backward-compatibility%})

 * [Responsive, Adaptive and Elastic Capabilities]({%slug formdecorator/mobile-support/responsive,-adaptive-and-elastic-capabilities%})

