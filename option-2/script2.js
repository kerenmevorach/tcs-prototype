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

let tOptions = ['../img2/T1.svg', '../img2/T2.svg', '../img2/T3.svg', '../img2/T4.svg', '../img2/T5.svg']
let rOptions = ['../img2/R1.svg', '../img2/R2.svg', '../img2/R3.svg', '../img2/R4.svg', '../img2/R5.svg', '../img2/R6.svg']
let iOptions = ['../img2/I1.svg', '../img2/I2.svg', '../img2/I3.svg', '../img2/I4.svg', '../img2/I5.svg']
let bOptions = ['../img2/B1.svg', '../img2/B2.svg', '../img2/B3.svg']
let eOptions = ['../img2/E1.svg', '../img2/E2.svg', '../img2/E3.svg', '../img2/E4.svg']
let cOptions = ['../img2/C1.svg', '../img2/C2.svg', '../img2/C3.svg', '../img2/C4.svg']
let aOptions = ['../img2/A1.svg', '../img2/A2.svg']

let oOptions = ['../img2/O1.svg', '../img2/O2.svg', '../img2/O3.svg', '../img2/O4.svg', '../img2/O5.svg', '../img2/O6.svg', '../img2/O7.svg']
let mOptions = ['../img2/M1.svg', '../img2/M2.svg', '../img2/M3.svg', '../img2/M4.svg', '../img2/M5.svg', '../img2/M6.svg']
let uOptions = ['../img2/U1.svg', '../img2/U2.svg']
let nOptions = ['../img2/N1.svg', '../img2/N2.svg', '../img2/N3.svg', '../img2/N4.svg']
let yOptions = ['../img2/Y1.svg', '../img2/Y2.svg', '../img2/Y3.svg']

let sOptions = ['../img2/S1.svg', '../img2/S2.svg', '../img2/S3.svg', '../img2/S4.svg']
let hOptions = ['../img2/H1.svg', '../img2/H2.svg', '../img2/H3.svg', '../img2/H4.svg']
let lOptions = ['../img2/L1.svg', '../img2/L2.svg']


function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let randomT1 = getRandomElement(tOptions);
let randomR = getRandomElement(rOptions);
let randomI1 = getRandomElement(iOptions);
let randomB = getRandomElement(bOptions);
let randomE = getRandomElement(eOptions);
let randomC1 = getRandomElement(cOptions);
let randomA = getRandomElement(aOptions);

let randomC2 = getRandomElement(cOptions);
while (randomC1 === randomC2) {
    randomC2 = getRandomElement(cOptions);
}

let randomO1 = getRandomElement(oOptions);

let randomM1 = getRandomElement(mOptions);
let randomM2 = getRandomElement(mOptions);
while (randomM1 === randomM2) {
    randomM2 = getRandomElement(mOptions);
}

let randomU = getRandomElement(uOptions);
let randomN = getRandomElement(nOptions);

let randomI2 = getRandomElement(iOptions);
while (randomI1 === randomI2) {
    randomI2 = getRandomElement(iOptions);
}

let randomT2 = getRandomElement(tOptions);
while (randomT1 === randomT2) {
    randomT2 = getRandomElement(tOptions);
}

let randomY = getRandomElement(yOptions);

let randomS = getRandomElement(sOptions);

let randomC3 = getRandomElement(cOptions);
while (randomC3 === randomC2 || randomC3 === randomC1) {
    randomC3 = getRandomElement(cOptions);
}

let randomH = getRandomElement(hOptions);
let randomO2 = getRandomElement(oOptions);
while (randomO1 === randomO2) {
    randomO2 = getRandomElement(oOptions);
}

let randomO3 = getRandomElement(oOptions);
while (randomO3 === randomO2 || randomO3 === randomO1) {
    randomO3 = getRandomElement(oOptions);
}

let randomL = getRandomElement(lOptions);

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





// // Helper function to change the fill color of the SVG paths
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
