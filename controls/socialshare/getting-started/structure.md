---
title: Structure
page_title: Structure | UI for ASP.NET AJAX Documentation
description: Structure
slug: socialshare/getting-started/structure
tags: structure
published: True
position: 1
---

# Structure



## 

The main elements of the __RadSocialShare__ control are:![radsocialshare-structure](images/radsocialshare-structure.png)

* __MainButtons__ - these are the buttons that are always visible on the page

* __CompactButton__ - this is an extra button that is not used for sharing, but to show the other available buttons

* __CompactButtons list__ - these are the buttons that are not initially visible on the page, yet are easily reachable in a movable popup

* __SearchBox__ - you can start typing a social network's name and the __CompactButtons__ will be filtered accordingly

* __CompactButtons popup__ - the __RadWindow__ that holds the additional buttons

* __Send E-mail button__ - a button that pops up a form in a __RadWindow__ that allows you to send an e-mail via a dedicated server

* __Mailto button__ - a button that triggers the system's default mail client to send an e-mail via the user machine

* __Label Text__ - the text associated with the button. It can be set explicitly via a property. The CompactButtons have a predefined value which is used for the Search Box even if you do not set the label explicitly.
