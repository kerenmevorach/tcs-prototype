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


let tOptions = ['../img4/T1.png', '../img4/T2.png', '../img4/T3.png', '../img4/T4.png']
let rOptions = ['../img4/R1.png', '../img4/R2.png', '../img4/R3.png', '../img4/R4.png', '../img4/R5.png']
let iOptions = ['../img4/I1.png', '../img4/I2.png', '../img4/I3.png']
let bOptions = ['../img4/B1.png', '../img4/B2.png']
let eOptions = ['../img4/E1.png', '../img4/E2.png']
let cOptions = ['../img4/C1.png', '../img4/C2.png', '../img4/C3.png']
let aOptions = ['../img4/A1.png', '../img4/A2.png']

let oOptions = ['../img4/O1.png', '../img4/O2.png', '../img4/O3.png', '../img4/O4.png', '../img4/O5.png', '../img4/O6.png']
let mOptions = ['../img4/M1.png', '../img4/M2.png', '../img4/M3.png']
let uOptions = ['../img4/U1.png', '../img4/U2.png']
let nOptions = ['../img4/N1.png', '../img4/N2.png']
let yOptions = ['../img4/Y1.png', '../img4/Y2.png', '../img4/Y3.png',  '../img4/Y4.png']

let sOptions = ['../img4/S1.png', '../img4/S2.png', '../img4/S3.png']
let hOptions = ['../img4/H1.png', '../img4/H2.png', '../img4/H3.png']
let lOptions = ['../img4/L1.png', '../img4/L2.png']


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


let randomTHeight = Math.random() * (105 - 80) + 80
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

letterT1.style.height = randomTHeight + '%';
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



// Helper function to change the fill color of the png paths
// function setpngFillColor(pngElement, color) {
//     // Get all path elements within the png
//     let paths = pngElement.contentDocument.querySelectorAll('path');
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
//         setpngFillColor(letter, 'red');
//     });
// });
