---
title: Cannot scroll Telerik control in iOS 11.3 - the page scrolls instead
description: Cannot scroll Telerik control in iOS 11.3 - the page scrolls instead. Check it now!
type: how-to
page_title: Cannot scroll Telerik control in iOS 11.3 - the page scrolls instead
slug: common-cannot-scroll-telerik-control-in-ios-11.3---the-page-scrolls-instead
res_type: kb
---

## Problem

Scrolling Telerik controls result in page scroll since iOS 11.3.x update.

## Description

In a long page when you scroll a Telerik control which has a scrolling container (for example ComboBox, DropDownList or Grid with enabled scrolling) the page itself is scrolled along the control's scrolling container.

## Solution

Disable the default scrolling by canceling the `touchmove` event to resolve the issue.  
  
>caption \*\*\* Update from 29 May 2018 \*\*\*  

 The General workaround causes some issues in some scenarios, so we can suggest adding the specific classes for each affected control in the jQuery selector:

 ````JavaScript
 function fixGridSchedulerComboBoxDropDownList() {
    // For RadGrid - .RadGrid .RadTouchExtender
    // For RadScheduler - .rsContentScrollArea.RadTouchExtender
    // For RadComboBox - .rcbScroll
    // For RadDropDownList - .rddlList
    var fixed = $telerik.$(".RadGrid .RadTouchExtender, .rsContentScrollArea.RadTouchExtender, .rcbScroll, .rddlList");
    fixed.on('touchmove', function (e) {
        e.preventDefault();
    });
}
Sys.Application.add_load(fixGridSchedulerComboBoxDropDownList);
 ````

\*\*\* End of Update from 29 May 2018 \*\*\*  
  
>caption \*\*\* Update from 23 May 2018 \*\*\*  

 ````JavaScript
function fixTelerikControlsScrollingInIOS() {
    var fixed = $telerik.$("[class^='Rad'], .rddlSlide");
    fixed.on('touchmove', function (e) {
        // if the control does not have scrollbars, it should not prevent page scroll
        if ($telerik.$(e.currentTarget).find(".RadTouchExtender").length > 0) {
            e.preventDefault();
        }
    });
}
Sys.Application.add_load(fixTelerikControlsScrollingInIOS);
 ````

\*\*\* End of Update from 23 May 2018 \*\*\*

>caption \*\*\* Initial solution \*\*\*  

 The following code prevents the `touchmove `event for all Telerik controls on page load.
 
 ````JavaScript
function fixTelerikControlsScrollingInIOS() {
    var fixed = $telerik.$("[class^='Rad']");
    fixed.on('touchmove', function (e) {
        e.preventDefault();
    });
}
Sys.Application.add_load(fixTelerikControlsScrollingInIOS);
 ````

\*\*\* End of Initial solution \*\*\*  
  
Also, in case the RadGrid has scrolling enabled in combination with Static Header, scrolling of the grid data would not be possible by touching the Template content.

This issue has been recorded in our Feedback Portal at: [Scrolling on a mobile (touch) device is impossible with the Lightweight RenderMode when an HTML element takes up the entire grid row](https://feedback.telerik.com/aspnet-ajax/1377408-scrolling-on-a-mobile-touch-device-is-impossible-with-the-lightweight-rendermode-when-an-html-element-takes-up-the-entire-grid-row "Scrolling on a mobile (touch) device is impossible with the Lightweight RenderMode when an HTML element takes up the entire grid row")  
  
The following CSS style can be used as a workaround. Please note that this may not work in combination with the workaround suggested above.

````CSS
div.rgDataDiv {
    overflow: auto !important;
}
````


## Notes

This scenario is still under investigation and this article will be updated when new information is available.

## See Also

- [CSS-tricks.com: Prevent body scrolling when the user scrolls on fixed position div](https://css-tricks.com/forums/topic/prevent-body-scrolling-when-the-user-scrolls-on-fixed-position-div/#post-207063)

