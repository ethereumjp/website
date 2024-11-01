import { NextPage } from "next";

import Layout from "@/components/layouts/base";
import { mq } from "@/themes/settings/breakpoints";
import type { PageProps } from "@/types";
import { css } from "@emotion/react";

const About: NextPage<PageProps> = ({ params, searchParams }) => {
  const titleStyle = css`
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.25rem;
    padding-top: 4rem;
    text-align: center;

    ${mq.laptop} {
      font-size: 3rem;
      padding-top: 6rem;
    }
  `;

  const wrapperStyle = css`
    margin-left: auto;
    margin-right: auto;
    padding-top: 2rem;
    text-align: center;

    ${mq.laptop} {
      justify-content: center;
      width: 75%;
    }
  `;

  return (
    <Layout pageTitle="about">
      <h1 css={titleStyle}>ETHTokyo 2024</h1>
      <div css={wrapperStyle}>
        <h2>Hackathon: Aug. 23 - 25 / Conference: Aug. 26</h2>
        <br />
        <p>More details coming soon</p>
      </div>
    </Layout>
  );
};

export default About;
