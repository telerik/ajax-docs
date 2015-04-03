---
title: OnClientRated
page_title: OnClientRated | UI for ASP.NET AJAX Documentation
description: OnClientRated
slug: rating/client-side-programming/events/onclientrated
tags: onclientrated
published: True
position: 3
---

# OnClientRated



The __OnClientRated__ event is raised after you click an item of the __RadRating__ control therefore after the [OnClientRating event]({%slug rating/client-side-programming/events/onclientrating%}). It is not cancellable. If you cancel the __OnClientRating__ event, it will not be fired.

## 

This event can be used to perform a specific operation based on the value that is set to the rating control.

The event handler receives two arguments:

1. Sender – the [RadRating object]({%slug rating/client-side-programming/overview%}) that fired the event.

1. Event arguments – an event arguments object that exposes the following properties and methods:


>caption Client-side methods of the event arguments object.

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_oldValue__ ||number|The method returns an object of type number. It shows the value of the rating control before clicking on the rating item.In __Example 1__ you can check how to indicate if there is a change in the value of the rating via this method. __Example 1__ : Using the __OnClientRated__ event.

````ASPNET
	    <telerik:RadRating runat="server" ID="RadRating3" OnClientRated="OnClientRated"></telerik:RadRating>
	    <span id="message"></span>
	    <script type="text/javascript">
	        function OnClientRated(sender, args) {
	            $get("message").innerHTML = (args.get_oldValue() == sender.get_value()) ? "The value is not changed." : "";
	        }
	    </script>
````

|
