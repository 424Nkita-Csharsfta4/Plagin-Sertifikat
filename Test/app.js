async function GetSert(){
    let resp = await fetch("http://localhost:5235/connection/");
    let json = await resp.json();
    return await json;
}