---
title: Changes And Backward Compatibility Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: window/changes-and-backward-compatibility/overview
tags: overview
published: True
position: 0
---

# Changes And Backward Compatibility Overview



## Telerik RadWindow for ASP.NET AJAX

* A complete list of all changes can be found on Release History page:[http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx](http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx)

## Telerik RadWindow for ASP.NET AJAX Q2 2010

When the RadWindow's *ContentTemplate* element is used, then the control will not call its DataBind() method. This method is called in order to evaluate the databinding expressions that set RadWindow's properties. For example, setting the RadWindow's *OpenerElementID* property using the code shown bellow will not not work if the *ContentTemplate* element is used.

````ASPNET
	    <telerik:RadWindow 
	        ID="RadWindowDetails" 
	        runat="server" 
	        OpenerElementID="<%# ButtonOpenWindow.ClientID %>">
	    </telerik:RadWindow>
````





A complete list of all changes can be found on Release History page:

[ http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx ](http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx)



## Telerik RadWindow for ASP.NET AJAX Q1 2010

With the new version, the controls in the RadWindow's ContentTemplate are available to the page without using FindControl method. This could lead to problems if you have declared controls with the same ID in the RadWindow's content template and in the page.



## Telerik RadWindow for ASP.NET AJAX Q3 2009

* When a __RadWindow__ is declared in__RadWindowManager__ it preserves its ViewState which was not so in previous versions. This could lead to backwards incompatibility when the __VisibleOnPageLoad__ property is used in this configuration with the idea to show the __RadWindow__ only once. Possible solutions for this case are the following ones:

* Set __EnableViewState = "false"__ for the __RadWindowManager__

* Reset the __VisibleOnPageLoad__ property to __false__ with code when suitable, depending on the particular scenario

* Show the __RadWindow__ through registering a script from the server instead.

* The __ClientCallBackFunction__ property is removed and not used anymore. The arguments can be received in the OnClientClose function like shown in the [Using RadWindow as a Dialog]({%slug window/how-to/using-radwindow-as-a-dialog%}) article.

## Telerik RadWindow for ASP.NET AJAX Q2 2009

RadWindow for ASP.NET AJAX which is part of the Q2 2009 release is fully backwards compatible with its previous version (Q1 2009).

## Telerik RadWindow for ASP.NET AJAX Q1 2009

* Total redesign of the skins, which aims for a uniformity of the appearance of all controls in the suite in the cases they are used to build RIAs

* Refactoring of the CSS code to achieve better understanding, easier maintenance and handle problems with global styles

* Changes to the CSS classes, so now all controls for ASP.NET AJAX comply with a common naming conventionFor example was:__radwindow radwindow_Default__now:__RadWindow RadWindow_Default__

## Telerik RadWindow for ASP.NET AJAX Q3 2008

RadWindow for ASP.NET AJAX which is part of the Q3 2008 release is fully backwards compatible with its previous version (Q2 2008).



## Telerik RadWindow for ASP.NET AJAX Q2 2008

RadWindow for ASP.NET AJAX which is part of the Q2 2008 release is fully backwards compatible with its previous version (Q1 2008).





## Important - differences between RadWindow for ASP.NET and RadWindow for ASP.NET AJAX:

__RadWindow for ASP.NET AJAX__ control has changed slightly, because of moving to the ASP.NET Ajax framework and to the Telerik.Web.UI suite. A number of property and method names have changed, and a few properties and methods have been removed.

* On the Server-side, there have been some changes to the __RadWindowManager__ and __RadWindow__ classes:

* The following properties have been removed:


>caption  

|  __Class__  |  __Property__  |
| ------ | ------ |
|RadWindowManager|UseClassicWindows|
|RadWindowManager|SingleNonMinimizedWindow|
|RadWindow|Splash|

* For both classes, the following property names have changed:


>caption  

|  __Old name__  |  __New name__  |
| ------ | ------ |
|Behavior|Behaviors|
|InitialBehavior|InitialBehaviors|

* On the client-side, the API is completely changed to match the naming convention of the new framework. The following property names are changed:In __RadWindowManager__ class:


>caption  

|  __Old name__  |  __New name__  |
| ------ | ------ |
|Open|open|
|GetWindowByName|getWindowByName|
|GetWindowById|getWindowById|
|GetActiveWindow|getActiveWindow|
|GetWindowObjects|get_windows|
|GetWindows|GetWindows|
|Cascade|cascade|
|Tile|tile|
|RestoreAll|restoreAll|
|MaximizeAll|maximizeAll|
|MinimizeAll|minimizeAll|
|ShowAll|showAll|
|CloseAll|closeAll|
|CloseActiveWindow|closeActiveWindow|
|MinimizeActiveWindow|minimizeActiveWindow|
|RestoreActiveWindow|restoreActiveWindow|

* In __RadWindow__ class:


>caption  

|  __Old name__  |  __New name__  |
| ------ | ------ |
|GetWindowManager|get_windowManager|
|GetContentFrame|get_contentFrame|
|GetLeftPosition - removed|N/A|
|GetTopPosition - removed|N/A|
|GetTitlebar - removed|N/A|
|GetStatusbar - removed|N/A|
|SetOpenerElementId|set_openerElementID|
|SetStatus|set_status|
|GetStatus|get_status|
|SetModal|set_modal|
|SetWidth|set_width|
|SetHeight|set_height|
|GetWidth|get_width|
|GetHeight|get_height|
|SetOffsetElementId|set_offsetElementID|
|SetTitle|set_title|
|MoveTo|moveTo|
|Center|center|
|SetSize|setSize|
|Show|show|
|Hide|hide|
|GetUrl|get_navigateUrl|
|SetUrl|setUrl|
|Reload|reload|
|SetActive|setActive|
|Minimize|minimize|
|Restore|restore|
|Maximize|maximize|
|Close|close|
|TogglePin|togglePin|
|IsMaximized|isMaximized|
|IsMinimized|isMinimized|
|IsModal|isModal|
|IsClosed|isClosed|
|IsPinned|isPinned|
|IsVisible|isVisible|
|IsActive|isActive|
|IsBehaviorEnabled|isBehaviorEnabled|

# See Also

 * [RadWindow Object]({%slug window/client-side-programming/radwindow-object%})

 * [RadWindowManager Object]({%slug window/client-side-programming/radwindowmanager-object%})

 * [Migration from RadWindow for ASP.NET (Classic) to RadWindow for ASP.NET AJAX]({%slug window/changes-and-backward-compatibility/migration-from-radwindow-for-asp.net-(classic)-to-radwindow-for-asp.net-ajax%})

 * [Using RadWindow as a Dialog]({%slug window/how-to/using-radwindow-as-a-dialog%})
