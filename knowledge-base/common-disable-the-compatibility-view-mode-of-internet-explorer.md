---
title: Disable the Compatibility View mode of Internet Explorer
description: Disable the Compatibility View mode of Internet Explorer. Check it now!
type: troubleshooting
page_title: Disable the Compatibility View mode of Internet Explorer
slug: common-disable-the-compatibility-view-mode-of-internet-explorer
res_type: kb
---


## Description

The Compatibility mode of Internet Explorer renders the page as in IE7. This browser is no longer supported neither by Microsoft, nor by the Telerik UI for ASP.NET AJAX components which are HTML5 and CSS3 based.

If you experience styling or functional problems in Internet Explorer, the first thing to check is whether the page is rendered in compatibility mode (IE7 mode). This can be done by showing the console with F12 and executing the following JS line in it:

````
alert(document.documentMode);
````

Another way is to go to the Emulation tab and check the value of the Document Mode and User Agent String. If the values point to 7 or IE7 than the browser is placed in compatibility mode.

If this is the case, you will need to disable the compatibility and force the browser in its native mode.

## Solution

There are a couple of ways to disable the compatibility mode:

 * add an [X-UA Compatible meta tag](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/jj676915(v=vs.85)) to your page: 


 ````HTML
 <head id="Head1" runat="server">
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
 ...
 ````

 * Set it as an **HTTP response header in the IIS** settings as explained in Microsoft's article [How to add a custom HTTP response header to a Web site that is hosted by IIS](https://docs.microsoft.com/en-US/troubleshoot/iis/add-http-response-header-web-site).

 * Another option to set the response header is through your web.config: 

 ````
 <system.webServer>
    <httpProtocol>
      <customHeaders>
        <add name="X-UA-Compatible" value="IE=edge" />
      </customHeaders>
    </httpProtocol>
 </system.webServer>
 ````

 * If the compatibility mode is enabled by a **group policy** - speak with your local administrators so they enforce this checkbox rule as a group policy.  This is needed because when the Compatibility mode is enabled by a Group Policy setting, the X-UA Compatible meta tag is ignored.


## See Also

* [Different appearance or behavior in Internet Explorer on local and production servers]({%slug common-different-appearance-in-internet-explorer-on-local-and-production-servers%})

* [Skins Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/skins-troubleshooting%})


