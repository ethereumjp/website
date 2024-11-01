import Layout from "@/components/layouts/base";
import type { PageProps } from "@/types";
import { css } from "@emotion/react";
import { NextPage } from "next";

const Events: NextPage<PageProps> = ({ params, searchParams }) => {
  const calWrapper = css`
    display: flex;
    justify-content: center;
  `;
  return (
    <Layout pageTitle="events">
      <div>
        <h1>Events</h1>
        <div css={calWrapper}>
          <iframe
            title="calendar"
            src="https://lu.ma/embed/calendar/cal-FMaPKHYZLXA2VzT/events?compact=true&lt=light"
            width="600"
            height="450"
            css={css`border: 1px solid #bfcbda88; border-radius: 4px;`}
            aria-hidden="false"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Events;
