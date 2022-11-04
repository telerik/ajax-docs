---
title: Assembly 'Telerik.Web.UI, Version=20xx.x.xxx.xx, Culture=neutral, PublicKeyToken=121fae78165ba3d4' contains a Web resource with name 'Telerik.Web.UI.Button.RadButton.js', but does not contain an embedded resource with name 'Telerik.Web.UI.Button.RadButton.js'.
description: The error happens after an upgrade from a version prior to 2012 to a version after 2014. Telerik UI for ASP.NET AJAX.
type: troubleshooting
page_title: Assembly 'Telerik.Web.UI contains a Web resource with name 'Telerik.Web.UI.Button.RadButton.js', but does not contain an embedded resource with the same name
slug: button-embedded-web-resources-missing-name-error
position: 
tags: 
ticketid: 836690
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2014.2 618+</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadButton for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The missing web resource name error happens after an upgrade from a version prior to 2012 to a version after 2014. Telerik UI for ASP.NET AJAX.

## Solution
Telerik UI for ASP.NET RadButton has been heavily refactored in 2014 and its combined scripts file was renamed to Telerik.Web.UI.Button.RadButtonScripts.js. 

If you are loading the RadButton scripts manually - you need to modify this line 

<asp:ScriptReference Path="~/Scripts/Button/RadButton.js" />

with this one: 

<asp:ScriptReference Path="~/Scripts/Button/RadButtonScripts.js" />

OR

<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Button.RadButtonScripts.js" />

OR to load [RadButton scripts from CDN]({%slug scriptmanager/cdn-support/overview%}). You can also enable a [local CDN]({%slug scriptmanager/cdn-support/custom-cdn-provider%}).
   
