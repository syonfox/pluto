
//require st stripe
//require cf cloudflare
//require ai openai
//require pg postgres

//require kv key value
//ig ingress
//eg endgres

// # Ok So how do we make a crud box

// spin up a server
// point a domin to it
// get ssl
// make a landing page with checkout

// componenets we need post marketing
// purchase flow
//  -> auto register
//  ->

let pf = st.newPurchaseFlow({
  id: "uuidv4",
  product: "product name or id",
  template: {
    // sutomize purchas template ejs context
  },
  //after sucessful purchas this endpoint is posted in the background
  postRegisterEndpoint: "mysite.ca/registerStripeAccount",
  passRedirect: "miSite.ca/welcomeRead this guilde and login",
  failRedirect: "sorry the purchse dis not compleate try again or book a meeting",
  meetRedirect: "Set up an appointment to customize your plan"
})

