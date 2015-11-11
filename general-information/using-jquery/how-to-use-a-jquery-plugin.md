---
title: How to Use a jQuery Plugin
page_title: How to Use a jQuery Plugin | UI for ASP.NET AJAX Documentation
description: How to Use a jQuery Plugin
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/how-to-use-a-jquery-plugin
tags: how,to,use,a,jquery,plugin
published: True
position: 3
---

# How to Use a jQuery Plugin



## 

Here is how to include any jQuery based plugin to your page when you are utilizing the jQuery built-in the Telerik.Web.UI assembly.

Add script references to the **Core.js**, **jQuery.js**,	**jQueryInclude.js** and the plugin files in the specified order shown in the sample below. (The code snippet uses the BlockUI.js file for the BlockUI plugin. Please replace it with the file of the desired plugin.)

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
    <Scripts>
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Detection.Detection.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
        <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryInclude.js" />
        <asp:ScriptReference Path="~/Scripts/jquery.blockUI.js" />
    </Scripts>
</telerik:RadScriptManager>
````



You are now ready to use the plugin:

````JavaScript
<script type="text/javascript">
   $(document).ready(function() {
       $('#demo3').click(function() {
           $.blockUI({ overlayCSS: { backgroundColor: '#00f'} });
           setTimeout($.unblockUI, 2000);
       });
   });
</script> 
````


### See Also

 * [Using jQuery]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/using-jquery%})

 * [jQuery Intellisense]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/using-jquery/jquery-intellisense%})
