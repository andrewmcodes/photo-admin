import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PhotosTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const PhotosContent = contentComponent || Content

  return (
    <section className="">
      {helmet || ''}
      <div className="">
        <div className="">
          <div className="">
            <h1 className="">{title}</h1>
            <p>{description}</p>
            <PhotosContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

PhotosTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Photos = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PhotosTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Photos">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

Photos.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Photos

export const pageQuery = graphql`
  query PhotosByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`
