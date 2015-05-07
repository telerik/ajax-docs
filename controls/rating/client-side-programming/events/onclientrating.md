---
title: OnClientRating
page_title: OnClientRating | RadRating for ASP.NET AJAX Documentation
description: OnClientRating
slug: rating/client-side-programming/events/onclientrating
tags: onclientrating
published: True
position: 2
---

# OnClientRating

The **OnClientRating** event is raised just before you click an item of the **RadRating** control. It is cancellable and precedes the[OnClientRated event]({%slug rating/client-side-programming/events/onclientrated%}). If you cancel it the OnClientRated event is not raised, nor is a postback initiated if the**AutoPostBack** property is **true**.

You can use this event to prevent the rating operation based on certain criteria (e.g. the user has rated already). Canceling this event will prevent setting the value of the rating control.

The event handler receives two arguments:

1. Sender – the [RadRating object]({%slug rating/client-side-programming/overview%}) that fired the event.

1. Event arguments – an event arguments object that exposes the following properties and methods:

>caption Client-side methods of the event arguments object.

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_cancel** ||bool|The method returns an object of type boolean. It indicates whether the event is canceled.|
| **get_newValue** ||number|The method returns an object of type number. It shows the value that will be set to the control if the rating is not canceled.|
| **set_cancel** |bool||The method takes a boolean value that indicates whether the event will be canceled. In **Example 1** you can check how to cancel the rating if a user has already used the control.|

>caption **Example 1** : Using the **OnClientRating** event.

````ASP.NET
<telerik:RadRating runat="server" ID="RadRating2" OnClientRating="OnClientRating"></telerik:RadRating>
<script type="text/javascript">
	var isRated = false;
	function OnClientRating(sender, args) {
		args.set_cancel(isRated);
		if (!isRated) isRated = true;
	}
</script>
````

