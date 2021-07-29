---
title: Persist Scroll Position of Grid with 100% Height After AJAX Request
description: Persist Scroll Position of Grid with 100% Height After AJAX Request - RadGrid
type: how-to
page_title: Persist Scroll Position of Grid with 100% Height After AJAX Request
slug: persist-scroll-position-of-grid-with-100-height-after-ajax-request
res_type: kb
---


## DESCRIPTION

Grid does not remember (persist) the scroll position (e.g., if opening a modal dialog on row click) and gets scrolled to the top as a new page is loaded.

The AJAX request disposes the grid markup and explicit measures must be taken for that to be persisted.

## SOLUTION

There are several ways to make sure the scroll position does not change after an AJAX request and the correct one for the particular case depends on how the grid is used.

- **The grid scrolling is enabled (ClientSettings.Scrolling.AllowScroll=true)**. In this case, set the ClientSettings.Scrolling.SaveScrollPosition property to true and ensure all parent elements have explicit height set (this includfes the grid, the update panel around it and other parent elements). You can find below an example ([grid-maintain-scroll-position-100-height.zip](files/grid-maintain-scroll-position-100-height.zip)). With this, the grid will size to 100% height of its container and will store its own scrolling.
- **The grid scrolling is not enabled**. In this case the grid is as tall as its contents (depending on page size and on row heights/contents). When scrolling a parent element of the grid scrolls and the grid cannot store this automatically as it cannot know which container that is. In this case the ClientSettings.Scrolling.SaveScrollPosition property cannot help. Setting the MaintainScrollPositionOnPostback property in the Page directive to true can help in some cases. Other options include storing the scroll offsets yourself before the request and restoring them after the response. You can find useful examples in the following threads: [Save RadGrid scroll position when leaving page Code Library](https://www.telerik.com/support/code-library/save-radgrid-scroll-position-when-leaving-page) and [Scrolling to the Selected Item help article](http://docs.telerik.com/devtools/aspnet-ajax/controls/grid/how-to/Scrolling/scrolling-to-the-selected-item). You can consider storing the information in a cookie, JS variable, localStorage, hidden field or other method.
- **The user scrolled while the AJAX request was running** and when the response was received MS AJAX scrolled back to the original position. This behavior is built-in the MS AJAX framework and can be avoided by adding such a script to the page: `Sys.WebForms.PageRequestManager.getInstance().add_beginRequest(function (me) { me._scrollPosition = null; });`. 
  
  You can read more in the [How do you prevent browser scrolling after ajax postback? forum thread](https://www.telerik.com/forums/how-do-you-prevent-browser-scrolling-after-ajax-postback).

Below you can find attached a basic example of the approach.

- [DOWNLOAD Sample](files/grid-maintain-scroll-position-100-height.zip) 


**Tip**: You can find related practical samples and implementations in [this forum post](https://www.telerik.com/forums/radgrid-jumps-to-first-line-when-selecting-row#oMKrk-s78UiZ5ik2B22pow).

 
 
 