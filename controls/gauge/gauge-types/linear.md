---
title: Linear
page_title: Linear | UI for ASP.NET AJAX Documentation
description: Linear
slug: gauge/gauge-types/linear
tags: linear
published: True
position: 0
---

# Linear



## 

The __RadLinearGauge__ represents the ranges and the value in a linear format, like its name suggests.It can be explained quite simply like a termomether - the pointer is the quicksilver that fills the tube and the ranges can representthe temperatures in which we feel cold, hot or simply fine. For example:![gauge-linear-gauge-thermometer-example](images/gauge-linear-gauge-thermometer-example.png)

To get a better idea which element corresponds to which tag check the [RadGauge Structure]({%slug gauge/radgauge-structure%}) article.The above gauge was created with the following simple markup:

````ASPNET
		<telerik:RadLinearGauge runat="server" ID="RadLinearGauge1" Height="300px" Width="100px">
			<Pointer Value="22" Color="Silver">
			</Pointer>
			<Scale Min="-25" Max="50" MajorUnit="15" MinorUnit="1">
			<Labels Format="{0} &deg;C" />
				<Ranges>
					<telerik:GaugeRange From="-25" To="-5" Color="Blue" />
					<telerik:GaugeRange From="-5" To="15" Color="LightBlue" />
					<telerik:GaugeRange From="15" To="30" Color="GreenYellow" />
					<telerik:GaugeRange From="30" To="50" Color="Red" />
				</Ranges>
			</Scale>
		</telerik:RadLinearGauge>
````



The control offers more customization options than the ones shown above:

* __Advanced pointer customizations__ - the pointer can be a tick or a bar depending on its __Shape__ property,you can choose its __Color and Value__ as well. When the pointer is a bar you an also control its __Track__ - the background behind the bar itself - its __Color and Opacity__ properties allow you to choose its appearance. The Opacitymust be between 0 and 1.

* __Basic Scale configuration__ - the __Scale__ is the main wrapper of the control and details are configurablethrough inner properties. The main __Scale__ tag, however, offers the basic functionality - the __Min and Max__values of the gauge, the __MajorUnit and MinorUnit__ properties that control the ticks and label distance, the__Mirror__ property which chooses the side on which the ticks and labels are shown, the __Vertical__ propertywhich makes the gauge horizontal when set to false and the __Reverse__ property which shows the higher values first when set to true.

* __Labels configuration__ - you can choose the __BackgroundColor, Color and Font__ to customize their appearance.The __Visible__ property controls if they are shown and the __Format__ takes a format string that will be appliedto the text according to the value. The format string uses the __{0}__ placeholder to indicate the value.The __Template__ property is a client template similar to the format - it takes a similar string to show in the labels,but the value placeholder is __#=value#__.

* __Ticks configuration__ - the __MajorTicks and MinorTicks__ inner tags expose the small lines that protrudefrom the ranges to show the value. They can be customized in terms of __Color__, __Size or Width__ (in pixels) and__Visibility__ (boolean).

* __Ranges configuration__ - the __Ranges__ tag contains several __GaugeRange__ tagsthat represent the areas of the gauge that will show differently than the regular scale. Each range has the __From and To__properties that control is positioning on the scale and also the __Color__ property that can be used to specify their fill.

* __Main gauge configuration__ - the __Appearance__ tag of the control allows for customizing its entirelook. Currently it offers the __BackgroundColor__ property which sets the wrapper's background fill.
