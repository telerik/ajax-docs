---
title: Blank Dialogs Problem
page_title: Blank Dialogs Problem - RadEditor
description: Check our Web Forms article about Blank Dialogs Problem.
slug: editor/troubleshooting/blank-dialogs-problem
tags: blank,dialogs,problem
published: True
position: 4
---

# Blank Dialogs Problem

**Problem:**

The RadEditor dialogs are loaded empty or throw an error: "The page cannot be found"

**Description:**

The RadEditor dialogs receive encoded arguments such as skin and configuration information (for example the ImagesPaths, DialogCssFiles) via the URL. In addition RadEditor follows the HTTP rules, which allow up to 2000 symbols to be used for the URL length. However, if some monitoring program such as **WebSense** or a **Proxy server** decrease the URL length for example to 1700 symbols then this could break the loading of the editor dialogs and cause the "The page cannot be found" error.

**Solution:**

Contact your network administrator and increase the allowed URL length to 2000 symbols.
