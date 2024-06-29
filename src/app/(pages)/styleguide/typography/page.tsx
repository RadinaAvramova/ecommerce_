import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import { Gutter } from '../../../_components/Gutter'
import { VerticalPadding } from '../../../_components/VerticalPadding'
import { mergeOpenGraph } from '../../../_utilities/mergeOpenGraph'

export default async function Typography() {
  return (
    <Gutter>
      <p>
        <Link href="/styleguide">Styleguide</Link>
        {' / '}
        <span>Typography</span>
      </p>
      <VerticalPadding bottom="large" top="none">
        <h1>Typography</h1>
        <h1></h1>
        <h2></h2>
        <h3>
          
        </h3>
        <h4>
          
        </h4>
        <h5>
          
        </h5>
        <h6>
       
        </h6>
        <p>
   
        </p>
      </VerticalPadding>
    </Gutter>
  )
}

export const metadata: Metadata = {
  title: 'Typography',
  description: 'Styleguide for typography.',
  openGraph: mergeOpenGraph({
    title: 'Typography',
    url: '/styleguide/typography',
  }),
}
