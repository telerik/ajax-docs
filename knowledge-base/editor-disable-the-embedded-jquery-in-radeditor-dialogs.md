---
title: Disable the Embedded jQuery in RadEditor dialogs
description: See how to disable the built-in jQuery in RadEditor dialogs.
type: how-to
page_title: Disable the Embedded jQuery in RadEditor dialogs
slug: editor-disable-the-embedded-jquery-in-radeditor-dialogs
res_type: kb
---

## How-To

Disable the Embedded jQuery in RadEditor dialogs and adding a different version of the popular JavaScript library to them.

<iframe width="560" height="315" src="https://www.youtube.com/embed/gU59IWJqNTQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Solution

The solution provided in the documentation [Disabling the Embedded jQuery](https://docs.telerik.com/devtools/aspnet-ajax/controls/scriptmanager/disabling-the-embedded-jquery) does not completely cover the scenario with importing different version of jQuery in RadEditor dialogs. Follow the instructions below to disable the embedded jQuery and add your own version of it (in our example it will be jQuery v.3.3.1):
Disable the built-in jQuery from the aspx page and add reference to the new jQuery file:

ASPX
````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server" EnableEmbeddedjQuery="false" EnableScriptCombine="false">
    <Scripts>
        <asp:ScriptReference  Path="~/jquery-3.3.1.min.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryExternal.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryPlugins.js" />
    </Scripts>
</telerik:RadScriptManager>
````
You can also globally disable the embedded jQuery via the web.config file:  
 
Web.config
````XML
<appSettings>
  <add key="Telerik.ScriptManager.EnableEmbeddedjQuery" value="false" />
</appSettings>
````
 
[Register the external dialog files](https://demos.telerik.com/aspnet-ajax/editor/examples/externaldialogspath/defaultcs.aspx) of RadEditor by setting the ExternalDialogsPath property to point to the "~/EditorDialogs" folder which you can obtain from the controls installation:
 
ASPX
````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server" ExternalDialogsPath="~/EditorDialogs"></telerik:RadEditor>
````

Create a WebUserControl.ascx control in the EditorDialogs folder and put the following code in it:

````ASP.NET
<%@ Control Language="C#" AutoEventWireup="true"  %>
<script runat="server" type="text/C#"> 
    protected void Page_Init(object sender, System.EventArgs args)
    {
        ScriptManager sm = ScriptManager.GetCurrent(Page);
        if (sm != null && (sm as Telerik.Web.UI.RadScriptManager) != null)
        {
            sm.Scripts.Add(new ScriptReference("~/jquery-3.3.1.min.js"));
            sm.Scripts.Add(new ScriptReference("Telerik.Web.UI.Common.Core.js", "Telerik.Web.UI"));
            sm.Scripts.Add(new ScriptReference("Telerik.Web.UI.Common.jQueryExternal.js", "Telerik.Web.UI"));
            sm.Scripts.Add(new ScriptReference("Telerik.Web.UI.Common.jQueryPlugins.js", "Telerik.Web.UI"));
        }
    }
</script>
````

This will create a new RadScriptManager which will import the scripts in the correct order.
 
The final step is to register the WebUserControl.ascx inside the File Browser dialogs (FileBrowser.ascx), the Link Manager (LinkManager.ascx) and the rest of the dialogs available in your app:
 
LinkManager.ascx

````ASP.NET
<%@ Control Language="C#" %>
<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI.Editor" TagPrefix="tools" %>
<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI.Widgets" TagPrefix="widgets" %>
<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI.Dialogs" TagPrefix="dialogs" %>
<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>
<%@ Register Src="~/EditorDialogs/WebUserControl1.ascx" TagPrefix="uc1" TagName="WebUserControl1" %>
<uc1:WebUserControl1 runat="server" id="WebUserControl1" />
<script type="text/javascript">
...
````

## Pro Tips

You can check the used version of jQuery by launching the DevTools console (press F12) and writing:

* jQuery.fn.jquery - to see the jQuery used by the page
* $telerik.$.fn.jquery - to learn the jQuery version used by the Telerik controls
* change the scope of the target dropdown to Window (Telerik.Web.UI.DialogHandler.aspx) IFrame
and type $telerik.$.fn.jquery -to see the version used by the Telerik controls inside RadEditor's dialogs.

