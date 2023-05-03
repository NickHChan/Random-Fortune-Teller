const fortunes = [
    `Do it scared.`,

    `Don’t hold onto things that require a tight grip.`,

    `Little by little, one travels far.`,

    `One bad chapter doesn't mean your story is over.`,

    `Turn your wounds into wisdom.`,

    `Stay hungry. Stay foolish.`,

    `The only impossible journey is the one you never begin.`,

    `Hold up, one second. I need to re-supply... *Puff* *Puff*`
]
const button = document.getElementById("theButton")
const totalFortunes = fortunes.length-1;


const displayFortune = () => {
    const randomNum = Math.round(Math.random()*totalFortunes);
    const theFortune = fortunes[randomNum]
    document.getElementById('inputBox').value = theFortune;
}