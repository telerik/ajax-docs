---
title: Custom Crop Settings
page_title: Custom Crop Settings - RadImageEditor
description: Check our Web Forms article about Custom Crop Settings.
slug: imageeditor/how-to/custom-crop-settings
tags: custom,crop,settings
published: True
position: 0
---

# Custom Crop Settings



One of the most common scenarios connected with the cropping functionality of the **ImageEditor** is setting the initial size or changing the ratio	constraints of the crop box. In the example bellow you will see a way to modify the Crop command in the **ImageEditor’s** ClientCommandExecuted event handler by setting:

* the initial width and height of the crop box;

* the ratio between the crop box’s width and height.

## How to Customize a Built-in Command

Before applying the desired modifications to the Crop command (or another one), you have to make sure that the Crop dialog has been fully loaded.	This can be done by setting a little interval so you can check the widget availability periodically:

````ASP.NET
<telerik:RadImageEditor RenderMode="Lightweight" ID="RadImageEditor1" runat="server" ImageUrl="image.jpg"
	OnClientCommandExecuted="modifyCommand">
</telerik:RadImageEditor>
<script type="text/javascript">
	function modifyCommand(imageEditor, args) {
		if (args.get_commandName() == "Crop") {
			waitForCommand(imageEditor, args.get_commandName(), function (widget) {
				var width = 150;
				var height = 200;
				var ratio = width / height;

				//stop the aspect ratio constraint
				//widget._constraintBtn.set_checked(false); 
				//widget._setCropBoxRatio(null);
				//widget._sizeRatio = null;

				widget._setCropBoxRatio(ratio);
				widget._sizeRatio = ratio;
				widget.set_width(width);
				widget.set_height(height);
				widget._constraintBtn.set_enabled(false);
				widget._updateCropBoxFromControls();
			});
		}
	}

	function waitForCommand(imageEditor, commandName, callback) {
		var timer = setInterval(function () {
			var widget = imageEditor.get_currentToolWidget();
			if (widget && widget.get_name() == commandName) {
				clearInterval(timer);
				callback(widget);
			}
		}, 100);
	}
</script>
````



# See Also

 * [Overview]({%slug imageeditor/overview%})

 * [OnClientCommandExecuted]({%slug imageeditor/client-side-programming/events/onclientcommandexecuted%})

 * [Overview]({%slug imageeditor/client-side-programming/overview%})
