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

<!-- This lecture explores the fundamentals of color theory and its application in data visualization. We'll examine human color perception, color models, color spaces, and how to create effective color palettes for different types of data. Colors are among the most important visual variables, helping us transform data values into visual representations. -->

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

<!-- This slide introduces the biological basis of human color vision. The human eye contains two primary types of photoreceptors: approximately 120 million rod cells responsible for peripheral and low-light vision, and about 6 million cone cells that enable color vision. The three types of cone cells (S, M, L) respond to different wavelengths of light, forming the foundation of our trichromatic color vision system. Understanding these biological mechanisms helps us design more effective visualizations. -->

---
# PHOTO RECEPTOR CELLS

![width:750 center](img/DVVA_06/DVVA_colors_Page_03_Image_0003.jpg)

<!-- This slide shows the spectral sensitivity curves of the three types of cone cells in the human eye. Each cone type responds to a different range of wavelengths: S-cones (short wavelength) are most sensitive to blue light, M-cones (medium wavelength) to green light, and L-cones (long wavelength) to red light. Note that there is significant overlap between the M and L curves, which explains some of the complexities in color perception. These response curves directly inform how we should design color schemes in visualizations. -->

---
# TEST YOUR COLOR PERCEPTION

![height:450 center](img/DVVA_06/DVVA_colors_Page_04_Image_0003.jpg)

http://color.method.ac

<!-- This slide presents a color wheel tool that can be used to test and improve color perception abilities. The website linked (color.method.ac) offers interactive exercises to train your eye in recognizing and matching colors accurately. Individual differences in color perception can be significant, which is an important consideration when designing visualizations. Testing your own color perception can make you more aware of potential issues in your color choices for data visualization. -->

---
# COLOR OF THE YEAR: 2016

![height:500 center](img/DVVA_06/DVVA_colors_Page_05_Image_0003.jpg)

<!-- This slide shows Pantone's Color of the Year for 2016: Rose Quartz and Serenity. Pantone's annual color selections reflect cultural trends and influences. In visualization, we should be aware of these cultural and temporal aspects of color perception, as they can affect how audiences interpret our color choices. The selection of Rose Quartz and Serenity was notable as it was the first time Pantone chose a blend of two colors, representing a cultural shift toward gender fluidity and equality. -->

---
# COLOR OF THE YEAR 2017

![height:450 center](img/DVVA_06/DVVA_colors_Page_06_Image_0003.jpg)

<!-- This slide displays Pantone's Color of the Year for 2017: Greenery. This fresh, zesty yellow-green shade symbolized new beginnings and environmental awareness. In data visualization, understanding the emotional and cultural associations of colors like this can be valuable when designing visualizations that need to evoke specific feelings or when working with environmentally-themed data. Color choices are never neutral; they always carry cultural and emotional significance. -->

---
# COLOR OF THE YEAR 2019

![height:500 center](img/DVVA_06/DVVA_colors_Page_07_Image_0003.jpg)

<!-- This slide shows Pantone's Color of the Year for 2019: Living Coral. This vibrant yet mellow color was chosen to represent warmth and nourishment in an increasingly digital world. For visualization designers, staying aware of contemporary color trends can help create more engaging and relevant visualizations. The selection of Living Coral also highlighted growing awareness of coral reef preservation, showing how colors can connect to important environmental issues. -->

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

<!-- This slide introduces Isaac Newton's groundbreaking work on color theory from his book "Opticks" (1704). Newton demonstrated that white light could be split into a spectrum of colors using a prism, and then recombined back into white light. His arrangement of colors in a circle laid the foundation for modern color wheels. This historical context is important as it was the first scientific approach to understanding color, moving beyond the purely artistic perspective. Newton's work established key principles that still influence how we understand and use color today in visualization. -->

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

<!-- This slide covers Goethe's color theory from 1810, which took a more psychological approach to color perception compared to Newton's purely physical approach. While criticized scientifically, Goethe's work was influential in understanding the subjective experience of color. He focused on how colors affect human emotion and perception, introducing concepts like color harmony and contrast. In data visualization, this psychological perspective is crucial—we need to understand not just the physics of color but how users perceive and respond emotionally to different color combinations. -->

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

