---
title: Load
page_title: Load - RadClientExportManager
description: Check our Web Forms article about Load.
slug: clientexportmanager/client-side-programming/events/load
tags: load
published: True
position: 0
---

# Load



The client-side **Load** event is raised when the **RadClientExportManager** client-side object is fully loaded (the full [API of the control]({%slug clientexportmanager/client-side-programming/overview%}) is available at this point).

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the **OnLoad** property.

## 

The client-side **OnLoad** event handler receives one argument:

* Sender—the [RadClientExportManager object]({%slug clientexportmanager/client-side-programming/overview%}) that fired the event.

**Example 1**: Handle the **RadClientExportManager**'s client-side **Load** event.

````ASPNET
	
<telerik:RadClientExportManager runat="server" id="RadClientExportManager1" onclientload="OnClientLoad">
	<PdfSettings FileName="MyFile.pdf" MarginBottom="20mm" />
</telerik:RadClientExportManager>
	
	
````



````JavaScript

<script type="text/javascript">
	var clientExportManager;
	function OnClientLoad(sender) {
		clientExportManager = sender;
	}
</script>

````



# See Also

 * [RadClientExportManager Client-Side API]({%slug clientexportmanager/client-side-programming/overview%})
