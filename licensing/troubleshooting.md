---
title: Troubleshooting
page_title: Telerik Licensing Troubleshooting
description: "Learn about troubleshooting Telerik UI for ASP.NET AJAX Licensing issues, End User License Agreement, Bill of Materials and Third-Party Software Licensing"
slug: licensing/troubleshooting
tags: license, agreement
published: True
position: 5
---

# Troubleshooting

## Telerik Licensing Diagnostics

### Build Diagnostics

Use the `TelerikLicensingVerbosity` configuration in your project file to enable detailed licensing diagnostics during build. A sample configuration of the proj file is shown below:

````XML
<PropertyGroup>
  <TelerikLicensingVerbosity>Diagnostic</TelerikLicensingVerbosity>
</PropertyGroup>
````

Here are the possible values for `TelerikLicensingVerbosity`:

- `quiet` / `q` — the lowest verbosity level
- `verbose` / `v` — the normal/middle verbosity level
- `diagnostics` / `diagnostic` / `diag` / `d` — the highest verbosity level

The default value, when not explicitly set, generates logs with verbosity between `quiet` and `verbose`.

### Runtime Diagnostics

Starting with `Telerik.Licensing` version 1.6.24, we provide a utility that does runtime diagnostics.

1. Install `Telerik.Licensing` library 1.6.24 or later from NuGet. We recommend the latest version of the package.

1. To enable the runtime diagnostics, call the method `Telerik.Licensing.TelerikLicensing.EnableDiagnostics()` as early as possible before using Telerik UI for ASP.NET AJAX controls. You may add the code in the startup file of the project. In ASP.NET projects, you may use the `Application_Start` event handler in the `Global.asax` file. Here is a sample code:

    ````C#
    protected void Application_Start(object sender, EventArgs e)
    {
        string logPath = Server.MapPath("~/TelerikLicensing.log");
        var writer = File.AppendText(logPath);
        writer.AutoFlush = true;
        Console.SetOut(writer);
        Telerik.Licensing.TelerikLicensing.EnableDiagnostics();
    }
    ````

    The above code will add the Licensing validation logs to the file `TelerikLicensing.log` in your application's main folder.

1. (Optional) If you make a call to the method `TelerikLicensing.Register()`, do this after enabling diagnostics with the above code line.

1. Collect the content of the aggregated licensing log in `Telerik.Licensing.TelerikLicensing.Diagnostics`:

    ```csharp
    Console.WriteLine(Telerik.Licensing.TelerikLicensing.Diagnostics);
    ```