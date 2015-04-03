---
title: Using the Telerik Controls in Mobile Browsers
page_title: Using the Telerik Controls in Mobile Browsers | UI for ASP.NET AJAX Documentation
description: Using the Telerik Controls in Mobile Browsers
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/using-the-telerik-controls-in-mobile-browsers
tags: using,the,telerik,controls,in,mobile,browsers
published: False
position: 5
---

# Using the Telerik Controls in Mobile Browsers



Most smartphone mobile browsers currently on the market are fairly advanced and Telerik UI for ASP.NET AJAX work on them with little or no modifications.

## 

However there are certain specifics in these browsers that one needs to know in order to have Telerik controls working to their full extent:

* __Hover events are fired on touch/click__ since there is no actual hover in touchscreen devices. This also means that elements shown on hover will be shown on click. For instance to see the submenus in RadMenu, __don’t set NavigateUrls on expandable items;__

* __Double click is usually reserved for zoom__ and is not fired as event;

* Some browsers __show a context menu on touch & hold__ but a __contextmenu event is either not fired and/or the browser menu can’t be cancelled__. Touch & hold event can be implemented manually, but more on this later;

* __Scrolling__ in mobile browsers is usually __handled with drag gestures__, which means that __"normal" drag&drop is not working;__

* Clicking on editable input elements will bring up the virtual keyboard whenever necessary, so the visible space is shrinked;

* __Scrolling containers__ in Mobile Safari are rendered with overflow: hidden and __can only be scrolled with two finger drag gesture__. We developed a special TouchScrollExtender client control to handle this, check the appropriate topic in this section;

* __ContentEditable is not supported in Mobile Safari up to iOS 4.0__, which means that RadEditor will be rendered as a simple textarea.

* __iOS Mobile Safari doesn’t support input elements with type=”file”__, so it will be rendered as __disabled__ (hence RadAsyncUpload/RadUpload won’t work).

Some browsers implemented special touch events for mobile devices - namely __touchstart, touchmove__ and __touchend__ in Mobile Safari and __MozTouchDown, MozTouchMove__ and __MozTouchUp__ in Mozilla Mobile Firefox (Fennec) which can be used to overcome some of the listed problems. Unfortunately __IE7+ in Microsoft Windows Phone 7 and both mobile Opera browsers do not have touch events support of either kind__, so they are automatically falling out of scope for this article and should be handled as normal desktop browsers if possible.

### Implementing Touch & Hold event

Since most mobile browsers do not support contextmenu event properly, we will need to handle it ourselves. This can be done using a click event and a timeout and to raise the context menu event we will need the original event coordinates. For instance let’s get a RadScheduler (it has two context menu events):

````ASPNET
	    <telerik:RadScheduler runat="server" ID="RadScheduler1" SelectedDate="2009-02-02"
	        DayStartTime="06:00:00" DayEndTime="23:30:00" Width="100%" DataSubjectField="AppointmentSubject"
	        DataStartField="StartTime" DataEndField="EndTime" DataKeyField="AppointmentID"
	        ShowAllDayRow="false" HoursPanelTimeFormat="hh:mm tt" ProviderName="ReadOnlyXmlSchedulerProvider">
	        <TimeSlotContextMenuSettings EnableDefault="true" />
	        <AppointmentContextMenuSettings EnableDefault="true" />
	        <AdvancedForm Modal="true" />
	    </telerik:RadScheduler>
````



And add this javascript to fire the context menu events when touch and hold for a second in Mobile Safari:

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


