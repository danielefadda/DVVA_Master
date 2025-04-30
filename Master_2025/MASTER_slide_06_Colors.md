---
marp: true
theme: master
header: 'Data Visualization and Visual Analytics'
footer: 'Colors <mark>DVVA<mark>'
paginate: true

---


<!-- _class: cover -->
<!-- _paginate: skip -->

<div>
  <h1>6 • Colors</h1>
  <!-- <div class="subtitle">A subtitle</div> -->

  <div class="authors">
    <div class="author-label">teacher</div>
    <div class="author-name">Salvatore Rinzivillo</div>
    <div class="author-name">Daniele Fadda</div>
    <br>
    <div class="author-label">tutor</div>
    <div class="author-name">Eleonora Cappuccio</div>
  </div>
  <div class="university">
    <strong>University of Pisa</strong><br>
    Department of Computer Science<br>
    Course: Visual Analytics (602AA)<br>
    Academic Year: 2024/2025    
  </div>

</div>



<div class="cover-image">
<img src="img/DVVA_04/altair_cover.png" alt="" height="650px">
</div>

<!-- Scale functions are the basic foundation of the theory of visual variables. They are responsible for transforming data into visual characteristics like size, shape, position, length, angles, and other visual elements we've seen. Formally, they transform a value from an input domain and return a corresponding value in the output range. -->

---

# PHOTO RECEPTOR CELLS

<div class="columns-2">

<div>

- Two types of light sensitive cells
  - **Rod Cells (~120M)**
    - Provide low-light vision
    - Peripheral vision
    - Almost no role in color vision
  - **Cone cells (~6M)**
    - Provide normal vision
    - Three sub-types of cells
    - Sensitivity to different light wavelengths
    - Used for colored vision

</div>

<div>

![height:500](img/DVVA_06/DVVA_colors_Page_02_Image_0003.jpg)

</div>

</div>

<!-- Slide explaining the two main types of photoreceptors in the human eye with their characteristics -->

---
# PHOTO RECEPTOR CELLS

![width:750 center](img/DVVA_06/DVVA_colors_Page_03_Image_0003.jpg)

<!-- Slide showing the spectral sensitivity curves of different photoreceptors -->

---
# TEST YOUR COLOR PERCEPTION

![height:450 center](img/DVVA_06/DVVA_colors_Page_04_Image_0003.jpg)

http://color.method.ac

<!-- Slide with a color wheel tool for testing color perception -->

---
# COLOR OF THE YEAR: 2016

![height:500 center](img/DVVA_06/DVVA_colors_Page_05_Image_0003.jpg)

<!-- Pantone color of the year 2016 featuring Rose Quartz and Serenity -->

---
# COLOR OF THE YEAR 2017

![height:450 center](img/DVVA_06/DVVA_colors_Page_06_Image_0003.jpg)

<!-- Pantone color of the year 2017 featuring Greenery -->

---
# COLOR OF THE YEAR 2019

![height:500 center](img/DVVA_06/DVVA_colors_Page_07_Image_0003.jpg)

<!-- Pantone color of the year 2019 featuring Living Coral -->

---
# COLOR MODEL - NEWTON (OPTICKS, 1704)

<div class="columns-3">

<div>

- White light is a combination of all colors
- Could recombine colors back to white light
- Wrapping basic colors around a circle

</div>

<div>

![](img/DVVA_06/DVVA_colors_Page_08_Image_0003.jpg)

</div>

<div>

![](img/DVVA_06/DVVA_colors_Page_08_Image_0004.jpg)

</div>

</div>

<!-- Explanation of Newton's color model and his experiments with light -->

---
# COLOR MODEL - COLOR CIRCLE (GOETHE, 1810)

<div class="columns-2">

<div>

- Measures of eye's response to color
- Three primary colors:
  - Magenta, yellow, blue

</div>

<div>

![height:450](img/DVVA_06/DVVA_colors_Page_09_Image_0003.jpg)

</div>

</div>

<!-- Goethe's color theory focusing on the psychological aspects of color perception -->

---

# COLOR MODELS - ADDITIVE AND SUBTRACTIVE MODELS

<div class="columns-2">
<div>

![height:450 center](img/DVVA_06/DVVA_colors_Page_10_Image_0003.jpg)
RGB additive model 
</div>
<div>

![height:450 center](img/DVVA_06/DVVA_colors_Page_10_Image_0004.jpg)
CMY subtractive model
</div>
<div>

<!-- Comparison of RGB additive and CMY subtractive color models -->

---
# COLOR MODELS - 3D SPACE MODELS (MAYER, 1775)

