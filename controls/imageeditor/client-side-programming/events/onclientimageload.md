---
title: OnClientImageLoad
page_title: OnClientImageLoad | RadImageEditor for ASP.NET AJAX Documentation
description: OnClientImageLoad
slug: imageeditor/client-side-programming/events/onclientimageload
tags: onclientimageload
published: True
position: 7
---

# OnClientImageLoad




The **OnClientImageLoad** event is raised after the control has been loaded.

The event handler receives the following parameters:

1. The **RadImageEditor** client instance that fired the event.

1. Event arguments object.

````ASP.NET
<telerik:RadImageEditor RenderMode="Lightweight" runat="server" ID="RadImageEditor1" OnClientImageChanged="OnClientImageLoad"></telerik:RadImageEditor>
	<script type="text/javascript">
		function OnClientImageLoad(imgEditor)
		{
			//set initial zoom to the loaded image
			imgEditor.zoomImage(200);
		}
	</script>
````



# See Also

 * [Client-Side Events Basics]({%slug imageeditor/client-side-programming/events/client-side-events-basics%})
