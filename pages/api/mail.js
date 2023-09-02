// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const body = JSON.stringify(req.body)

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)


  res.status(200).json({ data: `${body}` })
}
