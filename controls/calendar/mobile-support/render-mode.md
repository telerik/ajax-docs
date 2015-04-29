---
title: Render Mode
page_title: Render Mode | RadCalendar for ASP.NET AJAX Documentation
description: Render Mode
slug: calendar/mobile-support/render-mode
tags: render,mode
published: True
position: 0
---

# Render Mode



## Overview

**RadCalendar** exposes the **RenderMode** property, which accepts three values - **Classic**, **Lightweight** and **Native**.

>caution 
The same mode should be selected for all RadCalendar controls on the entire page. Otherwise, RadCalendar layout will be damaged due to confusion over the multiple CSS classes on the page.
>


## The Classic render mode

**RadCalendar** is rendered in **Classic** mode by default.

Rendering: (*Metro skin*)

````ASPNET
<div id="RadCalendar1_wrapper">
    <table cellspacing="0" class="RadCalendar RadCalendar_Metro" summary="Calendar control which enables the selection of dates." id="RadCalendar1">
        <caption>
            <span style="display: none;">Calendar</span>
        </caption>
        <thead>
            <tr>
                <td class="rcTitlebar">
                    <table cellspacing="0" summary="Title and navigation which can change and show the current year and month.">
                        <caption>
                            <span style="display: none;">Title and navigation</span>
                        </caption>
                        <thead>
                            <tr style="display: none;">
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <!-- Navigation part-->
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="rcMain">
                    <table cellspacing="0" summary="Table containing all dates for the currently selected month." class="rcMainTable" id="RadCalendar1_Top">
                        <caption>
                            <span style="display: none;">May 2013</span>
                        </caption>
                        <thead>
                            <tr class="rcWeek">
                                <th scope="col" class="rcViewSel">&nbsp;</th>
                                <th abbr="Sun" scope="col" title="Sunday" id="Th1">S</th>
                                <!-- || -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="rcRow">
                                <th scope="row" id="Th2">18</th>
                                <td title="Sunday, April 28, 2013" class="rcOtherMonth"><a href="#">28</a></td>
                                <!-- || -->
                            </tr>
                            <!-- || -->
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</div>
````



## The Lightweight render mode

**Lighweight** rendering yields completely different markup making maximum use of CSS 3 and semantic html. This means that we no longer use table elements for building the layout of **RadCalendar**. Thus, two table elements are dropped from the rendered mark-up in favor of improved performance and decreased amount of data requested from the client browser. This enhancement favors especially the mobile experience.

>note 
Not all controls support **Lightweight** render mode.
>


Rendering: (*Metro skin*)

````ASPNET
<div class="RadCalendar RadCalendar_Metro" id="RadCalendar1_wrapper">
    <div class="rcTitlebar">
        <!-- Navigation part-->
    </div>
    <div class="rcMain">
        <table cellspacing="0" summary="Table containing all dates for the currently selected month." class="rcMainTable" id="RadCalendar1_Top">
            <caption>
                <span style="display: none;">May 2013</span>
            </caption>
            <thead>
                <tr class="rcWeek">
                    <th scope="col" class="rcViewSel">&nbsp;</th>
                    <th abbr="Sun" scope="col" title="Sunday" id="RadCalendar1_Top_cs_1">S</th>
                    <!-- || -->
                </tr>
            </thead>
            <tbody>
                <tr class="rcRow">
                    <th scope="row" id="RadCalendar1_Top_rs_1">18</th>
                    <td title="Sunday, April 28, 2013" class="rcOtherMonth"><a href="#">28</a></td>
                    <!-- || -->
                </tr>
                <!-- || -->
            </tbody>
        </table>
    </div>
</div>
````



## The Native render mode

The **Native** render mode option is inherited directly from **RenderMode** which is a global property for Telerik controls. However, since **RadCalendar** does not have a similar html element, the **Native** render mode will not have any effect.

# See Also

 * [Lightweight Rendering – Going deeper into HTML semantics and CSS3](http://blogs.telerik.com/aspnet-ajax/posts/13-03-08/radcontrols-for-asp.net-ajax-lightweight-rendering-semantic-html-and-css3)
