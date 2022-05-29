/** @jsxImportSource theme-ui **/
import { Themed } from 'theme-ui'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Content from '../components/Content'

const Privacy = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <Themed.h1>Privacy</Themed.h1>
        <Themed.h5>
          <b>
            sm64js uses Discord OAuth or Google OAuth only to grab a unique account ID and
            Discord display name for discord users, no other account information is ever
            accessed. The purpose of this account ID is to manage and prevent spam
            accounts that can make the game experience less enjoyable, less safe, or
            innaproporiate for our users.
          </b>
        </Themed.h5>
        <Themed.p>sm64js.com operates the sm64js.com website, which provides the Service.</Themed.p>
        <Themed.p>
          This page is used to inform website visitors regarding our policies with the
          collection, use, and disclosure of Personal Information for anyone who decides
          to use our Service, the sm64js.com website.
        </Themed.p>
        <Themed.p>
          If you choose to use our Service, then you agree to the collection and use of
          information in relation with this policy. The Personal Information that we
          collect are used for providing and improving the Service. We will not use or
          share your information with anyone except as described in this Privacy Policy.
        </Themed.p>
        <Themed.p>
          <b>Information Collection and Use</b>
        </Themed.p>
        <Themed.p>
          For a better experience while using our Service, we may require you to provide
          us with a username and password. These are stored encrypted within our database
          and are used solely for identifying accounts. We do not collect information such
          as real names or addresses. All user-given data will not be given to a
          third-party service outside of Google Analytics.
        </Themed.p>
        <Themed.p>
          <b>Log Data</b>
        </Themed.p>
        <Themed.p>
          We want to inform you that whenever you visit our Service, we collect
          information that your browser sends to us called Log Data. This Log Data may
          include information such as your computer’s Internet Protocol ("IP") address,
          browser version, pages of our Service that you visit, the time and date of your
          visit, the time spent on those pages, and other statistics. We use Google
          Analytics to help us improve our Service and that data will not be given out to
          a third-party.
        </Themed.p>
        <Themed.p>
          <b>Security</b>
        </Themed.p>
        <Themed.p>
          We value your trust in providing us your Personal Information, and we aim to use
          commercially acceptable means of protecting it. Please remember that no method
          of transmission over the internet, or method of electronic storage is 100%
          secure and reliable, and we cannot guarantee its absolute security.
        </Themed.p>
        <Themed.p>
          <b>Links to Other Sites</b>
        </Themed.p>
        <Themed.p>
          Our Service may contain links to other sites. If you click on a third-party
          link, you will be directed to that site. Note that these external sites are not
          operated by us. Therefore, we strongly advise you to review the Privacy Policy
          of these websites. We have no control over, and assume no responsibility for the
          content, privacy policies, or practices of any third-party sites or services.
        </Themed.p>
        <Themed.p>
          <b>Changes to This Privacy Policy</b>
        </Themed.p>
        <Themed.p>
          We may update our Privacy Policy from time to time. Thus, we advise you to
          review this page periodically for any changes. We will notify you of any changes
          by posting the new Privacy Policy on this page. These changes are effective
          immediately after they are posted on this page.
        </Themed.p>
        <Themed.p>
          <b>Contact Us</b>
        </Themed.p>
        <Themed.p>
          If you have any questions or suggestions regarding our Privacy Policy, do not
          hesitate to email us: <a href="mailto:sm64js@gmail.com">sm64js@gmail.com</a>
        </Themed.p>
      </Content>
    </Layout>
  )
}

export default Privacy
