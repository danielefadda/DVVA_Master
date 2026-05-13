---
marp: true
theme: master
header: 'Data Visualization and Visual Analytics'
footer: 'QUIZ • Charting Taxonomy <mark>DVVA<mark>'
paginate: true

---



<!-- _class: cover -->
<!-- _paginate: skip -->

<div>
  <h1>7 •  Quiz time</h1>
  <h2>Data Visualization and Visual Analytics</h2>
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
    Course: Data Visualization & Visual Analytics<br>
    Academic Year: 2025    
  </div>

</div>



<div class="cover-image">
<img src="img/va_lesson3_vision_perception_Page_02_Image_0003.jpg" alt="" style="width:90%">
</div>


<!-- This lecture covers charting taxonomy, building on our previous introduction to visual variables. We'll explore different chart types, their appropriate uses, and common pitfalls to avoid when visualizing data. -->

---

<!-- _class: title-slide -->

# Quiz time

## Comment on the graph<br>shown in the next figures

<h2><mark>What are the most significant errors?</mark></h2>

What changes would you apply to improve the effectiveness of the graph?

---
<!-- _class: big-text  -->

**Note**: The quiz is based on the slides presented in the previous lessons, which introduced the concept of charting taxonomy and visual variables. The quiz will test your understanding of these concepts and your ability to identify errors in data visualization.


---

