import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonVideoCard:React.FC = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#e6e6e6"
    foregroundColor="#dfd3d3"
    opacity='1'
  >
    <rect x="0" y="6" rx="20" ry="20" width="390" height="250" /> 
    <rect x="0" y="276" rx="4" ry="4" width="390" height="30" />
  </ContentLoader>
)

export default SkeletonVideoCard

