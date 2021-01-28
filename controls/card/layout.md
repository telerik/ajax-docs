---
title: Layout
page_title: RadCard Layout
description: Check our Web Forms article about Layout.
slug: card/layout
tags: layout
published: True
position: 2
---

# Layout

## Series of Cards

The `RadCard` exposes additional classes that are used for laying out series of cards. Adding a simple CSS class to the container element of the cards will align them in the correct way.

For Group and Deck of cards, adding the `.k-card-deck-scrollwrap` class also to the cards container allows the first and last child elements with `.k-button` to be positioned as scroll buttons.

Check out the online demo where this is demonstrated - [RadCard Layout demo](https://demos.telerik.com/aspnet-ajax/card/layout/defaultcs.aspx).

### Deck of Cards

To render Cards that are detached from one another on a single row, use the `.k-card-deck` class.

### Group of Cards

To render Cards that are attached to one another on a single row, use the `.k-card-group` class.

### List of Cards

To render cards that are detached from one another in a column, use the `.k-card-list` class.

## Custom Layout

The Card itself and CardActionsComponent can order its child elements horizontally or vertically via the Orientation property. For all the other element, within or outside the Card component, you can use the following exposed CSS classes to achieve flex layout:

|CSS Class| CSS equivalent | Description|
|---|---|---|
|`.k-vbox`| display: flex; flex-direction: column; | Position a vertical flex container element|
|`.k-hbox`| display: flex; flex-direction: row; | Position a horizontal flex container element|
|`.k-column`|  flex-grow: 1; flex-basis: 0; | Define a column element within a horizontal flex container|



