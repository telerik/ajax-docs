---
title: Buttons Collection
page_title: Buttons Collection | UI for ASP.NET AJAX Documentation
description: Buttons Collection
slug: searchbox/functionality/buttons-collection
tags: buttons,collection
published: True
position: 1
---

# Buttons Collection



## Buttons Collection

RadSearchBox implements a button collection for additional custom buttons inside.

Each one of these buttons has the following inbuilt properties:



* __CommandName__ - holds the command name of the button.

* __CommandArgument__ - holds the command argument of the button.

* __Position__ - sets the position of the image button relative to the input element. It has two possible values: __Left__ and __Right__. The default value is __Left__.

* __ImageUrl__ - the URL of the image that will be loaded in the button.

* __AlternateText__ - the text that will be shown in case the image is not loaded.

When a button is clicked, an[onClientButtonCommand]({%slug searchbox/client-side-programming/events/onclientbuttoncommand%}) event is fired. If the server[OnButtonCommand]({%slug searchbox/server-side-programming/server-events/onbuttoncommand%}) event is declared it is fired as well.

Here is how a sample RadSearchBox would look like with additional buttons:![searchbox autocomplete false](images/searchbox_autocomplete_false.png)

````ASPNET
		
	         <telerik:RadSearchBox runat="server" ID="RadSearchBox2"
	                    Width="300">
	                    <Buttons>
	                        <telerik:SearchBoxButton ImageUrl="../Img/icon_globe.png" CommandName="Globe"
	                            CommandArgument="globe" Position="Left" AlternateText="globe" />
	                        <telerik:SearchBoxButton ImageUrl="../Img/icon_favourites.png" CommandName="Favorites"
	                            CommandArgument="favorites" Position="Right" AlternateText="favorites" />
	                    </Buttons>
	                    <DropDownSettings Width="300" />
	                </telerik:RadSearchBox>
````


