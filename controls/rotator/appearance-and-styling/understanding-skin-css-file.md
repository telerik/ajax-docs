---
title: Understanding Skin CSS File
page_title: Understanding Skin CSS File | UI for ASP.NET AJAX Documentation
description: Understanding Skin CSS File
slug: rotator/appearance-and-styling/understanding-skin-css-file
tags: understanding,skin,css,file
published: True
position: 5
---

# Understanding Skin CSS File



## 

Styles for RadRotator are defined using Cascading Style Sheet (CSS) syntax. Each style consists of a selector that identifies an HTML element to be styled, and property/value pairs that describe each of the style specifics, e.g. color, padding, margins, etc. See the [RadRotator's CSS Classes]({%slug rotator/appearance-and-styling/css-classes%}) topic for more information on the specific CSS selectors used for RadRotator skins.

Each style maps to a "class" attribute in an HTML tag. For example, consider the HTML rendering of a RadRotator control: represented is the HTML code that renders a RadRotator, set with a specific options. The HTML elements are styled both with classes that are defined in the CSS files and inline styles. If you like to change something in the styles you should do that in the inline styles or in the CSS files.

````HTML
	    <div class="rotatorBackground">
	        <div style="height: 110px; width: 330px; visibility: visible;" class="RadRotator RadRotator_Vista horizontalRotator rrNoBorder"
	            id="RadRotator1">
	            <div class="rrRelativeWrapper" style="height: 110px; width: 330px;">
	                <div class="rrClipRegion" style="overflow: hidden; width: 330px; height: 110px; position: relative;">
	                    <ul class="rrItemsList" style="width: 1100px; height: 110px; position: relative;
	                        left: -770px; top: 0px;">
	                        <li style="height: 110px; width: 110px;" class="rrItem">
	                            <div id="RadRotator1_i0">
	                                <div class="itemTemplate">
	                                    <img alt="Customer Image" src="/pic1.jpg">
	                                </div>
	                            </div>
	                        </li>
	                        <li style="height: 110px; width: 110px;" class="rrItem">
	                            <div id="RadRotator1_i0">
	                                <div class="itemTemplate">
	                                    <img alt="Customer Image" src="/pic2.jpg">
	                                </div>
	                            </div>
	                        </li>
	                        <li style="height: 110px; width: 110px;" class="rrItem">
	                            <div id="RadRotator1_i0">
	                                <div class="itemTemplate">
	                                    <img alt="Customer Image" src="/pic.jpg">
	                                </div>
	                            </div>
	                        </li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	    </div>
````


>caption 

![RadRotator](images/rotator-radrotator_new.png)





````ASPNET
	    <telerik:RadRotator ID="RadRotator1" runat="server" Width="330px" Height="110px"
	        CssClass="horizontalRotator" ScrollDuration="500" FrameDuration="2000" ItemHeight="110"
	        ItemWidth="110">
	        <ItemTemplate>
	            <div style="width: aut0; border: 1px dotted #eee;">
	                <img src='<%# Page.ResolveUrl("~/Rotator/Img/Northwind/Customers/Thumbs/") + Container.DataItem %>.jpg'
	                    alt="Customer Image" />
	            </div>
	        </ItemTemplate>
	    </telerik:RadRotator>
````



Where __.className__ will replace the inline styles in:

````ASPNET
	    <div style="width: aut0; border: 1px dotted #eee;" class="className">
	        <img src='<%# Page.ResolveUrl("~/Rotator/Img/Northwind/Customers/Thumbs/") + Container.DataItem %>.jpg'></img>
	    </div>
````



# See Also

 * [CSS Classes]({%slug rotator/appearance-and-styling/css-classes%})

 * [Create a Custom Skin from an Existing One]({%slug rotator/appearance-and-styling/create-a-custom-skin-from-an-existing-one%})