![width:800 center](img/DVVA_06/DVVA_colors_Page_11_Image_0003.jpg)

Problem: steps are not perceptually uniform

<!-- Early 3D color space model with explanation of its limitations -->

---
# COLOR MODELS - MUNSELL (EARLY 1900'S)

<div class="columns-2">

<div>

- Introduction of three new dimensions
  - HUE (red, blue, etc)
  - Value (light or dark)
  - Chroma (saturation)
- Irregular shape of solid
  - Low brightness implies fewer visible colors
- Introduction of a mathematical definition of colors (not names)

</div>

<div>

![height:450](img/DVVA_06/DVVA_colors_Page_12_Image_0003.jpg)

</div>

</div>

<!-- Explanation of the Munsell color system and its three-dimensional representation -->

---
# COLOR MODEL

- Young-Helmotz Theory (19th century)
  - Separate Red, Green, Blue receptors
  - Actually, three receptors type exist
    - Red and Green are located mainly in green-yellow zone
    - Sometimes named as <span style="color:#dd5500">L</span>ong, <span style="color:#ee9900">M</span>edium, <span style="color:#0000ff">S</span>hort wavelength receptors
  - Eye present different proportions of R,G,B receptors (40:20:1)

<!-- Description of the Young-Helmholtz theory of trichromatic color vision -->

---
# OPPONENT COLOR THEORY



- Based on estimation of opposite readings
  - red-green comparison
  - blue-yellow comparison
  - dark-light comparison



![height:200 center](img/DVVA_06/opponent_color_model.png)

C1+C2+C3=0
C1=R-G &nbsp;&nbsp;&nbsp;&nbsp; C3-C2=B-R-G+B=2B-(R+G) &nbsp;&nbsp;&nbsp;&nbsp; A = 2R+G+B/20

<!-- Explanation of the Opponent Color Theory with the mathematical relationships -->

---
# RGB COLOR MODEL

- Based on direct specification of three primary colors
- Additive model, each component is summed with the others


<br>

![center ](img/DVVA_06/DVVA_colors_Page_15_Image_0003.jpg)

<!-- Detailed explanation of the RGB color model with visualizations -->

---
# RGB COLOR MODEL

- R,G,B values may be expressed in range [0,1]
- Some applications use the range [0,255]
- Usually a hexadecimal notation is used for range [0,ff]
- Not really intuitive: how to define brown?

<!-- Further explanation of RGB color model specifications and limitations -->

---
# HSV COLOR MODEL

<div class="columns-2">

<div>

- Based on the intuitive concepts of
  - Hue
  - Saturation
  - Value (or brightness: 0% implies black; 100% implies pure color)
  - Lightness (or luminosity: 0% implies black; 50% implies pure color; 100% implies white)
- Component values are expressed in ranges [0,1] or [0,255]

<span class="small-text">"Hsl-hsvmodels" by Jacob Rus-Ownwork. Licensedunder CC BY-SA 3.0 via WikimediaCommons-http://commons.wikimedia.org/wiki/File:Hsl-hsv_models.svg#/media/File:Hsl-hsv_models.svg</span>

</div>

<div>

![height:450](img/DVVA_06/DVVA_colors_Page_17_Image_0003.jpg)

</div>

</div>

<!-- Explanation of the HSV color model and its components -->

---
# RGB AND HSV

<div class="columns-2">

<div>

![center height:450](img/DVVA_06/DVVA_colors_Page_18_Image_0003.jpg)

</div>

<div>

![center height:450](img/DVVA_06/DVVA_colors_Page_18_Image_0004.jpg)

</div>

</div>

<!-- Comparison between RGB and HSV color models with diagrams -->

---

<!-- header: "" -->
<!-- _class: chapter -->
<!-- _paginate: skip -->

# COLOR SPACES

<!-- Section separator slide for Color Spaces -->

---
# CIE STANDARD OBSERVER

- CIE: International Commission on Illumination
- Definition of an objective color-mapping function:
  - Standard colorimetric observer
- Experiment
  - An observer is positioned in front of a bipartite screen
  - Observer can manipulate intensities of three primary color beams
  - Task: match the reference color

<!-- Explanation of the CIE standard observer experiment -->

---
# STANDARD OBSERVER EXPERIMENT

![width:800 center](img/DVVA_06/DVVA_colors_Page_21_Image_0003.jpg)

<!-- Visual representation of the standard observer experiment setup -->

---
# CHROMATICITY DIAGRAM

<div class="columns-2">

<div>

- A mixture of two colors lies on the line connecting the two colors
- Chromaticity Diagram (<span style="color:green">gamut</span>) is convex
- All visible colors are non-negative combination of x, y, and z
- An equal combination of two colors does not lie in the mid-point

