const apiKey = 'https://sentim-api.herokuapp.com/api/v1/'

async function getSenti() {

    fetch("/api/v1/", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            text: document.getElementById("text").value,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("resp").innerText = JSON.stringify(
                data,
                null,
                2
            )
        })
    // document.getElementById('resultbox').innerHTML = await senti
    const response = sentiObj
    console.log(sentiObj)
}
document.getElementById('button').onclick = getSenti
//gets senti object and returns an object with the polarity
function getPolarity(sentiObj) {
    return sentiObj
}
//gets senti object and returns an object with the type
function getType(sentiObj) {

}