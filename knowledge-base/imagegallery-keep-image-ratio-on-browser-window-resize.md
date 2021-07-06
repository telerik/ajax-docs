---
title: Keep Image Ratio on Browser Window Resize
description: Keep Image Ratio on Browser Window Resize - RadImageGallery Web UI. Check it now!
type: how-to
page_title: Keep Image Ratio on Browser Window Resize
slug: imagegallery-keep-image-ratio-on-browser-window-resize
res_type: kb
---


### DESCRIPTION

Keeping the image ratio when resizing the browser window is useful in scenarios when you want to show a banner-like gallery on the top of the page.

### SOLUTION

As the designed behavior of RadImageGallery is to resize the width of the image depending on the height (but not th vice versa), we will need to modify both the CSS and client-side resizing logic of the control in order to resize its height:

1. Add the following styles to the page in order to size all wrappers depending on the view port size:  

````CSS
<style>
html, body, form {
    margin: 0px !important; }
.rigItemBox {
    width: 100% !important; }
.RadImageGallery {
    background-color: transparent !important; }
.rigToolbar {
    display: none; }
.rigActiveImage img {
    padding: 0px !important;
    width: 100% !important;
    height: auto !important; }
</style>
````

2. Get the active Image height and set it as height to its wrapper. We should do that on initial load of RadImageGallery and each time the browser is resized:  

````ASP.NET
<script type="text/javascript">
    var $ = $telerik.$;

    function pageLoad() {
        $(".rigItemBox").height($telerik.$(".rigActiveImage img").height());
        $find('<%=RadImageGallery1.ClientID%>').playSlideshow();
        $(window).on('resize', function () {
            $(".rigItemBox").height($telerik.$(".rigActiveImage img").height());
        });
    }

</script>
<telerik:RadScriptManager ID="RadScriptManager1" runat="server"></telerik:RadScriptManager>
<div>A div with some text above our Image Gallery</div>
<telerik:RadImageGallery ID="RadImageGallery1" runat="server" LoopItems="True"
    ToolTip="Click to View All Featured Products/Projects" AppendDataBoundItems="True" ImagesFolderPath="~/Images/">
    <ThumbnailsAreaSettings Mode="ImageSlider" />
    <ImageAreaSettings ShowDescriptionBox="false" />
    <ToolbarSettings Position="None" />
    <ClientSettings>
        <AnimationSettings SlideshowSlideDuration="3000">
            <NextImagesAnimation Speed="1500" Type="Fade" />
            <PrevImagesAnimation Speed="1500" Type="Fade" />
        </AnimationSettings>
    </ClientSettings>
</telerik:RadImageGallery>
<div>A div with some text below our Image Gallery</div>
````

  
  