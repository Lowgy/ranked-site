import { Separator } from "@/components/ui/separator"

export default function PrivacyPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl">Privacy Policy</h1>
        <p className="text-sm">Effective date: 11th of April, 2023</p>

        <div className="border-2">
          <div className="border-b-2 p-3 text-xl">
            <h1>1. Introduction</h1>
            <Separator className="my-2" />
            <p className="text-sm">
              MCSR Ranked (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;)
              operates https://mcsrranked.com, as well the MCSR Ranked
              applications (hereinafter referred to as &quot;Service&quot;).{" "}
              <br />
              <br />
              Our Privacy Policy governs your visit to https://mcsrranked.com,
              as well as your usage of the MCSR Ranked applications, and
              explains how we collect, safeguard and disclose information that
              results from your use of our Service. We use your data to provide
              and improve Service. <br /> <br />
              By using Service, you agree to the collection and use of
              information in accordance with this policy. Unless otherwise
              defined in this Privacy Policy, the terms used in this Privacy
              Policy have the same meanings as in our Terms and Conditions.
            </p>
          </div>
          <div className="border-b-2 p-3 text-xl">
            <h1>2. Information Collection and Use</h1>
            <Separator className="my-2" />
            <p className="text-sm">
              We collect several different types of information for various
              purposes to provide and improve our Service to you.
            </p>
          </div>
          <div className="border-b-2 p-3 text-xl">
            <h1>3. Personal Data</h1>
            <Separator className="my-2" />
            <p className="text-sm">
              While using our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you (&quot;Personal Data&quot;). Personally identifiable
              information may include, but is not limited to:
            </p>
            <ul className="list-inside list-disc text-sm">
              <li>Usage Data</li>
              <li>
                Minecraft Account and Third Parties Data (&quot;Other
                Data&quot;)
              </li>
            </ul>
          </div>
          <div className="border-b-2 p-3 text-xl">
            <h1>4. Usage Data</h1>
            <Separator className="my-2" />
            <p className="text-sm">
              We may also collect information that your browser sends whenever
              you visit our Service or when you access Service by or through a
              mobile device (&quot;Usage Data&quot;). This Usage Data may
              include information such as your computer&apos;s Internet Protocol
              address (e.g. IP address), browser type, browser version, the
              pages of our Service that you visit, the time and date of your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data. When you access Service with a mobile
              device, this Usage Data may include information such as the type
              of mobile device you use, your mobile device unique ID, the IP
              address of your mobile device, your mobile operating system, the
              type of mobile Internet browser you use, unique device identifiers
              and other diagnostic data.
            </p>
          </div>
          <div className="border-b-2 p-3 text-xl">
            <h1>5. Other Data</h1>
            <Separator className="my-2" />
            <p className="text-sm">
              While using our Service, we may also collect the following
              information:
            </p>
            <ul className="list-inside list-disc text-sm">
              <li>
                Minecraft Account: Key Pair containing UUID data generated
                through Minecraft Service API
              </li>
              <li>
                Patreon: User ID, User Name
                <ul>
                  <li>Identifying Patreon Account ID for check subscribing special tiers</li>
                </ul>
              </li>
              <li>
                Discord: User ID, User Tag
                <ul>
                  <li>Identifying Discord User ID and display Discord tag on the MCSR Ranked profile</li>
                </ul>
              </li>
              <li>
                Twitch: User ID, User Name
                <ul>
                  <li>Identifying Twitch Channel ID and display Twitch channel link on the MCSR Ranked profile</li>
                </ul>
              </li>
              <li>
                YouTube(Google): YouTube Channel ID, YouTube Channel Name
                <ul>
                  <li>Identifying YouTube Channel ID and display YouTube channel link on the MCSR Ranked profile</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="border-b-2 p-3 text-xl">
            <h1>6. Tracking & Cookies Data</h1>
            <Separator className="my-2" />
            <p className="text-sm">
              We use cookies and similar tracking technologies to track the
              activity on our Service and hold certain information. Cookies are
              files with small amount of data which may include an anonymous
              unique identifier. Cookies are sent to your browser from a website
              and stored on your device. Tracking technologies also used are
              beacons, tags, and scripts to collect and track information and to
              improve and analyze our Service. You can instruct your browser to
              refuse all cookies or to indicate when a cookie is being sent.
              However, if you do not accept cookies, you may not be able to use
              some portions of our Service. Examples of Cookies we use:
            </p>
            <ul className="list-inside list-disc text-sm">
              <li>
                Session Cookies: We use Session Cookies to operate our Service
              </li>
              <li>
                Preference Cookies: We use Preference Cookies to remember your
                preferences and various settings.
              </li>
              <li>
                Security Cookies: We use Security Cookies for security purposes.
              </li>
            </ul>
          </div>
          <div className="border-b-2 p-3 text-xl">
            <h1>7. Use of Data</h1>
            <Separator className="my-2" />
            <p className="text-sm">
              MCSR Ranked uses the collected data for various purposes:
            </p>
            <ul className="list-inside list-disc text-sm">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>
                To allow you to participate in interactive features of our
                Service when you choose to do so
              </li>
              <li>To provide customer care and support</li>
              <li>
                To provide analysis or valuable information so that we can
                improve the Service
              </li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent, and address technical issues</li>
            </ul>
          </div>
          <div className="border-b-2 p-3 text-xl">
            <h1>8. Transfer of Data</h1>
            <Separator className="my-2" />
            <p className="text-sm">
              Your information, including Personal Data, may be transferred to —
              and maintained on — computers located outside of your state,
              province, country or other governmental jurisdiction where the
              data protection laws may differ from those of your jurisdiction.
              If you are located outside Republic of Korea and choose to provide
              information to us, please note that we transfer the data,
              including Personal Data, to Republic of Korea and process it
              there. Your consent to this Privacy Policy followed by your
              submission of such information represents your agreement to that
              transfer. MCSR Ranked will take all the steps reasonably necessary
              to ensure that your data is treated securely and in accordance
              with this Privacy Policy and no transfer of your Personal Data
              will take place to an organisation or a country unless there are
              adequate controls in place including the security of your data and
              other personal information.
            </p>
          </div>
          <div className="border-b-2 p-3 text-xl">
            <h1>9. Disclosure of Data</h1>
            <Separator className="my-2" />
            <p className="text-sm">
              We may disclose personal information that we collect, or you
              provide:
            </p>
            <ol className="list-inside list-disc text-sm">
              <li>
                <span className="text-sm">
                  <strong>Disclosure for Law Enforcement.</strong>
                </span>
                <p className="text-sm">
                  Under certain circumstances, we may be required to disclose
                  your Personal Data if required to do so by law or in response
                  to valid requests by public authorities.
                </p>
              </li>
              <li>
                <span className="text-sm">
                  <strong>Business Transaction.</strong>
                </span>
                <p className="text-sm">
                  If we or our subsidiaries are involved in a merger,
                  acquisition or asset sale, your Personal Data may be
                  transferred.
                </p>
              </li>
              <li>
                <span className="text-sm">
                  <strong>Other cases.</strong>
                </span>
                <p className="text-sm">
                  We may disclose your information also:
                </p>
                <ul className="list-inside list-disc text-sm">
                  <li>To our subsidiaries and affiliates</li>
                  <li>
                    To contractors, service providers, and other third parties
                    we use to support our business
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="border-b-2 p-3 text-xl">
            <h1>10. Service Providers</h1>
            <Separator className="my-2" />
            <p className="text-sm">
              We may employ third party companies and individuals to facilitate
              our Service (&quot;Service Providers&quot;), provide Service on
              our behalf, perform Service-related services or assist us in
              analysing how our Service is used. These third parties have access
              to your Personal Data only to perform these tasks on our behalf
              and are obligated not to disclose or use it for any other purpose.
            </p>
          </div>
          <div className="border-b-2 p-3 text-xl">
            <h1>11. Analytics</h1>
            <Separator className="my-2" />
            <p className="text-sm">
              We may use third-party Service Providers to monitor and analyze
              the use of our Service.
            </p>
            <ul className="list-inside list-disc text-sm">
              <li>
                <span className="text-sm">
                  <strong>Google Analytics</strong>
                </span>
                <p className="text-sm">
                  Google Analytics is an analytics service offered by Google
                  that tracks and reports traffic/usage. Google uses the data
                  collected to track and monitor the use of our Service. This
                  data is shared with other Google services. Google may use the
                  collected data to contextualise and personalise the ads of its
                  own advertising network. For more information on the privacy
                  practices of Google, please visit the Google Privacy Terms web
                  page:{" "}
                  <a
                    href="https://policies.google.com/privacy?hl=en"
                    className="hover:text-green-400"
                  >
                    https://policies.google.com/privacy?hl=en
                  </a>{" "}
                  We also encourage you to review the Google&apos;s policy for
                  safeguarding your data:{" "}
                  <a
                    href="https://support.google.com/analytics/answer/6004245"
                    className="hover:text-green-400"
                  >
                    https://support.google.com/analytics/answer/6004245
                  </a>
                  .
                </p>
              </li>
            </ul>
          </div>
          <div className="border-b-2 p-3 text-xl">
            <h1>12. Links to Other Sites</h1>
            <Separator className="my-2" />
            <p className="text-sm">
              Our Service may contain links to other sites that are not operated
              by us. If you click a third party link, you will be directed to
              that third party&apos;s site. We strongly advise you to review the
              Privacy Policy of every site you visit. We have no control over
              and assume no responsibility for the content, privacy policies or
              practices of any third party sites or services.
            </p>
          </div>
          <div className="border-b-2 p-3 text-xl">
            <h1>13. Childrens Privacy</h1>
            <Separator className="my-2" />
            <p className="text-sm">
              Our Services are not intended for use by children under the age of
              13 (&quot;Children&quot;). We do not knowingly collect personally
              identifiable information from Children under 13. If you become
              aware that a Child has provided us with Personal Data, please
              contact us. If we become aware that we have collected Personal
              Data from Children without verification of parental consent, we
              take steps to remove that information from our servers.
            </p>
          </div>
          <div className="border-b-2 p-3 text-xl">
            <h1>14. Changes to this Privacy Policy</h1>
            <Separator className="my-2" />
            <p className="text-sm">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              We will let you know via email and/or a prominent notice on our
              Service, prior to the change becoming effective and update the
              &quot;effective date&quot; at the top of this Privacy Policy. You
              are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </div>
          <div className="border-b-2 p-3 text-xl">
            <h1>15. Contact Us</h1>
            <Separator className="my-2" />
            <p className="text-sm">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ol className="list-inside list-disc text-sm">
              <li>
                By email:{" "}
                <a href="mailto:mcsrranked@gmail.com">
                  mcsrranked@gmail.com
                </a>
              </li>
              <li>
                By joining our Discord server:{" "}
                <a
                  href="https://mcsrranked.com/discord"
                  className="hover:text-green-400"
                >
                  https://mcsrranked.com/discord
                </a>
              </li>
            </ol>
          </div>
          <div className="border-b-2 p-3 text-xl">
            <h1>Recent Changes</h1>
            <Separator className="my-2" />
            <ul>
              <li>Fab 22, 2024: Described details on how to use third parties data used in Other Data(5).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
