const button = document.querySelector('button');
const input = document.querySelector('input');
const namee = document.querySelector('h1');
const define = document.querySelector('#define');
const example = document.querySelector(".example");
const noun = document.querySelector('.noun');
const img = document.querySelector('img')
const define2 = document.querySelector('#define2');

async function dictionary(){
    const api = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`;
    const response = await fetch(api);
    const data = await response.json();
    if(data.title === "No Definitions Found")
    {
        alert(`This word is not found in the dictionary`);
        return;
    }
    console.log(data);
    console.log(data[0].meanings[0].definitions[0].definition);
    namee.innerText = data[0].word;
    define.innerText=`1. ${data[0].meanings[0].definitions[0].definition}`;
    if(data[0].meanings[0].definitions[1])
    {
        define2.innerText=`2. ${data[0].meanings[0].definitions[1].definition}`;
    }
    else{
        define2.innerText ="";
    }
    noun.innerHTML=data[0].meanings[0].partOfSpeech;
    if(data[0].meanings[0].definitions[0].example)
    {
        example.innerText =data[0].meanings[0].definitions[0].example;
    }
    else if(data[0].meanings[1].definitions[0].example)
    {
        example.innerText =data[0].meanings[1].definitions[0].example;
    }
    else if(data[0].meanings[2].definitions[0].example)
    {
        example.innerText =data[0].meanings[2].definitions[0].example;
    }
    else if(data[0].meanings[1].definitions[1].example)
        {
            example.innerText =data[0].meanings[1].definitions[1].example;
        }
    else{
        example.innerText ="";
    }
};

button.addEventListener('click',()=>{
    dictionary();
    input.value='';
});
input.addEventListener('keydown',(event)=>{
    if(event.key==='Enter')
    {
        dictionary();
        input.value='';
        // alert("efdsfdsf");
    }
})
img.addEventListener('click',()=>{
    alert("Haven't put sound in it yet")
})