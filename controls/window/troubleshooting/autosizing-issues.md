---
title: Autosizing Issues
page_title: Autosizing Issues | UI for ASP.NET AJAX Documentation
description: Autosizing Issues
slug: window/troubleshooting/autosizing-issues
tags: autosizing,issues
published: True
position: 2
---

# Autosizing Issues



Merely setting the __AutoSize__ property of the __RadWindow__ to __true__ is not always sufficient for this functionality to work as expected. There are several other aspects that need to be taken into account:

## Content dimensions

The content placed in the __RadWindow__ needs to have explicit dimensions set in __pixels__. This is necessary, as otherwise you get a confrontation of concepts - a block element (such as the asp Panel, or div, or table) by default takes the width of its parent - 100% of it. This means that it tries to autosize according to the __RadWindow__. In the same time we want the __RadWindow__ to autosize itself according to this element, which leads to this obvious contradiction. This is the reason why some explicit dimensions must exist in the content. Therefore one of the best solutions is adding an empty div with no content or borders that has explicit width - it will not be visible, yet it will allow the __RadWindow__ to autosize correctly.

## Parent page doctype

The controls from the Telerik UI for ASP.NET AJAX suite are designed to work with the XHTML 1.0 transitional doctype and it is recommended that it is used for the pagecontaining the __RadWindow__:

````ASPNET
	<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
````



Other doctypes, such as the HTML strict have some limitations on the way elements are positioned and sized and autosizing may not work correctly with them.

## Valid HTML

The page containing the __RadWindow__ also needs to be valid HTML, as well as the content itself, as errors in either (such as extra semicolons in properties, tags left unclosed, incorrectly closed tags, etc.) result in the page not rendering properly and therefore the __RadWindow__ may not be able to properly calculate the needed dimensions. You can easily confirm this by using the [W3C Validator](http://validator.w3.org/).

## Borders, paddings and margins

There may be some issues with calculating dimensions when the top-level containers have margins or borders,so they may not be taken into account when calculating the size of its content. This also applies for paddings, as nesting elements when the parent has padding has similar effect. Therefore a good approach is to have a main container that has no borders, margins and paddings, yet has its dimensions set (or at least width). This also has to be extended to the html, body and form elements when an external page is loaded - i.e. that also need the paddings and margins removed:

````ASPNET
	        html, body, form
	        {
	            margin: 0;
	            padding: 0;
	            height: 100%;
	        }
````



## RadWindow configuration

When using the __AutoSize__ functionality setting explicit dimensions is not necessary. Moreover, they can even result in incorrect dimensions. For example, if you set the __MaxHeight__ and __MaxWidth__ properties to values smaller than the dimensions that will actually be needed by the content the __RadWindow's__ size will be limited and scrollbars will be spawned. The situation with __MinWidth__ and __MinHeight__ is similar - if they are larger than the content you will usually get extra white space.
