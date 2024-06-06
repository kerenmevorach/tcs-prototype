let letterT1 = document.getElementById('letter-t');
let letterR = document.getElementById('letter-r');
let letterI1 = document.getElementById('letter-i');
let letterB = document.getElementById('letter-b');
let letterE = document.getElementById('letter-e');
let letterC1 = document.getElementById('letter-c');
let letterA = document.getElementById('letter-a');

let letterC2 = document.getElementById('letter-c2');
let letterO1 = document.getElementById('letter-o1');
let letterM1 = document.getElementById('letter-m1');
let letterM2 = document.getElementById('letter-m2');
let letterU = document.getElementById('letter-u');
let letterN = document.getElementById('letter-n');
let letterI2 = document.getElementById('letter-i2');
let letterT2 = document.getElementById('letter-t2');
let letterY = document.getElementById('letter-y');

let letterS = document.getElementById('letter-s');
let letterC3 = document.getElementById('letter-c3');
let letterH = document.getElementById('letter-h');
let letterO2 = document.getElementById('letter-o2');
let letterO3 = document.getElementById('letter-o3');
let letterL = document.getElementById('letter-l');


let t1Options = ['../img3/green/T1.svg', '../img3/green/T2.svg', '../img3/green/T3.svg', '../img3/green/T4.svg', '../img3/green/T5.svg']
let rOptions = ['../img3/green/R1.svg', '../img3/green/R2.svg', '../img3/green/R3.svg', '../img3/green/R4.svg', '../img3/green/R5.svg', '../img3/green/R6.svg' ]
let i1Options = ['../img3/green/I1.svg', '../img3/green/I2.svg', '../img3/green/I3.svg', '../img3/green/I4.svg', '../img3/green/I5.svg']
let bOptions = ['../img3/green/B1.svg', '../img3/green/B2.svg', '../img3/green/B3.svg']
let eOptions = ['../img3/green/E1.svg', '../img3/green/E2.svg', '../img3/green/E3.svg', '../img3/green/E4.svg']
let c1Options = ['../img3/green/C1.svg', '../img3/green/C2.svg', '../img3/green/C3.svg', '../img3/green/C4.svg']
let aOptions = ['../img3/green/A1.svg', '../img3/green/A2.svg']

let c2Options = ['../img3/blue/C1.svg', '../img3/blue/C2.svg', '../img3/blue/C3.svg', '../img3/blue/C4.svg']
let o1Options = ['../img3/blue/O1.svg', '../img3/blue/O2.svg', '../img3/blue/O3.svg', '../img3/blue/O4.svg', '../img3/blue/O5.svg', '../img3/blue/O6.svg', '../img3/blue/O7.svg']
let m1Options = ['../img3/blue/M1.svg', '../img3/blue/M2.svg', '../img3/blue/M3.svg', '../img3/blue/M4.svg', '../img3/blue/M5.svg']
let m2Options = ['../img3/blue/M1.svg', '../img3/blue/M2.svg', '../img3/blue/M3.svg', '../img3/blue/M4.svg', '../img3/blue/M5.svg']
let uOptions = ['../img3/blue/U1.svg', '../img3/blue/U2.svg']
let nOptions = ['../img3/blue/N1.svg', '../img3/blue/N2.svg', '../img3/blue/N3.svg', '../img3/blue/N4.svg']
let i2Options = ['../img3/blue/I1.svg', '../img3/blue/I2.svg', '../img3/blue/I3.svg', '../img3/blue/I4.svg', '../img3/blue/I5.svg']
let t2Options = ['../img3/blue/T1.svg', '../img3/blue/T2.svg', '../img3/blue/T2.svg', '../img3/blue/T3.svg', '../img3/blue/T4.svg', '../img3/blue/T5.svg']
let yOptions = ['../img3/blue/Y1.svg', '../img3/blue/Y2.svg', '../img3/blue/Y3.svg']

