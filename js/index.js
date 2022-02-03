import "../scss/modules/main.scss";

console.log ("Hi, I'm Paulina, how are you?")

fetch('https://api.github.com/users/paurut/repos?sort=created&&direction=asc')
.then((res) => res.json())
.then((res) => {
    console.log(res);
})
.catch((e) => console.log(e));