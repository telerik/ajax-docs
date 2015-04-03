---
title: OnClientRating
page_title: OnClientRating | UI for ASP.NET AJAX Documentation
description: OnClientRating
slug: rating/client-side-programming/events/onclientrating
tags: onclientrating
published: True
position: 2
---

# OnClientRating



The __OnClientRating__ event is raised just before you click an item of the __RadRating__ control. It is cancellable and precedes the[OnClientRated event]({%slug rating/client-side-programming/events/onclientrated%}). If you cancel it the OnClientRated event is not raised, nor is a postback initiated if the__AutoPostBack__ property is __true__.

## 

You can use this event to prevent the rating operation based on certain criteria (e.g. the user has rated already).Canceling this event will prevent setting the value of the rating control.

The event handler receives two arguments:

1. Sender – the [RadRating object]({%slug rating/client-side-programming/overview%}) that fired the event.

1. Event arguments – an event arguments object that exposes the following properties and methods:


>caption Client-side methods of the event arguments object.

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_cancel__ ||bool|The method returns an object of type boolean. It indicates whether the event is canceled.|
| __get_newValue__ ||number|The method returns an object of type number. It shows the value that will be set to the control if the rating is not canceled.|
| __set_cancel__ |bool||The method takes the following arguments:

1. boolean—a value that indicates whether the event will be canceled.In __Example 1__ you can check how to cancel the rating if a user has already used the control. __Example 1__ : Using the __OnClientRating__ event.

````ASPNET
	    <telerik:RadRating runat="server" ID="RadRating2" OnClientRating="OnClientRating"></telerik:RadRating>
	    <script type="text/javascript">
	        var isRated = false;
	        function OnClientRating(sender, args) {
	            args.set_cancel(isRated);
	            if (!isRated) isRated = true;
	        }
	    </script>
````

|