</div>

<div>

![height:450](img/DVVA_06/DVVA_colors_Page_22_Image_0003.jpg)

</div>

</div>

<!-- Explanation of the CIE chromaticity diagram properties -->

---
# COMPARING COLOR SPACES

<div class="columns-2">

<div>

![height:450](img/DVVA_06/DVVA_colors_Page_23_Image_0003.jpg)

</div>

<div>

![](img/DVVA_06/DVVA_colors_Page_23_Image_0004.jpg)

</div>

</div>

<!-- Comparison of different color spaces with visual examples -->

---

# COLOR MIXING

<div class="columns-2">

<div>

- Given three primary colors, the corresponding triangle cannot cover the whole gamut

</div>

<div>

![height:450](img/DVVA_06/DVVA_colors_Page_24_Image_0003.jpg)

</div>

</div>

<!-- Explanation of color mixing limitations within a specific gamut -->

---

<!-- _class: chapter -->
<!-- _paginate: skip -->

# PALETTE

<!-- Section separator slide for Color Palette -->

---
# MAPPING VALUES TO COLOR SCHEMES

<div class="columns-2">

<div>

![width:350](img/DVVA_06/DVVA_colors_Page_26_Image_0003.jpg)

</div>

<div>

sRGB interpolation

![width:350 height:70](img/DVVA_06/DVVA_colors_Page_26_Image_0004.jpg)

Perceptually uniform color space

![width:350 height:70](img/DVVA_06/DVVA_colors_Page_26_Image_0005.jpg)

HSLuv project provides utilities to colors among different color spaces

</div>
</div>

<!-- Explanation of different approaches to mapping values to color schemes -->

---

# CATEGORIES OF COLORS

<div class="columns-2">

<div>

![width:450](img/DVVA_06/DVVA_colors_Page_27_Image_0003.jpg)

Triadic colors

</div>

<div>

![width:450](img/DVVA_06/DVVA_colors_Page_27_Image_0004.jpg)

Tetradic colors

</div>

</div>

<!-- Examples of color harmony categories: triadic and tetradic color schemes -->

---

# COLOR SCHEMES

<div class="columns-3">

<div style="text-align: end;">

Cold colors

</div>

<div>

![width:450](img/DVVA_06/DVVA_colors_Page_28_Image_0003.jpg)

</div>

<div>

Warm colors

</div>

</div>

http://paletton.com/

<!-- Explanation of color schemes with examples of cold and warm colors -->

---
# COLOR BLINDNESS

![width:900 center](img/DVVA_06/DVVA_colors_Page_29_Image_0003.jpg)

<!-- Visualization of how color blindness affects color perception -->

---
# COLOR SCHEMES FOR CARTOGRAPHY

![height:450 center](img/DVVA_06/DVVA_colors_Page_30_Image_0003.jpg)

http://colorbrewer2.org/

<!-- Color schemes specifically designed for cartography with ColorBrewer tool -->

---
# COLOR SCHEME EXAMPLE (NOMINAL)

<div class="columns-2">

<div>

![height:480 center](img/DVVA_06/DVVA_colors_Page_31_Image_0003.jpg)

</div>

<div>

![width:450](img/DVVA_06/DVVA_colors_Page_31_Image_0004.jpg)

</div>

</div>

<!-- Example of nominal color schemes for categorical data -->

---
# COLOR SCHEME EXAMPLE (SEQUENTIAL)

<div class="columns-2">

<div>

![width:450](img/DVVA_06/DVVA_colors_Page_32_Image_0003.jpg)

</div>

<div>

![width:450](img/DVVA_06/DVVA_colors_Page_32_Image_0004.jpg)

</div>

</div>

<!-- Example of sequential color schemes for ordered data -->

---
# COLOR SCHEME EXAMPLE (DIVERGENT)

<div class="columns-2">

<div>

![width:450](img/DVVA_06/DVVA_colors_Page_33_Image_0003.jpg)

</div>

<div>

![width:450](img/DVVA_06/DVVA_colors_Page_33_Image_0004.jpg)

</div>

</div>

<!-- Example of divergent color schemes for data with a meaningful midpoint -->

---
# D3.JS COLOR SCHEMES

![height:450 center](img/DVVA_06/DVVA_colors_Page_34_Image_0003.jpg)

https://observablehq.com/@d3/color-schemes

<!-- Color schemes available in the D3.js visualization library -->

---
# TAKEAWAY MESSAGES

- Different color models and color spaces
- Color palettes to effectively represent scales of values

<!-- Summary of key points from the lecture -->
