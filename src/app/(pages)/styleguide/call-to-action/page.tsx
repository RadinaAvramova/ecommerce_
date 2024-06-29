import React, { Fragment } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import { CallToActionBlock } from '../../../_blocks/CallToAction'
import { Gutter } from '../../../_components/Gutter'
import { VerticalPadding } from '../../../_components/VerticalPadding'
import { mergeOpenGraph } from '../../../_utilities/mergeOpenGraph'

export default async function CallToActionPage() {
  return (
    <Fragment>
      <Gutter>
        <p>
          <Link href="/styleguide">Styleguide</Link>
          {' / '}
          <span>Call To Action Block</span>
        </p>
        <h1>Call To Action Block</h1>
      </Gutter>
      <VerticalPadding bottom="large" top="none">
        <CallToActionBlock
          blockType="cta"
          richText={[
            {
              type: 'h4',
              children: [
                {
                  text: '',
                },
              ],
            },
            {
              children: [
                {
                  text: '',
                },
              ],
            },
          ]}
          links={[
            {
              link: {
                type: 'custom',
                label: '',
                url: '#',
                reference: null,
                appearance: 'primary',
              },
            },
          ]}
        />
        <br />
        <br />
        <CallToActionBlock
          blockType="cta"
          invertBackground
          richText={[
            {
              type: 'h4',
              children: [
                {
                  text: '',
                },
              ],
            },
            {
              children: [
                {
                  text: '',
                },
              ],
            },
          ]}
          links={[
            {
              link: {
                type: 'custom',
                label: '',
                url: '#',
                reference: null,
                appearance: 'primary',
              },
            },
          ]}
        />
      </VerticalPadding>
    </Fragment>
  )
}

export const metadata: Metadata = {
  title: 'Call To Action Block',
  description: 'Styleguide for the Call To Action Block',
  openGraph: mergeOpenGraph({
    title: 'Call To Action Block',
    url: '/styleguide/call-to-action',
  }),
}
