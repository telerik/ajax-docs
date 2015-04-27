---
title: Controlling Appearance
page_title: Controlling Appearance | RadSpell for ASP.NET AJAX Documentation
description: Controlling Appearance
slug: spell/appearance-and-styling/controlling-appearance
tags: controlling,appearance
published: True
position: 1
---

# Controlling Appearance



## 

The visual aspects of RadSpell consist of the button or link that triggers the spell check and the dialog for the spell check. You can control the appearance by the following methods:

* RadSpell descends from [WebControl](http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.webcontrol_members.aspx) in the System.Web.UI.WebControls namespace and has standard properties for Width, Height, BackColor, BorderWith, BorderStyle, Font, ForeColor, etc. These properties apply to the button or link and can be modified at design or run-time.

* Set the RadSpell CSSClass property to change the RadSpell button or link visual properties through styles.

* Set the **AllowAddCustom**property to true (the default) to enable the "Add Custom" button in the spell check dialog.

* Set the **ButtonType**property to show the spell check trigger as a **PushButton**, **LinkButton**, **ImageButton** or **None**. The **ImageButton** value renders a link with assigned **.rscLinkImg** class that can be used to modify the look of the rendered control. A sample implementation of custom CSS for RadSpell's ImageButton can be seen in the [default demo](http://demos.telerik.com/aspnet-ajax/spell/examples/whatsnew/defaultcs.aspx).

* Change the look and feel for the RadSpell dialog by selecting a predefined [skin]({%slug spell/appearance-and-styling/skins%}).
