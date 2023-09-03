setTimeout(async () => {
    console.log(document.body.innerText);
    const res = await fetch("http://localhost:8080", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            text: document.body.innerText,
        }),
    });
}, 1000);
