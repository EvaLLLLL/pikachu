const string = `.skin * {
    box-sizing: border-box;
padding: 0;
margin: 0;
}

.skin *::before, .skin *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.skin {
    background: #ffe602;
    position: relative;
    min-height: 60vh;
}

.nose {
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    position: absolute;
    left: 50%;
    top: 135px;
    margin-left: -10px;
    z-index: 10;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
}
    25% {
        transform: rotate(5deg);
}
    50% {
        transform: rotate(0deg);
}
    75% {
        transform: rotate(-5deg);
}
    100% {
        transform: rotate(0deg);
}
}

.nose:hover {
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
}

.yuan {
    position: absolute;
    height: 6px;
    width: 20px;
    top: -16px;
    left: -10px;
    border-radius: 20px 20px 0 0;
    background-color: black;
}

.eye {
    border: 2px solid #000000;
    position: absolute;
    height: 64px;
    width: 64px;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background-color: #2e2e2e;
    border-radius: 50%;
}

.eye::before {
    content: '';
    display: block;
    border: 3px solid black;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 1px;
}

.eye.left {
    transform: translateX(-100px);
}

.eye.right {
    transform: translateX(100px);
}

.mouth {
    height: 200px;
    width: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}

.mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
}

.mouth .up .lip {
    border: 5px solid;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    border-right-color: transparent;
    left: 50%;
    margin-left: -50px;
    position: relative;
    position: absolute;
    background: #ffe602;
}

.mouth .up .lip::before {
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe602;
}

.mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-20deg) translateX(-53px);
}

.mouth .up .lip.left::before {
    right: -6px;
}

.mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(20deg) translateX(53px);
}

.mouth .up .lip.right::before {
    left: -6px;
}

.mouth .down {
    height: 180px;
    width: 100%;
    position: absolute;
    top: 5px;
    overflow: hidden;
}

.mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    height: 1000px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2 {
    height: 300px;
    width: 300px;
    position: absolute;
    bottom: -160px;
    left: 50%;
    margin-left: -150px;
    background-color: #ff485f;
    border-radius: 50%;
}

.face {
    border: 3px solid black;
    height: 82px;
    width: 82px;
    position: absolute;
    left: 50%;
    margin-left: -42px;
    border-radius: 50%;
    background-color: #ff0101;
    top: 200px;
    z-index: 3;
}

.face > img {
    position: absolute;
    top: 50%;
    left: 50%;
}

.face.left {
    transform: translateX(-165px);
}

.face.left > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
}

.face.right {
    transform: translateX(165px);
}`

export default string