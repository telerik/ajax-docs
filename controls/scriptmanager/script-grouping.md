---
title: Script Grouping
page_title: Script Grouping - RadScriptManager
description: Check our Web Forms article about Script Grouping.
slug: scriptmanager/script-grouping
tags: script,grouping
published: True
position: 3
---

# Script Grouping



With **Q3 2011 SP RadScriptManager** supports script grouping. Script groups and their script references are defined as below:

````ASPNET
	
<telerik:RadScriptManager ID="ScriptManager1" runat="server">
	<Groups>
		<telerik:ScriptReferenceGroup>
			<Scripts>
				<asp:ScriptReference Assembly="[Assembly1]" Name="[Name1]" />
				<asp:ScriptReference Assembly="[Assembly2]" Name="[Name2]" />
				<%-- etc. --%>
			</Scripts>
		</telerik:ScriptReferenceGroup>
		<%-- etc. --%>
	</Groups>
</telerik:RadScriptManager>
	
````



The request order of the groups is the same as the order in which they are defined. Scripts added in the Script collection of **RadScriptManager**, i.e. are not grouped, are requested before all groups and after the MX AJAX scripts. (The latter is the normal ordering without grouping.)

>note Script grouping works only when **RadScriptManager** combines the scripts it serves (i.e. its **EnableScriptCombine** property is set to **True** (the default value)).
>


## Problem

Script grouping is useful in cases where there are a number of scripts, which are always requested on most pages of a web site. Without script grouping they and the rest of the specific scripts of the page are combined into one file by default. Since the URL to **Telerik.Web.UI.WebResource.axd** reflects the scripts that are combined, the URL varies from page to page with each different combination and in the end the common scripts are always transferred between the handler and the browser without the latter being able to cache them (if caching is enabled).

## Solution (Example)

Script grouping aims to solve that problem. Imagine the following setup. There is a page with a RadComboBox and one with a RadTreeView. Both RadControls depend on three scripts – Core.js, jQuery.js and jQueryPlugins.js. What if you could combine these three into one file? The browser will cache the file after the first time it requests it (page1) and the second time (page2) it will load it immediately from its cache. Here is how to achieve this with **RadScriptManager**:

````ASPNET
	
<telerik:RadScriptManager ID="ScriptManager1" runat="server">
	<Groups>
		<telerik:ScriptReferenceGroup>
			<Scripts>
				<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
				<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
				<asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryPlugins.js" />
			</Scripts>
		</telerik:ScriptReferenceGroup>
	</Groups>
</telerik:RadScriptManager>
	
````



What could appear as a downside of the approach is that the one request that was before employing grouping now breaks down to three requests:

* One for MicrosoftAjax.js and MicrosoftAjaxWebForms.js;

* One for Core.js, jQuery.js and jQueryPlugins.js;

* One for RadComboBoxScripts.js;

In actuality this is not the case, i.e. it is a benefit because:

* The browser will cache the first two requests the first time it loads them;

* Each subsequent request for these files on other pages will be fetched from the browser cache immediately;

* There will be only one actual request for the rest of the scripts of the other page;