<!-- This slide contrasts the two fundamental approaches to color mixing: the RGB additive model (used in screens and digital displays) where red, green, and blue light combine to create other colors, with white resulting from all colors combined at full intensity; and the CMY subtractive model (used in printing) where cyan, magenta, and yellow pigments subtract wavelengths from white light, with the combination of all colors theoretically producing black. Understanding these models is essential for visualization designers who need to create graphics that work well across different media, from screens to printed materials. -->

---
# COLOR MODELS - 3D SPACE MODELS (MAYER, 1775)

![width:800 center](img/DVVA_06/DVVA_colors_Page_11_Image_0003.jpg)

Problem: steps are not perceptually uniform

<!-- This slide presents Tobias Mayer's early attempt at creating a three-dimensional color model in 1775. While innovative for its time, this model highlights a critical problem in early color systems: the steps between colors are not perceptually uniform. This means that equal mathematical steps in the model don't correspond to equal perceived differences by human observers. This issue remained a challenge for centuries and is still relevant in data visualization today, where perceptual uniformity is essential for accurate interpretation of color-encoded data values. -->

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

<!-- This slide covers Albert Munsell's influential color system from the early 1900s, which was a major advancement in creating perceptually uniform color spaces. Munsell's system introduced three dimensions: hue (the color itself), value (lightness/darkness), and chroma (saturation/intensity). The irregular shape of the Munsell solid reflects an important insight: at low brightness levels, humans can distinguish fewer colors. Munsell's system was also significant for providing mathematical definitions of colors rather than relying on subjective names. This systematic approach made it ideal for scientific and design applications, including modern data visualization. -->

---
# COLOR MODEL

- Young-Helmotz Theory (19th century)
  - Separate Red, Green, Blue receptors
  - Actually, three receptors type exist
    - Red and Green are located mainly in green-yellow zone
    - Sometimes named as <span style="color:#dd5500">L</span>ong, <span style="color:#ee9900">M</span>edium, <span style="color:#0000ff">S</span>hort wavelength receptors
  - Eye present different proportions of R,G,B receptors (40:20:1)

<!-- This slide explains the Young-Helmholtz trichromatic theory of color vision from the 19th century, which correctly proposed that the eye contains three types of color receptors. Modern science confirms this with the identification of L (long), M (medium), and S (short) wavelength receptors. Importantly, these receptors are not evenly distributed—the eye has approximately 40 L-cones for every 20 M-cones and just 1 S-cone. This biological reality has direct implications for visualization design: we are more sensitive to changes in red-green than in blue. This explains why blue is often a poor choice for encoding important quantitative information in visualizations. -->

---
# OPPONENT COLOR THEORY



- Based on estimation of opposite readings
  - red-green comparison
  - blue-yellow comparison
  - dark-light comparison



![height:200 center](img/DVVA_06/opponent_color_model.png)

C1+C2+C3=0
C1=R-G &nbsp;&nbsp;&nbsp;&nbsp; C3-C2=B-R-G+B=2B-(R+G) &nbsp;&nbsp;&nbsp;&nbsp; A = 2R+G+B/20

<!-- This slide introduces the Opponent Color Theory, which complements the trichromatic theory by explaining certain aspects of color perception that the trichromatic theory alone cannot explain. This theory proposes that visual information is processed in opposing pairs: red vs. green, blue vs. yellow, and dark vs. light. The mathematical relationships shown represent how these opponent signals are computed from receptor inputs. This theory explains phenomena like color afterimages and why we never perceive "reddish green" or "yellowish blue." For visualization designers, this understanding informs color choices that maximize contrast and readability, especially for users with color vision deficiencies. -->

---
# RGB COLOR MODEL

- Based on direct specification of three primary colors
- Additive model, each component is summed with the others


<br>

![center ](img/DVVA_06/DVVA_colors_Page_15_Image_0003.jpg)

