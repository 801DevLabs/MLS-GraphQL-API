## Setup - Scroll to the bottom to copy and past all queries and mutations into prisma playground

### Run the following commands on setup

```
npm install
npm run dockerStart
npm run deploy
npm run load
npm run start
```

## Queries
### Get all listings

```
query getListings {
  listings {
    id
    address
    image
    city
    state
    style
    on_market
  }
}
```

### Get all listings in Orem

```
query getListingsOrem {
  listings (where: {
    city: "orem"
  }) {
    id
    address
    image
    city
    state
    style
    on_market
  }
}
```

### Get one listing

```
query getOneListing {
  listings (where: {
    id: "cjuvkcfwz007v0870pridmgat"
  }) {
    id
    address
    image
    city
    state
    style
    on_market
  }
}
```

## Mutations

### Create a new listing

```
mutation addListing {
  createListing(data: {
    address: "asdf"
    image: "asdf"
    city: "asdf"
    state: "asdf"
    style: "asdf"
    on_market: false
  })
  {
    id
    address
    image
    city
    state
    style
    on_market
  }
}
```

### Update a listing

```
mutation updateListing {
  updateListing(
    data: {
      city: "Provo"
    }
    where: {
      id: "cjule7323005s0942998ut235"
    }
  ) {
    id
    address
    image
    city
    state
    style
    on_market
  }
}
```

### Delete a listing

```
mutation deleteListing {
  deleteListing(where:{
    id: "cjuvkesra00ai0870rfx470hr"
  }) {
    id
    address
    image
    city
    state
    style
    on_market
  }
}
```

## Quick access to all queries and mutations
```
query getListings {
  listings {
    id
    address
    image
    city
    state
    style
    on_market
  }
}

query getListingsOrem {
  listings (where: {
    city: "orem"
  }) {
    id
    address
    image
    city
    state
    style
    on_market
  }
}

query getListingsUtah {
  listings (where: {
    state: "utah"
  }) {
    id
    address
    image
    city
    state
    style
    on_market
  }
}

query getOneListing {
  listings (where: {
    id: "cjuvkcfwz007v0870pridmgat"
  }) {
    id
    address
    image
    city
    state
    style
    on_market
  }
}

mutation addListing {
  createListing(data: {
    address: "asdf"
    image: "asdf"
    city: "asdf"
    state: "asdf"
    style: "asdf"
    on_market: false
  })
  {
    id
    address
    image
    city
    state
    style
    on_market
  }
}

mutation updateListing {
  updateListing(
    data: {
      city: "Provo"
    }
    where: {
      id: "cjule7323005s0942998ut235"
    }
  ) {
    id
    address
    image
    city
    state
    style
    on_market
  }
}

mutation deleteListing {
  deleteListing(where:{
    id: "cjuvkesra00ai0870rfx470hr"
  }) {
    id
    address
    image
    city
    state
    style
    on_market
  }
}
```