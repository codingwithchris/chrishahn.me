## Overview
The SVG assets contained in this folder are for reference only and are never called directly in any component.
In order to create a fast and flexible system to implement these SVGs, we manually extract the paths of the SVGs
into their own variables which get reference by an implementing component.

### Examples of How We Are Using Path Extractions
- `src/components/foundations/svg/Icon/Icon.manifest.js`
- `src/components/foundations/svg/Symbol/Symbol.manifest.js`
- `src/components/foundations/svg/Logotype/Logotype.manifest.js`
- `src/components/foundations/svg/Loclup/Lockup.manifest.js`

## Update Procedure
Inevitably, we will either add, remove, or update icons in this system. The following procedure serves as a solid rule of thumb. for making thee updates.
*Note: icon updates should typically be a collaboration between a designer and developer.*

1. The SVG Asset is added, changed, or removed in our [FUSE • Brand SVG Manifest for Web](https://docs.google.com/spreadsheets/d/1RJhp4wk4XmJiAz1Dk2h9epJ6BlWKsNAfSHBXT0hwo4M/edit#gid=119748107)

2. The designer updates the asset, and ideally optimizes it for the web. Currently we are using [SVGOMG](https://jakearchibald.github.io/svgomg/) to optimize our SVGs.

3. The designer adds the updated SVG asset to Dropbox.

4. The developer grabs the latest asset from dropbox ad updates the matching asset in `static/svg/`.

5. The developer copies the path to the appropriate component manifest variable.

6. After deployment to production, the developer updates the [FUSE • Brand SVG Manifest for Web](https://docs.google.com/spreadsheets/d/1RJhp4wk4XmJiAz1Dk2h9epJ6BlWKsNAfSHBXT0hwo4M/edit#gid=119748107) sheet letting everyone know that the changes have been made in development.
