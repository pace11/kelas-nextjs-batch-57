// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${req?.query?.idx}`);
      const data = await response.json()
      res.status(200).json({ status: 200, message: 'Ok', data});
    } catch (error) {
      res.status(500).json({ message: 'Error API', error: error})
    }
    // const name = process.env.URL_API
    // res.status(200).json({ name: "John Doe" });
}
  