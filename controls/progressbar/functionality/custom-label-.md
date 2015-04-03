---
title: Custom Label 
page_title: Custom Label  | UI for ASP.NET AJAX Documentation
description: Custom Label 
slug: progressbar/functionality/custom-label-
tags: custom,label,
published: True
position: 1
---

# Custom Label 



The RadProgressBar's __Label__ is the message (word, number, percent) that displays the level of process completion. This article explains the default status	label of the control, how to customize its text or how to hide it.

>note The Label functionality is supported only for __Value__ and __Percent__ RadProgressBar[types]({%slug progressbar/functionality/types%}).
>


## Use the Default Progress Label

By default, the ProgressBar's __Label__ displays the current __Value__ of the	[progress indicator]({%slug progressbar/getting-started/element-structure%}), when the control’s__BarType__ is either *Value* or *Percent*. You can hide the __Label__ bysetting the __ShowLabel__ property to __false__.
>caption Figure 1: RadProgressBar with enabled and disabled Label visibility.

![progress-bar-custom-label-visibility](images/progress-bar-custom-label-visibility.png)

__Example 1__: Configure the visibility of the progress Label in a RadProgressBar with value in percent. The result of this example is displayed in __Figure 1__.

````ASPNET
			<telerik:RadProgressBar runat="server" ID="RadProgressBar1" Value="38" Skin="Silk" BarType="Percent" Width="250px" ShowLabel="true" >
			</telerik:RadProgressBar>
			<telerik:RadProgressBar runat="server" ID="RadProgressBar2" Value="38" Skin="Silk" BarType="Percent" Width="250px" ShowLabel="false">
			</telerik:RadProgressBar>
````



## Use a Custom Progress Label

If you want to customize the displayed label, you can show the desired progress message by configuring the __RadProgressBar__’s__Label__ property (see __Example 2__). You can also see how to change the __Label__ values dinamically client-sidein the[Custom Label](http://demos.telerik.com/aspnet-ajax/progress-bar/examples/functionality/custom-label/defaultcs.aspx) demo.
>caption Figure 2: RadProgressBar displaying a custom progress label.

![progress-bar-custom-label](images/progress-bar-custom-label.png)

__Example 2__: Configure RadProgressBar to display a custom progress label. The result of this example is displayed in __Figure 2__.

````ASPNET
			<telerik:RadProgressBar runat="server" Width="264px" ID="PasswordStrengtProgress" MaxValue="10" Value="8" ShowLabel="true" Label="Strong" Skin="Silk">
			</telerik:RadProgressBar>
````



# See Also

 * [RadProgressBar Custom Label Demo](http://demos.telerik.com/aspnet-ajax/progress-bar/examples/functionality/custom-label/defaultcs.aspx)

 * [Overview]({%slug progressbar/getting-started/overview%})

 * [Types]({%slug progressbar/functionality/types%})

 * [RadProgressBar Client-side API]({%slug progressbar/client-side-programming/radprogressbar-object%})
