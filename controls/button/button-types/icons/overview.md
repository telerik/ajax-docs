---
title: Icons Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: button/button-types/icons/overview
tags: overview
published: True
position: 0
---

# Icons Overview



This help article showcases how to setup __RadButton's__ icons for its different states and fine tune their position.

1. [Configure RadButton With Icons](#configure-radbutton-with-icons)

1. [Fine-tuning RadButton's Icon Position](#fine-tuning-radbutton's-icon-position)

## Configure RadButton With Icons

You can make your button more intuitive by showing an icon on the left- and/or right-hand side of the control (__Example 1__ and __Figure 1__). All the Icon-related properties are controlled through the __RadButton.Icon__ inner property. To display an icon on the button, you need to set either the __Icon.PrimaryIconCssClass__ (__SecondaryIconCssClass__) property, or the __Icon.PrimaryIconUrl__ (__SecondaryIconUrl__) property.
>caption Figure 1: A RadButton with a primary and a secondary icon.

![Icons](images/button-icons01.png)

__Example 1:__ Configure a __RadButton__ with two icons through the __Icon.PrimaryIconUrl__, __Icon.PrimaryIconCssClass__ and __Icon.SecondaryIconCssClass__ properties.

````ASPNET
			<style>
				.classNextArrow {
					background-position: -168px 0 !important;
				}
	
				.classPreviousArrow {
					background-image: url('http://demos.telerik.com/aspnet-ajax/button/examples/embeddedicons/images/rbPredefinedIcons.png');
					background-position: -144px 0 !important;
				}
			</style>
			<telerik:RadButton ID="RadButton1" runat="server" Text="Button With Two Icons">
				<Icon PrimaryIconUrl="http://demos.telerik.com/aspnet-ajax/button/examples/embeddedicons/images/rbPredefinedIcons.png" PrimaryIconCssClass="classNextArrow"
					SecondaryIconCssClass="classPreviousArrow" />
			</telerik:RadButton>
````



__RadButton__ provides an easy way to show different icon when the mouse is over the control, or the button is pressed (__Figure 2__ and __Example 2__). This is achieved through the properties shown in __Table 1__.


>caption  Table 1: RadButton properties that control the primary and secondary icon for the hovered and/or active state. 

| Button State | Primary Icon Property | Secondary Icon Property |
| ------ | ------ | ------ |
|Hovered| __Icon.PrimaryHoveredIconUrl__ | __Icon.SecondaryHoveredIconUrl__ |
|Active(Pressed)| __Icon.PrimaryPressedIconUrl__ | __Icon.SecondaryPressedIconUrl__ |
>caption Figure 2: A RadButton can have different icons for its normal, hovered and active state.

![Rad Button icons normal hovered pressed](images/RadButton_icons_normal_hovered_pressed.png)

__Example 2:__ Setup unique icons for the normal, hovered and active state of a __RadButton__.

````ASPNET
			<style>
				.classNextArrow {
					background-position: -168px 0 !important;
				}
	
				.classPreviousArrow {
					background-image: url('http://demos.telerik.com/aspnet-ajax/button/examples/embeddedicons/images/rbPredefinedIcons.png');
					background-position: -144px 0 !important;
				}
			</style>
			<telerik:RadButton ID="RadButton1" runat="server" Text="Button With Two Icons">
				<Icon PrimaryIconUrl="http://demos.telerik.com/aspnet-ajax/button/examples/embeddedicons/images/rbPredefinedIcons.png" PrimaryIconCssClass="classNextArrow"
					SecondaryIconCssClass="classPreviousArrow" />
			</telerik:RadButton>
````



## Fine-tuning RadButton's Icon Position

At first the Icons might not be positioned exactly the way we want, but this can be easily changed by directly setting the properties that control the top, bottom, left or right offset of the respective icon (__Table 2__):


>caption  Table 2: RadButton properties that control the offset of the primary and secondary icon. 

| Offset | Primary Icon Property | Secondary Icon Property |
| ------ | ------ | ------ |
|Top| __Icon.PrimaryIconTop__ | __Icon.SecondaryIconTop__ |
|Bottom| __Icon.PrimaryIconBottom__ | __Icon.SecondaryIconBottom__ |
|Left| __Icon.PrimaryIconLeft__ | __Icon.SecondaryIconLeft__ |
|PrimaryIconRight| __Icon.PrimaryIconRight__ | __Icon.SecondaryIconRight__ |

Alternatively, a CSS class can be set to the icon, and the position configured using CSS.

1. Properties:

````ASPNET
			<telerik:RadButton ID="RadButton2" runat="server" Text="Spell Check Html">
				<Icon PrimaryIconUrl="http://demos.telerik.com/aspnet-ajax/button/examples/customicons/images/eSpellCheck.png" PrimaryIconTop="4px" PrimaryIconLeft="5px"
					SecondaryIconUrl="http://demos.telerik.com/aspnet-ajax/button/examples/customicons/images/eHtml.png" SecondaryIconTop="4px" SecondaryIconRight="5px" />
			</telerik:RadButton>
````



1. Or the same configuration using CSS classes:

````XML
		<style type="text/css">
			.classSpellCheck {
				top: 4px !important;
				left: 5px !important;
			}
	
			.classHtml {
				top: 4px !important;
				right: 5px !important;
			}
		</style>
````



````XML
			<telerik:RadButton ID="RadButton3" runat="server" Text="Spell Check Html">
				<Icon PrimaryIconUrl="http://demos.telerik.com/aspnet-ajax/button/examples/customicons/images/eSpellCheck.png" PrimaryIconCssClass="classSpellCheck"
					SecondaryIconUrl="http://demos.telerik.com/aspnet-ajax/button/examples/customicons/images/eHtml.png" SecondaryIconCssClass="classHtml" />
			</telerik:RadButton>
````


>caption Figure 3: Primary and Secondary icons in RadButton can be offset.

![Rad Button icons offset](images/RadButton_icons_offset.png)

# See Also

 * [Embedded Icons]({%slug button/button-types/icons/embedded-icons%})

 * [Split Button]({%slug button/button-types/split-button%})

 * [Overview]({%slug button/button-types/icons/overview%})

 * [Image Button]({%slug button/button-types/image-button%})

 * [Toggle button]({%slug button/button-types/toggle-button%})
