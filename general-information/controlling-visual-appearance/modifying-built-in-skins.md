---
title: Modifying Built-in Skins
page_title: Modifying Built-in Skins | UI for ASP.NET AJAX Documentation
description: Modifying Built-in Skins
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/modifying-built-in-skins
tags: modifying,built-in,skins
published: True
position: 4
---

# Modifying Built-in Skins



In some scenarios you may want to use a built-in (embedded) skin, but make some minor adjustments to it. In such cases it is easier and more convenient to override styles from the embedded skin, rather than to use a complete custom skin.

In order to override a style from a built-in skin, you will have to find out the CSS rule, which must be overridden, and then construct a new CSS rule with a higher specificity. To accomplish this, it will be useful to have a general idea about the control's HTML output and CSS classes. Basic CSS knowledge is required as well.

## Getting Familiar with Telerik controls' CSS classes and styles

Each Telerik control documentation includes a help article, which lists the CSS classes of the control and describes their usage. For example the [RadCalendar CSS class list]({%slug calendar/appearance-and-styling/css-skin-selectors%}) states that "rcWeek is a class applied to the <TR> elements, which contain the column headers (<TH> elements)."

The built-in (embedded) Telerik controls skins can be reviewed as ordinary CSS files and images - they are provided in the /Skins/ subfolder located in the Telerik® UI for ASP.NET AJAX installation folder (if you have used an executable installer), or in the installation ZIP. The file structure is as follows:

* / Skins / ControlName.css - the base stylesheet of a given Telerik control

* / Skins / SkinName / ControlName.SkinName.css - the skin CSS of a given Telerik control

* / Skins / SkinName / ControlName / ...images... - the skin images of a given Telerik control

* / Skins / Common / ...images... - images used by various controls and/or skins

* / Skins / SkinName / Common / ...images... - images used by various controls

## Finding out which CSS rule to modify (override)

The easiest way to discover which CSS rule is responsible for a given control style applied in the browser is to use some web developer tool such as [Firebug for Firefox](http://www.getfirebug.com/) or [Web Developer Toolbar for Internet Explorer](http://www.microsoft.com/downloads/en/details.aspx?FamilyID=95e06cbe-4940-4218-b75d-b8856fced535). Such tools help inspect the HTML output and CSS styles instantly and even allow experiments and changes on the fly. Another useful opportunity these tools provide is to learn about the Telerik controls HTML rendering.

## CSS Selectors and CSS Specificity

The CSS knowledge required to modify (override) embedded skins includes familiarity with the different types of **CSS selectors** and the notion of **CSS specificity**.

[CSS Selectors Tutorial](http://css.maxdesign.com.au/selectutorial/)

Articles about CSS specificity:

* ["CSS Specificity Things You Should Know"](http://www.smashingmagazine.com/2007/07/27/css-specificity-things-you-should-know/)

* ["What Happens When Conflict Occurs"](http://css.maxdesign.com.au/selectutorial/advanced_conflict.htm)

* [CSS Cascading Order Specification](http://www.w3.org/TR/CSS2/cascade.html#cascading-order)



Here is a blog post, which extends the information above with an example about overriding a RadGrid skin.

[How To Override Styles in a Telerik® UI for ASP.NET AJAX' Embedded Skin](http://blogs.telerik.com/aspnet-ajax/posts/08-06-17/how-to-override-styles-in-a-radcontrol-for-asp-net-ajax-embedded-skin.aspx)

Also you can refer the PSD files for the obsolete controls' skins and some specific custom skins using the portal below:

[Skins Code Library portal](http://www.telerik.com/support/code-library/aspnet-ajax/skin-exchange)
