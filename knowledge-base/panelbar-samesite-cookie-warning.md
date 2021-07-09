---
title: PanelBar SameSite Cookie warning 
description: Warning logged in browser console - Cookie RadPanelBar1 will be soon rejected because it has the SameSite attribute set to None or an invalid value, without the secure attribute 
type: troubleshooting
page_title: PanelBar SameSite Cookie warning
slug: panelbar-samesite-cookie-warning
position: 
tags: 
ticketid: 1526264
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadPanelBar for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

The following error message is logged in the browser's console:

**Cookie "RadPanelBar1" will be soon rejected because it has the "SameSite" attribute set to "None" or an invalid value, without the "secure" attribute. To know more about the "SameSite" attribute, read https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie/SameSite**

## Cause

The issue is observed in Mozilla FireFox and it was observed before in Chrome for some time. 

It is due to the missing "SameSite" attribute for a cookie, so a default value is used. Many browser's changed the default value to the most secure one, while this option needs to be manually enabled in FireFox. Check this resource for more info -  "Default to Lax" option:
- [https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite](https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie/SameSite)  

## Solution

Load the following script under the ScriptManager/RadScriptManager of the page:

````JavaScript
if (Telerik.Web.UI.RadPanelBar) {
    Telerik.Web.UI.RadPanelBar.prototype._persistState = function () {
        var cookieValue = "{";
        if (this.get_selectedItem()) {
            cookieValue += "\"SelectedItems\":" + this._selectedItemsJson + ",";
        }
        cookieValue += "\"ExpandedItems\":" + this._expandedItemsJson + "}";

        // Opera 9 and 10 don't recognize a cookie if there is " quote the name/value pair. Instead
        // ' quote should be used.
        document.cookie =
            (this.get_cookieName() + "=" + cookieValue + ";path=/;SameSite=Lax;expires=").replace(/"/g, "'");
    }
}
````


## See Also

- [https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie/SameSite](https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie/SameSite)
