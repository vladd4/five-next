import React from "react";
import ContentLoader from "react-content-loader";

const ProfileSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={"96%"}
    height={"auto"}
    viewBox="0 0 900 420"
    backgroundColor="#ededed"
    foregroundColor="#d6d6d6"
    {...props}
  >
    <rect x="5" y="10" rx="0" ry="0" width="890" height="400" />
  </ContentLoader>
);

export default ProfileSkeleton;
