---
title: Use RadImageEditor's DrawLine tool as a highlighter
description: See how to use the RadImageEditor's DrawLine tool as a highlighter
type: how-to
page_title: Use RadImageEditor's DrawLine tool as a highlighter
slug: imageeditor-drawline-as-highlighter
position: 
tags: 
ticketid: 1454088
res_type: kb
---

## Description
In some scenarios you want to give the user the ability to highlight a part of the edited image. This could be done by decreasing the opacity of the ImageEditor's **Line** tool.

## Solution
You can achieve a highlighting effect by changing the global alpha value of the drawable context of RadImageEditor in in the `createDrawTool()` function of its **Line** dialog. To do this you should enable the the External Dialogs of the ImageEditor and modify its **Line.ascx** one with the below highlighted line:

````ASPX
	<telerik:RadImageEditor RenderMode="Lightweight" runat="server" ID="RadImageEditor1" ExternalDialogsPath="~/ImageEditorDialogs" Width="490" Height="315px" />
````

**Line.ascx**
````JavaScript
	createDrawTool: function () {
		this.drawTool = new $IE.DrawTools.LineTool(this.get_imageEditor().getCanvasContext(), { coreFactory: new $IE.GraphicsCore.CanvasGraphicsCoreFactory() });
		this.drawTool.setupDrawCanvas();
		this.drawTool.onEnd = Function.createDelegate(this, this._onDrawEnd);
		this.drawTool.setColor(this.colorPicker.get_selectedColor());
		this.drawTool.setLineSize(this.sizeCombo.get_selectedItem().get_value());
		this.drawTool.drawableContext.globalAlpha = 0.5
	}
````

## See Also

* [Customize Built-in Dialogs Demo](https://demos.telerik.com/aspnet-ajax/imageeditor/examples/externaldialogspath/defaultcs.aspx)