let sOptions = ['../img3/pink/S1.svg', '../img3/pink/S2.svg', '../img3/pink/S3.svg', '../img3/pink/S4.svg']
let c3Options = ['../img3/pink/C1.svg', '../img3/pink/C2.svg', '../img3/pink/C3.svg', '../img3/pink/C4.svg']
let hOptions = ['../img3/pink/H1.svg', '../img3/pink/H2.svg', '../img3/pink/H3.svg', '../img3/pink/H4.svg']
let o2Options = ['../img3/pink/O1.svg', '../img3/pink/O2.svg', '../img3/pink/O3.svg', '../img3/pink/O4.svg', '../img3/pink/O5.svg', '../img3/pink/O6.svg', '../img3/pink/O7.svg']
let o3Options = ['../img3/pink/O1.svg', '../img3/pink/O2.svg', '../img3/pink/O3.svg', '../img3/pink/O4.svg', '../img3/pink/O5.svg', '../img3/pink/O6.svg', '../img3/pink/O7.svg']
let lOptions = ['../img3/pink/L1.svg', '../img3/pink/L2.svg']


let randomT1 = t1Options[Math.floor(Math.random() * t1Options.length)]
let randomR = rOptions[Math.floor(Math.random() * rOptions.length)]
let randomI1 = i1Options[Math.floor(Math.random() * i1Options.length)]
let randomB = bOptions[Math.floor(Math.random() * bOptions.length)]
let randomE = eOptions[Math.floor(Math.random() * eOptions.length)]
let randomC1 = c1Options[Math.floor(Math.random() * c1Options.length)]
let randomA = aOptions[Math.floor(Math.random() * aOptions.length)]

let randomC2 = c2Options[Math.floor(Math.random() * c2Options.length)]
let randomO1 = o1Options[Math.floor(Math.random() * o1Options.length)]
let randomM1 = m1Options[Math.floor(Math.random() * m1Options.length)]
let randomM2 = m2Options[Math.floor(Math.random() * m2Options.length)]
let randomU = uOptions[Math.floor(Math.random() * uOptions.length)]
let randomN = nOptions[Math.floor(Math.random() * nOptions.length)]
let randomI2 = i2Options[Math.floor(Math.random() * i2Options.length)]
let randomT2 = t2Options[Math.floor(Math.random() * t2Options.length)]
let randomY = yOptions[Math.floor(Math.random() * yOptions.length)]

let randomS = sOptions[Math.floor(Math.random() * sOptions.length)]
let randomC3 = c3Options[Math.floor(Math.random() * c3Options.length)]
let randomH = hOptions[Math.floor(Math.random() * hOptions.length)]
let randomO2 = o2Options[Math.floor(Math.random() * o2Options.length)]
let randomO3 = o3Options[Math.floor(Math.random() * o3Options.length)]
let randomL = lOptions[Math.floor(Math.random() * lOptions.length)]

letterT1.src = randomT1;
letterR.src = randomR;
letterI1.src = randomI1;
letterB.src = randomB;
letterE.src = randomE;
letterC1.src = randomC1;
letterA.src = randomA;

letterC2.src = randomC2;
letterO1.src = randomO1;
letterM1.src = randomM1;
letterM2.src = randomM2;
letterU.src = randomU;
letterN.src = randomN;
letterI2.src = randomI2;
letterT2.src = randomT2;
letterY.src = randomY;

letterS.src = randomS;
letterC3.src = randomC3;
letterH.src = randomH;
letterO2.src = randomO2;
letterO3.src = randomO3;
letterL.src = randomL;


let randomT1Height = Math.random() * (105 - 80) + 80
let randomRHeight = Math.random() * (105 - 80) + 80
let randomI1Height = Math.random() * (105 - 80) + 80
let randomBHeight = Math.random() * (105 - 80) + 80
let randomEHeight = Math.random() * (105 - 80) + 80
let randomC1Height = Math.random() * (105 - 80) + 80
let randomAHeight = Math.random() * (105 - 80) + 80

let randomC2Height = Math.random() * (105 - 80) + 80
let randomO1Height = Math.random() * (105 - 80) + 80
let randomM1Height = Math.random() * (105 - 80) + 80
let randomM2Height = Math.random() * (105 - 80) + 80
let randomUHeight = Math.random() * (105 - 80) + 80
let randomNHeight = Math.random() * (105 - 80) + 80
let randomI2Height = Math.random() * (105 - 80) + 80
let randomT2Height = Math.random() * (105 - 80) + 80
let randomYHeight = Math.random() * (105 - 80) + 80

