---
title: RibbonBarGallery
page_title: RibbonBarGallery | UI for ASP.NET AJAX Documentation
description: RibbonBarGallery
slug: ribbonbar/radribbonbar-items/ribbonbargallery/ribbonbargallery
tags: ribbonbargallery
published: True
position: 0
---

# RibbonBarGallery



__Galleries__ are functionally and graphically rich list box controls. The item collection of a gallery can be organized by categories, displayed in flexible column and row-based layouts, represented with images and text, and depending on the type of gallery, support live previewing.

## RibbonBarGallery

>note The RibbonBarGallery is available after the __Q2 2013__ release of the RadControls controls.
>


The __RibbonBarGallery__ has a collection of __RibbonBarGalleryCategories__, which in turn have a collection of __RibbonBarGalleryItems.__ The RibbonBarGallery has 3 buttons on the right thatenables scrolling and expanding of the Gallery. The top and middle buttons are used to scroll the items inline up and down one row at a time, while the bottom button expands the Gallery. The expanded Gallery enables the customization of the height set - it can be altered withthe __ExpandedHeight__ property as described bolow.![ribbonbar-galleryitems](images/ribbonbar-galleryitems.png)

Here you can find a sample markup demonstrating how to build your first RibbonBarGallery:

````ASPNET
	        <telerik:RadRibbonBar ID="RadRibbonBar1" runat="server" OnClientGalleryCommandPreview="OnClientGalleryCommandPreview"
	            OnClientGalleryCommandPreviewEnd="OnClientGalleryCommandPreviewEnd" OnClientGalleryCommand="OnClientGalleryCommand"
	            OnGalleryCommand="OnGalleryCommand">
	            <Tabs>
	                <telerik:RibbonBarTab Text="Tab">
	                    <telerik:RibbonBarGroup Text="Group">
	                        <Items>
	                            <telerik:RibbonBarGallery CommandName="GalleryCommand" Columns="5" ExpandedColumns="8"
	                                ExpandedHeight="300px" ItemHeight="32px" ItemWidth="32px" ItemTextPosition="Bottom">
	                                <telerik:RibbonBarGalleryCategory Title="FirstCategory">
	                                    <telerik:RibbonBarGalleryItem CommandArgument="GalleryItemArgument" Text="Item" ToolTip="Item"
	                                        ImageUrl="Image.png" CssClass="ImageCssClass" />
	                                </telerik:RibbonBarGalleryCategory>
	                                <telerik:RibbonBarGalleryCategory>
	                                    <telerik:RibbonBarGalleryItem CommandArgument="GalleryItemArgument" Text="Item" ToolTip="Item"
	                                        ImageUrl="Image.png" CssClass="ImageCssClass" />
	                                </telerik:RibbonBarGalleryCategory>
	                            </telerik:RibbonBarGallery>
	                        </Items>
	                    </telerik:RibbonBarGroup>
	                </telerik:RibbonBarTab>
	            </Tabs>
	        </telerik:RadRibbonBar>
````



Listed below are some important properties of the RibbonBarGallery:

* __CommandName__ - The CommandName that is passed as a parameter to the RibbonBar’s OnCommand or OnGalleryCommand event.

* __ItemTextPosition__ - property that can take vaules of Bottom, Inline and None. It controls the position of the text relative to the image of each GalleryItem inside the Gallery.

* __ExpandedHeight__ - property that sets the height of the Gallery when expanded.

* __ItemHeight__ - property that sets the height of each GalleryItem inside the Gallery.

* __ItemWidth__ - property that sets the width of each GalleryItem inside the Gallery.

* __Columns__ - propert that sets the number of columns that the GalleryItems should be displayed in.The Gallery itself does not have a Width property therefore the Width is calculated to fit the exact number of items horizontally as specified in the Columns property.

* __ExpandedColumns__ - property that sets the number of columns when the Gallery is expanded.

## Server-Side Interaction

The __RibbonBarGallery__ will raise the following server-side event:

* __OnGalleryCommand__ - raised on the server when the user clicks a GalleryItem.

>note The __RibbonBarGallery__ will also fire the ribbon’s __OnCommand__ event with the respective __CommandName__ and __CommandArgument__ arguments.
>


## Client-Side Interaction

The __RibbonBarGallery__ will raise the following client-side events:

* __[OnClientGalleryCommandPreview ]({%slug ribbonbar/client-side-programming/events/onclientgallerycommandpreview-%})__– raised on the client when the user moves the mouse over a GalleryItem

* __[OnClientGalleryCommandPreviewEnd ]({%slug ribbonbar/client-side-programming/events/onclientgallerycommandpreviewend-%})__- raised on the client when the user moves the mouse out of a GalleryItem

* __[OnClientGalleryCommand]({%slug ribbonbar/client-side-programming/events/onclientgallerycommand%})__– raised on the client when the user clicks a GalleryItem
