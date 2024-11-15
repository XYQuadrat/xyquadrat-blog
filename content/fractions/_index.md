+++
title = "Fractions Generator"
template = "fractions.html"
+++

Easily generate visualizations of fractions similar to those found in school books.  
You may use these for any non-commercial purpose without attribution.

<label>
    <h4>Numerator</h4>
    <input type="number" id="numerator" min=0 value=3>
</label>
<label>
    <h4>Denominator</h4>
    <input type="number" id="denominator" min=2 value=5>
</label> 

<div class="grid-container">
<div class="canvas-card">
    <canvas id="circleCanvas" height="1000" width="1000"></canvas>
    <a class="download-link" href="#" id="downloadCircleImg" download="FractionAsCircle.jpg">Download as image</a>
</div>
<div class="canvas-card">
    <canvas id="rectCanvas" height="1000" width="1000"></canvas>
    <a class="download-link" href="#" id="downloadRectImg" download="FractionAsRectangle.jpg">Download as image</a>
</div>

<div class="canvas-card">
    <canvas id="lineCanvas" height="1000" width="1000"></canvas>
    <a class="download-link" href="#" id="downloadLineImg" download="FractionAsLine.jpg">Download as image</a>
</div>
</div>

<link rel="stylesheet" href="fractions/fractions.css">
<script src="fractions/fractions.js"></script>
