---
title: Script Combining
page_title: Script Combining | RadScriptManager for ASP.NET AJAX Documentation
description: Script Combining
slug: scriptmanager/script-combining
tags: script,combining
published: False
position: 4
---

# Script Combining



## Script Combining

Starting from Q1 2013 RadScriptManager has the abitlity to combine external script files when the EnableScriptCombine="true" is set together with inbult Telerik scripts. Since this operation requires access to the project file structure, a 'safe' folder or a list of folders must be specified in the web.config file of the web application/site.

Here is the code that allows such functionality:

Add the following<appSetting/> entry in your *web.config*:

````ASPNET
			<appSettings> 
	        <add key="Telerik.Web.UI.ScriptFolders" value="~/pages/ScriptManager/;"/> 
	        </appSettings>
	
````



>caution The folder paths must be relative to the root of the application, e.g. *' **~/** path_to_folder'* .
>


Register the external scripts in **RadScriptManager**. The paths to the files can be relative to the root or to the folder containing the current page.

````ASPNET
<telerik:RadScriptManager ID="RadScriptManager2" runat="server" EnableScriptCombine="true"> 
<Scripts> 
	<asp:ScriptReference Path="File1.js" /> 
	<asp:ScriptReference Path="File2.js" /> 

</Scripts> 
</telerik:RadScriptManager> 
	
````


