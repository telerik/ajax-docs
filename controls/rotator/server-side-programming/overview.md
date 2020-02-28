---
title: Overview
page_title: Server-side Programming Overview | RadRotator for ASP.NET AJAX Documentation
description: Overview
slug: rotator/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

**RadRotator for ASP.NET AJAX** offers the following properties:

| Property | Type | Possible Values | Description |
| ------ | ------ | ------ | ------ |
| **RotatorType** |Enum| AutomaticAdvance, Buttons, ButtonsOver, FromCode, SlideShow, SlideShowButtons, CarouselButtons, Carousel, Coverflow, CoverFlowButtons|Specifies the type of rotator (how the rotator will render and what options the user will have for interacting with it on the client)If one of the slide show modes is set, the *SlideShowAnimation-Duration* and *SlideShowAnimation-Type* properties take effect|
| **ScrollDirection** |Enum| Up, Down, Left, Right|Specifies possible directions for scrolling rotator items.|
| **ScrollDuration** |Int|Int values|Specifies the speed in milliseconds for scrolling rotator items. Default value is 500.|
| **WrapFrames** |Boolean| *true* or *false* |Forces RadRotator to wrap the items (i.e. after the last item is shown, the rotator will start again from the first item). **Note:** The value of the WrapFrames property does not influence the behavior of the control, in case RotatorType is set to **Carousel** , **CarouselButtons** , **CoverFlow** or **CoverFlowButtons** . WrapFrames is always true, in case RotatorType is set to **Carousel** or **CarouselButtons** , and it is always false, in case RotatorType is set to **CoverFlow** or **CoverFlowButtons** .|
| **InitialItemIndex** |Int|Int values|Specifies the index of the item, which will be shown first when the rotator loads. When set to 0 (default) - positions initial item to be visible in the rotator.; When set to -1 - positions the initial item just outside of the rotator viewport.Any other positive value - the rotator starts with that particular item in the viewport.|
| **FrameDuration** |Int|Int values|Specifies the time in milliseconds each frame will display in automatic scrolling scenarios. Default value is 2000.|
| **PauseOnMouseOver** |Boolean| *true* or *false* |When this property is set to true (the default value), the RadRotator control stops when the mouse is over the items.|
| **EnableRandomOrder** |Boolean| *true* or *false* |Forces the RadRotator control to shows its items randomly|
| **ItemWidth** |Unit|Pixels|Specifies the rotator item's width.|
| **ItemHeight** |Unit|Pixels|Specifies rotator item's height.|
| **Height** |Unit|Pixels|Gets or sets the height of the Web server control. The default height is 200 pixels.|
| **Width** |Unit|Pixels|Gets or sets the width of the Web server control. The default width is 200 pixels.|
| **OnClientItemClicking** |String|String|Sets the name of the javascript function called when an item is clicked.|
| **OnClientItemClicked** |String|String|Sets the name of the javascript function called after a item is clicked.|
| **OnClientMouseOver** |String|String|Sets the name of the javascript function called when the mouse hovers a item.|
| **OnClientMouseOut** |String|String|Sets the name of the javascript function called after the mouse leaves a item.|
| **OnClientItemShowing** |String|String|Sets the name of the javascript function called when an item is about to be shown.|
| **OnClientItemShown** |String|String|Sets the name of the javascript function called after an item has been shown.|
| **EnableDragScrolling** |Boolean| *true* or *false* |Gets or sets a flag determining if drag-scrolling (scrolling the rotator by dragging its items) should be enabled. It is set to **false** by default.|
| **PersistCurrentItemOnPostBack** |Boolean| *true* or *false* |Gets or sets a flag indicating whether the index of the current item is persisted between postbacks.It is set to **false** by default.|

**RadRotator for ASP.NET AJAX** offers the following inner properties as well:

* **ControlButtons**

	* DownButtonID - Accepts the client id of an element. The element will be used instead of the default Down button

	* UpButtonID- Accepts the client id of an element. The element will be used instead of the default Up button

	* RightButtonID- Accepts the client id of an element. The element will be used instead of the default Right button

	* LeftButtonID- Accepts the client id of an element. The element will be used instead of the default Left button

	* OnClientButtonClick- Accepts a JavaScript function name. The function will be called when one of the RadRotator's buttons is clicked

	* OnClientButtonOver- Accepts a JavaScript function name. The function will be called when the mouse is over one of the RadRotator's buttons

	* OnClientButtonOut- Accepts a JavaScript function name. The function will be called when the mouse goes out from the RadRotator's buttons

* **SlideShowAnimation** 

	* Type-Accepts an Enum value of type *Telerik.Web.UI.Rotator.AnimationType.* This property takes effect when one RotatotType is set to *SlideShow* or *SlideShowButtons* .

	* Duration - Specifies the speed in milliseconds for animating the rotator items.

* **WebServiceSettings**

	* Path - Path to the *.ASMX* file

	* Method - The name of the method name which will be invoked by the RadRotator control in order to load the HTML data

	* UseHttpGet -[A boolean value that indicates whether to invoke the method by using HTTP GET](https://msdn.microsoft.com/en-us/library/system.web.script.services.scriptmethodattribute.usehttpget(VS.90).aspx)

**RadTicker for ASP.NET AJAX** offers the following properties:

| Property | Type | Possible Values | Description |
| ------ | ------ | ------ | ------ |
| **AutoStart** |Bool|True, False|Specifies whether the ticker begins ticking automatically. You should leave this set to **false** if you are using the ticker within a RadTicker If you use the ticker independently and leave this setting to false you should use the client API call **ticker_id.startTicker()** to start it.|
| **AutoAdvance** |Bool|True, False|Specifies whether **RadTicker** will begin ticking the next tickerline (if any) after it has finished ticking the current one. If you set the **AutoAdvance** property to false, then you will have to use a client API Call **ticker_id.tickNextLine()** |
| **Loop** |Bool|TrueFalse|Specifies whether **RadTicker** will repeat the first tickerline after displaying the last one. If you set this property to **true RadTicker** will never finish ticking. This may have possible implications when having more than one **RadTicker** instance in a **RadRotator** . The way **RadRotator** works is that when the first ticker on a frame has finished ticking it will start ticking the next ticker on the frame. If a **RadTicker** instance is ticking (has **Loop=true** ), it will never finish and the next ticker on the frame will not get started.|
| **TickSpeed** |Int|Int values|Specifies the duration in milliseconds between ticking each character of a tickerline. The lower the value the faster a line will finish ticking. Default value is 20ms.|
| **LineDuration** |Int|Int values|Specifies in milliseconds the pause **RadTicker** makes before starting to tick the next line (if **AutoAdvance=True** ). Default value is 2000ms.|
| **AutoPostBack** |Bool|True, False|Gets or sets a value indicating whether a postback to the server automatically occurs when the user interacts with the control. Setting this property to true will make **RadTicker** postback to the server on item click.|
| **DataTextField** |String|String|A string that specifies the field of the data source that provides the value of the ticker lines. The default value is an empty string. Use the **DataTextField** property to specify the field of the data source (in most cases the name of the database column) which provides the values for the **Text** property of databound ticker items. The **DataTextField** property is taken into account only during data binding. If the **DataTextField** property is not set and your data source is not a list of strings, the RadTicker control will throw an exception.|
