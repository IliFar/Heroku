const saveLands = async () => {
    const landInput = document.getElementById("land");
    const idInput = document.getElementById("id");
    const popInput = document.getElementById("pop");

    const lands = {
        countryname: landInput.value,
        id: idInput.value,
        population: popInput.value
    }

    await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(lands)
    });
    
    landInput.value = "";
    idInput.value = "";
    popInput.value = "";
    
};
document.getElementById("btn").addEventListener("click", saveLands)
console.log("hello");