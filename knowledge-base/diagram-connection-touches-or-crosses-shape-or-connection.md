---
title: Connection touches or crosses shape or connection
description: Connection touches or crosses shape or connection. Check it now!
type: how-to
page_title: Connection touches or crosses shape or connection
slug: diagram-connection-touches-or-crosses-shape-or-connection
res_type: kb
---


### PROBLEM

Diagram connections cross or touch shapes or other connections.

### DESCRIPTION

In some cases (the more complex the diagram, the higher chance of this manifesting), one or more connections may touch or even cross a shape, and/or another connection.

RadDiagram does not consider this behavior a bug or a problem and it cannot be completely avoided. The Solution section below offers a few ideas you can try to minimize it, however.

### SOLUTION

You can find listed here some explanations and a few ideas that may help you configure the diagram so that connections cross or touch shapes more rarely.

- **Increase** the **separation** between the diagram nodes. These are mostly the `HorizontalSeparation` and `VerticalSeparation` properties under [LayoutSettings]({%slug diagram/structure/layout/overview%}#layoutsettings-configuration). Depending on the layout, the `NodeDistance` and `RadialSeparation` are also available.
- The way shapes and connections are laid out depends on the algorithm that is used. Some algorithms (like the [Layered layout]({%slug diagram/structure/layout/layered%})) work best with few diagram items and so having many items is more likely to cause issues. So, you can **try a different algorithm** ([Layout](http://https://demos.telerik.com/aspnet-ajax/diagram/examples/layouts/defaultcs.aspx)).
- Try the **Cascading** style of **connections** by setting `ConnectionDefaultsSettings.Type` to `Cascading`.
- **Use** the **Auto connectors** whenever possible by setting `ConnectionDefaultsSettings.FromConnector `and `ConnectionDefaultsSettings.ToConnector` to `Auto`.
- **Increase** the number of **Iterations** of the algorithm over the data (defaults to 300 and comes with some performance cost).



