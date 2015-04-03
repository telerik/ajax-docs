---
title: Server-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: rotator/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview



## 

__RadRotator for ASP.NET AJAX__ offers the following properties:




>caption  

| Property | Type | Possible Values | Description |
| ------ | ------ | ------ | ------ |
| __RotatorType__ |Enum|

* AutomaticAdvance

* Buttons

* ButtonsOver

* FromCode

* SlideShow

* SlideShowButtons

* CarouselButtons

* Carousel

* Coverflow

* CoverFlowButtons|Specifies the type of rotator (how the rotator will render and what options the user will have for interacting with it on the client)If one of the slide show modes is set, the *SlideShowAnimation-Duration* and *SlideShowAnimation-Type* properties take effect|
| __ScrollDirection__ |Enum|

* Up

* Down

* Left

* Right|Specifies possible directions for scrolling rotator items.|
| __ScrollDuration__ |Int|Int values|Specifies the speed in milliseconds for scrolling rotator items. Default value is 500.|
| __WrapFrames__ |Boolean| *true* or *false* |Forces RadRotator to wrap the items (i.e. after the last item is shown, the rotator will start again from the first item). __*Note:__ The value of the WrapFrames property does not influence the behavior of the control, in case RotatorType is set to __Carousel__ , __CarouselButtons__ , __CoverFlow__ or __CoverFlowButtons__ . WrapFrames is always true, in case RotatorType is set to __Carousel__ or __CarouselButtons__ , and it is always false, in case RotatorType is set to __CoverFlow__ or __CoverFlowButtons__ .|
| __InitialItemIndex__ |Int|Int values|Specifies the index of the item, which will be shown first when the rotator loads.

* When set to 0 (default) - positions initial item to be visible in the rotator.

* When set to -1 - positions the initial item just outside of the rotator viewport.Any other positive value - the rotator starts with that particular item in the viewport.|
| __FrameDuration__ |Int|Int values|Specifies the time in milliseconds each frame will display in automatic scrolling scenarios. Default value is 2000.|
| __PauseOnMouseOver__ |Boolean| *true* or *false* |When this property is set to true (the default value), the RadRotator control stops when the mouse is over the items.|
| __EnableRandomOrder__ |Boolean| *true* or *false* |Forces the RadRotator control to shows its items randomly|
| __ItemWidth__ |Unit|Pixels|Specifies the rotator item's width.|
| __ItemHeight__ |Unit|Pixels|Specifies rotator item's height.|
| __Height__ |Unit|Pixels|Gets or sets the height of the Web server control. The default height is 200 pixels.|
| __Width__ |Unit|Pixels|Gets or sets the width of the Web server control. The default width is 200 pixels.|
| __OnClientItemClicking__ |String|String|Sets the name of the javascript function called when an item is clicked.|
| __OnClientItemClicked__ |String|String|Sets the name of the javascript function called after a item is clicked.|
| __OnClientMouseOver__ |String|String|Sets the name of the javascript function called when the mouse hovers a item.|
| __OnClientMouseOut__ |String|String|Sets the name of the javascript function called after the mouse leaves a item.|
| __OnClientItemShowing__ |String|String|Sets the name of the javascript function called when an item is about to be shown.|
| __OnClientItemShown__ |String|String|Sets the name of the javascript function called after an item has been shown.|
| __EnableDragScrolling__ |Boolean| *true* or *false* |Gets or sets a flag determining if drag-scrolling (scrolling the rotator by dragging its items) should be enabled. It is set to __false__ by default.|
| __PersistCurrentItemOnPostBack__ |Boolean| *true* or *false* |Gets or sets a flag indicating whether the index of the current item is persisted between postbacks.It is set to __false__ by default.|



__RadRotator for ASP.NET AJAX__ offers the following inner properties as well:






>caption  

| Inner Property Name | Properties |
| ------ | ------ |
| __ControlButtons__ |

* DownButtonID - Accepts the client id of an element. The element will be used instead of the default Down button

* UpButtonID- Accepts the client id of an element. The element will be used instead of the default Up button

* RightButtonID- Accepts the client id of an element. The element will be used instead of the default Right button

* LeftButtonID- Accepts the client id of an element. The element will be used instead of the default Left button

* OnClientButtonClick- Accepts a JavaScript function name. The function will be called when one of the RadRotator's buttons is clicked

* OnClientButtonOver- Accepts a JavaScript function name. The function will be called when the mouse is over one of the RadRotator's buttons

* OnClientButtonOut- Accepts a JavaScript function name. The function will be called when the mouse goes out from the RadRotator's buttons|
| __SlideShowAnimation__ |

* Type-Accepts an Enum value of type *Telerik.Web.UI.Rotator.AnimationType.* This property takes effect when one RotatotType is setto **  *SlideShow* or *SlideShowButtons* .

* Duration - Specifies the speed in milliseconds for animating the rotator items.|
| __WebServiceSettings__ |

* Path - Path to the *.ASMX* file

* Method - The name of the method name which will be invoked by the RadRotator control in order to load the HTML data

* UseHttpGet -[A boolean value that indicates whether to invoke the method by using HTTP GET](http://msdn.microsoft.com/en-us/library/system.web.script.services.scriptmethodattribute.usehttpget(VS.90).aspx)|





__RadTicker for ASP.NET AJAX__ offers the following properties:




>caption  

| Property | Type | Possible Values | Description |
| ------ | ------ | ------ | ------ |
| __AutoStart__ |Bool|

* True

* False|Specifies whether the ticker begins ticking automatically. You should leave this set to __false__ if you are using the ticker within a RadTicker If you use the ticker independently and leave this setting to false you should use the client API call __ticker_id.startTicker()__ to start it.|
| __AutoAdvance__ |Bool|

* True

* False|Specifies whether __RadTicker__ will begin ticking the next tickerline (if any) after it has finished ticking the current one. If you set the __AutoAdvance__ property to false, then you will have to use a client API Call __ticker_id.tickNextLine()__ |
| __Loop__ |Bool|TrueFalse|Specifies whether __RadTicker__ will repeat the first tickerline after displaying the last one. If you set this property to __true RadTicker__ will never finish ticking. This may have possible implications when having more than one __RadTicker__ instance in a __RadRotator__ . The way __RadRotator__ works is that when the first ticker on a frame has finished ticking it will start ticking the next ticker on the frame. If a __RadTicker__ instance is ticking (has __Loop=true__ ), it will never finish and the next ticker on the frame will not get started.|
| __TickSpeed__ |Int|Int values|Specifies the duration in milliseconds between ticking each character of a tickerline. The lower the value the faster a line will finish ticking. Default value is 20ms.|
| __LineDuration__ |Int|Int values|Specifies in milliseconds the pause __RadTicker__ makes before starting to tick the next line (if __AutoAdvance=True__ ). Default value is 2000ms.|
| __AutoPostBack__ |Bool|

* True

* False|Gets or sets a value indicating whether a postback to the server automatically occurs when the user interacts with the control. Setting this property to true will make __RadTicker__ postback to the server on item click.|
| __DataTextField__ |String|String|A string that specifies the field of the data source that provides the value of the ticker lines. The default value is an empty string. Use the __DataTextField__ property to specify the field of the data source (in most cases the name of the database column) which provides the values for the __Text__ property of databound ticker items. The __DataTextField__ property is taken into account only during data binding. If the __DataTextField__ property is not set and your datasource is not a list of strings, the RadTicker control will throw an exception.|
