const numColors = 5;

function randomPalette(){
    const dist = 360/numColors;
    const saturation = 1, brightness = 1;
    //Get the first color's hue value
    var newColor = Math.ceil(Math.random()*359);
    var colors = []
    while(colors.length<numColors){
        colors.push([newColor, saturation, brightness])
        newColor = (newColor + dist) % 360
    }
    return colors
}

function generateRules(){
    var i = 1
    var colors = randomPalette()
    var rgbStrings = []
    while(i<=numColors){
        let currentHSV = colors[i-1]
        let rgb = hsv_ToRgb(currentHSV[0]/360,currentHSV[1],currentHSV[2])
        let rgbString = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
        rgbStrings.push(rgbString)
        document.getElementById(`color${i}`).style.backgroundColor = rgbString
        i++;
    
    document.getElementById('css-rules').innerHTML=`
.website-background{ color: ${rgbStrings[0]};}

.element-text{ color: ${rgbStrings[1]};}

.element-border{ border-color: ${rgbStrings[2]};}

.element-background{ background-color: ${rgbStrings[3]};}

.header{ color: ${rgbStrings[4]};}
        `
}

function clean(){
    var i = 1;
    while(i<=numColors){
        document.getElementById(`color${i}`).style.backgroundColor = '#FFFFFF'
        i++;
    }
    document.getElementById('css-rules').innerHTML=`
.website-background{ color: #FFFFFF;}

.element-text{ color: #FFFFFF;}

.element-border{ border-color: #FFFFFF;}

.element-background{ background-color: #FFFFFF;}

.header{ color: #FFFFFF;}
        `
}