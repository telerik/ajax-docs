---
title: CheckBoxes are not visible in RadGrid
description: CheckBoxes are not visible in RadGrid. Check it now!
type: how-to
page_title: CheckBoxes are not visible in RadGrid
slug: grid-checkboxes-are-not-visible-in-radgrid
res_type: kb
---

## Description

CheckBoxes are handy controls which you can use to achieve convenient selection of grid items, present and edit boolean fields or just want to add some fanciness to your application. If they are not showing on the browser, however, we would lose this functionality and we wouldn't want this to happen, would we? This article provides the most popular and trendy solutions to this case.

## Solution  
  
You can try these suggestions to fix the appearance of the CheckBoxes:

 1. Check your page to see whether there is **RadFormDecorator** on the page and temporarily remove it:
 
  [https://feedback.telerik.com/Project/108/Feedback/Details/212070-radformdecorator-does-not-update-properly-the-state-of-grid-checkboxes](https://feedback.telerik.com/Project/108/Feedback/Details/212070-radformdecorator-does-not-update-properly-the-state-of-grid-checkboxes)

 1. Look for any **custom CSS** (for example styles/base.css file if present) in the project and remove any CSS rule which could hide the checkboxes. For instance:  
 
 ````CSS
button,
input {
    -webkit-appearance: none;
    cursor: pointer;
}
 ````

 1. Ensure that there are no controls on the page with **different RenderMode** setting:
 
  [http://docs.telerik.com/devtools/aspnet-ajax/controls/grid/mobile-support/render-modes#setting-render-mode](http://docs.telerik.com/devtools/aspnet-ajax/controls/grid/mobile-support/render-modes#setting-render-mode)

 1. Check for **script errors**:
 
  [https://www.telerik.com/support/kb/aspnet-ajax/ajaxmanager/details/get-more-descriptive-errors-by-disabling-ajax](/support/kb/aspnet-ajax/ajaxmanager/details/get-more-descriptive-errors-by-disabling-ajax)


