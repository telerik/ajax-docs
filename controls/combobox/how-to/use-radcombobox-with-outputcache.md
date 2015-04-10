---
title: Use RadComboBox with OutputCache
page_title: Use RadComboBox with OutputCache | UI for ASP.NET AJAX Documentation
description: Use RadComboBox with OutputCache
slug: combobox/how-to/use-radcombobox-with-outputcache
tags: use,radcombobox,with,outputcache
published: True
position: 10
---

# Use RadComboBox with OutputCache



## 

To use RadComboBox with OutputCache you need to manually register the javascript files that are used by the control and the skin's CSS file.

1. __Register the javascript files__. To be sure which files are needed you can check the[Disabling the Embedded Resources](F02D3323-FFA7-46E6-A4DE-303D5EF15A43) help topic. You need those javascript files that are mentioned there. Here are they are for the Q2 2009 and later versions:

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



Note that the order is important so keep it this way. These javascript files reside in the __/Scripts__ folder of your installation.

2. Set the __EnableEmbeddedScripts__ to False.

3. __Register the skin's CSS files__.

Find the __Skins__ folder in your local installation of Telerik.Web.UI. With default installation the path to the skins folder would be: *Program Files\telerik\RadControls for ASPNET AJAX Q3 2009\Skins*

* Copy the ComboBox.css file to your application. Register it on your page. (Note, this step applies only for __Q3 2009 and above versions__).

* Go to the Skin folder of your choice, e.g. Vista. Copy the __ComboBox.Vista.css__ file and the __ComboBox__ folder to your application. Register the css file on your page.

````ASPNET
	    <link href="~/Skins/Vista/ComboBox.Vista.css" rel="stylesheet" type="text/css" />
	    <link href="~/Skins/Vista/ComboBox.css" rel="stylesheet" type="text/css" />
````



4. Set the __EnableEmbeddedBaseStylesheet__ and __EnableEmbeddedSkins__ to False.
