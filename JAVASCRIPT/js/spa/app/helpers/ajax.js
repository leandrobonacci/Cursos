export async function ajax(props){
    let {url, cbSuccess} = props;
    await fetch(url)
    .then(res=>res.ok ? res.json() : Promise.reject(res))
    .then(json => cbSuccess(json))
    .catch(err => {
        let message = err.statusText || "Ocurrió un error";

        document.getElementById("main").innerHTML = `
        <div class="error">
        <p>Error ${err.status}: ${message}</p>
        </div>
        `;
        console.log(err);
    });
    
}

