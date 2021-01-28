---
title: OnClientRated
page_title: OnClientRated - RadRating
description: Check our Web Forms article about OnClientRated.
slug: rating/client-side-programming/events/onclientrated
tags: onclientrated
published: True
position: 3
---

# OnClientRated

The **OnClientRated** event is raised after you click an item of the **RadRating** control therefore after the [OnClientRating event]({%slug rating/client-side-programming/events/onclientrating%}). It is not cancellable. If you cancel the **OnClientRating** event, it will not be fired.

This event can be used to perform a specific operation based on the value that is set to the rating control.

The event handler receives two arguments:

1. Sender – the [RadRating object]({%slug rating/client-side-programming/overview%}) that fired the event.

1. Event arguments – an event arguments object that exposes the following properties and methods:

>caption Client-side methods of the event arguments object.

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_oldValue** ||number|The method returns an object of type number. It shows the value of the rating control before clicking on the rating item. In **Example 1** you can check how to indicate if there is a change in the value of the rating via this method.|

>caption **Example 1** : Using the **OnClientRated** event.

````ASP.NET
<telerik:RadRating RenderMode="Lightweight" runat="server" ID="RadRating3" OnClientRated="OnClientRated"></telerik:RadRating>
<span id="message"></span>
<script type="text/javascript">
	function OnClientRated(sender, args) {
		$get("message").innerHTML = (args.get_oldValue() == sender.get_value()) ? "The value is not changed." : "";
	}
</script>
````

