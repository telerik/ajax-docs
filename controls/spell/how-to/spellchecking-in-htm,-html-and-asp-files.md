---
title: Spellchecking in HTM, HTML and ASP Files
page_title: Spellchecking in HTM, HTML and ASP Files | RadSpell for ASP.NET AJAX Documentation
description: Spellchecking in HTM, HTML and ASP Files
slug: spell/how-to/spellchecking-in-htm,-html-and-asp-files
tags: spellchecking,in,htm,,html,and,asp,files
published: True
position: 4
---

# Spellchecking in HTM, HTML and ASP Files



## Scenario

How do you perform spellchecking in *.htm, *.html, or *.asp files

## Solution

To use RadSpell for spellchecking of non-ASP.NET pages (*.htm, *.html, or *.asp):

1. Use JavaScript to open an *.aspx file (with an integrated RadSpell control) in a new window.

1. That window receives the text that needs to be checked as a parameter and puts it in a hidden small window with a TextBox.

1. Then it starts the spellchecker and the user performs the checking. When the spellchecker window closes, the small window closes automatically as well and returns the corrected text back to the starter window.

1. That window then sets the value of the TextBox being checked to the corrected text (returned as a parameter).
