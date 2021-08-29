import React from "react";
import styled from "styled-components";

const Post = ({ data }) => {
  const { title, body, links, media } = data;
  return (
    <Wrapper>
      <a alt={title} href={links?.permalink} target="_blank" rel="noreferrer">
        <H1>{title}</H1>
      </a>
      <Content>
        <Text>{body}</Text>
        <Image src={media[0]?.url} alt={title} />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  clear: both;
  margin-bottom: 32px;
  border: 1px solid #dadada;
  padding: 16px;
  border-radius: 5px;
`;

const Content = styled.div`
  clear: both;
`;

const H1 = styled.h1`
  font-size: 24px;
`;

const Text = styled.p`
  text-align: justify;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
`;

const Image = styled.img`
  width: 100%;
`;

export default Post;
