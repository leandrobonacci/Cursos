export function post(props){
    let {title, content, _embedded,date} = props;
    let dateFormat = new Date(date).toLocaleString();

return `
<section class="post-page">
<aside>
<h2>${title.rendered}</h2>
<time datetime="${date}"> ${dateFormat} </time>
</aside>
<hr>
<article>${content.rendered}</article>
</section>
`;
}