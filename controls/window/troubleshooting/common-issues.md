---
title: Common Issues
page_title: Common Issues | RadWindow for ASP.NET AJAX Documentation
description: Common Issues
slug: window/troubleshooting/common-issues
tags: common,issues
published: True
position: 1
---

# Common Issues

This article lists common issues and questions related to the **RadWindow** for ASP.NET AJAX control together with their solutions and answers.

* [General Troubleshooting](#general-troubleshooting)

* [Uncaught TypeError: p.onEvent is not a function](#uncaught-typeerror-ponevent-is-not-a-function)

* [RadMenu Overlaps RadWindow](#radmenu-overlaps-radwindow)

* [Video/Audio Keeps Playing After the RadWindow is Closed](#videoaudio-keeps-playing-after-the-radwindow-is-closed)

* [Using OffsetElementID and Top/Left Properties](#using-offsetelementid-and-topleft-properties)

* [OpenerElementID is not Working as Expected in Some Scenarios](#openerelementid-is-not-working-as-expected-in-some-scenarios)

* [Once a RadWindow is Closed, it "Loses" All Its Settings (Width, Height, Modality, etc.)](#once-a-radwindow-is-closed-it-loses-all-its-settings-width-height-modality-etc)

* [RadComboBox, RadCalendar, RadDatePicker, etc. Are Not Visible When a RadWindow is Maximized](#radcombobox-radcalendar-raddatepicker-etc-are-not-visible-when-a-radwindow-is-maximized)

* [RestrictionZondeID and MinimizeZoneID - Common Issues and Requirements](#restrictionzondeid-and-minimizezoneid---common-issues-and-requirements)

* [OnClientClose is not Fired](#onclientclose-is-not-fired)

* [Modal Overlay of RadWindow adds Scrollbars](#modal-overlay-of-radwindow-adds-scrollbars)

## General Troubleshooting

The RadWindow control is part of the [Telerik® UI for ASP.NET AJAX](https://www.telerik.com/products/aspnet-ajax.aspx) suite and is intended to replace the standard browser’s popup (`window.open()`). Since the control is based on an `<iframe>`, it behaves just like one – basically, whatever can be done with an `<iframe>`, can be achieved with RadWindow as well. This fact is useful when you investigate a reason for some problem related to the RadWindow control. Just replace the RadWindow with a standard `<iframe>` or browser’s popup and see how your application will behave in this case. If the problem still exists, then it is not related to the RadWindow control but is most probably a default browser’s behavior or a problem in the used logic itself.

## Uncaught TypeError: p.onEvent is not a function
### JavaScript runtime error: Object doesn't support property or method 'onEvent'

Sometimes, when a RadWindow is shown, you may get the `Uncaught TypeError: p.onEvent is not a function` or `JavaScript runtime error: Object doesn't support property or method 'onEvent'` error in the browser console. This is an issue related to the *Unobtrusive Validation* in .NET 4.5. It brings its own  global *jQuery* to the page which sometimes replaces the jQuery the Telerik controls bring.

There are two ways to fix the problem:

* Disable the Unobtrusive Validation:

	**web.config**

		<appSettings>
			<add key="ValidationSettings:UnobtrusiveValidationMode" value="None" />
		</appSettings>

* **OR**, configure your application to properly use Telerik controls and Unobtrusive validation by following the [jQuery Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/jquery-troubleshooting%}) help article.




## RadMenu Overlaps RadWindow

This behavior is expected – by design RadMenu has a higher z-Index value than the RadWindow control. This is needed in common cases where a [RestrictionZone](https://demos.telerik.com/aspnet-ajax/window/examples/restrictionzone/defaultcs.aspx) is used and the RadMenu control is above that zone. To render the RadWindow control above RadMenu, all you need to do is to change its z-Index, according to [this help article]({%slug controls/controlling-absolute-positioning-with-z-index%}). There is a [KB article](https://www.telerik.com/support/kb/aspnet-ajax/window/show-radwindow-above-radmenu.aspx) on the same subject as well. For example:

````ASP.NET
<telerik:RadWindowManager RenderMode="Lightweight" ID="RadWindowManager1" runat="server" Style="z-index: 9999;">
</telerik:RadWindowManager>
````



## Video/Audio Keeps Playing After the RadWindow is Closed

This happens because, by default, when a RadWindow is closed, its object is not destroyed but remains hidden on the page so it can be quickly called again when needed. There are 2 ways to avoid that issue:

* Set **DestroyOnClose=true**. See [below](#once-a-radwindow-is-closed-it-loses-all-its-settings-width-height-modality-etc) for more details on the subject.

* Use the **OnClientClose** event handler that is called every time when a RadWindow is closed. There you could

	* use the API of the media control to pause/stop it

	* use the `setUrl()` client-side method to change the content page’s URL which will stop the media as well. e.g.

		**JavaScript**

			function ShowWindow() {
				var oWnd = window.radopen('Dialog1.aspx', 'window1'); //Opens the window  
				oWnd.add_close(OnClientClose); //set a function to be called when RadWindow is closed  
			}

			function OnClientClose(oWnd) {
				oWnd.setUrl("about:blank"); // Sets url to blank 
				oWnd.remove_close(OnClientClose); //remove the close handler - it will be set again on the next opening 
			}      


		**ASP.NET**

			<telerik:RadWindowManager RenderMode="Lightweight" ID="RadWindowManager1" runat="server"> 
			</telerik:RadWindowManager> 
			<button onclick="ShowWindow(); return false;">open RadWindow</button> 





## Using OffsetElementID and Top/Left Properties

When `OffsetElementID` is specified, Top and Left are calculated towards that element's top left corner. If `OffsetElementID` is not specified, Top and Left are calculated towards the page's top left corner.Top and Left can be used along with the `RestrictionZoneID` property as well - if the `RestrictionZoneID` property is set,Top and Left will be calculated towards the top left corner of the restriction zone.

## OpenerElementID is not Working as Expected in Some Scenarios

By using the `OpenerElementID` property it is possible to specify the id of an HTML element that, when clicked, will automatically open the corresponding RadWindow object. The opener can be any element on the page that has an ID attribute - the property expect a client ID, so if you are setting it to a server element, you need to use its ClientID `OpenerElementID="<%# ServerButton.ClientID %>"` or set it from the server code.

>note Note that if you set this property to a postback element like asp:Button control, the server-side click event of that element will not fire. That is why we recommend using OpenerElementID in simple scenarios only. OpenerElementID is not suitable for ajaxified and databinding scenarios as well. For example if you have a standard asp:Repeater control or RadGrid where you need to open RadWindows by clicking some elements in the columns, you will have to declare number of RadWindows equal to the number of the opener elements in the grid. In such scenarios it is recommended to use RadWindow's client-side or server-side API.

## Once a RadWindow is Closed, it "Loses" All Its Settings (Width, Height, Modality, etc.)

This could happen if you have set `DestroyOnClose` to true. When this property is set to true, RadWindow’s object will be destroyed once the window is closed. This, however, means that you will not be able to open that same RadWindow again until the whole page is reloaded. In such scenario, it will be best to either set all needed properties (width, height, modality, etc.) to the RadWindowManager or as an alternative – to use the [client-side API]({%slug window/client-side-programming/radwindow-object%}) and set them when opening the RadWindow.

## RadComboBox, RadCalendar, RadDatePicker, etc. Are Not Visible When a RadWindow is Maximized

By default, when maximized, a **RadWindow** changes its z-index to a very high value (100 000) in order to ensure that it is the topmost control on the page. If its **ContentTemplate** is used then the controls inside are part of the main page and normal z-index rules apply to them as well. This means that they will be hidden behind the popup element of the RadWindow with its new value. You can find a list with the default z-index values in [this help article]({%slug controls/controlling-absolute-positioning-with-z-index%}).

There is an easy way to control this behavior - setting the **ShowOnTopWhenMaximized** property of the **RadWindow** to **false** will prevent this z-index increase and the control will behave the same way in maximized and non-maximized state. The default value of this property is **true**.

## RestrictionZondeID and MinimizeZoneID - Common Issues and Requirements

The **RestrictionZoneID** can be useful, but due to the way HTML works it has some requirements in order to function properly. The main concern is that pure HTML elements do not fire resize events, so the control cannot be notified if their dimensions or positions change. This means that the **HTML element** whose **ClientID** is passed to the **RestrictionZoneID** property **must have static dimensions set in**. Also, **the size of the restriction zone must be large enough to accommodate the RadWindows that will be opened inside. These dimensions must not change during runtime** because such a modification can lead to a RadWindow being left outside of its zone which is an incorrect scenario and cannot be handled by the control. If we move the control automatically this is behavior that is not initiated by the user and is perceived as buggy; if we modify the size of the popup this may break the functionality required by the developer; if we modify the restriction zone we may break the page layout.

Similar restrictions and requirements apply to the **MinimizeZoneID** property. What is also important with it is that using it moves the RadWnidow in the DOM - upon minimizing it goes inside the element, upon restoring - back to being a direct child of the form. **This DOM modification causes iframes to reload**. This can be avoided by creating an MDI-like interface by following [this online demo](https://demos.telerik.com/aspnet-ajax/window/examples/radwindowandmdi/defaultcs.aspx).

Here is an example that shows how you can set and remove restriction zones dynamically:

* Pass a `string` with the client-side `id` of the HTML element to set it, and ensure the RadWindow can fit in it before that
* Pass `null` to remove the restriction zone.

Note that some limitations may still apply.

````
<telerik:RadWindowManager runat="server" ID="rwm1" RenderMode="Lightweight"></telerik:RadWindowManager>
<div style="width: 500px; height: 300px; border: 2px solid red;" id="zone"></div>
<script>
	function openDialog() {
		var wndName = "desiredWindowName";
		var startWidth = 400;
		var startHeight = 200;
		var wnd = radopen(null, wndName, startWidth, startHeight);

		wnd.setSize(800, 600);//emulate a RadWindow bigger than its zone

		//before putting the RadWIndow in a zone, ensure it is contained in it, for example
		var $zone = $telerik.$("#zone");
		var wndSize = wnd.getWindowBounds();
		var zoneBounds = $zone.offset();
		var wndWidth = Math.min($zone.width() - 2, wndSize.width);
		var wndHeight = Math.min($zone.height() - 2, wndSize.height);
		if (wndSize.width > wndWidth || wndSize.height > wndHeight) {
			//the internal code will not do this because
			//changing the size is unexpected and should not happen unless the developer issues a command
			//Without the size change the RadWindow behavior may be unexpected or erratic
			wnd.setSize(wndWidth, wndHeight);
		}
		wnd.moveTo(zoneBounds.left + 1, zoneBounds.top + 1);

		//set the client-side ID of the element
		wnd.set_restrictionZoneID("zone");

		//this is how to remove a zone - pass null
		wnd.set_restrictionZoneID(null);

		Sys.Application.remove_load(openDialog);
	}
	Sys.Application.add_load(openDialog);

	//add this if you get errors when calling set_restrictionZoneID(null);
	//Telerik.Web.UI.RadWindow.prototype.set_restrictionZoneID = function(value) {
	//	this._restrictionZoneID = value;
	//	if (value && this.isCreated()) {
	//		this.fitInRestrictionZone();
	//	}
	//}
</script>
```` 


## OnClientClose is not Fired

When **AjaxControlToolkit**'s dll is present in bin folder and `DestroyOnClose` is set to `true` for a `RadWindow`/`RadWindowManager`, the `OnClientClose` event is fired only the first time a `RadWindow` is closed. Moreover, if there is more than one instance with this event attached, all handlers may be fired for that first dialog.

The problem stems from overrides in the event handling of MS AJAX that AjaxControlToolkit outputs to the page.

There are two workarounds:

* remove the AjaxControlToolkit from the project

* set `DestryOnClose` to `false`

## Modal Overlay of RadWindow adds Scrollbars

Commonly, due to design requirments, the body or the form have additoinal relative parents or a CSS rule `margin: 0 auto;`. This causes the modal overlay to miscaulculate the DOM element for the modality and add additinal offset. 

There are several workarounds you can consider implementing: 

* Make sure that the `<body>` or the `<form>` are the offset parents of the modal overlay. Further custom decoration should be applied to the form's content so that not affect RadWindow and its modality. 
* Remove the scrollbars of the page when RadWindow opens and restore the when closed. Like in the example below: 
    
    **JavaScript**

        var bodyOverflow = "";   
        var htmlOverflow = "";   
        function openRadWindow()    
        {   
            //store the overflow   
            bodyOverflow = document.body.style.overflow;   
            htmlOverflow = document.documentElement.style.overflow;   
            //hide the overflow   
            document.body.style.overflow = "hidden";   
            document.documentElement.style.overflow = "hidden";   
            var oWnd = window.radopen(null, "RadWindow1");   
            oWnd.add_close(closeHandler);   
        }   
               
        function closeHandler(sender, args)   
        {   
            //restore the overflow   
            document.body.style.overflow = bodyOverflow;   
            document.documentElement.style.overflow = htmlOverflow;   
            sender.remove_close(closeHandler);   
        }