let randomSHeight = Math.random() * (105 - 80) + 80
let randomC3Height = Math.random() * (105 - 80) + 80
let randomHHeight = Math.random() * (105 - 80) + 80
let randomO2Height = Math.random() * (105 - 80) + 80
let randomO3Height = Math.random() * (105 - 80) + 80
let randomLHeight = Math.random() * (105 - 80) + 80

letterT1.style.height = randomT1Height + '%';
letterR.style.height = randomRHeight + '%';
letterI1.style.height = randomI1Height + '%';
letterB.style.height = randomBHeight + '%';
letterE.style.height = randomEHeight + '%';
letterC1.style.height = randomC1Height + '%';
letterA.style.height = randomAHeight + '%';

letterC2.style.height = randomC2Height + '%';
letterO1.style.height = randomO1Height + '%';
letterM1.style.height = randomM1Height + '%';
letterM2.style.height = randomM2Height + '%';
letterU.style.height = randomUHeight + '%';
letterN.style.height = randomNHeight + '%';
letterI2.style.height = randomI2Height + '%';
letterT2.style.height = randomT2Height + '%';
letterY.style.height = randomYHeight + '%';

letterS.style.height = randomSHeight + '%';
letterC3.style.height = randomC3Height + '%';
letterH.style.height = randomHHeight + '%';
letterO2.style.height = randomO2Height + '%';
letterO3.style.height = randomO3Height + '%';
letterL.style.height = randomLHeight + '%';

let randomT1Placement = Math.random() * (40 - (-40)) - 40
let randomRPlacement = Math.random() * (40 - (-40)) - 40
let randomI1Placement = Math.random() * (40 - (-40)) - 40
let randomBPlacement = Math.random() * (40 - (-40)) - 40
let randomEPlacement = Math.random() * (40 - (-40)) - 40
let randomC1Placement = Math.random() * (40 - (-40)) - 40
let randomAPlacement = Math.random() * (40 - (-40)) - 40

let randomC2Placement = Math.random() * (40 - (-40)) - 40
let randomO1Placement = Math.random() * (40 - (-40)) - 40
let randomM1Placement = Math.random() * (40 - (-40)) - 40
let randomM2Placement = Math.random() * (40 - (-40)) - 40
let randomUPlacement = Math.random() * (40 - (-40)) - 40
let randomNPlacement = Math.random() * (40 - (-40)) - 40
let randomI2Placement = Math.random() * (40 - (-40)) - 40
let randomT2Placement = Math.random() * (40 - (-40)) - 40
let randomYPlacement = Math.random() * (40 - (-40)) - 40

let randomSPlacement = Math.random() * (40 - (-40)) - 40
let randomC3Placement = Math.random() * (40 - (-40)) - 40
let randomHPlacement = Math.random() * (40 - (-40)) - 40
let randomO2Placement = Math.random() * (40 - (-40)) - 40
let randomO3Placement = Math.random() * (40 - (-40)) - 40
let randomLPlacement = Math.random() * (40 - (-40)) - 40


letterT1.style.top = randomT1Placement + 'px';
letterR.style.top = randomRPlacement + 'px';
letterI1.style.top = randomI1Placement + 'px';
letterB.style.top = randomBPlacement + 'px';
letterE.style.top = randomEPlacement + 'px';
letterC1.style.top = randomC1Placement + 'px';
letterA.style.top = randomAPlacement + 'px';

letterC2.style.top = randomC2Placement + 'px';
letterO1.style.top = randomO1Placement + 'px'
letterM1.style.top = randomM1Placement + 'px'
letterM2.style.top = randomM2Placement + 'px'
letterU.style.top = randomUPlacement + 'px'
letterN.style.top = randomNPlacement + 'px'
letterI2.style.top = randomI2Placement + 'px'
letterT2.style.top = randomT2Placement + 'px'
letterY.style.top = randomYPlacement + 'px'

letterS.style.top = randomSPlacement + 'px'
letterC3.style.top = randomC3Placement + 'px'
letterH.style.top = randomHPlacement + 'px'
letterO2.style.top = randomO2Placement + 'px'
letterO3.style.top = randomO3Placement + 'px'
letterL.style.top = randomLPlacement + 'px'