# Quiz 1
![center height:450](https://64.media.tumblr.com/a60ed91106885f5feadab8c5c5449544/tumblr_r0ixbf4h4E1sgh0voo1_1280.jpg)

<!-- 
- Perceptual distortion: The white segment (Dobrev Klára with 38%) appears visually dominant compared to the others, partly due to the contrast with the blue background.
- Questionable sum: The values shown (38% + 22% + 19%) add up to 79%, not 100% as expected in a complete pie chart. 21% of the votes are missing.
- Unnecessary 3D perspective: The chart has a slight 3D effect that doesn't add information but can distort the perception of proportions.

- A better visualization would be a simple horizontal bar chart showing all candidates, including those who make up the remaining 21%, with clear labels and without decorative elements that distort perception.
  -->
---

# Quiz 2
![center height:450](https://64.media.tumblr.com/618055460368eb28f228493a1ad24244/tumblr_qv7l1892cm1sgh0voo1_1280.jpg)

<!-- 

-->
---

# Quiz 3
![center height:450](https://64.media.tumblr.com/562600d937fef51c69bc938eb786e6d0/tumblr_qsetktvRUe1sgh0voo1_1280.png)

<!-- 

- Perceptual distortion: The values of the item represented in red are much larger than all other items, which leads to seeing only this item distinctly while all other values are compressed at the bottom of the chart.
- Missing context: While the x-axis shows item identifiers, there's no clear explanation of what the y-axis represents (seems to be some type of count or value).
- Excess visual complexity: The legend shows over 20 different variables, but the chart itself appears to show primarily one variable in red, creating a significant disconnect between what's displayed and what's listed in the legend.

A better visualization would be:

- Separating this data into multiple smaller charts (small multiples) that each focus on fewer related variables
- Providing clearer labeling and context for the axes and data points
-->
---

# Quiz 4
![center height:450](https://64.media.tumblr.com/751c0f5f57d631df5daf692e5b88001a/tumblr_qqfe5kmQze1sgh0voo1_1280.jpg)

<!-- 

- The chart uses a 3D effect that distorts the perception of the data, making it difficult to accurately compare the heights of the bars.
- Values are inverted, with the highest value (in red) being the lowest.

  -->
---

# Quiz 5
![center height:450](https://64.media.tumblr.com/3a484c7bc030ce4109bdae11b9cf8d2e/tumblr_qm8kj9BEoD1sgh0voo1_640.jpg)

<!-- 
- The colors used in the chart are not colorblind-friendly, making it difficult for individuals with color vision deficiencies to interpret the data accurately.
- The colors are misleading, labels aren't corrisponding to the colors used in the chart.
  -->
---

# Quiz 6
![center height:450](https://64.media.tumblr.com/1d4734c0735c938eb18877b7b2e30fb4/tumblr_qk378y6f0H1sgh0voo1_1280.png)

<!--   
The radial chart is a poor choice for this data representation. It's a distribution and bars are difficult to compare. The radial chart is not suitable for this type of data, as it distorts the perception of the values and makes it challenging to accurately compare the lengths of the bars. 

- A better choice would be a simple horizontal bar chart that allows for easier comparison of the values.
  -->
-->

---

# Quiz 7
![center height:450](https://64.media.tumblr.com/13d27ab07c097b1f1e7961cdf6e035f4/tumblr_qj0tnmeroK1sgh0voo1_1280.png)

<!--

- The X axis is flipped, making it difficult to interpret the data accurately.
- The chart uses unusefull bleur effect that distorts the perception of the data.
- The chart lacks clear labels and context, making it challenging to understand what the data represents.

Solution: A better visualization would be a simple horizontal bar chart with clear labels and context, without any unnecessary visual effects. The X axis should be oriented correctly to facilitate interpretation.
-->

---

# Quiz 8
![center height:450](https://64.media.tumblr.com/287e3edb30c81a3b2fa4e735ce8d4023/tumblr_qfh3nogNBB1sgh0voo1_1280.jpg)

<!--  

- The two groups compare different periods of time, the first on compare 8 years, the second on 2 years.

- Solution: Use different binning strategies to make the two groups comparable. 

 -->

---

# Quiz 9
![center height:450](https://64.media.tumblr.com/f6e406879ff19fff195dbb529e80f3aa/tumblr_qfeb9gSlU41sgh0voo1_1280.jpg)

<!--  

- The chart uses a 3D effect that distorts the perception of the data, making it difficult to accurately compare the heights of the bars.
- The sum of the values is not 100%, which is misleading in a pie chart.

Solution: A better visualization would be a simple horizontal bar chart that allows for easier comparison of the values. The pie chart should be avoided in this case, as it does not accurately represent the data.
  -->

---

# Quiz 10
![center height:450](https://64.media.tumblr.com/a937c9fdc10e2a880c85a08349d56998/tumblr_qf0idiOVVJ1sgh0voo1_1280.pnj)

<!-- 

- The chart uses a DOUBLE 3D effect that distorts the perception of the data.
- The use of a complex background image makes it difficult to focus on the data being presented.
- The chart lacks clear labels for smaller segments, making it challenging to interpret the data accurately.
- Text must be outlined to be readable, it's not a good practice.

Solution: throw away the chart.

-->
---

# Quiz 11
![center height:450](https://64.media.tumblr.com/ac422b124ab88c79c81a86cd606913f3/tumblr_qdusowO20K1sgh0voo1_1280.jpg)

<!--
- In this chart the selected dots are not the most relevant ones, from a Geographic point of view.
   -->
---

# Quiz 12
![center height:450](https://64.media.tumblr.com/9da9ffe50c7ce21cce174d268acfb048/tumblr_qa67ofwBML1sgh0voo1_1280.jpg)

<!-- 
- The bars of each group are sorted locally, it's quiet difficult to compare the values of the different groups.
- The color palette used is tipically used for light theme, but the background is dark.
- With a good color palette or different background color, the bars don't need a different stroke to be visible. 

 -->
---

# Quiz 13
![center height:450](https://64.media.tumblr.com/e406cb8dea78c0c48285a0b25d3fcdee/tumblr_q57xwgLWQN1sgh0voo1_1280.pnj)

<!-- 

- Stacked bars are not the best choice for this data representation. It's a distribution and bars are difficult to compare.
- The sum of the values is not 100%, which is misleading in a stacked bar chart.
- Color palette suggest that Use Daily and Tried at least once are similar, but they are three different categories.

Good points: 
- fonts are readable, and there is a goood use of hierarchy in the font sizes. 
- Good labeling of the axis and the chart itself.

-->

---

# Quiz 14
![center height:450](https://64.media.tumblr.com/eb73065acb9b3576754498c51b843b26/tumblr_q49b1vUsYU1sgh0voo1_1280.pnj)

<!--  

- Each square is relative to itself, not to the whole chart. Quantities are not comparable. 
- The main square is too light, suggesting that it's empty.
-->

---

# Quiz 15
![center height:450](https://64.media.tumblr.com/c01ef9df471b304365ce816879ddeb0e/tumblr_q0iinylpaJ1sgh0voo1_1280.pnj)

<!-- 

- Some points in the chart are not visible and this lack of data are not visually declared.

 -->
---

# Quiz 16
![center height:450](https://64.media.tumblr.com/374ff02f40370889bea889eef62a14d9/tumblr_pzboikcYPx1sgh0voo1_1280.pnj)

<!--  
- This chart is totally useless and wrong.
- There are too many colors, too many segments, labeling is not clear, and the chart is not readable.
 -->
---

# Quiz 17
![center height:450](https://64.media.tumblr.com/165bc20979bf5c1b14b69ca9992a8c7b/tumblr_pt9o0eZ6l91sgh0voo1_540.jpg)

<!-- 
- The chart use lines to represent bars. You can see that the lines are above the zero only when they correspond to a value on the x axis.
- There is no trend in the data, the chart is not useful.

 -->
---

# Quiz 18
![center height:450](https://64.media.tumblr.com/1e1ad4876aab45a5aa4a6a4280d7ecd5/tumblr_pre9k4e5o11wd31sx_640.jpg)

<!-- 

- There is no clear labeling of the axes
- Background is too dark, and the colors used for the bars too.
- There is a creative use of typography: all the labels are bold so none of them is really highlighted. Title try to be catchy but in an unuseful way.
- White shadow is used to make bars visible: more is less.

-->
---

# Quiz 19
![center height:450](https://64.media.tumblr.com/2fa22b2623927623fe75d63acf4ebe85/tumblr_pfby7f3M2p1sgh0voo1_1280.pnj)

<!--
- Good points: the use of pie chart to represent only two values is a good choice. (the only case where pie chart is useful).
- Bad points: The pies are not as comparable as they would be if they were bars.
-->

---

# Quiz 20
![center height:450](https://64.media.tumblr.com/243153caee090d6009f75303d1c6e110/tumblr_pf7l2uji5X1sgh0voo1_1280.pnj)

<!-- 

- Flags as filler colors are not a good choice. They are not colorblind-friendly and can be misleading.
- The stretched flags are not visually appealing and are not so distinguishable.
- Flags are all tilted because the barchart is vertical.
- Labels must be tilted too, but they are not so readable.
- Legend is redundant and not useful: the flags could be used as labels for the bars, but they are not.

- Good solution: use a simple horizontal bar chart with clear labels and context, without any unnecessary visual effects. The flags should be used as labels for the bars.

-->
---

# Quiz 21
![center height:450](https://64.media.tumblr.com/df29024803edf4f57f27968d6d2a8eb1/tumblr_paldcmnFjM1sgh0voo1_1280.jpg)

<!--   -->
---

# Quiz 22
![center height:450](https://64.media.tumblr.com/2b59645fe50dc23fa207583afa9f7976/tumblr_p7tegtoIRD1sgh0voo1_1280.pnj)

<!--  

- The chart uses a 3D visualization that distorts the perception of the data, making it difficult to accurately compare points.
- There is a huge cluttering problem, with too many points and lines that make it difficult to focus on the data being presented.
- There is too much information in the chart, making it overwhelming and difficult to interpret.

Solution: Probably the best solution is to rethink the message of the chart and to focus on a specific aspect of the data. A lot of time a clear message is more important than a complex chart and lead to a simple solution (probably a barchart).

 -->
---

# Quiz 23
![center height:450](https://64.media.tumblr.com/7fbfeacf7649b5d16ad4e938c040a6b1/tumblr_p79fyvl1id1sgh0voo1_1280.jpg)

<!--  
- The chart use the same y-axis for two different variables, but the values are not comparable.
- This is particuarly evident for the fact that the orange line is flat with no visible variation.

-->
---

# Quiz 24
![center height:450](https://64.media.tumblr.com/56fe5e96a1ecf93b24e45328ca17c051/tumblr_orlsyx6ain1sgh0voo1_1280.pnj)

<!--  
- This is one of the rare cases where multiple pie charts are useful.
- The area of each external bubble is covered by the area of the internal one, so the perception of the data is not so clear: it dipends on the size of the internal bubble.

- N.B. we have seen worst charts in the previous slides.

-->
---

# Quiz 25
![center height:450](https://64.media.tumblr.com/acf78c9aa94e0af9d9d79ae52207c0d8/tumblr_olnze34DAd1sgh0voo1_500.jpg)

<!-- 

- the red bubble is scaled according to the size of the radius, not the area.

-->
---

# Quiz 26
![center height:450](https://64.media.tumblr.com/6d869bddb818a03f5a46dd1c97d67636/tumblr_o5u3ztzI2K1sgh0voo1_640.png)

<!-- 

- There is a use of the shape of the united states as a bar, but probably it's a barchart wit a clipped shape. Using irregular shapes to compare areas is not a good choice. 

-->
---

# Quiz 27
![center height:450](https://64.media.tumblr.com/9556cf240e6910839f719947cd020dc0/tumblr_o5jtofg7bS1sgh0voo1_1280.jpg)

<!-- 
- There is a "little bit" of cluttering in the chart, and a couple of colors...

  -->

---


# References

<div class="columns-3">
<div>

1. [Quiz 1](https://viz.wtf/image/664318320965795840)
2. [Quiz 2](https://viz.wtf/image/637142941527375872)
3. [Quiz 3](https://viz.wtf/image/634334417095098368)
4. [Quiz 4](https://viz.wtf/image/627535888462856192)
5. [Quiz 5](https://viz.wtf/image/627354703888547840)
6. [Quiz 6](https://viz.wtf/image/626448746411114496)
7. [Quiz 7](https://viz.wtf/image/612225339260846080)
8. [Quiz 8](https://viz.wtf/image/190328952087)
9. [Quiz 9](https://viz.wtf/image/189576151031)

</div>
<div>

10. [Quiz 10](https://viz.wtf/image/189495004858)
11. [Quiz 11](https://viz.wtf/image/187536810138)
12. [Quiz 12](https://viz.wtf/image/182713706564)
13. [Quiz 13](https://viz.wtf/image/182687309440)
14. [Quiz 14](https://viz.wtf/image/182504087404)
15. [Quiz 15](https://viz.wtf/image/182275181864)
16. [Quiz 16](https://viz.wtf/image/182195820301)
17. [Quiz 17](https://viz.wtf/image/162284459410)
18. [Quiz 18](https://viz.wtf/image/162284459410)

</div>
<div>

19. [Quiz 19](https://viz.wtf/image/162284459410)
20. [Quiz 20](https://viz.wtf/image/162284459410)
21. [Quiz 21](https://viz.wtf/image/162284459410)
22. [Quiz 22](https://viz.wtf/image/162284459410)
23. [Quiz 23](https://viz.wtf/image/162284459410)
24. [Quiz 24](https://viz.wtf/image/162284459410)
25. [Quiz 25](https://viz.wtf/image/162284459410)
26. [Quiz 26](https://viz.wtf/image/162284459410)
27. [Quiz 27](https://viz.wtf/image/162284459410)

</div>
</div>

## all images are from [viz.wtf](https://viz.wtf/)