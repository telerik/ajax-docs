---
title: suppressCompleteMessage Method
page_title: suppressCompleteMessage Method - RadSpell
description: Check our Web Forms article about suppressCompleteMessage Method.
slug: spell/changes-and-backward-compatibility/suppresscompletemessage-method
tags: suppresscompletemessage,method
published: True
position: 2
---

# suppressCompleteMessage Method

As of **Q1 2015**, the **suppressCompleteMessage** property of the [OnClientCheckFinished]({%slug spell/client-side-programming/events/onclientcheckfinished%}) event's arguments **is a method**.

To prevent the informational alert, you now have to pass *false* as an *argument*(**Example 1**), instead of setting the property value, as in older versions (**Example 2**).

>caption **Example 1**: Preventing the information alert in OnClientCheckFinished in Q1 2015 and later.

````JavaScript
function OnClientCheckFinishedHandler(sender, args) {
	args.suppressCompleteMessage(true);//prevent the alert
	console.log('Spell check is complete');
}
````

>caption **Example 2**: Preventing the information alert in OnClientCheckFinished in versions before Q1 2015.

````JavaScript
function OnClientCheckFinishedHandler(sender, args) {
	args.suppressCompleteMessage = true;//prevent the alert
	console.log('Spell check is complete');
}
````
 
