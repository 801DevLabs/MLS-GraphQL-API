const fs = require('fs')
const { GraphQLClient } = require('graphql-request')

const client = new GraphQLClient('http://localhost:4466')

const mutation = `mutation addListing(
  $address: String!,
  $image: String!,
  $city: String!,
  $state: String!
  $style: String!
  $on_market: Boolean!
)

{
  createListing(data: {
    address: $address
    image: $image
    city: $city
    state: $state
    style: $style
    on_market: $on_market
  })
  {
    address
    image
    city
    state
    style
    on_market
  }
}
`

const sampleFiles = [
  'listings-data.json',
]

async function main(inputFile) {
  const content = fs.readFileSync(`./seed/${inputFile}`)
  const allListings = JSON.parse(content)

  allListings.forEach(async item => {
    const variables = {
      address: item.address,
      image: item.image,
      city: item.city,
      state: item.state,
      style: item.style,
      on_market: item.on_market
    }
  
    await client.request(mutation, variables)
      .then(data => console.log(data))
      .catch(err => console.log(`${err}`))
  })
}

for (let fileName of sampleFiles) {
  main(fileName).catch(e => console.err(e))
}