<!-- This slide provides a detailed overview of the RGB color model, which is fundamental for digital visualization. As an additive model, it works by combining different intensities of red, green, and blue light. The diagram shows how these primary colors combine to create secondary colors (cyan, magenta, yellow) and ultimately white when all are at maximum intensity. The RGB model is the standard for digital displays, making it the primary color model for data visualization tools. However, it's important to understand that RGB is a device-dependent model—the same RGB values may display differently on different screens, creating challenges for consistent visualization. -->

---
# RGB COLOR MODEL

- R,G,B values may be expressed in range [0,1]
- Some applications use the range [0,255]
- Usually a hexadecimal notation is used for range [0,ff]
- Not really intuitive: how to define brown?

<!-- This slide elaborates on the practical aspects of working with the RGB color model. RGB values can be represented in different ranges: [0,1], [0,255], or with hexadecimal notation [00-FF]. The last point highlights a significant limitation of RGB for visualization design: it's not intuitive for humans to work with. Creating specific colors like brown requires unintuitive combinations of RGB values. This disconnect between the technical representation and human intuition creates challenges when designing color schemes for data visualization, which is why higher-level color models like HSV were developed. -->

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

<!-- This slide introduces the HSV (Hue, Saturation, Value) color model, which was developed to be more intuitive for humans than RGB. Hue represents the color type (red, blue, etc.), saturation represents color intensity, and value represents brightness. The slide also mentions the related HSL model, where lightness replaces value. These models are represented as cylindrical coordinates around a color wheel, making them more aligned with how humans think about color. For visualization designers, HSV/HSL is often easier to work with when creating color schemes, especially for data that requires sequential or diverging color scales. -->

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

<!-- This slide compares the RGB and HSV color models through visual representations. The RGB model is shown as a cube where the three axes represent red, green, and blue components. The HSV model is depicted as a cylinder, where the angular dimension represents hue, the distance from the center represents saturation, and the height represents value. These different geometries reflect the fundamental conceptual differences between the models. For visualization designers, understanding both models is important—RGB for technical implementation and HSV for intuitive color selection and manipulation when designing effective color schemes. -->

---

<!-- header: "" -->
<!-- _class: chapter -->
<!-- _paginate: skip -->

# COLOR SPACES

<!-- This chapter slide introduces the concept of color spaces, which are specific mathematical implementations of color models. While color models are abstract concepts, color spaces provide specific mappings of colors to numerical values. Understanding color spaces is crucial for creating visualizations that appear consistent across different devices and media. The following slides will explain standardized color spaces like CIE XYZ and their practical applications in visualization. -->

---
# CIE STANDARD OBSERVER

- CIE: International Commission on Illumination
- Definition of an objective color-mapping function:
  - Standard colorimetric observer
- Experiment
  - An observer is positioned in front of a bipartite screen
  - Observer can manipulate intensities of three primary color beams
  - Task: match the reference color

<!-- This slide introduces the concept of the CIE Standard Observer, a crucial development in color science from the International Commission on Illumination (CIE). This work aimed to create an objective, standardized way to measure and describe colors based on human perception. The experimental setup involved participants matching colors by adjusting three primary light beams. This research led to the creation of the CIE XYZ color space in 1931, which became the foundation for most modern color spaces. For visualization designers, understanding this historical context helps explain why certain color spaces are better suited for perceptually uniform color scales. -->

---
# STANDARD OBSERVER EXPERIMENT

![width:800 center](img/DVVA_06/DVVA_colors_Page_21_Image_0003.jpg)

<!-- This slide illustrates the experimental setup used to develop the CIE standard observer model. In this experiment, subjects viewed a split screen where one half showed a reference color and the other showed a mixture of three primary colors. By adjusting the intensities of these primaries until they matched the reference color, researchers could map how humans perceive and match colors. This experimental approach established the basis for modern colorimetry and the CIE color spaces. Understanding the empirical foundations of color science helps visualization designers appreciate why certain color choices work better than others for encoding data. -->

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

