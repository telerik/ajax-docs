---
title: Known Issues, Tips and Tricks
page_title: Known Issues, Tips and Tricks | UI for ASP.NET AJAX Documentation
description: Known Issues, Tips and Tricks
slug: introduction/visual-stylebuilder/known-issues,-tips-and-tricks
tags: known,issues,,tips,and,tricks
published: True
position: 4
---

# Known Issues, Tips and Tricks



## Issue: RadDropDownTree is not available

Currently there are some issues with skinning this control through the VisualStyleBuilder and it is not available for selection.It will be put back in the list as soon as they are fixed.

## Issue: Gradients

Most of the skins use background images for transparency and gradients, but the __new skins__ (currently Glow and Silk)use __CSS3 gradients__. Currently, there is no unified way of creating them with CSS3, because each browser	has its own implementaion of the property, if it has one at all. This means that __customized gradient backgrounds__ in these skins	__can have issues__ and may need manual tweaking after the skin is exported from the tool.

## Issue: Visual glitches in IE7

The Visual StyleBuilder is a complex developer tool and targets modern browsers. Its interface and functionality may have some issues inder older browsers(e.g. IE7) and __we advise using__ the latest version of __a modern browser__ with this tool.

## Tip: Always save the changes

The tool's interface consists of many tabs that expose the different aspects of tweaking a skin. Before navigating between themall changes must be saved or they will be lost.

## Tip: Choose Skin name beforehand

The name of the new skin is chosen in one of the first steps of the wizard-like interface and cannot be changed at a later stage without losingall the changes that have been made so far. We advise that the name the skin should be chosen beforehand to avoid manual find-and-replace operations	later.
