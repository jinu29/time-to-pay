import{j as e}from"./app-D3qFl5QJ.js";import{P as o}from"./Prism-WJ8m_yXm.js";const s=`
var app = document.getElementById("app");
var run = (model) => get(model, "users", () =>
    get(model, "posts",
    () => {
        model.users.forEach(user => model.userIdx[user.id] = user);
        app.innerText = '';
        model.posts.forEach(post =>
        app.appendChild(renderPost(post, model.userIdx[post.userId])));
    }));
app.appendChild(Wrapper.generate("button", "Load").click(() => run({
    userIdx: {}
})).element);
`,p=()=>e.jsx(o,{code:s,language:"html",plugins:["line-numbers"]});export{p as default};
