---
title: Use RadComboBox with OutputCache
page_title: Use RadComboBox with OutputCache | RadComboBox for ASP.NET AJAX Documentation
description: Use RadComboBox with OutputCache
slug: combobox/how-to/use-radcombobox-with-outputcache
tags: use,radcombobox,with,outputcache
published: True
position: 10
---

# Use RadComboBox with OutputCache



## 

To use RadComboBox with OutputCache you need to manually register the javascript files that are used by the control and the skin's CSS file.

1. **Register the javascript files**. To be sure which files are needed you can check the [Disabling the Embedded Resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}) help topic. You need those javascript files that are mentioned there. Here are they are for the Q2 2009 and later versions:

````ASPNET
<asp:RadScriptManager ID="RadScriptManager1" runat="server">
	<scripts>        
		<asp:ScriptReference Path="RadControls/Scripts/Common/Core.js" />        
		<asp:ScriptReference Path="RadControls/Scripts/Common/jQuery.js" />        
		<asp:ScriptReference Path="RadControls/Scripts/Common/jQueryPlugins.js" />        
		<asp:ScriptReference Path="RadControls/Scripts/Common/Navigation/NavigationScripts.js" />       
		<asp:ScriptReference Path="RadControls/Scripts/Common/Animation/AnimationScripts.js" />        
		<asp:ScriptReference Path="RadControls/Scripts/ComboBox/RadComboBoxScripts.js" />               
	</scripts>
</asp:RadScriptManager>
````



Note that the order is important so keep it this way. These javascript files reside in the **/Scripts** folder of your installation.

2. Set the **EnableEmbeddedScripts** to False.

3. **Register the skin's CSS files**.

Find the **Skins** folder in your local installation of Telerik.Web.UI. With default installation the path to the skins folder would be: *Program Files\Progress\UI for ASP.NET AJAX RX YYYY\Skins*

* Copy the ComboBox.css file to your application. Register it on your page. (Note, this step applies only for **Q3 2009 and above versions**).

* Go to the Skin folder of your choice, e.g. Vista. Copy the **ComboBox.Vista.css** file and the **ComboBox** folder to your application. Register the css file on your page.

````ASPNET
<link href="~/Skins/Vista/ComboBox.Vista.css" rel="stylesheet" type="text/css" />
<link href="~/Skins/Vista/ComboBox.css" rel="stylesheet" type="text/css" />
````



4. Set the **EnableEmbeddedBaseStylesheet** and **EnableEmbeddedSkins** to False.
