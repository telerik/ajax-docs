---
title: RadSpell error - Web.config registration missing!
description: When users click on the RadSpell control, they get a Web.config registration missing? and a 404 - File or directory not found error
type: troubleshooting
page_title: RadSpell Error: Web.config registration missing! The Telerik dialogs require a HttpHandler registration in the web.config file.
slug: spell-error-web-config-registration-missing
position: 
tags: 
ticketid: 1442163
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadSpell for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
When users click on the RadSpell, it errors out with "Web.config registration missing? The Telerik dialogs require a HttpHandler registration in the web.config file." and a "404 - File or directory not found error" in the dialog title errors.

## Solution
* For the standalone RadSpell control: 

Set the AjaxUrl property in the RadSpell declaration:

````ASP.NET
<telerik:RadSpell ID="RadSpell1" runat="server" AjaxUrl="~/Telerik.Web.UI.SpellCheckHandler.ashx" HandlerUrl="~/Telerik.Web.UI.DialogHandler.axd" ControlsToCheck="TextBox1" />
````

and in the web.config file register the handlers as follows:

````ASP.NET
<httpHandlers>
<add path="Telerik.Web.UI.DialogHandler.axd" type="Telerik.Web.UI.DialogHandler" verb="*" validate="false"/>
<add path="Telerik.Web.UI.SpellCheckHandler.ashx" type="Telerik.Web.UI.SpellCheckHandler" verb="*" validate="false"/>

</httpHandlers>

...

<system.webServer>
<modules runAllManagedModulesForAllRequests="true"/>
<validation validateIntegratedModeConfiguration="false"/>
<handlers>
<add name="Telerik_Web_UI_DialogHandler_axd" verb="*" preCondition="integratedMode" path="Telerik.Web.UI.DialogHandler.axd" type="Telerik.Web.UI.DialogHandler"/>
<add name="Telerik_Web_UI_SpellCheckHandler_ashx" verb="*" preCondition="integratedMode" path="Telerik.Web.UI.SpellCheckHandler.ashx" type="Telerik.Web.UI.SpellCheckHandler"/>
</handlers>
</system.webServer>
````

* For RadSpell as part of RadEditor: the solution is identical as the above one, but requires you to set the AjaxUrl property trough the SpellCheckSettings inner tag/property of the control:

````ASP.NET
<telerik:RadEditor id="radE1" runat="server" DialogHandlerUrl="~/Telerik.Web.UI.DialogHandler.axd">
            <SpellCheckSettings DictionaryPath="~/App_Data/RadSpell"   AjaxUrl="~/Telerik.Web.UI.SpellCheckHandler.axd" />
</telerik:RadEditor>
````

For more information and solutions check out this [popular blog post](https://www.telerik.com/support/kb/aspnet-ajax/editor/details/error-web-config-registration-missing!-the-telerik-dialogs-require-a-httphandler-registration-in-the-web-config-file-).
