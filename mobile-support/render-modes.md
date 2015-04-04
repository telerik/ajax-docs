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



## 

Some controls from the UI for ASP.NET AJAX suite	can produce different (usually more lightweight) markup and make styling easier through CSS3. Below you can find a list with the modeseach control supports. For more information on the feature and its benefits, examine the [Render modes](c952abb4-e952-44fa-9e05-70aac40c04d5) help article.


| Control | Lightweight Rendering | Mobile Rendering |
| ------ | ------ | ------ |
|Ajax|N/A|-|
|AutoCompleteBox|Yes (by design)|-|
|AsyncUpload|Yes (render mode)|-|
|BarCode|N/A|-|
|Button|[Yes (render mode)](06c45065-7387-41e9-a946-ad3e03d7e272)|-|
|HtmlChart|N/A|-|
|Calendar|[Yes (render mode)](9148371e-545f-44b9-bb87-995f2800af94)|-|
|Captcha|N/A|-|
|ColorPicker|Yes (by design)|-|
|Combobox|[Yes (render mode)](f080bb55-280f-438c-875e-75d2b66e1a2a)|-|
|DataForm|Yes (by design)|-|
|DataPager|Yes (render mode)|-|
|Diagram|Yes (by design)|-|
|Dock|[Yes (render mode)](3e08c8b5-6e55-4de8-afa8-cf58c359bc36)|-|
|DropDownList|Yes (by design)|-|
|DropDownTree|Yes (by design)|-|
|Editor|[Yes (render mode)](602c3637-e718-45c3-898f-1dcdeaa30efb)|-|
|FileExplorer|N/A|-|
|Filter|Yes (render mode)|-|
|FormDecorator|[Yes (render mode)](c255bd0b-1e73-4b27-a82d-38a23e24e062)|-|
|Gantt|Yes (by design)|-|
|Gauge|N/A|-|
|Grid|[Yes (render mode)](7b39e022-7beb-477c-a0c3-2d25f5bc4053)|[Yes (render mode)](acbdbc51-e93d-43f2-aa4a-a83f0f352d87)|
|HtmlChart|Yes (by design)|-|
|ImageEditor|Yes (child controls)|-|
|ImageGallery|Yes (by design)|-|
|Input|[Yes (render mode)](890db460-3115-4fae-8c24-7835ac5ce130)|-|
|LightBox|Yes (by design)|[Yes (render mode)](336c28c2-2b66-45db-ab51-8c8bf348eb7e)|
|ListBox|[Yes (render mode)](82d113b9-ed17-4bb2-adf0-23b055889edd)|-|
|Map|N/A|-|
|MediaPlayer|Yes (by design)|[Yes (render mode)](a93cd001-c762-41c7-bc64-1942949eaa57)|
|Menu|[Yes (render mode)](548bed68-1c8c-4f6a-b69f-2068c034f0fe)|[Yes (render mode)](591051a9-c177-47c5-b2c9-4e8a471f0db9)|
|Notification|Yes (by design)|-|
|OrgChart|[Yes (render mode)](705fdd77-49cc-45ed-978f-4f2cdc8122f5)|-|
|PanelBar|Yes (render mode)|-|
|ProgressArea|-|-|
|ProgressBar|Yes (by design)|-|
|Rating|[Yes (by design)](c9d036ba-6306-4830-849c-11c73d02799c)|-|
|RibbonBar|-|-|
|Rotator|Yes (by design)|-|
|SearchBox|Yes (by design)|-|
|Scheduler|-|[Yes (render mode)](fd67cde8-8012-4ebd-9721-4118c96fa630)|
|SiteMap|-|-|
|Slider|[Yes (by design)](bc5d0b2d-b8eb-45ca-9972-4a24a1b55630)|-|
|SocialShare|Yes (by design)|-|
|Spell|Yes (child control - Window)|-|
|Splitter|N/A|-|
|TabStrip|-|-|
|TagCloud|Yes (by design)|-|
|Ticker|Yes (by design)|-|
|TileList|[Yes (by design)](0efa7db9-f867-4349-b63e-38c6bf2f5ccb)|-|
|ToolBar|-|-|
|ToolTip|[Yes(render mode)](baf24a05-9bc7-4e4d-97ef-7a5a474c1d54)|-|
|TreeList|Yes (render mode)|-|
|TreeMap|Yes (by design)|-|
|TreeView|Yes (render mode)|-|
|Wizard|Yes (by design)|[Yes (render mode)](537eff50-2662-4a49-95fc-aeca9a3e8e0a)|
|Window|[Yes (render mode)](7cc7bf77-6225-467b-a42c-d1ffd5b78e05)|-|
|XmlHttpPanel|N/A|-|

If you are extending the Telerik controls that support render modes through a property (i.e., they are not lightweight by design, for example), you need to addseveral properties to your class that will provide this functionality:

__Example 1__: Properties that enable you to use RenderModes for controls inherited from the Telerik controls.

>tabbedCode

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
>end
