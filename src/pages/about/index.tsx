import type { NextPage } from "next";

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

  ${mq.laptop} {
    width: 75%;
  }
`;
  return (
    <Layout pageTitle="about">
      <h1 css={titleStyle}>ABOUT US</h1>
      <div css={wrapperStyle}>
        <p>
          Ethereum
          JapanはEthereumを中心として広くblockhchain技術の推進と情報発信を行っていく非営利の団体です。
        </p>
        <p>
          日本だけでなく、積極的に海外とのコミュニティとも連携して活動を行います。
          活動はTwitterによる発信や、定期的なEvent運営、研究など多岐にわたります。
        </p>
        <p>
          過去には、Ethereum
          Foundationのコアデベロッパーを招いてイベントも開催しています。
        </p>
      </div>
    </Layout>
  );
};

export default About;
