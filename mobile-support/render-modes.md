---
title: Render Modes
page_title: Render Modes | UI for ASP.NET AJAX Documentation
description: Render Modes
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/render-modes
tags: render,modes
published: True
position: 2
---

# Render Modes

Some controls from the UI for ASP.NET AJAX suite	can produce different (usually more lightweight) markup and make styling easier through CSS3. Below you can find a list with the modes each control supports. For more information on the feature and its benefits, examine the [Render modes]({%slug controls/render-modes%}) help article.


| Control | Lightweight Rendering | Mobile Rendering |
| ------ | ------ | ------ |
|Ajax|N/A|-|
|AutoCompleteBox|Yes (by design)|-|
|AsyncUpload|Yes (render mode)|-|
|BarCode|N/A|-|
|Button|[Yes (render mode)]({%slug button/mobile-support/render-modes%})|-|
|HtmlChart|N/A|-|
|Calendar|[Yes (render mode)]({%slug calendar/mobile-support/render-mode%})|-|
|Captcha|N/A|-|
|ColorPicker|Yes (by design)|-|
|Combobox|[Yes (render mode)]({%slug combobox/mobile-support/render-modes%})|-|
|DataForm|Yes (by design)|-|
|DataPager|Yes (render mode)|[Yes (render mode)]({%slug datapager/mobile-support/mobile-rendering/overview%})|
|Diagram|Yes (by design)|-|
|Dock|[Yes (render mode)]({%slug dock/mobile-support/render-modes%})|-|
|DropDownList|Yes (by design)|-|
|DropDownTree|Yes (by design)|-|
|Editor|[Yes (render mode)]({%slug editor/mobile-support/render-modes%})|[Yes (render mode)]({%slug editor/mobile-support/phone-layout/overview%})|
|FileExplorer|N/A|-|
|Filter|Yes (render mode)|-|
|FormDecorator|[Yes (render mode)]({%slug formdecorator/mobile-support/render-modes%})|-|
|Gantt|Yes (by design)|-|
|Gauge|N/A|-|
|Grid|[Yes (render mode)]({%slug grid/mobile-support/render-modes%})|[Yes (render mode)]({%slug grid/mobile-support/mobile-rendering/overview%})|
|HtmlChart|Yes (by design)|-|
|ImageEditor|[Yes (render mode)]({%slug imageeditor/mobile-support/render-modes%})|-|
|ImageGallery|Yes (by design)|[Yes (render mode)]({%slug imagegallery/mobile-support/mobile-rendering%})|
|Input|[Yes (render mode)]({%slug input/mobile-support/render-modes%})|-|
|LightBox|Yes (by design)|[Yes (render mode)]({%slug input/mobile-support/render-modes%})|
|ListBox|[Yes (render mode)]({%slug listbox/functionality/render-modes%})|-|
|Map|N/A|-|
|MediaPlayer|Yes (by design)|[Yes (render mode)]({%slug mediaplayer/mobile-support/overview%})|
|Menu|[Yes (render mode)]({%slug menu/mobile-support/render-modes%})|[Yes (render mode)]({%slug menu/mobile-support/responsive-adaptive-and-elastic-capabilities%})|
|Notification|[Yes (render mode)]({%slug notification/mobile-support/render-modes%})|-|
|OrgChart|[Yes (render mode)]({%slug orgchart/mobile-support/render-modes%})|-|
|PanelBar|Yes (render mode)|-|
|ProgressArea|-|-|
|ProgressBar|Yes (by design)|-|
|Rating|[Yes (render mode)]({%slug rating/mobile-support/render-modes%})|-|
|RibbonBar|-|-|
|Rotator|Yes (by design)|-|
|SearchBox|Yes (by design)|-|
|Scheduler|-|[Yes (render mode)]({%slug scheduler/mobile-support/render-modes%})|
|SiteMap|-|-|
|Slider|[Yes (render mode)]({%slug slider/mobile-support/render-modes%})|-|
|SocialShare|Yes (by design)|-|
|Spell|Yes (child control - Window)|-|
|Splitter|N/A|-|
|TabStrip|-|-|
|TagCloud|Yes (by design)|-|
|Ticker|Yes (by design)|-|
|Tile|[Yes (by design)]({%slug tilelist/tiles/mobile-support/render-modes%})|-|
|TileList|[Yes (by design)]({%slug tilelist/mobile-support/render-modes%})|-|
|ToolBar|-|-|
|ToolTip|[Yes(render mode)]({%slug tooltip/mobile-support/render-modes%})|-|
|TreeList|Yes (render mode)|-|
|TreeMap|Yes (by design)|-|
|TreeView|Yes (render mode)|-|
|Wizard|Yes (by design)|[Yes (render mode)]({%slug wizard/mobile-support/mobile-rendering%})|
|Window|[Yes (render mode)]({%slug window/mobile-support/render-modes%})|-|
|XmlHttpPanel|N/A|-|

If you are extending the Telerik controls that support render modes through a property (i.e., they are not lightweight by design, for example), you need to addseveral properties to your class that will provide this functionality:

>caption Example 1: Properties that enable you to use RenderModes for controls inherited from the Telerik controls.



````C#
public class BaseScheduler : RadScheduler
{
	public BaseScheduler()
	{
		SetDefaultValues();
	}

	private void SetDefaultValues()
	{
		if (DesignMode)
		{
			return;
		}
	}

	//only add this property if the base control implements Lightweight rendering via the RenderMode property
	protected override bool SupportsLightweightRendering
	{
		get
		{
			return true;
		}
	}

	//only add this property if the base control implements Adaptive (Mobile) rendering via the RenderMode property
	protected override bool SupportsAdaptiveRendering
	{
		get
		{
			return true;
		}
	}

	//only add this property if the base control implements Native rendering via the RenderMode property
	protected override bool SupportsNativeRendering
	{
		get
		{
			return true;
		}
	}
}
````
````VB
Public Class BaseScheduler
	Inherits RadScheduler
	Public Sub New()
		SetDefaultValues()
	End Sub

	Private Sub SetDefaultValues()
		If DesignMode Then
			Return
		End If
	End Sub

	'only add this property if the base control implements Lightweight rendering via the RenderMode property
	Protected Overrides ReadOnly Property SupportsLightweightRendering() As Boolean
		Get
			Return True
		End Get
	End Property

	'only add this property if the base control implements Adaptive (Mobile) rendering via the RenderMode property
	Protected Overrides ReadOnly Property SupportsAdaptiveRendering() As Boolean
		Get
			Return True
		End Get
	End Property

	'only add this property if the base control implements Native rendering via the RenderMode property
	Protected Overrides ReadOnly Property SupportsNativeRendering() As Boolean
		Get
			Return True
		End Get
	End Property
End Class
````

