---
title: Known Issues, Tips and Tricks
page_title: Known Issues, Tips and Tricks
description: Check our Web Forms article about Known Issues, Tips and Tricks.
slug: introduction/visual-stylebuilder/known-issues,-tips-and-tricks
tags: known,issues,,tips,and,tricks
published: True
position: 4
---

# Known Issues, Tips and Tricks



## Issue: RadDropDownTree is Not Available

Currently there are some issues with skinning this control through the **VisualStyleBuilder** and it is not available for selection. It will be put back in the list as soon as they are fixed.

## Issue: Gradients

Most of the skins use background images for transparency and gradients, but the **new skins** (currently Glow and Silk) use **CSS3 gradients**. Currently, there is no unified way of creating them with CSS3, because each browser has its own implementation of the property, if it has one at all. This means that **customized gradient backgrounds** in these skins **can have issues** and may need manual tweaking after the skin is exported from the tool.

## Issue: Visual glitches in IE7

The Visual StyleBuilder is a complex developer tool and targets modern browsers. Its interface and functionality may have some issues under older browsers(e.g., IE7) and **we advise using** the latest version of **a modern browser** with this tool.

## Tip: Always Save the Changes

The tool's interface consists of many tabs that expose the different aspects of tweaking a skin. Before navigating between the mall changes must be saved or they will be lost.

## Tip: Choose Skin Name Beforehand

The name of the new skin is chosen in one of the first steps of the wizard-like interface and cannot be changed at a later stage without losing all the changes that have been made so far. We advise that the name the skin should be chosen beforehand to avoid manual find-and-replace operations later.