let randomT1Rotation = Math.random() * (5 - (-5)) - 5
let randomRRotation = Math.random() * (5 - (-5)) - 5
let randomI1Rotation = Math.random() * (5 - (-5)) - 5
let randomBRotation = Math.random() * (5 - (-5)) - 5
let randomERotation = Math.random() * (5 - (-5)) - 5
let randomC1Rotation = Math.random() * (5 - (-5)) - 5
let randomARotation = Math.random() * (5 - (-5)) - 5

let randomC2Rotation = Math.random() * (5 - (-5)) - 5
let randomO1Rotation = Math.random() * (5 - (-5)) - 5
let randomM1Rotation = Math.random() * (5 - (-5)) - 5
let randomM2Rotation = Math.random() * (5 - (-5)) - 5
let randomURotation = Math.random() * (5 - (-5)) - 5
let randomNRotation = Math.random() * (5 - (-5)) - 5
let randomI2Rotation = Math.random() * (5 - (-5)) - 5
let randomT2Rotation = Math.random() * (5 - (-5)) - 5
let randomYRotation = Math.random() * (5 - (-5)) - 5

let randomSRotation = Math.random() * (5 - (-5)) - 5
let randomC3Rotation = Math.random() * (5 - (-5)) - 5
let randomHRotation = Math.random() * (5 - (-5)) - 5
let randomO2Rotation = Math.random() * (5 - (-5)) - 5
let randomO3Rotation = Math.random() * (5 - (-5)) - 5
let randomLRotation = Math.random() * (5 - (-5)) - 5



letterT1.style.transform = 'rotate('+ randomT1Rotation +'deg)';
letterR.style.transform = 'rotate('+ randomRRotation +'deg)';
letterI1.style.transform = 'rotate('+ randomI1Rotation +'deg)';
letterB.style.transform = 'rotate('+ randomBRotation +'deg)'; 
letterE.style.transform = 'rotate('+ randomERotation +'deg)';
letterC1.style.transform = 'rotate('+ randomC1Rotation +'deg)';
letterA.style.transform = 'rotate('+ randomARotation +'deg)';

letterC2.style.transform = 'rotate('+ randomC2Rotation +'deg)';
letterO1.style.transform = 'rotate('+ randomO1Rotation +'deg)';
letterM1.style.transform = 'rotate('+ randomM1Rotation +'deg)';
letterM2.style.transform = 'rotate('+ randomM2Rotation +'deg)';
letterU.style.transform = 'rotate('+ randomURotation +'deg)';
letterN.style.transform = 'rotate('+ randomNRotation +'deg)';
letterI2.style.transform = 'rotate('+ randomI2Rotation +'deg)';
letterT2.style.transform = 'rotate('+ randomT2Rotation +'deg)';
letterY.style.transform = 'rotate('+ randomYRotation +'deg)';

letterS.style.transform = 'rotate('+ randomSRotation +'deg)';
letterC3.style.transform = 'rotate('+ randomC3Rotation +'deg)';
letterH.style.transform = 'rotate('+ randomHRotation +'deg)';
letterO2.style.transform = 'rotate('+ randomO2Rotation +'deg)';
letterO3.style.transform = 'rotate('+ randomO3Rotation +'deg)';
letterL.style.transform = 'rotate('+ randomLRotation +'deg)';



// Helper function to change the fill color of the SVG paths
// function setSVGFillColor(svgElement, color) {
//     // Get all path elements within the SVG
//     let paths = svgElement.contentDocument.querySelectorAll('path');
//     // Set the fill color for each path
//     paths.forEach(path => {
//         path.setAttribute('fill', color);
//     });
// }

// // List of all letter elements
// let letters = [letterT, letterR, letterI, letterB, letterE, letterC, letterA,
//                letterC2, letterO1, letterM1, letterM2, letterU, letterN, letterI2, 
//                letterT2, letterY, letterS, letterC3, letterH, letterO2, letterO3, letterL];

// // Apply the fill color to each letter
// letters.forEach(letter => {
//     letter.addEventListener('load', function() {
//         setSVGFillColor(letter, 'red');
//     });
// });
