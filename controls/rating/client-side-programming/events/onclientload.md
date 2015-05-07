---
title: OnClientLoad
page_title: OnClientLoad | RadRating for ASP.NET AJAX Documentation
description: OnClientLoad
slug: rating/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 1
---

# OnClientLoad

The **OnClientLoad** event is raised when the RadRating client-side object is initialized. It can notify you that the control is available(e.g. to store a reference to its client-side object for later use).

The event handler receives two arguments:

1. Sender – the [RadRating object]({%slug rating/client-side-programming/overview%}) that fired the event.

1. Event arguments – an empty event arguments object.

You can check how to set the value of the rating control in its **OnClientLoad** event in **Example 1**.

**Example 1**: Using the **OnClientLoad** event.

````ASP.NET
<telerik:RadRating runat="server" ID="RadRating1" OnClientLoad="OnClientLoad"></telerik:RadRating>
<script type="text/javascript">
	function OnClientLoad(sender, args) {
		sender.set_value(3);
	}
</script>
````


