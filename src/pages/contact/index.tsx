// import ContactForm from '@/components/forms/ContactForm';
import ContactFormDangerous from "@/components/forms/ContactForm_dangerous";
import Layout from "@/components/layouts/base";
import { mq } from "@/themes/settings/breakpoints";
import { css } from "@emotion/react";
import { NextPage } from "next";

const Contact: NextPage = () => {
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

  const formWrapperStyle = css`
    margin-left: auto;
    margin-right: auto;
    padding-top: 4rem;

    ${mq.laptop} {
      width: 75%;
    }
  `;

  return (
    <Layout pageTitle="Contact">
      <h1 css={titleStyle}>CONTACT US</h1>
      <div css={formWrapperStyle}>
        <ContactFormDangerous />
      </div>
    </Layout>
  );
};

export default Contact;
