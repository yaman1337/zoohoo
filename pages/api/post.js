// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function a(req, res) {
  let res1 = await fetch("https://jsonplaceholder.typicode.com/todos/");
  let data = await res1.json();
  res.json(data)
}