<!-- This slide explains the CIE Chromaticity Diagram, a two-dimensional representation of all visible colors. The horseshoe-shaped boundary (called the spectral locus) represents pure spectral colors, while the straight line at the bottom (the purple line) represents non-spectral purples. The diagram illustrates several important properties: mixtures of two colors lie on the straight line connecting them; the entire visible gamut is convex; and importantly, equal physical mixtures of colors do not produce perceptually equal mixtures—a critical insight for visualization design. This explains why linear interpolation between colors in RGB often produces poor results for data visualization. -->

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

<!-- This slide compares different color spaces through visual representations. The diagrams show how the same colors are mapped in different color spaces, highlighting the unique characteristics of each. Some color spaces prioritize perceptual uniformity (like CIELAB), while others are designed for specific applications like digital displays (sRGB) or print (CMYK). For visualization designers, selecting the appropriate color space is crucial. Perceptually uniform spaces like CIELAB or CIELUV are particularly important for data visualization because they ensure that equal steps in the color space represent equal perceived differences, leading to more accurate interpretation of data. -->

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

<!-- This slide illustrates a fundamental limitation of color reproduction: no set of three real primary colors can reproduce all visible colors. The triangle on the chromaticity diagram represents the gamut of colors that can be created by mixing three primary colors. Any colors outside this triangle cannot be reproduced with those primaries. This explains why different devices (monitors, printers, projectors) have different color reproduction capabilities. For visualization designers, this means being aware of gamut limitations when designing for different display media, especially when creating visualizations that need to work across digital and print formats. -->

---

<!-- _class: chapter -->
<!-- _paginate: skip -->

# PALETTE

<!-- This chapter slide introduces the concept of color palettes in data visualization. A color palette is a carefully selected set of colors designed for specific visualization tasks. The following slides will explore how to create effective color palettes for different data types and visualization goals, showing examples of categorical, sequential, and diverging color schemes. Understanding palette design is essential for creating visualizations that effectively communicate data while being accessible to all users. -->

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

<!-- This slide demonstrates the critical difference between naïve color interpolation in standard RGB space versus interpolation in perceptually uniform color spaces. The top image shows direct interpolation in sRGB, which creates uneven perceptual steps with an artificial brightness dip in the middle range. The middle image shows interpolation in a perceptually uniform color space, which creates visually even transitions. This difference is crucial for data visualization, where uneven perceptual steps can lead to misinterpretation of data. The HSLuv project mentioned provides tools to work with perceptually uniform color spaces, helping designers create more accurate and effective color scales for data visualization. -->

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

<!-- This slide introduces the concept of color harmony through triadic and tetradic color schemes. Triadic schemes use three colors equally spaced around the color wheel (120° apart), while tetradic schemes use four colors (forming a rectangle on the color wheel). These harmonic relationships create visually pleasing combinations that work well together. For categorical data visualization, using color harmonies can create aesthetically pleasing yet clearly distinguishable color sets. However, it's important to note that while these schemes are visually appealing, they don't necessarily maximize perceptual distinctness, which might be more important for some visualization tasks. -->

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

<!-- This slide illustrates the concept of warm and cool colors on the color wheel. Warm colors (reds, oranges, yellows) are often associated with energy, excitement, and urgency, while cool colors (blues, greens, purples) typically convey calmness, stability, and distance. This emotional and perceptual dimension of color is highly relevant for data visualization, as these associations can either enhance or interfere with data interpretation. The slide also references Paletton.com, a useful online tool for creating color schemes based on color theory principles. Understanding the emotional impact of color choices helps visualization designers create more effective and intentional color palettes. -->

---
# COLOR BLINDNESS

![width:900 center](img/DVVA_06/DVVA_colors_Page_29_Image_0003.jpg)

<!-- This slide addresses the crucial topic of color blindness and its implications for visualization design. The images demonstrate how visualizations appear to people with different types of color vision deficiencies: deuteranopia (reduced sensitivity to green), protanopia (reduced sensitivity to red), and tritanopia (reduced sensitivity to blue). Approximately 8% of males and 0.5% of females have some form of color blindness, making this an important accessibility consideration. For visualization designers, this means avoiding red-green combinations for important distinctions, ensuring sufficient luminance contrast, and testing designs with color blindness simulators. Creating color-blind friendly visualizations is not just about accessibility—it often results in clearer visualizations for everyone. -->

