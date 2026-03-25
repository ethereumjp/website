import Layout from "@/components/layouts/base";
import { mq } from "@/themes/settings/breakpoints";
import type { PageProps } from "@/types";
import { css } from "@emotion/react";
import type { NextPage } from "next";
import Link from "next/link";

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

    ${mq.laptop} {
      justify-content: center;
      width: 75%;
    }
  `;

  return (
    <Layout pageTitle="about">
      <h1 css={titleStyle}>Digital Assets Working Group</h1>
      <h2 css={css`text-align: center;`}>
        デジタル資産の実装・制度・市場を、日本から前に進めるための実務者ワーキンググループ
      </h2>
      <br />
      <div css={wrapperStyle}>
        <p css={css`line-height: 2rem;`}>
          デジタル資産ワーキンググループ(DAWG)
          は、デジタルアセットに関わる実務者・起業家・研究者・政策関係者・開発者が集まり、業界横断で知見を共有し、論点を整理し、必要な連携を生み出すためのワーキンググループです。
          日本におけるデジタルアセットの議論は、技術、規制、会計、税務、流通、カストディ、プロダクト設計が相互に絡み合っています。
          DAWGは、それらを分断された個別論点としてではなく、実装可能な全体システムとして扱います。
          私たちは、単なる情報交換に留まらず、現場の知見を集約し、具体的な提案、共通理解、実務的な前進につながる場をつくります。
        </p>

        <h2 css={css`text-align: center;`}>DAWGの主旨</h2>
        <p css={css`line-height: 2rem;`}>
          デジタル資産は、単なる投機対象や技術実験ではなく、今後の金融・インターネット・組織のあり方を再設計しうる基盤だと我々は考えています。一方で、日本では以下の問題が繰り返されています。
          <ul>
            <li>技術と制度の会話が分断されやすい</li>
            <li>実務の解像度が制度設計者に共有されにくい</li>
            <li>同じ論点が組織ごとに何度も再発明される</li>
            <li>連携のための中立的な場が不足している</li>
          </ul>
          DAWGは、この断絶を埋めるための場です。立場の違う様々なEthereum事業者を、実務レベルの論点で接続し、デジタル資産市場の健全な発展を後押しします。
        </p>

        <h2 css={css`text-align: center;`}>DAWGが扱うテーマ</h2>
        <p>
          DAWGでは、たとえば以下のようなテーマを扱います。
          <ul>
            <li>ステーブルコイン、トークン化、オンチェーン金融インフラ</li>
            <li>規制・制度設計とその実務影響</li>
            <li>カストディ、セキュリティ、コンプライアンス</li>
            <li>会計、税務、監査、リスク管理</li>
            <li>発行・流通・決済・清算のオペレーション</li>
            <li>ウォレット、UX、プロダクト設計</li>
            <li>企業・行政・金融機関との連携可能性</li>
            <li>日本市場に適したユースケースと実装条件</li>
          </ul>
        </p>

        <h2 css={css`text-align: center;`}>DAWGの取り組み</h2>
        <p>
          <ol>
            <li>
              <strong>ラウンドテーブル・勉強会</strong>
              <br />
              特定テーマに関するクローズドまたはセミクローズドの議論を行います。
              率直な情報共有と、実務上の課題整理を重視します。
            </li>

            <li>
              <strong>ワーキングセッション</strong>
              <br />
              会員が集まり、個別論点について具体的な整理・提案・文書化を進めます。
            </li>
            <li>
              <strong>ナレッジ共有</strong>
              <br />
              制度、技術、実装、運用に関する知見を整理し、必要に応じて公開可能な形に落とし込みます。
            </li>
            <li>
              <strong>エコシステムの接続・連携密度向上</strong>
              <br />
              スタートアップ、大企業、金融機関、行政、研究者、開発者をつなぎ、対話と協業の起点をつくります。
            </li>
          </ol>
        </p>

        <h2 css={css`text-align: center;`}>参加対象</h2>
        <p>
          DAWGでは、以下のような方々の積極的な入会・参画をお待ちししています。
          <ul>
            <li>デジタルアセット領域で事業をつくっている起業家</li>
            <li>ブロックチェーン/ethereum周辺の開発者</li>
            <li>金融、法務、会計、税務、監査、リスク管理の実務者</li>
            <li>政策・規制・制度設計に関わる方</li>
            <li>企業内でweb3/デジタルアセット関連の新規事業を担う方</li>
            <li>この領域の社会実装を本気で進めたい研究者・専門家</li>
          </ul>
          社会的な実用に耐えうるデジタル資産市場の発展のために建設的な議論と実務的前進にコミットできる方を歓迎します。
        </p>

        <h2 css={css`text-align: center;`}>参加・連携について</h2>
        <p>
          DAWGへの参加、登壇、協力、連携に関心がある方は、
          <Link href="https://forms.ethtokyo.org/p/membership-application">こちらのフォーム</Link>
          にて入会申込を受け付けております。
        </p>
      </div>
    </Layout>
  );
};

export default About;
