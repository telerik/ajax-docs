---
title: Filter Does Not Work when You Tab to the Combobox
page_title: Filter Does Not Work when You Tab to the Combobox | UI for ASP.NET AJAX Documentation
description: Filter Does Not Work when You Tab to the Combobox
slug: combobox/troubleshooting/filter-does-not-work-when-you-tab-to-the-combobox
tags: filter,does,not,work,when,you,tab,to,the,combobox
published: True
position: 9
---

# Filter Does Not Work when You Tab to the Combobox



## 

__PROBLEM__

When the [Filter property]({%slug combobox/functionality/filtering%}) is set and you tab to RadComboBox and start typing the dropdown is not opened thus you might think that the filtering is not working.

__SOLUTION__

The filtering is working, but to see the results you need to open the dropdown when the user starts typing. To do this simply subscribe to the [OnClientKeyPressing]({%slug combobox/client-side-programming/events/onclientkeypressing%}) event and open the dropdown:

````ASPNET
	    <telerik:RadComboBox ID="RadComboBox1" runat="server"
	      Filter="Contains"  
	      OnClientKeyPressing="(function(sender, e){ if (!sender.get_dropDownVisible()) sender.showDropDown(); })" >  ... 
				
````


