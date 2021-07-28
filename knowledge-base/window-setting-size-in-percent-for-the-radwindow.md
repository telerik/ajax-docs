---
title: Setting size in percent for the RadWindow
description: Setting size in percent for the RadWindow. Check it now!
type: how-to
page_title: Setting size in percent for the RadWindow
slug: window-setting-size-in-percent-for-the-radwindow
res_type: kb
---


   
## How to

Set the size of a **RadWindow** in percent.  
   

## Description

The **RadWindow** supports its size in pixels only, as does any other window, e.g. in the operating system - changing the screen resolution or adding other elements in the viewport do not change the dimensions of the already existing windows. Therefore the **RadWindow** has the same behavior.  
   
   
   
   
## Solution

You can use a combination of the RadWIndow's [client-side API](https://docs.telerik.com/devtools/aspnet-ajax/controls/window/client-side-programming/radwindow-object)and jQuery to calculate the needed dimensions in pixels from the available viewport and set them to the RadWindow. You should also handle the window.resize event in order to recalculate the size when the browser size changes:  

get the viewport size:  
 
````
var browserWidth = $telerik.$(window).width();
var browserHeight = $telerik.$(window).height();
````
   
change the RadWindow size where value is the size in percent you need:  
 
````
oWnd.setSize(Math.ceil(browserWidth * value / 100), Math.ceil(browserHeight * value / 100));
````   

You can then center the RadWindow:  
 
````
oWnd.center();
````
   
This can be encapsulated in a function that will be called after the browser is resized. Note how the timeout is used to ensure that the handler is called only once, because older browsers throw the window.resize event numerous times which may result in poor performance without such an insurance:  
 
````
$telerik.$(window).resize(function ()
{
    clearTimeout(TO);
    TO = setTimeout(sizeWindowInPercentage, 100);
});
````

Where TO is a global JavaScript variable that holds the timeout.  
   

A simple page that shows the approach in action is shown below. Inside there are comments that explain in greater detail what the code does. This can be used as base for further extending this scenario, but you should keep in mind that it has its limitations - e.g. it cannot work for a restriction zone as you cannot handle the zone's size change, there is simply no such event. 

````ASPX
<asp:ScriptManager ID="Scriptmanager1" runat="server" />
<telerik:RadWindow ID="RadWindow1" runat="server">
	<ContentTemplate>
		Some sample content
	</ContentTemplate>
</telerik:RadWindow>
<asp:HiddenField ID="wndPercentageValue" runat="server" />
<asp:Button ID="Button1" runat="server" Text="40% Window" OnClientClick="showWindowInPercentage(40); return false;" />
<asp:Button ID="Button2" runat="server" Text="80% Window" OnClientClick="showWindowInPercentage(80); return false;" />
<script type="text/javascript">
	var TO;
	var oWnd;
	function pageLoad()
	{
		//populate the global variable that holds a reference to the RadWindow
		oWnd = $find("<%=RadWindow1.ClientID %>");

		//attach to the window.resize event to resize the RadWindow when the browser changes size
		$telerik.$(window).resize(function ()
		{
			clearTimeout(TO);

			//some timeout that prevents numerous event fires thus reducing the calculations needed
			//ultimately resulting in better performance
			//you can change the time to fit your taste
			TO = setTimeout(sizeWindowInPercentage, 100);
		});
	}

	function showWindowInPercentage(value)
	{
		//store the percent value in a hidden field for later use
		//a global variable can be used as well
		$telerik.$("#wndPercentageValue").attr("value", value);
		oWnd.show();
		sizeWindowInPercentage();
	}

	function sizeWindowInPercentage()
	{
		//check first if the RadWindow is shown, if it is not we cannot resize it
		if (oWnd.isVisible())
		{
			//obtain the necessary values - percent and viewport size
			var value = $telerik.$("#wndPercentageValue").attr("value");
			var browserWidth = $telerik.$(window).width();
			var browserHeight = $telerik.$(window).height();

			//resize the RadWindow
			oWnd.setSize(Math.ceil(browserWidth * value / 100), Math.ceil(browserHeight * value / 100));

			//optionally you may also center the RadWindow
			//otherwise it will stay where the original calculation for its top left corner leaves it
			oWnd.center();
		}
	}
</script>
````

