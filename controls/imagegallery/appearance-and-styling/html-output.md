---
title: HTML Output
page_title: HTML Output - RadImageGallery
description: Check our Web Forms article about HTML Output.
slug: imagegallery/appearance-and-styling/html-output
tags: html,output
published: True
position: 1
---

# HTML Output of RadImageGallery

The typical HTML output of **RadImageGallery** control is the following (some HTML attributes have been removed for simplicity):

````HTML
<div class="RadImageGallery RadImageGallery_Default" id="RadImageGallery1">
    <div class="rigItemBox" id="RadImageGallery1_ImageArea">
        <input class="rigActionButton rigPrevButton" title="Previous Image" />
        <input class="rigActionButton rigNextButton" title="Next Image" />
        <div id="RadImageGallery1_ImageArea_ImageWrapper" class="rigActiveImage">
            <img src="Image1.png" alt="" />
            <div class="rigToolsWrapper">
                <div style="display: none;" class="rigDescriptionBox">
                    <h4 class="rigTitle"></h4>
                    <p class="rigDescription"></p>
                </div>
                <div class="rigToolbar rigToolbarBottomInside" id="RadImageGallery1_ImageArea_Toolbar">
                    <div class="rigProgressBar">
                        <div />
                    </div>
                    <span class="rigItemsCount">Item 9 of 10</span>
                    <div class="rigControlsSet">
                        <button class="rigActionButton rigPlayButton" title="Play Slideshow"><span class="rigIcon rigPlayIcon"></span><span class="rigButtonText">Play Slideshow</span></button>
                        <button class="rigActionButton rigFullScrButton" title="Enter FullScreen"><span class="rigIcon rigFullScrIcon"></span><span class="rigButtonText">Enter FullScreen</span></button>
                        <button class="rigActionButton rigHideThumbnButton" title="Hide Thumbnails"><span class="rigIcon rigHideThumbnIcon"></span><span class="rigButtonText">Hide Thumbnails</span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="RadImageGallery1_ThumbnailsArea" class="rigThumbnailsBoxHorizontal rigPositionBottom">
        <button class="rigActionButton rigScrollPrevButton" title="Scroll Prev"><span class="rigIcon rigScrollPrevIcon"></span><span class="rigButtonText">Scroll Prev</span></button>
        <button class="rigActionButton rigScrollNextButton" title="Scroll Next"><span class="rigIcon rigScrollNextIcon"></span><span class="rigButtonText">Scroll Next</span></button>
        <div class="rigThumbnailsBox">
            <div>
                <ul class="rigThumbnailsList">
                    <li class="rigThumbnailActive">
                        <a href="#">
                            <img alt="0" src="Image1Thumb.png" /></a>
                    </li>
                    <li>
                        <a href="#">
                            <img alt="0" src="Image2Thumb.png" /></a>
                    </li>
                    ...
                </ul>
            </div>
        </div>
    </div>
    <div class="rigPager">
        <div class="rigWrap rigNumPart">
            <a href="#" class="rigCurrentPage"><span>1</span></a>
            <a href="#"><span>2</span></a>
            ...
        </div>
        <div class="rigInfoPart">Page 1 of 8</div>
    </div>
</div>
````

## CSS classes and their usage

* **div.RadImageGallery.RadImageGallery_SkinName** - this is the main control element, which holds the skin name. It has a couple of div elements - image area, thumbnails area with thumbnails list and the pager div. 

* **div.rigItemBox** - contains the image which is currently displayed in the browser. 

* **img.rigActiveImage** - the currently active image.

* **div.rigToolsWrapper** - this is the wrapper element which holds the ToolBar and the Description. 

* **div.rigDescriptionBox** - contains all elements of the description area.

* **div.rigToolbar** -  contains the toolbar.

* **h4.rigTitle** - element which holds the title of the description if there is any.

* **div.rigProgressBar** - visualization of the sideshow progress

* **span.rigItemsCount** - span element that shows the items count

* **div.rigControlsSet** - contains play, full screen and hide thumbnail buttons

* **div.rigThumbnailsBox[Horizontal] rigPosition[Bottom]** -  element which contains prev and next scroll buttons and thumbnails box div element (the suffix may vary depending on the position and orientation, which is set by the property ThumbnailsAreaSettings-Position )

* **div.rigThumbnailsBox** - contains the image which is currently displayed in the browser.

* **div.rigPager** - element which contains the information about the current image index and the total number of images.
