---
title: Mobile Browser Specifics
page_title: Mobile Browser Specifics
description: "Learn about the mobile browser support that comes with Telerik UI for ASP.NET AJAX."
previous_url: mobile-support/using-the-telerik-controls-in-mobile-browsers
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/mobile-browsers-specifics
tags: telerik, aspnet, ajax, mobile, support, browser, specifics
published: True
position: 5
---

# Mobile Browser Specifics

Telerik UI for ASP.NET AJAX supports most current mobile browsers with some modifications. 

## Considerations 

The following list shows the specifics you need to consider when working with Telerik UI for ASP.NET AJAX controls:

* Because no actual hover exists on touch screen devices, hover events are fired on touch or click. This also means that elements shown on hover will be shown on click. For example, to see the submenus in the Menu, don’t set `NavigateUrls` on expandable items.

* Double-click is usually reserved for zoom and is not fired as an event.

* Some browsers show a context menu on touch-and-hold but a `contextmenu` event is either not fired or the browser menu can’t be cancelled. You can manually implement the touch-and-hold event.

* Scrolling in mobile browsers is usually handled with drag gestures  and, therefore, the regular dragging and dropping is not working.

* Clicking on editable `input` elements shows the virtual keyboard and the visible space is shrunk.

* Scrolling containers in Safari are rendered with `overflow: hidden` and can only be scrolled with a two-finger drag gesture. For handling such cases, Telerik UI for ASP.NET AJAX provides the `TouchScrollExtender` client control.

* `ContentEditable` is not supported in Mobile Safari iOS v. 4.0 and earlier, which means that the Editor will be rendered as a simple text area.

* Mobile Safari v. iOS 6 and earlier do not support `input` elements with `type="file"` so it will be rendered as disabled and the AsyncUpload and Upload won’t work.

Some browsers provide special touch events for mobile devices, for example, Mobile Safari delivers `touchstart`, `touchmove`, and `touchend`, and Mozilla Mobile Firefox (Fennec) delivers `MozTouchDown`, `MozTouchMove`, and `MozTouchUp` which can be used to overcome some of the considerations above.

IE7+ in Microsoft Windows Phone 7 and both mobile Opera browsers do not provide touch events support of either kind and will be treated as regular desktop browsers if possible.

## Touch-and-Hold Event

Most mobile browsers do not support the `contextmenu` event properly and you have to handle it by using a `click` event and a timeout. To raise the `contextmenu` event, you will need the original event coordinates. 

The following example demonstrates how to get a Scheduler which has two `contextmenu` events:

````ASP.NET
<telerik:RadScheduler runat="server" ID="RadScheduler1" SelectedDate="2009-02-02"
    DayStartTime="06:00:00" DayEndTime="23:30:00" Width="100%" DataSubjectField="AppointmentSubject"
    DataStartField="StartTime" DataEndField="EndTime" DataKeyField="AppointmentID"
    ShowAllDayRow="false" HoursPanelTimeFormat="hh:mm tt" ProviderName="ReadOnlyXmlSchedulerProvider">
    <TimeSlotContextMenuSettings EnableDefault="true" />
    <AppointmentContextMenuSettings EnableDefault="true" />
    <AdvancedForm Modal="true" />
</telerik:RadScheduler>
````



Then, you need to add the following JavaScript to fire the `contextmenu` events when the user touches and holds on Mobile Safari:

````JavaScript
var lastArgs = null;
var lastContext = null;
var longTouchID = 0;
var menuShown = false;
function longTouch()
{
    longTouchID = 0;
    menuShown = true;
    var scheduler = $find('RadScheduler1');
    var eventArgs = null;
    var target = null;
    if (lastContext.target.nodeName == 'TD')
    {
        target = scheduler._activeModel.getTimeSlotFromDomElement(lastContext.target);
        eventArgs = new Telerik.Web.UI.SchedulerTimeSlotContextMenuEventArgs(target.get_startTime(), target.get_isAllDay(), lastContext, target);
        scheduler._raiseTimeSlotContextMenu(eventArgs);
    } else
    {
        target = scheduler.getAppointmentFromDomElement(lastContext.target);
        eventArgs = new Telerik.Web.UI.SchedulerAppointmentContextMenuEventArgs(target, lastContext);
        scheduler._raiseAppointmentContextMenu(eventArgs);
    }
}

function handleTouchStart(e)
{
    lastContext = e;
    lastContext.target = e.originalTarget;
    lastContext.pageX = e.changedTouches[0].pageX;
    lastContext.pageY = e.changedTouches[0].pageY;
    lastContext.clientX = e.changedTouches[0].clientX;
    lastContext.clientY = e.changedTouches[0].clientY;
    longTouchID = setTimeout(longTouch, 1000);
}

function handleClick(e)
{
    if (menuShown)
    {
        menuShown = false;
        document.body.removeEventListener('click', handleClick, true);
        e.stopPropagation();
        e.preventDefault();
    }
}

function handleTouchEnd(e)
{
    if (longTouchID != 0)
        clearTimeout(longTouchID);
    if (menuShown)
    {
        document.body.addEventListener('click', handleClick, true);
        e.preventDefault();
    }
}

function pageLoad()
{
    if ($telerik.isMobileSafari)
    {
        var scrollArea = $telerik.$('.rsContent', $get('RadScheduler1'))[0];
        scrollArea.addEventListener('touchstart', handleTouchStart, false);
        scrollArea.addEventListener('touchend', handleTouchEnd, false);
    }
}
````


