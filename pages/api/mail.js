// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import sendgrid from "@sendgrid/mail";

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  const temp = JSON.stringify(req.body)
  console.log(process.env.SENDGRID_API_KEY)
  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', temp)
  const body = JSON.parse(temp)
  const name = `${body.name}`
  const email = `${body.email}`
  const phone = `${body.phone}`
  const description = `${body.description}`

  const msg = {
    to: "trollsapprentice@gmail.com", // Your email where you'll receive emails
    from: "trolls.apprentice@gmail.com", // your website email address here
    subject: "New Client",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nNeed: ${description}`,
    html: `<div>Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nNeed: ${description}</div>`,
  }
    await sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })


    res.status(200).json({ name,email })
    
}
