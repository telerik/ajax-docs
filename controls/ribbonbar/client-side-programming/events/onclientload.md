---
title: OnClientLoad
page_title: OnClientLoad - RadRibbonBar
description: Check our Web Forms article about OnClientLoad.
slug: ribbonbar/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 1
---

# OnClientLoad



## 

The **OnClientLoad** client-side event occurs when the RadRibbonBar is first loaded and fully initialized on the client. The event handler receives a single parameter: the instance of the ribbonbar firing the event.

````JavaScript
				
function OnClientLoad(sender, args) {

	var ribbonbar = $find("RadRibbonBar1");
	var tab0 = ribbonbar.get_tabs().getTab(0);
	//tab0.set_text("NewTab0");
	var group0 = tab0.get_groups().getGroup(0);
	//group0.set_text("NewGroup0");
	var item0 = group0.get_items().getItem(0);
	//returns the text of the first button in the first group of the first tab
	alert(item0.get_text());

}
	
````



# See Also

 * [Client-Side Programming Overview]({%slug ribbonbar/client-side-programming/overview%})

 * [Client-Side Events Overview]({%slug ribbonbar/client-side-programming/events/overview%})