---
# COLOR SCHEMES FOR CARTOGRAPHY

![height:450 center](img/DVVA_06/DVVA_colors_Page_30_Image_0003.jpg)

http://colorbrewer2.org/

<!-- This slide introduces ColorBrewer, a widely-used tool specifically designed for creating effective color schemes for maps and other visualizations. Created by Cynthia Brewer, this tool offers scientifically validated color palettes optimized for different data types (sequential, diverging, and categorical) and accessibility considerations. ColorBrewer allows designers to select palettes based on the number of classes needed and whether the palette needs to be colorblind-safe, print-friendly, or photocopy-safe. While originally developed for cartography, these palettes have become standard tools in data visualization across many domains. The scientific approach behind ColorBrewer exemplifies best practices in visualization color design. -->

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

<!-- This slide demonstrates nominal (categorical) color schemes, which are designed for qualitative data where categories have no inherent order. The examples show how categorical color schemes use hues that are maximally distinct from each other. The map application shows different regions clearly differentiated by color. For categorical data visualization, the primary goals are to make categories easily distinguishable while maintaining similar levels of saturation and brightness to avoid implying importance hierarchies. The effectiveness of categorical schemes diminishes as the number of categories increases—generally, more than 7-10 distinct categories become difficult to differentiate, suggesting that other encoding strategies should be considered for larger category sets. -->

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

<!-- This slide illustrates sequential color schemes, which are designed for ordered data where values range from low to high. These schemes typically progress from light to dark colors or vary saturation along a single hue. The maps demonstrate how sequential color schemes effectively show population density or other graduated data. For visualization designers, sequential schemes are essential for showing quantitative data where the progression from low to high values is the primary message. Using perceptually uniform sequential schemes ensures that the perceived difference between colors accurately reflects the underlying data differences, leading to more accurate interpretation. -->

---
# COLOR SCHEME EXAMPLE (DIVERGING)

<div class="columns-2">

<div>

![width:450](img/DVVA_06/DVVA_colors_Page_33_Image_0003.jpg)

</div>

<div>

![width:450](img/DVVA_06/DVVA_colors_Page_33_Image_0004.jpg)

</div>

</div>

<!-- This slide demonstrates diverging color schemes, which are designed for data with a meaningful midpoint or zero value. These schemes typically use two different hues that diverge from a neutral center color, often white or light gray. The maps show applications for data like temperature anomalies or election results, where positive and negative deviations from a central value are equally important. For visualization designers, diverging schemes are powerful for highlighting deviations from a reference point, showing correlations, or emphasizing extremes at both ends of a scale. Effective diverging schemes maintain perceptual balance so that equal distances from the center in either direction are perceived as equally important. -->

---
# D3.JS COLOR SCHEMES

![height:450 center](img/DVVA_06/DVVA_colors_Page_34_Image_0003.jpg)

https://observablehq.com/@d3/color-schemes

<!-- This slide showcases the comprehensive color scheme libraries available in D3.js, one of the most popular data visualization libraries. D3 implements many scientifically-validated color schemes, including ColorBrewer palettes and interpolators specifically designed for data visualization. The image shows examples of categorical, sequential, and diverging color schemes. For visualization practitioners, D3's built-in color schemes provide ready-to-use, well-designed options that follow best practices in perception and accessibility. The link to Observable provides interactive examples and documentation for utilizing these color schemes in visualization projects. -->

---
# TAKEAWAY MESSAGES

- Different color models and color spaces
- Color palettes to effectively represent scales of values

<!-- This final slide summarizes the key points from the lecture. Understanding different color models (RGB, HSV, etc.) and color spaces (CIE, Lab, etc.) provides the foundation for working with color in visualization. However, the most practical takeaway is how to create effective color palettes for different types of data: categorical schemes for nominal data, sequential schemes for ordered data, and diverging schemes for data with a meaningful midpoint. These principles, combined with considerations for perceptual uniformity, accessibility, and emotional associations of colors, form the basis for effective color use in data visualization. -->
