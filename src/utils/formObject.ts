import Airtable from "airtable";

{
  /*

const base_websiteInquiry = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_INQUIRYFORM as string);
const table_websiteInquiry = base_websiteInquiry(
  process.env.AIRTABLE_TABLE_INQUIRYFORM as string,
);

  */
}

const base_websiteInquiry = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_INQUIRYFORM as string);
const table_websiteInquiry = base_websiteInquiry(
  process.env.NEXT_PUBLIC_AIRTABLE_TABLE_INQUIRYFORM as string,
);

export { table_websiteInquiry };
