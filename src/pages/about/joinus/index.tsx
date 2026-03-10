import type { NextPage } from "next";

import Layout from "@/components/layouts/base";
import { mq } from "@/themes/settings/breakpoints";
import type { PageProps } from "@/types";
import { positions } from "@/utils/constants";
import { css } from "@emotion/react";
import Link from "next/link";

const Wanted: NextPage<PageProps> = ({ params, searchParams }) => {
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
    <Layout pageTitle="participate">
      <h1 css={titleStyle}>JOIN US</h1>
      <div css={wrapperStyle}>
        <section id="hiring">
          <div css={css`margin-bottom: 4rem;`}>
            <p>メンバーの募集は不定期で更新され、Twitterまたは本websiteにて告知を行います。</p>
          </div>
          <ul
            css={css`
              margin-bottom: 4rem;
              padding-left: 0px;

              ${mq.laptop} {
                column-gap: 4rem;
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                row-gap: 2rem;
              }
            `}
          >
            {positions.some((p) => p.open) ? (
              positions
                .filter((p) => p.open)
                .map((p) => (
                  <li key={p.role} css={css`list-style-type: none;`}>
                    <h3>{p.role}</h3>
                    <ul>
                      {p.requirements.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </li>
                ))
            ) : (
              <li css={css`list-style-type: none;`}>現在募集中のポジションはありません。</li>
            )}
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default Wanted;
