setTimeout(async () => {
    console.log(document.body.innerText, "\n", window.location.href);
    const res = await fetch("http://localhost:8080", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            text: document.body.innerText,
            url: window.location.href,
        }),
    });
}, 1000);
