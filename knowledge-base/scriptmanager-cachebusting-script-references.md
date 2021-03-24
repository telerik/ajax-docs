---
title: Cache busting script references with RadScriptManager
description: Prevent retrieving script references from the cache and force the browser to request the new file.
type: how-to
page_title: Cache busting scripts with RadScriptManager
slug: scriptmanager-cachebusting-script-references
position: 
tags: radscriptmanager, scriptmanager, cache
ticketid: 450842
res_type: kb
---

## Description

The script files as any other external resources are being chached by the browsers. This often leads to using an older version of a script. Check out how you can implement custom cache busting for script references in RadScriptManager and control the script caching.


## Solution

When custom scripts are referenced with the **Path** property of a ScriptReference we can use the **ResolveScriptReference** event of the **RadScriptManager** to dynamically modify the path and ensure the script is always loaded from the server and not from the browser's cache.

We can use a custom query string to manipulate the requested path to the script file:

````ASPX
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" OnResolveScriptReference="RadScriptManager1_ResolveScriptReference">
    <Scripts>
        <telerik:RadScriptReference Path="~/scripts.js?cache-buster-v" />
    </Scripts>
</telerik:RadScriptManager>
````

````C#
protected void RadScriptManager1_ResolveScriptReference(object sender, ScriptReferenceEventArgs e)
{
    if (e.Script.Path.ToLower().EndsWith("cache-buster-v"))
    {
        e.Script.Path += "=" + DateTime.Now.ToString("yyyy-MM-dd");
    }
}
````
````VB
Protected Sub RadScriptManager1_ResolveScriptReference(sender As Object, e As ScriptReferenceEventArgs)
    If (e.Script.Path.ToLower().EndsWith("cache-buster-v")) Then
        e.Script.Path += "=" + DateTime.Now.ToString("yyyy-MM-dd")
    End If
End Sub
````

This way the script will be loaded with a custom query parameter that will help us ensure using the latest version of a script file:

````HTML
<script src="scripts.js?cache-buster-v=2021-03-24" type="text/javascript"></script>
````

>note The same approach is also applicable with asp:ScriptManager.
>

Find a discussion about cache busting scripts and stylesheets in the following forum: [How to force CSS to reload using RadStyleSheetManager?](https://www.telerik.com/forums/how-to-force-css-to-reload-using-radstylesheetmanager) 


