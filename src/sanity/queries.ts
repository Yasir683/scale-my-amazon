export const salesQuery = `
  *[_type == "sales"]{
    title,
    marketplace,
    sales,
    orders,
    units,
    date
  }
`


export const caseStudyQuery = `
  *[_type == "caseStudy"]{
    title,
    marketplace,
    challenge,
    strategy,
    result,
    revenue,
    image{
      asset->{
        url
      }
    }
  }
`