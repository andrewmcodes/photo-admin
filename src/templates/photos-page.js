import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PhotosPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="w-full min-h-screen">
      <div className=" min-h-screen w-full sm:w-3/4 md:w-1/2 mx-auto container flex flex-col items-center justify-center ">
        <div className="text-left md:text-center px-8">
          <h1 className="text-4xl text-blue mt-4 md:mt-12 mb-4 md:mb-8 text-center">
            {title}
          </h1>
          <PageContent className="text-left" content={content} />
        </div>
      </div>
    </section>
  )
}

PhotosPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PhotosPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PhotosPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

PhotosPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PhotosPage

export const photosPageQuery = graphql`
  query PhotosPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
