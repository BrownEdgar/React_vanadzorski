import React from "react"
import ContentLoader from "react-content-loader"

const PostLoader = (props) => (
  <ContentLoader
    speed={1}
    width={600}
    height={140}
    viewBox="0 0 600 140"
    backgroundColor="#e3cece"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="18" rx="3" ry="3" width="267" height="22" />
    <rect x="0" y="56" rx="3" ry="3" width="570" height="6" />
    <rect x="0" y="76" rx="3" ry="3" width="580" height="6" />
    <rect x="0" y="95" rx="3" ry="3" width="373" height="6" />

  </ContentLoader>
)

export default PostLoader